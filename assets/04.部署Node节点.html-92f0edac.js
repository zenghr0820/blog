import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a}from"./app-d467fdcd.js";const i={},l=a(`<h1 id="部署node节点" tabindex="-1"><a class="header-anchor" href="#部署node节点" aria-hidden="true">#</a> 部署Node节点</h1><p><code>kubernetes master</code> 节点包含的组件：</p><ul><li>kubelet</li><li>kube-proxy</li><li>core-dns</li></ul><h2 id="一、创建工作目录并拷贝二进制文件" tabindex="-1"><a class="header-anchor" href="#一、创建工作目录并拷贝二进制文件" aria-hidden="true">#</a> 一、创建工作目录并拷贝二进制文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在所有worker node创建工作目录：</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/kubernetes/<span class="token punctuation">{</span>bin,cfg,logs<span class="token punctuation">}</span> 
<span class="token comment"># 从master节点拷贝：</span>
<span class="token builtin class-name">cd</span> kubernetes/server/bin
<span class="token function">scp</span> kubelet kube-proxy root@192.168.10.101:/etc/kubernetes/bin
<span class="token function">scp</span> kubelet kube-proxy root@192.168.10.103:/etc/kubernetes/bin
<span class="token comment"># 分发 证书</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/kubernetes/ca root@192.168.10.101:/etc/kubernetes/
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/kubernetes/ca root@192.168.10.103:/etc/kubernetes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、部署kubelet" tabindex="-1"><a class="header-anchor" href="#二、部署kubelet" aria-hidden="true">#</a> 二、部署kubelet</h2><p>我们这里让kubelet使用引导token的方式认证，所以认证方式跟之前的组件不同，它的证书不是手动生成，而是由工作节点<code>TLS BootStrap</code> 向 <code>api-server</code> 请求，由主节点的<code>controller-manager</code> 自动签发。</p><h3 id="_2-1-创建kubelet配置文件" tabindex="-1"><a class="header-anchor" href="#_2-1-创建kubelet配置文件" aria-hidden="true">#</a> 2.1 创建kubelet配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 需要修改 hostname-override</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/cfg/kubelet.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
KUBELET_OPTS=&quot;--logtostderr=false <span class="token entity" title="\\\\">\\\\</span>
--v=2 <span class="token entity" title="\\\\">\\\\</span>
--log-dir=/etc/kubernetes/logs <span class="token entity" title="\\\\">\\\\</span>
--hostname-override=server01 <span class="token entity" title="\\\\">\\\\</span>
--network-plugin=cni <span class="token entity" title="\\\\">\\\\</span>
--cni-bin-dir=/opt/cni/bin <span class="token entity" title="\\\\">\\\\</span>
--kubeconfig=/etc/kubernetes/cfg/kubelet.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
--bootstrap-kubeconfig=/etc/kubernetes/cfg/bootstrap.kubeconfig <span class="token entity" title="\\\\">\\\\</span>
--config=/etc/kubernetes/cfg/kubelet-config.yml <span class="token entity" title="\\\\">\\\\</span>
--cert-dir=/etc/kubernetes/ca <span class="token entity" title="\\\\">\\\\</span>
--pod-infra-container-image=registry.cn-hangzhou.aliyuncs.com/google-containers/pause-amd64:3.0&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段描述：</p><ul><li><code>--hostname-override</code>：显示名称，集群中唯一，需要修改成你之前设置主机名，我的是 server01</li><li>--network-plugin：启用CNI</li><li>--cni-bin-dir：实际的 CNI 插件可执行文件位置</li><li>--kubeconfig：用于连接apiserver</li><li>--bootstrap-kubeconfig：首次启动向apiserver申请证书</li><li>--config：配置参数文件</li><li>--cert-dir：kubelet证书生成目录</li><li>--pod-infra-container-image：管理Pod网络容器的镜像</li></ul><h3 id="_2-2-配置参数文件" tabindex="-1"><a class="header-anchor" href="#_2-2-配置参数文件" aria-hidden="true">#</a> 2.2 配置参数文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/cfg/kubelet-config.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
kind: KubeletConfiguration
apiVersion: kubelet.config.k8s.io/v1beta1
address: 0.0.0.0
port: 10250
readOnlyPort: 10255
cgroupDriver: cgroupfs
clusterDNS:
- 10.0.0.2
clusterDomain: cluster.local 
failSwapOn: false
authentication:
  anonymous:
    enabled: false
  webhook:
    cacheTTL: 2m0s
    enabled: true
  x509:
    clientCAFile: /etc/kubernetes/ca/ca.pem 
authorization:
  mode: Webhook
  webhook:
    cacheAuthorizedTTL: 5m0s
    cacheUnauthorizedTTL: 30s
evictionHard:
  imagefs.available: 15%
  memory.available: 100Mi
  nodefs.available: 10%
  nodefs.inodesFree: 5%
maxOpenFiles: 1000000
maxPods: 110
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-生成bootstrap-kubeconfig文件" tabindex="-1"><a class="header-anchor" href="#_2-3-生成bootstrap-kubeconfig文件" aria-hidden="true">#</a> 2.3 生成bootstrap.kubeconfig文件</h3><blockquote><p>这个配置是用来完成bootstrap token认证的，保存了像用户，token等重要的认证信息，这个文件可以借助kubectl命令生成：（也可以自己写配置）</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># kubectl 命令可以在 master 节点执行，也可以把 kubectl 命令拷贝到 node 节点</span>
<span class="token function">scp</span> /usr/local/bin/kubectl root@192.168.10.101:/usr/local/bin
<span class="token comment"># 指定apiserver的地址和证书位置（ip自行修改）</span>
kubectl config set-cluster kubernetes <span class="token punctuation">\\</span>
  --certificate-authority<span class="token operator">=</span>/etc/kubernetes/ca/ca.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--server</span><span class="token operator">=</span>https://192.168.10.102:6443 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>bootstrap.kubeconfig
  
<span class="token comment"># 设置客户端认证参数(注意替换token)</span>
kubectl config set-credentials kubelet-bootstrap <span class="token punctuation">\\</span>
        <span class="token parameter variable">--token</span><span class="token operator">=</span>71dacbf4a541549a2426e3fae9b03a0f <span class="token punctuation">\\</span>
        <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>bootstrap.kubeconfig
        
<span class="token comment"># 设置上下文</span>
kubectl config set-context default <span class="token punctuation">\\</span>
        <span class="token parameter variable">--cluster</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
        <span class="token parameter variable">--user</span><span class="token operator">=</span>kubelet-bootstrap <span class="token punctuation">\\</span>
        <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>bootstrap.kubeconfig
        
<span class="token comment"># 设置当前上下文</span>
kubectl config use-context default <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>bootstrap.kubeconfig

<span class="token comment"># 移动到配置文件路径</span>
<span class="token function">mv</span> bootstrap.kubeconfig /etc/kubernetes/cfg
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-systemd管理kubelet" tabindex="-1"><a class="header-anchor" href="#_2-4-systemd管理kubelet" aria-hidden="true">#</a> 2.4 systemd管理kubelet</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /lib/systemd/system/kubelet.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Kubernetes Kubelet
After=docker.service

[Service]
EnvironmentFile=/etc/kubernetes/cfg/kubelet.conf
ExecStart=/etc/kubernetes/bin/kubelet \\<span class="token variable">$KUBELET_OPTS</span>
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-启动并设置开机启动" tabindex="-1"><a class="header-anchor" href="#_2-5-启动并设置开机启动" aria-hidden="true">#</a> 2.5 启动并设置开机启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl start kubelet
systemctl <span class="token builtin class-name">enable</span> kubelet
<span class="token comment"># 查看日志是否启动异常</span>
journalctl <span class="token parameter variable">-f</span> <span class="token parameter variable">-u</span> kubelet
<span class="token function">tail</span> <span class="token parameter variable">-100f</span> /etc/kubernetes/logs/kubelet.ERROR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-批准kubelet证书申请并加入集群" tabindex="-1"><a class="header-anchor" href="#_2-6-批准kubelet证书申请并加入集群" aria-hidden="true">#</a> 2.6 批准kubelet证书申请并加入集群</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#--------*在主节点执行*---------</span>
<span class="token comment"># 查看kubelet证书请求</span>
kubectl get csr
NAME            AGE    SIGNERNAME                                    REQUESTOR           CONDITION
node-csr-XXXX   6m3s   kubernetes.io/kube-apiserver-client-kubelet   kubelet-bootstrap   Pending
<span class="token comment"># 批准申请</span>
$ kubectl get csr<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;Pending&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token operator">|</span> <span class="token function">xargs</span> kubectl certificate approve

<span class="token comment"># 查看节点</span>
kubectl get <span class="token function">node</span>
NAME       STATUS     ROLES    AGE     VERSION
server01   NotReady   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   2m23s   v1.18.6
<span class="token comment">#-----------------------------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注：由于网络插件还没有部署，节点会没有准备就绪 NotReady</p></div><h2 id="三、部署kube-proxy" tabindex="-1"><a class="header-anchor" href="#三、部署kube-proxy" aria-hidden="true">#</a> 三、部署kube-proxy</h2><h3 id="_3-1-创建kube-proxy配置文件" tabindex="-1"><a class="header-anchor" href="#_3-1-创建kube-proxy配置文件" aria-hidden="true">#</a> 3.1 创建kube-proxy配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/cfg/kube-proxy.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
KUBE_PROXY_OPTS=&quot;--logtostderr=false <span class="token entity" title="\\\\">\\\\</span>
--v=2 <span class="token entity" title="\\\\">\\\\</span>
--log-dir=/etc/kubernetes/logs <span class="token entity" title="\\\\">\\\\</span>
--config=/etc/kubernetes/cfg/kube-proxy-config.yml&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-配置参数文件" tabindex="-1"><a class="header-anchor" href="#_3-2-配置参数文件" aria-hidden="true">#</a> 3.2 配置参数文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 注意修改 hostnameOverride 显示名称，集群中唯一</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/cfg/kube-proxy-config.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
kind: KubeProxyConfiguration
apiVersion: kubeproxy.config.k8s.io/v1alpha1
bindAddress: 0.0.0.0
metricsBindAddress: 0.0.0.0:10249
clientConnection:
  kubeconfig: /etc/kubernetes/cfg/kube-proxy.kubeconfig
hostnameOverride: 192.168.10.101
clusterCIDR: 10.0.0.0/24
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-生成kube-proxy-kubeconfig文件" tabindex="-1"><a class="header-anchor" href="#_3-3-生成kube-proxy-kubeconfig文件" aria-hidden="true">#</a> 3.3 生成kube-proxy.kubeconfig文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置集群参数（注意替换ip）</span>
kubectl config set-cluster kubernetes <span class="token punctuation">\\</span>
  --certificate-authority<span class="token operator">=</span>/etc/kubernetes/ca/ca.pem <span class="token punctuation">\\</span>
  --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token parameter variable">--server</span><span class="token operator">=</span>https://192.168.10.102:6443 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>kube-proxy.kubeconfig
  
<span class="token comment"># 客户端认证参数</span>
kubectl config set-credentials kube-proxy <span class="token punctuation">\\</span>
        --client-certificate<span class="token operator">=</span>/etc/kubernetes/ca/kube-proxy/kube-proxy.pem <span class="token punctuation">\\</span>
        --client-key<span class="token operator">=</span>/etc/kubernetes/ca/kube-proxy/kube-proxy-key.pem <span class="token punctuation">\\</span>
        --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
        <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>kube-proxy.kubeconfig
        
<span class="token comment"># 设置上下文参数</span>
kubectl config set-context default <span class="token punctuation">\\</span>
        <span class="token parameter variable">--cluster</span><span class="token operator">=</span>kubernetes <span class="token punctuation">\\</span>
        <span class="token parameter variable">--user</span><span class="token operator">=</span>kube-proxy <span class="token punctuation">\\</span>
        <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>kube-proxy.kubeconfig
        
<span class="token comment"># 选择上下文</span>
kubectl config use-context default <span class="token parameter variable">--kubeconfig</span><span class="token operator">=</span>kube-proxy.kubeconfig
<span class="token comment"># 移动到合适位置</span>
<span class="token function">mv</span> kube-proxy.kubeconfig /etc/kubernetes/cfg/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-systemd管理kube-proxy" tabindex="-1"><a class="header-anchor" href="#_3-4-systemd管理kube-proxy" aria-hidden="true">#</a> 3.4 systemd管理kube-proxy</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /lib/systemd/system/kube-proxy.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Kubernetes Proxy
After=network.target

[Service]
EnvironmentFile=/etc/kubernetes/cfg/kube-proxy.conf
ExecStart=/etc/kubernetes/bin/kube-proxy \\<span class="token variable">$KUBE_PROXY_OPTS</span>
Restart=on-failure
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-启动并设置开机启动" tabindex="-1"><a class="header-anchor" href="#_3-5-启动并设置开机启动" aria-hidden="true">#</a> 3.5 启动并设置开机启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl start kube-proxy
systemctl <span class="token builtin class-name">enable</span> kube-proxy
<span class="token comment"># 查看日志是否启动异常</span>
journalctl <span class="token parameter variable">-f</span> <span class="token parameter variable">-u</span> kube-proxy
<span class="token function">tail</span> <span class="token parameter variable">-100f</span> /etc/kubernetes/logs/kube-proxy.ERROR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),t=[l];function r(c,d){return n(),s("div",null,t)}const p=e(i,[["render",r],["__file","04.部署Node节点.html.vue"]]);export{p as default};
