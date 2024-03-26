import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as r,d as s,e,b as a,a as t}from"./app-81567cd0.js";const p={},o=t('<h1 id="部署-etcd-节点" tabindex="-1"><a class="header-anchor" href="#部署-etcd-节点" aria-hidden="true">#</a> 部署 ETCD 节点</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>kubernetes需要存储很多东西，像它本身的节点信息，组件信息，还有通过kubernetes运行的pod，deployment，service等等。都需要持久化。<code>etcd</code> 就是它的数据中心。生产环境中为了保证数据中心的高可用和数据的一致性，一般会部署最少三个节点。我们这里以学习为主就只在主节点部署一个实例。</p><h2 id="_2-从github下载二进制文件" tabindex="-1"><a class="header-anchor" href="#_2-从github下载二进制文件" aria-hidden="true">#</a> 2. 从Github下载二进制文件</h2>',4),d={href:"https://github.com/etcd-io/etcd/releases",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/etcd-io/etcd/releases/tag/v3.4.10",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="_3-部署-etcd" tabindex="-1"><a class="header-anchor" href="#_3-部署-etcd" aria-hidden="true">#</a> 3. 部署 ETCD</h2><h3 id="_1-创建工作目录并解压二进制包" tabindex="-1"><a class="header-anchor" href="#_1-创建工作目录并解压二进制包" aria-hidden="true">#</a> 1. 创建工作目录并解压二进制包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/kubernetes/etcd/<span class="token punctuation">{</span>bin,cfg<span class="token punctuation">}</span> <span class="token parameter variable">-p</span>
<span class="token comment"># 解压缩</span>
<span class="token function">tar</span> zxvf etcd-v3.4.10-linux-amd64.tar.gz
<span class="token comment"># 移动 etcd 二进制文件</span>
<span class="token function">mv</span> etcd-v3.4.10-linux-amd64/<span class="token punctuation">{</span>etcd,etcdctl<span class="token punctuation">}</span> /etc/kubernetes/etcd/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建etcd配置文件" tabindex="-1"><a class="header-anchor" href="#_2-创建etcd配置文件" aria-hidden="true">#</a> 2. 创建etcd配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/kubernetes/etcd/cfg/etcd.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
#[Member]
ETCD_NAME=&quot;etcd-1&quot;
ETCD_DATA_DIR=&quot;/var/lib/etcd/default.etcd&quot;
ETCD_LISTEN_PEER_URLS=&quot;https://192.168.10.102:2380&quot;
ETCD_LISTEN_CLIENT_URLS=&quot;https://192.168.10.102:2379&quot;

#[Clustering]
ETCD_INITIAL_ADVERTISE_PEER_URLS=&quot;https://192.168.10.102:2380&quot;
ETCD_ADVERTISE_CLIENT_URLS=&quot;https://192.168.10.102:2379&quot;
ETCD_INITIAL_CLUSTER=&quot;etcd-1=https://192.168.10.102:2380&quot;
ETCD_INITIAL_CLUSTER_TOKEN=&quot;etcd-cluster&quot;
ETCD_INITIAL_CLUSTER_STATE=&quot;new&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字段描述：</p><ul><li>ETCD_NAME：节点名称，集群中唯一</li><li>ETCD_DATA_DIR：存放数据的目录</li><li>ETCD_LISTEN_PEER_URLS：集群通信监听地址</li><li>ETCD_LISTEN_CLIENT_URLS：客户端访问监听地址</li><li>ETCD_INITIAL_ADVERTISE_PEER_URLS：集群通告地址</li><li>ETCD_ADVERTISE_CLIENT_URLS：客户端通告地址</li><li>ETCD_INITIAL_CLUSTER：集群节点地址，多个 etcd 时，参考格式：<code>节点名称1:ETCD_LISTEN_PEER_URLS,节点名称2:ETCD_LISTEN_PEER_URLS</code></li><li>ETCD_INITIAL_CLUSTER_TOKEN：集群Token</li><li>ETCD_INITIAL_CLUSTER_STATE：加入集群的当前状态，new是新集群，existing表示加入已有集群</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>etcd 监听 2379 端口，是为了接收组件如：api-server 的数据，2380 端口是为了接收其他 etcd 的数据</p></div><h3 id="_3-通过systemd管理etcd" tabindex="-1"><a class="header-anchor" href="#_3-通过systemd管理etcd" aria-hidden="true">#</a> 3. 通过systemd管理etcd</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /lib/systemd/system/etcd.service
<span class="token comment"># etcd.service 内容如下</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Etcd Server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target
<span class="token assign-left variable">After</span><span class="token operator">=</span>network-online.target
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>notify
<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/var/lib/etcd/
<span class="token assign-left variable">EnvironmentFile</span><span class="token operator">=</span>/etc/kubernetes/etcd/cfg/etcd.conf
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/etc/kubernetes/etcd/bin/etcd <span class="token punctuation">\\</span>
  --cert-file<span class="token operator">=</span>/etc/kubernetes/ca/etcd/etcd.pem <span class="token punctuation">\\</span>
  --key-file<span class="token operator">=</span>/etc/kubernetes/ca/etcd/etcd-key.pem <span class="token punctuation">\\</span>
  --peer-cert-file<span class="token operator">=</span>/etc/kubernetes/ca/etcd/etcd.pem <span class="token punctuation">\\</span>
  --peer-key-file<span class="token operator">=</span>/etc/kubernetes/ca/etcd/etcd-key.pem <span class="token punctuation">\\</span>
  --trusted-ca-file<span class="token operator">=</span>/etc/kubernetes/ca/ca.pem <span class="token punctuation">\\</span>
  --peer-trusted-ca-file<span class="token operator">=</span>/etc/kubernetes/ca/ca.pem <span class="token punctuation">\\</span>
  <span class="token parameter variable">--logger</span><span class="token operator">=</span>zap
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">LimitNOFILE</span><span class="token operator">=</span><span class="token number">65536</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意：请修改你的证书存放位置</p></div><h3 id="_4-启动并设置开机启动" tabindex="-1"><a class="header-anchor" href="#_4-启动并设置开机启动" aria-hidden="true">#</a> 4. 启动并设置开机启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl start etcd
systemctl <span class="token builtin class-name">enable</span> etcd
<span class="token comment"># 查看日志是否启动异常</span>
journalctl <span class="token parameter variable">-f</span> <span class="token parameter variable">-u</span> etcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-部署多个etcd" tabindex="-1"><a class="header-anchor" href="#_5-部署多个etcd" aria-hidden="true">#</a> 5. 部署多个etcd</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你需要部署多个 etcd 那么将该节点生成的文件拷贝到其他节点，再修改一下配置就可以了</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拷贝 etcd 二进制文件以及配置</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/kubernetes/etcd/ root@其他节点IP:/etc/kubernetes/
<span class="token comment"># 拷贝 service 文件</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /lib/systemd/system/etcd.service root@其他节点IP:/lib/systemd/system/
<span class="token comment"># 拷贝 证书</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/kubernetes/ca/ root@其他节点IP:/etc/kubernetes/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>然后在节点分别修改etcd.conf配置文件中的节点名称和当前服务器IP：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/kubernetes/etcd/cfg/etcd.conf
<span class="token comment">#[Member]</span>
<span class="token assign-left variable">ETCD_NAME</span><span class="token operator">=</span><span class="token string">&quot;etcd-2&quot;</span>   <span class="token comment"># 修改此处，节点2改为etcd-2</span>
<span class="token assign-left variable">ETCD_DATA_DIR</span><span class="token operator">=</span><span class="token string">&quot;/var/lib/etcd/default.etcd&quot;</span>
<span class="token assign-left variable">ETCD_LISTEN_PEER_URLS</span><span class="token operator">=</span><span class="token string">&quot;https://192.168.10.101:2380&quot;</span>   <span class="token comment"># 修改此处为当前服务器IP</span>
<span class="token assign-left variable">ETCD_LISTEN_CLIENT_URLS</span><span class="token operator">=</span><span class="token string">&quot;https://192.168.10.101:2379&quot;</span> <span class="token comment"># 修改此处为当前服务器IP</span>

<span class="token comment">#[Clustering]</span>
<span class="token assign-left variable">ETCD_INITIAL_ADVERTISE_PEER_URLS</span><span class="token operator">=</span><span class="token string">&quot;https://192.168.10.101:2380&quot;</span> <span class="token comment"># 修改此处为当前服务器IP</span>
<span class="token assign-left variable">ETCD_ADVERTISE_CLIENT_URLS</span><span class="token operator">=</span><span class="token string">&quot;https://192.168.10.101:2379&quot;</span> <span class="token comment"># 修改此处为当前服务器IP</span>
<span class="token assign-left variable">ETCD_INITIAL_CLUSTER</span><span class="token operator">=</span><span class="token string">&quot;etcd-2=https://192.168.10.101:2380,etcd-1=https://192.168.10.102:2380&quot;</span>
<span class="token assign-left variable">ETCD_INITIAL_CLUSTER_TOKEN</span><span class="token operator">=</span><span class="token string">&quot;etcd-cluster&quot;</span>
<span class="token assign-left variable">ETCD_INITIAL_CLUSTER_STATE</span><span class="token operator">=</span><span class="token string">&quot;new&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后启动etcd并设置开机启动</p><h3 id="_6-查看集群状态" tabindex="-1"><a class="header-anchor" href="#_6-查看集群状态" aria-hidden="true">#</a> 6. 查看集群状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">ETCDCTL_API</span><span class="token operator">=</span><span class="token number">3</span> /etc/kubernetes/etcd/bin/etcdctl <span class="token parameter variable">--cacert</span><span class="token operator">=</span>/etc/kubernetes/ca/ca.pem <span class="token parameter variable">--cert</span><span class="token operator">=</span>/etc/kubernetes/ca/etcd/etcd.pem <span class="token parameter variable">--key</span><span class="token operator">=</span>/etc/kubernetes/ca/etcd/etcd-key.pem <span class="token parameter variable">--endpoints</span><span class="token operator">=</span><span class="token string">&quot;https://192.168.10.102:2379&quot;</span> endpoint health

<span class="token comment"># 输出该结果代表 etcd 部署成功</span>
<span class="token operator">&gt;</span> https://192.168.10.102:2379 is healthy: successfully committed proposal: took <span class="token operator">=</span> <span class="token number">5</span>.838821ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function b(m,k){const n=c("ExternalLinkIcon");return l(),r("div",null,[o,s("p",null,[e("下载地址："),s("a",d,[e("https://github.com/etcd-io/etcd/releases"),a(n)])]),s("blockquote",null,[s("p",null,[e("我这里下载的版本是 "),s("a",u,[e("v3.4.10"),a(n)])])]),v])}const E=i(p,[["render",b],["__file","02.部署etcd节点.html.vue"]]);export{E as default};
