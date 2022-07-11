(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{373:function(e,t,s){"use strict";s.r(t);var a=s(2),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"部署-master-节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-master-节点"}},[e._v("#")]),e._v(" 部署 Master 节点")]),e._v(" "),t("p",[e._v("kubernetes master 节点包含的组件：")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("kube-apiserver")])]),e._v(" "),t("li",[t("strong",[e._v("kube-controller-manager")])]),e._v(" "),t("li",[t("strong",[e._v("kube-scheduler")])])]),e._v(" "),t("p",[t("code",[e._v("apiserver")]),e._v(" 、"),t("code",[e._v("controller-manager")]),e._v(" 和 "),t("code",[e._v("scheduler")]),e._v(" 三者的功能紧密相关，一般运行在同一个机器上，我们可以把它们当做一个整体来看，所以保证了apiserver的高可用即是保证了三个模块的高可用。也可以同时启动多个controller-manager进程，但只有一个会被选举为leader提供服务。")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("docker 安装方式请看"),t("a",{attrs:{href:"/passages/2020-02-24-docker-install"}},[e._v("ubuntu安装docker")])])]),e._v(" "),t("h3",{attrs:{id:"_1-从github下载二进制文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-从github下载二进制文件"}},[e._v("#")]),e._v(" 1. 从Github下载二进制文件")]),e._v(" "),t("p",[e._v("下载地址：https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.18.md#v1183")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("注：打开链接你会发现里面有很多包，下载一个server包就够了，包含了Master和Worker Node二进制文件。")])]),e._v(" "),t("h3",{attrs:{id:"_2-解压二进制包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压二进制包"}},[e._v("#")]),e._v(" 2. 解压二进制包")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建工作目录")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p /etc/kubernetes/server/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("bin,cfg,logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 解压缩")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" zxvf kubernetes-server-linux-amd64.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 移动 二进制文件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" kubernetes/server/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" kube-apiserver kube-scheduler kube-controller-manager /etc/kubernetes/server/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" kubectl /usr/local/bin/\n")])])]),t("h3",{attrs:{id:"_3-tls-证书文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-tls-证书文件"}},[e._v("#")]),e._v(" 3. TLS 证书文件")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("以下"),t("code",[e._v("pem")]),e._v("证书文件以及 "),t("code",[e._v("token.csv")]),e._v("我们在 "),t("RouterLink",{attrs:{to:"/passages/2020-08-12-kubernetes-generate-tls.html"}},[e._v("创建 TLS 证书和秘钥")]),e._v(" 这一步中已经创建过了。")],1)]),e._v(" "),t("h3",{attrs:{id:"_4-创建-kubectl-kubeconfig-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建-kubectl-kubeconfig-文件"}},[e._v("#")]),e._v(" 4. 创建 kubectl kubeconfig 文件")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指定apiserver的地址和证书位置（ip自行修改）")]),e._v("\nkubectl config set-cluster kubernetes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --certificate-authority"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/ca/ca.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --embed-certs"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --server"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://192.168.10.102:6443\n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置客户端认证参数，指定admin证书和秘钥")]),e._v("\nkubectl config set-credentials admin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --client-certificate"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/ca/admin/admin.pem "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --embed-certs"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --client-key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/ca/admin/admin-key.pem\n        \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 关联用户和集群")]),e._v("\nkubectl config set-context kubernetes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --cluster"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubernetes --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("admin\n        \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置当前上下文")]),e._v("\nkubectl config use-context kubernetes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置结果就是一个配置文件，可以看看内容")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" ~/.kube/config\n")])])]),t("h2",{attrs:{id:"一、部署-api-server-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、部署-api-server-组件"}},[e._v("#")]),e._v(" 一、部署 Api-server 组件")]),e._v(" "),t("h3",{attrs:{id:"_1-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[e._v("#")]),e._v(" 1 简介")]),e._v(" "),t("p",[t("code",[e._v("kube-apiserver")]),e._v("是Kubernetes最重要的核心组件之一，主要提供以下的功能")]),e._v(" "),t("ul",[t("li",[e._v("提供集群管理的REST API接口，包括认证授权（我们现在没有用到）数据校验以及集群状态变更等")]),e._v(" "),t("li",[e._v("提供其他模块之间的数据交互和通信的枢纽（其他模块通过API Server查询或修改数据，只有API Server才直接操作etcd）")])]),e._v(" "),t("blockquote",[t("p",[e._v("生产环境为了保证apiserver的高可用一般会部署2+个节点，在上层做一个lb做负载均衡，比如haproxy。由于单节点和多节点在apiserver这一层说来没什么区别，所以我就部署一个节点就足够")])]),e._v(" "),t("h3",{attrs:{id:"_2-创建kube-apiserver的配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建kube-apiserver的配置文件"}},[e._v("#")]),e._v(" 2. 创建kube-apiserver的配置文件")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建 apiserver 文件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/kubernetes/server/cfg/kube-apiserver.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 内容如下")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KUBE_APISERVER_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"--logtostderr=false \\\n--v=2 \\\n--log-dir=/etc/kubernetes/server/logs \\\n--etcd-servers=https://192.168.10.102:2379 \\\n--bind-address=192.168.10.102 \\\n--secure-port=6443 \\\n--advertise-address=192.168.10.102 \\\n--allow-privileged=true \\\n--service-cluster-ip-range=10.0.0.0/24 \\\n--enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,ResourceQuota,NodeRestriction \\\n--authorization-mode=RBAC,Node \\\n--enable-bootstrap-token-auth=true \\\n--token-auth-file=/etc/kubernetes/ca/server/token.csv \\\n--service-node-port-range=30000-32767 \\\n--kubelet-client-certificate=/etc/kubernetes/ca/server/server.pem \\\n--kubelet-client-key=/etc/kubernetes/ca/server/server-key.pem \\\n--tls-cert-file=/etc/kubernetes/ca/server/server.pem  \\\n--tls-private-key-file=/etc/kubernetes/ca/server/server-key.pem \\\n--client-ca-file=/etc/kubernetes/ca/ca.pem \\\n--service-account-key-file=/etc/kubernetes/ca/ca-key.pem \\\n--etcd-cafile=/etc/kubernetes/ca/ca.pem \\\n--etcd-certfile=/etc/kubernetes/ca/server/server.pem \\\n--etcd-keyfile=/etc/kubernetes/ca/server/server-key.pem \\\n--audit-log-maxage=30 \\\n--audit-log-maxbackup=3 \\\n--audit-log-maxsize=100 \\\n--audit-log-path=/etc/kubernetes/server/logs/k8s-audit.log"')]),e._v("\n")])])]),t("p",[e._v("字段描述:")]),e._v(" "),t("ul",[t("li",[e._v("--logtostderr：启用日志")]),e._v(" "),t("li",[e._v("---v：日志等级")]),e._v(" "),t("li",[e._v("--log-dir：日志目录")]),e._v(" "),t("li",[e._v("--etcd-servers：etcd集群地址")]),e._v(" "),t("li",[e._v("--bind-address：监听地址")]),e._v(" "),t("li",[e._v("--secure-port：https安全端口")]),e._v(" "),t("li",[e._v("--advertise-address：集群通告地址")]),e._v(" "),t("li",[e._v("--allow-privileged：启用授权")]),e._v(" "),t("li",[e._v("--service-cluster-ip-range：Service虚拟IP地址段")]),e._v(" "),t("li",[e._v("--enable-admission-plugins：准入控制模块")]),e._v(" "),t("li",[e._v("--authorization-mode：认证授权，启用RBAC授权和节点自管理")]),e._v(" "),t("li",[e._v("--enable-bootstrap-token-auth：启用TLS bootstrap机制")]),e._v(" "),t("li",[e._v("--token-auth-file：bootstrap token文件")]),e._v(" "),t("li",[e._v("--service-node-port-range：Service nodeport类型默认分配端口范围")]),e._v(" "),t("li",[e._v("--kubelet-client-xxx：apiserver访问kubelet客户端证书")]),e._v(" "),t("li",[e._v("--tls-xxx-file：apiserver https证书")]),e._v(" "),t("li",[e._v("--etcd-xxxfile：连接Etcd集群证书")]),e._v(" "),t("li",[e._v("--audit-log-xxx：审计日志")])]),e._v(" "),t("h3",{attrs:{id:"_3-tls-bootstrapping-机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-tls-bootstrapping-机制"}},[e._v("#")]),e._v(" 3. TLS Bootstrapping 机制")]),e._v(" "),t("blockquote",[t("p",[e._v("token-auth-file 需要的 token 文件请查看 [创建 TLS 证书和秘钥](/passages/2020-08-12-kubernetes-generate-tls.html#10.1 生成token认证文件)")])]),e._v(" "),t("h3",{attrs:{id:"_4-创建-kube-apiserver的service配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建-kube-apiserver的service配置文件"}},[e._v("#")]),e._v(" 4. 创建 kube-apiserver的service配置文件")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建 kube-apiserver.service 文件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /lib/systemd/system/kube-apiserver.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kube-apiserver.service 内容如下")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Kubernetes API Service\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://github.com/kubernetes/kubernetes\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("After")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("network.target\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EnvironmentFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/server/cfg/kube-apiserver.conf\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/server/bin/kube-apiserver "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_APISERVER_OPTS")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("on-failure\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("notify\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("RestartSec")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LimitNOFILE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("65536")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("multi-user.target\n")])])]),t("h3",{attrs:{id:"_5-启动并设置开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动并设置开机启动"}},[e._v("#")]),e._v(" 5. 启动并设置开机启动")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("systemctl daemon-reload\nsystemctl start kube-apiserver\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" kube-apiserver\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看日志是否启动异常")]),e._v("\njournalctl -f -u kube-apiserver\n")])])]),t("h3",{attrs:{id:"_6-授权kubelet-bootstrap用户允许请求证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-授权kubelet-bootstrap用户允许请求证书"}},[e._v("#")]),e._v(" 6. 授权kubelet-bootstrap用户允许请求证书")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("kubectl create clusterrolebinding kubelet-bootstrap "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--clusterrole"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("system:node-bootstrapper "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--user"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubelet-bootstrap "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--group"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubelet-bootstrap\n")])])]),t("h2",{attrs:{id:"二、部署-kube-controller-manager-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、部署-kube-controller-manager-组件"}},[e._v("#")]),e._v(" 二、部署 kube-controller-manager 组件")]),e._v(" "),t("h3",{attrs:{id:"_1-简介-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介-2"}},[e._v("#")]),e._v(" 1. 简介")]),e._v(" "),t("p",[t("code",[e._v("Controller Manager")]),e._v("由"),t("code",[e._v("kube-controller-manager")]),e._v("和"),t("code",[e._v("cloud-controller-manager")]),e._v("组成，是Kubernetes的大脑，它通过apiserver监控整个集群的状态，并确保集群处于预期的工作状态。 kube-controller-manager由一系列的控制器组成，像Replication Controller控制副本，Node Controller节点控制，Deployment Controller管理deployment等等 cloud-controller-manager在Kubernetes启用Cloud Provider的时候才需要，用来配合云服务提供商的控制")]),e._v(" "),t("blockquote",[t("p",[e._v("controller-manager、scheduler和apiserver 三者的功能紧密相关，一般运行在同一个机器上，我们可以把它们当做一个整体来看，所以保证了apiserver的高可用即是保证了三个模块的高可用。也可以同时启动多个controller-manager进程，但只有一个会被选举为"),t("code",[e._v("leader")]),e._v("提供服务。")])]),e._v(" "),t("h3",{attrs:{id:"_2-创建kube-controller的配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建kube-controller的配置文件"}},[e._v("#")]),e._v(" 2. 创建kube-controller的配置文件")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建kube-controller-manager.conf配置文件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/kubernetes/server/cfg/kube-controller-manager.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kube-controller-manager.conf 内容如下:")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KUBE_CONTROLLER_MANAGER_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"--logtostderr=false \\\n--v=2 \\\n--log-dir=/etc/kubernetes/server/logs \\\n--leader-elect=true \\\n--master=127.0.0.1:8080 \\\n--bind-address=127.0.0.1 \\\n--allocate-node-cidrs=true \\\n--cluster-cidr=10.244.0.0/16 \\\n--service-cluster-ip-range=10.0.0.0/24 \\\n--cluster-signing-cert-file=/etc/kubernetes/ca/ca.pem \\\n--cluster-signing-key-file=/etc/kubernetes/ca/ca-key.pem  \\\n--root-ca-file=/etc/kubernetes/ca/ca.pem \\\n--service-account-private-key-file=/etc/kubernetes/ca/ca-key.pem \\\n--experimental-cluster-signing-duration=87600h0m0s"')]),e._v("\n")])])]),t("p",[e._v("字段描述：")]),e._v(" "),t("ul",[t("li",[e._v("--master：通过本地非安全本地端口8080连接apiserver。")]),e._v(" "),t("li",[e._v("--leader-elect：当该组件启动多个时，自动选举（HA）")]),e._v(" "),t("li",[e._v("--cluster-signing-cert-file/--cluster-signing-key-file：自动为kubelet颁发证书的CA，与apiserver保持一致")])]),e._v(" "),t("h3",{attrs:{id:"_3-创建-kube-controller的service配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-kube-controller的service配置文件"}},[e._v("#")]),e._v(" 3. 创建 kube-controller的service配置文件")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建kube-controller-manager.service文件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /lib/systemd/system/kube-controller-manager.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kube-controller-manager.service 内容如下:")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Kubernetes Controller Manager\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://github.com/kubernetes/kubernetes\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EnvironmentFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/server/cfg/kube-controller-manager.conf\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/server/bin/kube-controller-manager "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_CONTROLLER_MANAGER_OPTS")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("on-failure\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("RestartSec")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("multi-user.target\n")])])]),t("h3",{attrs:{id:"_4-启动并设置开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动并设置开机启动"}},[e._v("#")]),e._v(" 4. 启动并设置开机启动")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("systemctl daemon-reload\nsystemctl start kube-controller-manager\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" kube-controller-manager\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看日志是否启动异常")]),e._v("\njournalctl -f -u kube-controller-manager\n")])])]),t("h2",{attrs:{id:"三、部署-kube-scheduler-组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、部署-kube-scheduler-组件"}},[e._v("#")]),e._v(" 三、部署 kube-scheduler 组件")]),e._v(" "),t("h3",{attrs:{id:"_1-简介-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介-3"}},[e._v("#")]),e._v(" 1. 简介")]),e._v(" "),t("p",[t("code",[e._v("kube-scheduler")]),e._v(" 负责分配调度Pod到集群内的节点上，它监听kube-apiserver，查询还未分配Node的Pod，然后根据调度策略为这些Pod分配节点。我们前面讲到的kubernetes的各种调度策略就是它实现的。")]),e._v(" "),t("h3",{attrs:{id:"_2-创建kube-scheduler的配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建kube-scheduler的配置文件"}},[e._v("#")]),e._v(" 2. 创建kube-scheduler的配置文件")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建kube-scheduler.conf配置文件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/kubernetes/server/cfg/kube-scheduler.conf\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kube-scheduler.conf 内容如下:")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KUBE_SCHEDULER_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"--logtostderr=false \\\n--v=2 \\\n--log-dir=/etc/kubernetes/server/logs \\\n--leader-elect \\\n--master=127.0.0.1:8080 \\\n--bind-address=127.0.0.1"')]),e._v("\n")])])]),t("p",[e._v("字段描述：")]),e._v(" "),t("ul",[t("li",[e._v("--master：通过本地非安全本地端口8080连接apiserver。")]),e._v(" "),t("li",[e._v("--leader-elect：当该组件启动多个时，自动选举（HA）")])]),e._v(" "),t("h3",{attrs:{id:"_3-创建-kube-controller的service配置文件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建-kube-controller的service配置文件-2"}},[e._v("#")]),e._v(" 3. 创建 kube-controller的service配置文件")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建kube-scheduler.service文件")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /lib/systemd/system/kube-scheduler.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# kube-scheduler.service 内容如下:")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Kubernetes Scheduler\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Documentation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://github.com/kubernetes/kubernetes\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EnvironmentFile")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/server/cfg/kube-scheduler.conf\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/etc/kubernetes/server/bin/kube-scheduler "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_SCHEDULER_OPTS")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("on-failure\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("multi-user.target\n")])])]),t("h3",{attrs:{id:"_4-启动并设置开机启动-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动并设置开机启动-2"}},[e._v("#")]),e._v(" 4. 启动并设置开机启动")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("systemctl daemon-reload\nsystemctl start kube-scheduler\nsystemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" kube-scheduler\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看日志是否启动异常")]),e._v("\njournalctl -f -u kube-scheduler\n")])])]),t("h2",{attrs:{id:"四、查看集群状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、查看集群状态"}},[e._v("#")]),e._v(" 四、查看集群状态")]),e._v(" "),t("p",[e._v("所有组件都已经启动成功，通过kubectl工具查看当前集群组件状态：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("kubectl get cs\nNAME                 STATUS    MESSAGE             ERROR\nscheduler            Healthy   ok                  \ncontroller-manager   Healthy   ok                    \netcd-0               Healthy   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"health"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("  \n")])])]),t("p",[e._v("如上输出说明Master节点组件运行正常。")])])}),[],!1,null,null,null);t.default=r.exports}}]);