const e=JSON.parse('{"key":"v-24344cf2","path":"/tool/kubernetes/01.%E5%88%9B%E5%BB%BATLS%E8%AF%81%E4%B9%A6%E5%92%8C%E7%A7%98%E9%92%A5.html","title":"创建TLS证书和秘钥","lang":"zh-CN","frontmatter":{"title":"创建TLS证书和秘钥","date":"2020-08-12T17:50:12.000Z","re":"2020-08-12-kubernetes-generate-tls","category":["kubernetes"],"description":"如果您不想看认证授权的解释，请直接看 安装 CFSSL (#三、安装-cfssl) [[TOC]] 一、理解认证授权 该段理解引用 kubernetes-with-ca (https://github.com/liuyi01/kubernetes-starter/blob/master/docs/3-kubernetes-with-ca.md) 1.1...","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/tool/kubernetes/2020-08-12-kubernetes-generate-tls.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"创建TLS证书和秘钥"}],["meta",{"property":"og:description","content":"如果您不想看认证授权的解释，请直接看 安装 CFSSL (#三、安装-cfssl) [[TOC]] 一、理解认证授权 该段理解引用 kubernetes-with-ca (https://github.com/liuyi01/kubernetes-starter/blob/master/docs/3-kubernetes-with-ca.md) 1.1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2020-08-12T17:50:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"创建TLS证书和秘钥\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-08-12T17:50:12.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"一、理解认证授权","slug":"一、理解认证授权","link":"#一、理解认证授权","children":[{"level":3,"title":"1.1 为什么要认证","slug":"_1-1-为什么要认证","link":"#_1-1-为什么要认证","children":[]},{"level":3,"title":"1.2 概念梳理","slug":"_1-2-概念梳理","link":"#_1-2-概念梳理","children":[]},{"level":3,"title":"1.3 什么是授权","slug":"_1-3-什么是授权","link":"#_1-3-什么是授权","children":[]}]},{"level":2,"title":"二、kubernetes的认证授权","slug":"二、kubernetes的认证授权","link":"#二、kubernetes的认证授权","children":[{"level":3,"title":"2.1 kubernetes的认证","slug":"_2-1-kubernetes的认证","link":"#_2-1-kubernetes的认证","children":[]},{"level":3,"title":"2.2 kubernetes的授权","slug":"_2-2-kubernetes的授权","link":"#_2-2-kubernetes的授权","children":[]},{"level":3,"title":"2.3 kubernetes的AdmissionControl","slug":"_2-3-kubernetes的admissioncontrol","link":"#_2-3-kubernetes的admissioncontrol","children":[]}]},{"level":2,"title":"三、安装 CFSSL","slug":"三、安装-cfssl","link":"#三、安装-cfssl","children":[]},{"level":2,"title":"证书位置","slug":"证书位置","link":"#证书位置","children":[]},{"level":2,"title":"四、创建 CA (根证书)","slug":"四、创建-ca-根证书","link":"#四、创建-ca-根证书","children":[{"level":3,"title":"4.1 创建 CA 配置文件","slug":"_4-1-创建-ca-配置文件","link":"#_4-1-创建-ca-配置文件","children":[]},{"level":3,"title":"4.2 创建 CA 证书签名请求","slug":"_4-2-创建-ca-证书签名请求","link":"#_4-2-创建-ca-证书签名请求","children":[]},{"level":3,"title":"4.3 生成 CA 证书和私钥","slug":"_4-3-生成-ca-证书和私钥","link":"#_4-3-生成-ca-证书和私钥","children":[]}]},{"level":2,"title":"五、创建 ETCD 证书","slug":"五、创建-etcd-证书","link":"#五、创建-etcd-证书","children":[{"level":3,"title":"5.1 生成 etcd 证书配置","slug":"_5-1-生成-etcd-证书配置","link":"#_5-1-生成-etcd-证书配置","children":[]},{"level":3,"title":"5.2 使用根证书(ca.pem)签发etcd证书","slug":"_5-2-使用根证书-ca-pem-签发etcd证书","link":"#_5-2-使用根证书-ca-pem-签发etcd证书","children":[]}]},{"level":2,"title":"六、创建 Api-server 证书","slug":"六、创建-api-server-证书","link":"#六、创建-api-server-证书","children":[{"level":3,"title":"6.1 生成 Api-server 证书配置","slug":"_6-1-生成-api-server-证书配置","link":"#_6-1-生成-api-server-证书配置","children":[]},{"level":3,"title":"6.2 使用根证书(ca.pem)签发 apiserver 证书","slug":"_6-2-使用根证书-ca-pem-签发-apiserver-证书","link":"#_6-2-使用根证书-ca-pem-签发-apiserver-证书","children":[]}]},{"level":2,"title":"七、创建 Admin 证书","slug":"七、创建-admin-证书","link":"#七、创建-admin-证书","children":[{"level":3,"title":"7.1 生成 Admin 证书配置","slug":"_7-1-生成-admin-证书配置","link":"#_7-1-生成-admin-证书配置","children":[]},{"level":3,"title":"7.2 使用根证书(ca.pem)签发admin证书","slug":"_7-2-使用根证书-ca-pem-签发admin证书","link":"#_7-2-使用根证书-ca-pem-签发admin证书","children":[]}]},{"level":2,"title":"八、创建 kube-proxy 证书","slug":"八、创建-kube-proxy-证书","link":"#八、创建-kube-proxy-证书","children":[{"level":3,"title":"8.1 生成 kube-proxy 证书配置","slug":"_8-1-生成-kube-proxy-证书配置","link":"#_8-1-生成-kube-proxy-证书配置","children":[]},{"level":3,"title":"8.2 使用根证书(ca.pem)签发proxy证书","slug":"_8-2-使用根证书-ca-pem-签发proxy证书","link":"#_8-2-使用根证书-ca-pem-签发proxy证书","children":[]}]},{"level":2,"title":"九、分发证书","slug":"九、分发证书","link":"#九、分发证书","children":[]},{"level":2,"title":"十、启用 TLS Bootstrapping 机制","slug":"十、启用-tls-bootstrapping-机制","link":"#十、启用-tls-bootstrapping-机制","children":[{"level":3,"title":"10.1 生成token认证文件","slug":"_10-1-生成token认证文件","link":"#_10-1-生成token认证文件","children":[]}]}],"git":{},"readingTime":{"minutes":12.16,"words":3647},"filePathRelative":"tool/kubernetes/01.创建TLS证书和秘钥.md","localizedDate":"2020年8月12日","autoDesc":true}');export{e as data};
