(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{411:function(t,s,e){"use strict";e.r(s);var a=e(2),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"部署-etcd-节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署-etcd-节点"}},[t._v("#")]),t._v(" 部署 ETCD 节点")]),t._v(" "),s("h2",{attrs:{id:"_1-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),s("p",[t._v("kubernetes需要存储很多东西，像它本身的节点信息，组件信息，还有通过kubernetes运行的pod，deployment，service等等。都需要持久化。"),s("code",[t._v("etcd")]),t._v(" 就是它的数据中心。生产环境中为了保证数据中心的高可用和数据的一致性，一般会部署最少三个节点。我们这里以学习为主就只在主节点部署一个实例。")]),t._v(" "),s("h2",{attrs:{id:"_2-从github下载二进制文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-从github下载二进制文件"}},[t._v("#")]),t._v(" 2. 从Github下载二进制文件")]),t._v(" "),s("p",[t._v("下载地址："),s("a",{attrs:{href:"https://github.com/etcd-io/etcd/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/etcd-io/etcd/releases"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("我这里下载的版本是 "),s("a",{attrs:{href:"https://github.com/etcd-io/etcd/releases/tag/v3.4.10",target:"_blank",rel:"noopener noreferrer"}},[t._v("v3.4.10"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_3-部署-etcd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署-etcd"}},[t._v("#")]),t._v(" 3. 部署 ETCD")]),t._v(" "),s("h3",{attrs:{id:"_1-创建工作目录并解压二进制包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建工作目录并解压二进制包"}},[t._v("#")]),t._v(" 1. 创建工作目录并解压二进制包")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/kubernetes/etcd/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bin,cfg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压缩")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf etcd-v3.4.10-linux-amd64.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 移动 etcd 二进制文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" etcd-v3.4.10-linux-amd64/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("etcd,etcdctl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" /etc/kubernetes/etcd/bin/\n")])])]),s("h3",{attrs:{id:"_2-创建etcd配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建etcd配置文件"}},[t._v("#")]),t._v(" 2. 创建etcd配置文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/kubernetes/etcd/cfg/etcd.conf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('EOF\n#[Member]\nETCD_NAME="etcd-1"\nETCD_DATA_DIR="/var/lib/etcd/default.etcd"\nETCD_LISTEN_PEER_URLS="https://192.168.10.102:2380"\nETCD_LISTEN_CLIENT_URLS="https://192.168.10.102:2379"\n\n#[Clustering]\nETCD_INITIAL_ADVERTISE_PEER_URLS="https://192.168.10.102:2380"\nETCD_ADVERTISE_CLIENT_URLS="https://192.168.10.102:2379"\nETCD_INITIAL_CLUSTER="etcd-1=https://192.168.10.102:2380"\nETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"\nETCD_INITIAL_CLUSTER_STATE="new"\nEOF')]),t._v("\n")])])]),s("p",[t._v("字段描述：")]),t._v(" "),s("ul",[s("li",[t._v("ETCD_NAME：节点名称，集群中唯一")]),t._v(" "),s("li",[t._v("ETCD_DATA_DIR：存放数据的目录")]),t._v(" "),s("li",[t._v("ETCD_LISTEN_PEER_URLS：集群通信监听地址")]),t._v(" "),s("li",[t._v("ETCD_LISTEN_CLIENT_URLS：客户端访问监听地址")]),t._v(" "),s("li",[t._v("ETCD_INITIAL_ADVERTISE_PEER_URLS：集群通告地址")]),t._v(" "),s("li",[t._v("ETCD_ADVERTISE_CLIENT_URLS：客户端通告地址")]),t._v(" "),s("li",[t._v("ETCD_INITIAL_CLUSTER：集群节点地址，多个 etcd 时，参考格式："),s("code",[t._v("节点名称1:ETCD_LISTEN_PEER_URLS,节点名称2:ETCD_LISTEN_PEER_URLS")])]),t._v(" "),s("li",[t._v("ETCD_INITIAL_CLUSTER_TOKEN：集群Token")]),t._v(" "),s("li",[t._v("ETCD_INITIAL_CLUSTER_STATE：加入集群的当前状态，new是新集群，existing表示加入已有集群")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("etcd 监听 2379 端口，是为了接收组件如：api-server 的数据，2380 端口是为了接收其他 etcd 的数据")])]),t._v(" "),s("h3",{attrs:{id:"_3-通过systemd管理etcd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过systemd管理etcd"}},[t._v("#")]),t._v(" 3. 通过systemd管理etcd")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /lib/systemd/system/etcd.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# etcd.service 内容如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Etcd Server\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network.target\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network-online.target\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Wants")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network-online.target\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("notify\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WorkingDirectory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/var/lib/etcd/\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("EnvironmentFile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/etcd/cfg/etcd.conf\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/etcd/bin/etcd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --cert-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/ca/etcd/etcd.pem "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --key-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/ca/etcd/etcd-key.pem "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --peer-cert-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/ca/etcd/etcd.pem "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --peer-key-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/ca/etcd/etcd-key.pem "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --trusted-ca-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/ca/ca.pem "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --peer-trusted-ca-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/ca/ca.pem "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("zap\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on-failure\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LimitNOFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("注意：请修改你的证书存放位置")])]),t._v(" "),s("h3",{attrs:{id:"_4-启动并设置开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动并设置开机启动"}},[t._v("#")]),t._v(" 4. 启动并设置开机启动")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("systemctl daemon-reload\nsystemctl start etcd\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" etcd\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看日志是否启动异常")]),t._v("\njournalctl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v(" etcd\n")])])]),s("h3",{attrs:{id:"_5-部署多个etcd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-部署多个etcd"}},[t._v("#")]),t._v(" 5. 部署多个etcd")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("如果你需要部署多个 etcd 那么将该节点生成的文件拷贝到其他节点，再修改一下配置就可以了")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝 etcd 二进制文件以及配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" /etc/kubernetes/etcd/ root@其他节点IP:/etc/kubernetes/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝 service 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" /lib/systemd/system/etcd.service root@其他节点IP:/lib/systemd/system/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝 证书")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" /etc/kubernetes/ca/ root@其他节点IP:/etc/kubernetes/\n")])])]),s("p",[s("strong",[t._v("然后在节点分别修改etcd.conf配置文件中的节点名称和当前服务器IP：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/kubernetes/etcd/cfg/etcd.conf\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[Member]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCD_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcd-2"')]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改此处，节点2改为etcd-2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCD_DATA_DIR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/lib/etcd/default.etcd"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCD_LISTEN_PEER_URLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://192.168.10.101:2380"')]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改此处为当前服务器IP")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCD_LISTEN_CLIENT_URLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://192.168.10.101:2379"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改此处为当前服务器IP")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#[Clustering]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCD_INITIAL_ADVERTISE_PEER_URLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://192.168.10.101:2380"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改此处为当前服务器IP")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCD_ADVERTISE_CLIENT_URLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://192.168.10.101:2379"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改此处为当前服务器IP")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCD_INITIAL_CLUSTER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcd-2=https://192.168.10.101:2380,etcd-1=https://192.168.10.102:2380"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCD_INITIAL_CLUSTER_TOKEN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcd-cluster"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCD_INITIAL_CLUSTER_STATE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new"')]),t._v("\n")])])]),s("p",[t._v("最后启动etcd并设置开机启动")]),t._v(" "),s("h3",{attrs:{id:"_6-查看集群状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看集群状态"}},[t._v("#")]),t._v(" 6. 查看集群状态")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ETCDCTL_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" /etc/kubernetes/etcd/bin/etcdctl "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cacert")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/ca/ca.pem "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cert")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/ca/etcd/etcd.pem "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/kubernetes/ca/etcd/etcd-key.pem "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--endpoints")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://192.168.10.102:2379"')]),t._v(" endpoint health\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出该结果代表 etcd 部署成功")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" https://192.168.10.102:2379 is healthy: successfully committed proposal: took "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(".838821ms\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);