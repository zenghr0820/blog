(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{360:function(t,s,a){"use strict";a.r(s);var r=a(2),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu18-04-安装docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu18-04-安装docker"}},[t._v("#")]),t._v(" Ubuntu18.04 安装docker")]),t._v(" "),s("h2",{attrs:{id:"_1-安装方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装方式"}},[t._v("#")]),t._v(" 1 安装方式")]),t._v(" "),s("ul",[s("li",[t._v("ubuntu 在线安装")]),t._v(" "),s("li",[t._v("下载 docker 二进制包离线安装")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("本文档操作以上两种方式安装，在国内，如果用官方提供的安装方法会很慢。于是国内也有一些提供镜像的网站。")])]),t._v(" "),s("h2",{attrs:{id:"_2-在线安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在线安装"}},[t._v("#")]),t._v(" 2 在线安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新包列表")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 必须安装的包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" apt-transport-https ca-certificates "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" software-properties-common\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将官方Docker存储库的GPG密钥添加到您的系统")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://mirror.azure.cn/docker-ce/linux/ubuntu/gpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加 docker 仓库到 Apt 源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://mirror.azure.cn/docker-ce/linux/ubuntu bionic stable"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再次更新包列表")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装docker")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证 docker 安装是否成功")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" --version\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 docker compose （可选）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/docker/compose/releases/download/1.23.1/docker-compose-'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -s"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("-"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" -o /usr/local/bin/docker-compose\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 赋权")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/docker-compose\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker-compose")]),t._v(" --version\n")])])]),s("h2",{attrs:{id:"_3-离线安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-离线安装"}},[t._v("#")]),t._v(" 3. 离线安装")]),t._v(" "),s("p",[t._v("选择你需要的 docker 版本，下载地址："),s("a",{attrs:{href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://download.docker.com/linux/static/stable/x86_64"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"_3-1-解压缩二进制包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-解压缩二进制包"}},[t._v("#")]),t._v(" 3.1 解压缩二进制包")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" zxvf docker-19.03.9.tgz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" docker/* /usr/bin\n")])])]),s("h3",{attrs:{id:"_3-2-systemd管理docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-systemd管理docker"}},[t._v("#")]),t._v(" 3.2 systemd管理docker")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /usr/lib/systemd/system/docker.service "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF\n[Unit]\nDescription=Docker Application Container Engine\nDocumentation=https://docs.docker.com\nAfter=network-online.target firewalld.service\nWants=network-online.target\n\n[Service]\nType=notify\nExecStart=/usr/bin/dockerd\nExecReload=/bin/kill -s HUP "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$MAINPID")]),t._v("\nLimitNOFILE=infinity\nLimitNPROC=infinity\nLimitCORE=infinity\nTimeoutStartSec=0\nDelegate=yes\nKillMode=process\nRestart=on-failure\nStartLimitBurst=3\nStartLimitInterval=60s\n\n[Install]\nWantedBy=multi-user.target\nEOF")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-3-创建配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-创建配置文件"}},[t._v("#")]),t._v(" 3.3 创建配置文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/docker\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/docker/daemon.json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('EOF\n{\n  "registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"]\n}\nEOF')]),t._v("\n")])])]),s("ul",[s("li",[t._v("registry-mirrors 阿里云镜像加速器")])]),t._v(" "),s("h3",{attrs:{id:"_3-4-启动并设置开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-启动并设置开机启动"}},[t._v("#")]),t._v(" 3.4 启动并设置开机启动")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("systemctl daemon-reload\nsystemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-更换-docker-源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-更换-docker-源"}},[t._v("#")]),t._v(" 4. 更换 docker 源")]),t._v(" "),s("p",[t._v("国内的几个源:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://dockerhub.azk8s.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dockerhub.azk8s.cn"),s("OutboundLink")],1),t._v(" - Azure镜像")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://hub-mirror.c.163.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://hub-mirror.c.163.com"),s("OutboundLink")],1),t._v(" - 网易镜像")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docker.mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docker.mirrors.ustc.edu.cn"),s("OutboundLink")],1),t._v(" - 科大镜像站")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://registry.docker-cn.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://registry.docker-cn.com"),s("OutboundLink")],1),t._v(" - Docker中国官方镜像")]),t._v(" "),s("li",[t._v("阿里云也有镜像，只不过需要登录阿里云控制台后获取自己专属的镜像源。")])]),t._v(" "),s("h3",{attrs:{id:"设置方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置方法"}},[t._v("#")]),t._v(" 设置方法")]),t._v(" "),s("ol",[s("li",[t._v("在配置文件中添加"),s("code",[t._v("registry-mirrors")]),t._v("的配置。启动时自动配置，Linux下的默认配置文件是"),s("code",[t._v("/etc/docker/daemon.json")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registry-mirrors"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://<my-docker-mirror-host>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("手动启动dockerd的时候，添加"),s("code",[t._v("--registry-mirror")]),t._v("参数: "),s("code",[t._v("dockerd --registry-mirror=https://<my-docker-mirror-host>")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);