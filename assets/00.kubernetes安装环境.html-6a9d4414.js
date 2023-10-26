import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as c,c as d,d as e,e as n,b as t,w as o,a}from"./app-1229c3d4.js";const p={},u=e("h1",{id:"在ubuntu上部署kubernetes集群",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#在ubuntu上部署kubernetes集群","aria-hidden":"true"},"#"),n(" 在Ubuntu上部署kubernetes集群")],-1),m=e("h2",{id:"_1-1-安装方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-安装方式","aria-hidden":"true"},"#"),n(" 1.1 安装方式")],-1),b=e("li",null,[e("p",null,"基于二进制的安装方式")],-1),v={href:"https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[e("p",null,"基于第三方工具的安装")],-1),h=a(`<p>由于国内的网络环境问题，使用官方工具 kubeadm 需要解决网络问题，所以本系列文档将从 github 下载发行版的二进制包，手动部署每个组件，组成Kubernetes集群，同时开启了集群的TLS安全认证。而不是使用 <code>kubeadm</code> 等自动化方式来部署集群。</p><h2 id="_1-2-准备环境" tabindex="-1"><a class="header-anchor" href="#_1-2-准备环境" aria-hidden="true">#</a> 1.2 准备环境</h2><p>这里准备了三台ubuntu虚拟机，每台一核cpu和2G内存，配置好root账户，并安装好了docker，后续的所有操作都是使用root账户。</p><p><strong>单Master架构图：</strong></p><img src="https://media.zenghr.cn/blog/img/单 Master 集群架构图.jpg" alt="单Master集群架构图"><p><strong>单Master服务器规划：</strong></p><table><thead><tr><th style="text-align:center;">系统类型</th><th style="text-align:center;">IP地址</th><th style="text-align:center;">节点角色</th><th style="text-align:center;">Hostname</th><th style="text-align:center;">组件</th></tr></thead><tbody><tr><td style="text-align:center;">Ubuntu18.04</td><td style="text-align:center;">192.168.10.101</td><td style="text-align:center;">worker</td><td style="text-align:center;">server01</td><td style="text-align:center;">kubelet，kube-proxy，docker, etcd</td></tr><tr><td style="text-align:center;">Ubuntu18.04</td><td style="text-align:center;">192.168.10.102</td><td style="text-align:center;">worker</td><td style="text-align:center;">server02</td><td style="text-align:center;">kube-apiserver，kube-controller-manager，kube-scheduler，docker, etcd</td></tr><tr><td style="text-align:center;">Ubuntu18.04</td><td style="text-align:center;">192.168.10.103</td><td style="text-align:center;">worker</td><td style="text-align:center;">server03</td><td style="text-align:center;">kubelet，kube-proxy，docker, etcd</td></tr></tbody></table><blockquote><p><strong>先部署一套单Master架构（192.168.10.101/102/103）</strong></p></blockquote><h2 id="_1-3-操作系统初始化配置-每个虚拟机" tabindex="-1"><a class="header-anchor" href="#_1-3-操作系统初始化配置-每个虚拟机" aria-hidden="true">#</a> 1.3 操作系统初始化配置(每个虚拟机)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭防火墙</span>
ufw disable
<span class="token comment"># 查看状态</span>
ufw status

<span class="token comment"># 关闭swap</span>
swapoff <span class="token parameter variable">-a</span>  <span class="token comment"># 临时</span>
<span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab    <span class="token comment"># 永久</span>

<span class="token comment"># 根据规划设置主机名</span>
hostnamectl set-hostname <span class="token operator">&lt;</span>hostname<span class="token operator">&gt;</span>

<span class="token comment"># 设置固定 IP ==================</span>
<span class="token comment"># 网卡信息配置在/etc/netplan/xxx.yaml文件，需做如下配置，如下配置</span>
network:
  ethernets:
    enp0s5:
      dhcp4: <span class="token boolean">false</span>
      addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.10.103/24<span class="token punctuation">]</span>
      gateway4: <span class="token number">192.168</span>.10.1
      nameservers:
        addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.10.1<span class="token punctuation">]</span>
  version: <span class="token number">2</span>
<span class="token comment"># 然后使用以下命令使配置即时生效</span>
netplan apply
<span class="token comment"># ===========================</span>

<span class="token comment"># 添加hosts</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
192.168.10.101 server01
192.168.10.102 server02
192.168.10.103 server03
EOF</span>

<span class="token comment"># 将桥接的IPv4流量传递到iptables的链</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> /etc/sysctl.d/k8s.conf</span>
net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF</span>
<span class="token comment"># 生效配置文件</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/k8s.conf
<span class="token comment"># 或者</span>
<span class="token function">sysctl</span> <span class="token parameter variable">--system</span>

<span class="token comment"># 时间同步</span>
<span class="token function">apt</span> <span class="token function">install</span> ntpdate
ntpdate time.windows.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="步骤介绍" tabindex="-1"><a class="header-anchor" href="#步骤介绍" aria-hidden="true">#</a> 步骤介绍</h2>`,11),g=a('<li><a href="/passages/2020-02-24-docker-install">安装 docker</a></li><li><a href="/passages/2020-08-12-kubernetes-deploy-etcd">创建高可用etcd集群</a></li><li><a href="/passages/2020-08-12-kubernetes-deploy-master">部署master节点</a></li><li><a href="/passages/2020-08-13-kubernetes-deploy-worker">部署Node节点</a></li><li><a href="/passages/2020-08-13-kubernetes-deploy-cni">部署CNI 网络</a></li><li><a href="/passages/2020-08-13-kubernetes-deploy-dns">部署CoreDns</a></li>',6);function _(f,x){const l=s("ExternalLinkIcon"),i=s("RouterLink");return c(),d("div",null,[u,m,e("ul",null,[b,e("li",null,[e("p",null,[n("基于官方工具kubeadm的安装方式 "),e("a",v,[n("官方地址"),t(l)])])]),k]),h,e("ol",null,[e("li",null,[t(i,{to:"/passages/2020-08-12-kubernetes-generate-tls.html"},{default:o(()=>[n("创建 TLS 证书和秘钥")]),_:1})]),g])])}const E=r(p,[["render",_],["__file","00.kubernetes安装环境.html.vue"]]);export{E as default};
