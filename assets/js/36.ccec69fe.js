(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{363:function(t,n,s){"use strict";s.r(n);var a=s(2),r=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",[t._v("目前支持两种安装方式，一种是apt-get的方式，另一种是编译nginx源码包的方式")])]),t._v(" "),n("h2",{attrs:{id:"一、apt-get安装nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、apt-get安装nginx"}},[t._v("#")]),t._v(" 一、apt-get安装nginx")]),t._v(" "),n("ol",[n("li",[t._v("更新源")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[n("p",[t._v("查看nginx是否安装成功  "),n("em",[n("strong",[t._v("nginx -v")])])])]),t._v(" "),n("li",[n("p",[t._v("启动nginx")])])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" nginx start\n")])])]),n("p",[t._v("nginx 文件安装完成之后的文件位置：")]),t._v(" "),n("ul",[n("li",[t._v("/usr/sbin/nginx：主程序")]),t._v(" "),n("li",[t._v("/etc/nginx：存放配置文件")]),t._v(" "),n("li",[t._v("/usr/share/nginx：存放静态文件")]),t._v(" "),n("li",[t._v("/var/log/nginx：存放日志")])]),t._v(" "),n("h2",{attrs:{id:"二、编译nginx源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、编译nginx源码"}},[t._v("#")]),t._v(" 二、编译nginx源码")]),t._v(" "),n("ol",[n("li",[t._v("下载源码包，或者去"),n("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx官网"),n("OutboundLink")],1),t._v("下载源码包")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://nginx.org/download/nginx-1.17.8.tar.gz\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("安装编译需要的依赖")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    libtool "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    libpcre3 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    libpcre3-dev "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    zlib1g-dev "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    libssl-dev\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[t._v("运行如下命令")])]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xvf nginx-1.17.8.tar.gz "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf nginx-1.17.8.tar.gz "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除压缩包")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" nginx-1.17.8\n\n./configure --prefix"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --conf-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/config/nginx.conf  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --user"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx --group"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --error-log-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/nginxlog/error.log  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --http-log-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/nginxlog/access.log  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --pid-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/pids/nginx.pid  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --lock-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/locks/nginx.lock  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --with-http_ssl_module  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --with-http_stub_status_module  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --with-http_gzip_static_module  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --http-client-body-temp-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/tmp/client  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --http-proxy-temp-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/tmp/proxy  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --http-fastcgi-temp-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/tmp/fastcgi  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --http-uwsgi-temp-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/tmp/uwsgi  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n        --http-scgi-temp-path"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/tmp/scgi\n     \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf nginx-1.17.8\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 完善目录")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -pv /usr/local/nginx/tmp/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("client,proxy,fastcgi,uwsgi,scgi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加nginx用户")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" nginx\n")])])]),n("ol",{attrs:{start:"4"}},[n("li",[t._v("启动nginx")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("/usr/local/nginx/sbin/nginx \n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);