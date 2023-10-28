const e=JSON.parse('{"key":"v-7864dc7d","path":"/tool/kubernetes/04.%E9%83%A8%E7%BD%B2Node%E8%8A%82%E7%82%B9.html","title":"部署Node节点","lang":"zh-CN","frontmatter":{"title":"部署Node节点","date":"2020-08-13T02:00:00.000Z","re":"2020-08-13-kubernetes-deploy-worker","category":["kubernetes"],"description":"部署Node节点 kubernetes master 节点包含的组件： kubelet kube-proxy core-dns 一、创建工作目录并拷贝二进制文件 # 在所有worker node创建工作目录： mkdir -p /etc/kubernetes/{bin,cfg,logs} # 从master节点拷贝： cd kubernetes/server/bin scp kubelet kube-proxy root@192.168.10.101:/etc/kubernetes/bin scp kubelet kube-proxy root@192.168.10.103:/etc/kubernetes/bin # 分发 证书 scp -r /etc/kubernetes/ca root@192.168.10.101:/etc/kubernetes/ scp -r /etc/kubernetes/ca root@192.168.10.103:/etc/kubernetes/","permalink":"/tool/kubernetes/2020-08-13-kubernetes-deploy-worker.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/tool/kubernetes/2020-08-13-kubernetes-deploy-worker.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"部署Node节点"}],["meta",{"property":"og:description","content":"部署Node节点 kubernetes master 节点包含的组件： kubelet kube-proxy core-dns 一、创建工作目录并拷贝二进制文件 # 在所有worker node创建工作目录： mkdir -p /etc/kubernetes/{bin,cfg,logs} # 从master节点拷贝： cd kubernetes/server/bin scp kubelet kube-proxy root@192.168.10.101:/etc/kubernetes/bin scp kubelet kube-proxy root@192.168.10.103:/etc/kubernetes/bin # 分发 证书 scp -r /etc/kubernetes/ca root@192.168.10.101:/etc/kubernetes/ scp -r /etc/kubernetes/ca root@192.168.10.103:/etc/kubernetes/"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2020-08-13T02:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署Node节点\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-13T02:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"一、创建工作目录并拷贝二进制文件","slug":"一、创建工作目录并拷贝二进制文件","link":"#一、创建工作目录并拷贝二进制文件","children":[]},{"level":2,"title":"二、部署kubelet","slug":"二、部署kubelet","link":"#二、部署kubelet","children":[{"level":3,"title":"2.1 创建kubelet配置文件","slug":"_2-1-创建kubelet配置文件","link":"#_2-1-创建kubelet配置文件","children":[]},{"level":3,"title":"2.2 配置参数文件","slug":"_2-2-配置参数文件","link":"#_2-2-配置参数文件","children":[]},{"level":3,"title":"2.3 生成bootstrap.kubeconfig文件","slug":"_2-3-生成bootstrap-kubeconfig文件","link":"#_2-3-生成bootstrap-kubeconfig文件","children":[]},{"level":3,"title":"2.4 systemd管理kubelet","slug":"_2-4-systemd管理kubelet","link":"#_2-4-systemd管理kubelet","children":[]},{"level":3,"title":"2.5 启动并设置开机启动","slug":"_2-5-启动并设置开机启动","link":"#_2-5-启动并设置开机启动","children":[]},{"level":3,"title":"2.6 批准kubelet证书申请并加入集群","slug":"_2-6-批准kubelet证书申请并加入集群","link":"#_2-6-批准kubelet证书申请并加入集群","children":[]}]},{"level":2,"title":"三、部署kube-proxy","slug":"三、部署kube-proxy","link":"#三、部署kube-proxy","children":[{"level":3,"title":"3.1 创建kube-proxy配置文件","slug":"_3-1-创建kube-proxy配置文件","link":"#_3-1-创建kube-proxy配置文件","children":[]},{"level":3,"title":"3.2 配置参数文件","slug":"_3-2-配置参数文件","link":"#_3-2-配置参数文件","children":[]},{"level":3,"title":"3.3 生成kube-proxy.kubeconfig文件","slug":"_3-3-生成kube-proxy-kubeconfig文件","link":"#_3-3-生成kube-proxy-kubeconfig文件","children":[]},{"level":3,"title":"3.4 systemd管理kube-proxy","slug":"_3-4-systemd管理kube-proxy","link":"#_3-4-systemd管理kube-proxy","children":[]},{"level":3,"title":"3.5 启动并设置开机启动","slug":"_3-5-启动并设置开机启动","link":"#_3-5-启动并设置开机启动","children":[]}]}],"git":{},"readingTime":{"minutes":3.39,"words":1018},"filePathRelative":"tool/kubernetes/04.部署Node节点.md","localizedDate":"2020年8月13日","excerpt":"<h1> 部署Node节点</h1>\\n<p><code>kubernetes master</code> 节点包含的组件：</p>\\n<ul>\\n<li>kubelet</li>\\n<li>kube-proxy</li>\\n<li>core-dns</li>\\n</ul>\\n<h2> 一、创建工作目录并拷贝二进制文件</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 在所有worker node创建工作目录：</span>\\n<span class=\\"token function\\">mkdir</span> <span class=\\"token parameter variable\\">-p</span> /etc/kubernetes/<span class=\\"token punctuation\\">{</span>bin,cfg,logs<span class=\\"token punctuation\\">}</span> \\n<span class=\\"token comment\\"># 从master节点拷贝：</span>\\n<span class=\\"token builtin class-name\\">cd</span> kubernetes/server/bin\\n<span class=\\"token function\\">scp</span> kubelet kube-proxy root@192.168.10.101:/etc/kubernetes/bin\\n<span class=\\"token function\\">scp</span> kubelet kube-proxy root@192.168.10.103:/etc/kubernetes/bin\\n<span class=\\"token comment\\"># 分发 证书</span>\\n<span class=\\"token function\\">scp</span> <span class=\\"token parameter variable\\">-r</span> /etc/kubernetes/ca root@192.168.10.101:/etc/kubernetes/\\n<span class=\\"token function\\">scp</span> <span class=\\"token parameter variable\\">-r</span> /etc/kubernetes/ca root@192.168.10.103:/etc/kubernetes/\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
