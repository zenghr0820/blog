import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as d,d as s,e,b as i,w as o,a as n}from"./app-1229c3d4.js";const u={},p=n('<h1 id="部署-master-节点" tabindex="-1"><a class="header-anchor" href="#部署-master-节点" aria-hidden="true">#</a> 部署 Master 节点</h1><p>kubernetes master 节点包含的组件：</p><ul><li><strong>kube-apiserver</strong></li><li><strong>kube-controller-manager</strong></li><li><strong>kube-scheduler</strong></li></ul><p><code>apiserver</code> 、<code>controller-manager</code> 和 <code>scheduler</code> 三者的功能紧密相关，一般运行在同一个机器上，我们可以把它们当做一个整体来看，所以保证了apiserver的高可用即是保证了三个模块的高可用。也可以同时启动多个controller-manager进程，但只有一个会被选举为leader提供服务。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>docker 安装方式请看<a href="/passages/2020-02-24-docker-install">ubuntu安装docker</a></p></div><h3 id="_1-从github下载二进制文件" tabindex="-1"><a class="header-anchor" href="#_1-从github下载二进制文件" aria-hidden="true">#</a> 1. 从Github下载二进制文件</h3>',6),v={href:"https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.18.md#v1183",target:"_blank",rel:"noopener noreferrer"},b=n(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>注：打开链接你会发现里面有很多包，下载一个server包就够了，包含了Master和Worker Node二进制文件。</p></div><h3 id="_2-解压二进制包" tabindex="-1"><a class="header-anchor" href="#_2-解压二进制包" aria-hidden="true">#</a> 2. 解压二进制包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建工作目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/kubernetes/server/<span class="token punctuation">{</span>bin,cfg,logs<span class="token punctuation">}</span>
<span class="token comment"># 解压缩</span>
<span class="token function">tar</span> zxvf kubernetes-server-linux-amd64.tar.gz
<span class="token comment"># 移动 二进制文件</span>
<span class="token builtin class-name">cd</span> kubernetes/server/bin
<span class="token function">cp</span> kube-apiserver kube-scheduler kube-controller-manager /etc/kubernetes/server/bin
<span class="token function">cp</span> kubectl /usr/local/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-tls-证书文件" tabindex="-1"><a class="header-anchor" href="#_3-tls-证书文件" aria-hidden="true">#</a> 3. TLS 证书文件</h3>`,4),m={class:"hint-container tip"},k=s("p",{class:"hint-container-title"},"提示",-1),h=s("code",null,"pem",-1),g=s("code",null,"token.csv",-1),f=n(`<h3 id="_4-创建-kubectl-kubeconfig-文件" tabindex="-1"><a class="header-anchor" href="#_4-创建-kubectl-kubeconfig-文件" aria-hidden="true">#</a> 4. 创建 kubectl kubeconfig 文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定apiserver的地址和证书位置（ip自行修改）</span>
kubectl config set-cluster kubernetes <span class="token punctuation">\\</span>
        --certificate-authority<span class="token operator">=</span>/etc/kubernetes/ca/ca.pem <span class="token punctuation">\\</span>
        --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
        <span class="token parameter variable">--server</span><span class="token operator">=</span>https://192.168.10.102:6443
  
<span class="token comment"># 设置客户端认证参数，指定admin证书和秘钥</span>
kubectl config set-credentials admin <span class="token punctuation">\\</span>
        --client-certificate<span class="token operator">=</span>/etc/kubernetes/ca/admin/admin.pem <span class="token punctuation">\\</span>
        --embed-certs<span class="token operator">=</span>true <span class="token punctuation">\\</span>
        --client-key<span class="token operator">=</span>/etc/kubernetes/ca/admin/admin-key.pem
        
<span class="token comment"># 关联用户和集群</span>
kubectl config set-context kubernetes <span class="token punctuation">\\</span>
        <span class="token parameter variable">--cluster</span><span class="token operator">=</span>kubernetes <span class="token parameter variable">--user</span><span class="token operator">=</span>admin
        
<span class="token comment"># 设置当前上下文</span>
kubectl config use-context kubernetes
<span class="token comment"># 设置结果就是一个配置文件，可以看看内容</span>
<span class="token function">cat</span> ~/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一、部署-api-server-组件" tabindex="-1"><a class="header-anchor" href="#一、部署-api-server-组件" aria-hidden="true">#</a> 一、部署 Api-server 组件</h2><h3 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1 简介</h3><p><code>kube-apiserver</code>是Kubernetes最重要的核心组件之一，主要提供以下的功能</p><ul><li>提供集群管理的REST API接口，包括认证授权（我们现在没有用到）数据校验以及集群状态变更等</li><li>提供其他模块之间的数据交互和通信的枢纽（其他模块通过API Server查询或修改数据，只有API Server才直接操作etcd）</li></ul><blockquote><p>生产环境为了保证apiserver的高可用一般会部署2+个节点，在上层做一个lb做负载均衡，比如haproxy。由于单节点和多节点在apiserver这一层说来没什么区别，所以我就部署一个节点就足够</p></blockquote><h3 id="_2-创建kube-apiserver的配置文件" tabindex="-1"><a class="header-anchor" href="#_2-创建kube-apiserver的配置文件" aria-hidden="true">#</a> 2. 创建kube-apiserver的配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 apiserver 文件</span>
<span class="token function">vim</span> /etc/kubernetes/server/cfg/kube-apiserver.conf
<span class="token comment"># 内容如下</span>
<span class="token assign-left variable">KUBE_APISERVER_OPTS</span><span class="token operator">=</span><span class="token string">&quot;--logtostderr=false \\
--v=2 \\
--log-dir=/etc/kubernetes/server/logs \\
--etcd-servers=https://192.168.10.102:2379 \\
--bind-address=192.168.10.102 \\
--secure-port=6443 \\
--advertise-address=192.168.10.102 \\
--allow-privileged=true \\
--service-cluster-ip-range=10.0.0.0/24 \\
--enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,ResourceQuota,NodeRestriction \\
--authorization-mode=RBAC,Node \\
--enable-bootstrap-token-auth=true \\
--token-auth-file=/etc/kubernetes/ca/server/token.csv \\
--service-node-port-range=30000-32767 \\
--kubelet-client-certificate=/etc/kubernetes/ca/server/server.pem \\
--kubelet-client-key=/etc/kubernetes/ca/server/server-key.pem \\
--tls-cert-file=/etc/kubernetes/ca/server/server.pem  \\
--tls-private-key-file=/etc/kubernetes/ca/server/server-key.pem \\
--client-ca-file=/etc/kubernetes/ca/ca.pem \\
--service-account-key-file=/etc/kubernetes/ca/ca-key.pem \\
--etcd-cafile=/etc/kubernetes/ca/ca.pem \\
--etcd-certfile=/etc/kubernetes/ca/server/server.pem \\
--etcd-keyfile=/etc/kubernetes/ca/server/server-key.pem \\
--audit-log-maxage=30 \\
--audit-log-maxbackup=3 \\
--audit-log-maxsize=100 \\
--audit-log-path=/etc/kubernetes/server/logs/k8s-audit.log&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段描述:</p><ul><li>--logtostderr：启用日志</li><li>---v：日志等级</li><li>--log-dir：日志目录</li><li>--etcd-servers：etcd集群地址</li><li>--bind-address：监听地址</li><li>--secure-port：https安全端口</li><li>--advertise-address：集群通告地址</li><li>--allow-privileged：启用授权</li><li>--service-cluster-ip-range：Service虚拟IP地址段</li><li>--enable-admission-plugins：准入控制模块</li><li>--authorization-mode：认证授权，启用RBAC授权和节点自管理</li><li>--enable-bootstrap-token-auth：启用TLS bootstrap机制</li><li>--token-auth-file：bootstrap token文件</li><li>--service-node-port-range：Service nodeport类型默认分配端口范围</li><li>--kubelet-client-xxx：apiserver访问kubelet客户端证书</li><li>--tls-xxx-file：apiserver https证书</li><li>--etcd-xxxfile：连接Etcd集群证书</li><li>--audit-log-xxx：审计日志</li></ul><h3 id="_3-tls-bootstrapping-机制" tabindex="-1"><a class="header-anchor" href="#_3-tls-bootstrapping-机制" aria-hidden="true">#</a> 3. TLS Bootstrapping 机制</h3><blockquote><p>token-auth-file 需要的 token 文件请查看 [创建 TLS 证书和秘钥](/passages/2020-08-12-kubernetes-generate-tls.html#10.1 生成token认证文件)</p></blockquote><h3 id="_4-创建-kube-apiserver的service配置文件" tabindex="-1"><a class="header-anchor" href="#_4-创建-kube-apiserver的service配置文件" aria-hidden="true">#</a> 4. 创建 kube-apiserver的service配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建 kube-apiserver.service 文件</span>
<span class="token function">vim</span> /lib/systemd/system/kube-apiserver.service
<span class="token comment"># kube-apiserver.service 内容如下</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Kubernetes API Service
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://github.com/kubernetes/kubernetes
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">EnvironmentFile</span><span class="token operator">=</span>/etc/kubernetes/server/cfg/kube-apiserver.conf
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/etc/kubernetes/server/bin/kube-apiserver <span class="token variable">$KUBE_APISERVER_OPTS</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">Type</span><span class="token operator">=</span>notify
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">LimitNOFILE</span><span class="token operator">=</span><span class="token number">65536</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-启动并设置开机启动" tabindex="-1"><a class="header-anchor" href="#_5-启动并设置开机启动" aria-hidden="true">#</a> 5. 启动并设置开机启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl start kube-apiserver
systemctl <span class="token builtin class-name">enable</span> kube-apiserver
<span class="token comment"># 查看日志是否启动异常</span>
journalctl <span class="token parameter variable">-f</span> <span class="token parameter variable">-u</span> kube-apiserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-授权kubelet-bootstrap用户允许请求证书" tabindex="-1"><a class="header-anchor" href="#_6-授权kubelet-bootstrap用户允许请求证书" aria-hidden="true">#</a> 6. 授权kubelet-bootstrap用户允许请求证书</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create clusterrolebinding kubelet-bootstrap <span class="token punctuation">\\</span>
<span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>system:node-bootstrapper <span class="token punctuation">\\</span>
<span class="token parameter variable">--user</span><span class="token operator">=</span>kubelet-bootstrap <span class="token punctuation">\\</span>
<span class="token parameter variable">--group</span><span class="token operator">=</span>kubelet-bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、部署-kube-controller-manager-组件" tabindex="-1"><a class="header-anchor" href="#二、部署-kube-controller-manager-组件" aria-hidden="true">#</a> 二、部署 kube-controller-manager 组件</h2><h3 id="_1-简介-1" tabindex="-1"><a class="header-anchor" href="#_1-简介-1" aria-hidden="true">#</a> 1. 简介</h3><p><code>Controller Manager</code>由<code>kube-controller-manager</code>和<code>cloud-controller-manager</code>组成，是Kubernetes的大脑，它通过apiserver监控整个集群的状态，并确保集群处于预期的工作状态。 kube-controller-manager由一系列的控制器组成，像Replication Controller控制副本，Node Controller节点控制，Deployment Controller管理deployment等等 cloud-controller-manager在Kubernetes启用Cloud Provider的时候才需要，用来配合云服务提供商的控制</p><blockquote><p>controller-manager、scheduler和apiserver 三者的功能紧密相关，一般运行在同一个机器上，我们可以把它们当做一个整体来看，所以保证了apiserver的高可用即是保证了三个模块的高可用。也可以同时启动多个controller-manager进程，但只有一个会被选举为<code>leader</code>提供服务。</p></blockquote><h3 id="_2-创建kube-controller的配置文件" tabindex="-1"><a class="header-anchor" href="#_2-创建kube-controller的配置文件" aria-hidden="true">#</a> 2. 创建kube-controller的配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建kube-controller-manager.conf配置文件</span>
<span class="token function">vim</span> /etc/kubernetes/server/cfg/kube-controller-manager.conf
<span class="token comment"># kube-controller-manager.conf 内容如下:</span>
<span class="token assign-left variable">KUBE_CONTROLLER_MANAGER_OPTS</span><span class="token operator">=</span><span class="token string">&quot;--logtostderr=false \\
--v=2 \\
--log-dir=/etc/kubernetes/server/logs \\
--leader-elect=true \\
--master=127.0.0.1:8080 \\
--bind-address=127.0.0.1 \\
--allocate-node-cidrs=true \\
--cluster-cidr=10.244.0.0/16 \\
--service-cluster-ip-range=10.0.0.0/24 \\
--cluster-signing-cert-file=/etc/kubernetes/ca/ca.pem \\
--cluster-signing-key-file=/etc/kubernetes/ca/ca-key.pem  \\
--root-ca-file=/etc/kubernetes/ca/ca.pem \\
--service-account-private-key-file=/etc/kubernetes/ca/ca-key.pem \\
--experimental-cluster-signing-duration=87600h0m0s&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段描述：</p><ul><li>--master：通过本地非安全本地端口8080连接apiserver。</li><li>--leader-elect：当该组件启动多个时，自动选举（HA）</li><li>--cluster-signing-cert-file/--cluster-signing-key-file：自动为kubelet颁发证书的CA，与apiserver保持一致</li></ul><h3 id="_3-创建-kube-controller的service配置文件" tabindex="-1"><a class="header-anchor" href="#_3-创建-kube-controller的service配置文件" aria-hidden="true">#</a> 3. 创建 kube-controller的service配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建kube-controller-manager.service文件</span>
<span class="token function">vim</span> /lib/systemd/system/kube-controller-manager.service
<span class="token comment"># kube-controller-manager.service 内容如下:</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Kubernetes Controller Manager
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://github.com/kubernetes/kubernetes

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">EnvironmentFile</span><span class="token operator">=</span>/etc/kubernetes/server/cfg/kube-controller-manager.conf
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/etc/kubernetes/server/bin/kube-controller-manager <span class="token variable">$KUBE_CONTROLLER_MANAGER_OPTS</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-启动并设置开机启动" tabindex="-1"><a class="header-anchor" href="#_4-启动并设置开机启动" aria-hidden="true">#</a> 4. 启动并设置开机启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl start kube-controller-manager
systemctl <span class="token builtin class-name">enable</span> kube-controller-manager
<span class="token comment"># 查看日志是否启动异常</span>
journalctl <span class="token parameter variable">-f</span> <span class="token parameter variable">-u</span> kube-controller-manager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、部署-kube-scheduler-组件" tabindex="-1"><a class="header-anchor" href="#三、部署-kube-scheduler-组件" aria-hidden="true">#</a> 三、部署 kube-scheduler 组件</h2><h3 id="_1-简介-2" tabindex="-1"><a class="header-anchor" href="#_1-简介-2" aria-hidden="true">#</a> 1. 简介</h3><p><code>kube-scheduler</code> 负责分配调度Pod到集群内的节点上，它监听kube-apiserver，查询还未分配Node的Pod，然后根据调度策略为这些Pod分配节点。我们前面讲到的kubernetes的各种调度策略就是它实现的。</p><h3 id="_2-创建kube-scheduler的配置文件" tabindex="-1"><a class="header-anchor" href="#_2-创建kube-scheduler的配置文件" aria-hidden="true">#</a> 2. 创建kube-scheduler的配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建kube-scheduler.conf配置文件</span>
<span class="token function">vim</span> /etc/kubernetes/server/cfg/kube-scheduler.conf
<span class="token comment"># kube-scheduler.conf 内容如下:</span>
<span class="token assign-left variable">KUBE_SCHEDULER_OPTS</span><span class="token operator">=</span><span class="token string">&quot;--logtostderr=false \\
--v=2 \\
--log-dir=/etc/kubernetes/server/logs \\
--leader-elect \\
--master=127.0.0.1:8080 \\
--bind-address=127.0.0.1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段描述：</p><ul><li>--master：通过本地非安全本地端口8080连接apiserver。</li><li>--leader-elect：当该组件启动多个时，自动选举（HA）</li></ul><h3 id="_3-创建-kube-controller的service配置文件-1" tabindex="-1"><a class="header-anchor" href="#_3-创建-kube-controller的service配置文件-1" aria-hidden="true">#</a> 3. 创建 kube-controller的service配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建kube-scheduler.service文件</span>
<span class="token function">vim</span> /lib/systemd/system/kube-scheduler.service
<span class="token comment"># kube-scheduler.service 内容如下:</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Kubernetes Scheduler
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://github.com/kubernetes/kubernetes

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">EnvironmentFile</span><span class="token operator">=</span>/etc/kubernetes/server/cfg/kube-scheduler.conf
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/etc/kubernetes/server/bin/kube-scheduler <span class="token variable">$KUBE_SCHEDULER_OPTS</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-启动并设置开机启动-1" tabindex="-1"><a class="header-anchor" href="#_4-启动并设置开机启动-1" aria-hidden="true">#</a> 4. 启动并设置开机启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl start kube-scheduler
systemctl <span class="token builtin class-name">enable</span> kube-scheduler
<span class="token comment"># 查看日志是否启动异常</span>
journalctl <span class="token parameter variable">-f</span> <span class="token parameter variable">-u</span> kube-scheduler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、查看集群状态" tabindex="-1"><a class="header-anchor" href="#四、查看集群状态" aria-hidden="true">#</a> 四、查看集群状态</h2><p>所有组件都已经启动成功，通过kubectl工具查看当前集群组件状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl get cs
NAME                 STATUS    MESSAGE             ERROR
scheduler            Healthy   ok                  
controller-manager   Healthy   ok                    
etcd-0               Healthy   <span class="token punctuation">{</span><span class="token string">&quot;health&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上输出说明Master节点组件运行正常。</p>`,46);function _(x,y){const r=a("ExternalLinkIcon"),l=a("RouterLink");return c(),d("div",null,[p,s("p",null,[e("下载地址："),s("a",v,[e("https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.18.md#v1183"),i(r)])]),b,s("div",m,[k,s("p",null,[e("以下"),h,e("证书文件以及 "),g,e("我们在 "),i(l,{to:"/passages/2020-08-12-kubernetes-generate-tls.html"},{default:o(()=>[e("创建 TLS 证书和秘钥")]),_:1}),e(" 这一步中已经创建过了。")])]),f])}const R=t(u,[["render",_],["__file","03.部署Master节点.html.vue"]]);export{R as default};
