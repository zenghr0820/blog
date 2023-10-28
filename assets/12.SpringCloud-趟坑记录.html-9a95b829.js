const e=JSON.parse('{"key":"v-3ef3ae1a","path":"/spring/spring-cloud/12.SpringCloud-%E8%B6%9F%E5%9D%91%E8%AE%B0%E5%BD%95.html","title":"Spring Cloud 趟坑记录","lang":"zh-CN","frontmatter":{"title":"Spring Cloud 趟坑记录","date":"2021-07-27T22:00:00.000Z","re":"2021-07-27-spring-cloud-error","category":["Spring","SpringCloud"],"description":"Spring Cloud 趟坑记录 提示 本文记录一些在使用 Spring Cloud 中的一些踩坑记录，防止以后再遇到 Spring Cloud 2020 bootstrap 配置文件失效 在使用 nacos-config 读取 nacos 配置时，发现bootstrap.yml一直不生效 查找原因 从 Spring Boot 2.4 版本开始，配置文件加载方式进行了重构，默认不加载 bootstrap.yml 配置文件","permalink":"/passages/2021-07-27-spring-cloud-error.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/passages/2021-07-27-spring-cloud-error.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"Spring Cloud 趟坑记录"}],["meta",{"property":"og:description","content":"Spring Cloud 趟坑记录 提示 本文记录一些在使用 Spring Cloud 中的一些踩坑记录，防止以后再遇到 Spring Cloud 2020 bootstrap 配置文件失效 在使用 nacos-config 读取 nacos 配置时，发现bootstrap.yml一直不生效 查找原因 从 Spring Boot 2.4 版本开始，配置文件加载方式进行了重构，默认不加载 bootstrap.yml 配置文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2021-07-27T22:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Cloud 趟坑记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-27T22:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"Spring Cloud 2020 bootstrap 配置文件失效","slug":"spring-cloud-2020-bootstrap-配置文件失效","link":"#spring-cloud-2020-bootstrap-配置文件失效","children":[{"level":3,"title":"查找原因","slug":"查找原因","link":"#查找原因","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}]},{"level":2,"title":"SpringCloud 2020版本 Gateway + Nacos，服务报错503 Service Unavailable","slug":"springcloud-2020版本-gateway-nacos-服务报错503-service-unavailable","link":"#springcloud-2020版本-gateway-nacos-服务报错503-service-unavailable","children":[]},{"level":2,"title":"No Feign Client for loadBalancing defined. Did you forget to include spring-cloud-starter-loadbalancer?","slug":"no-feign-client-for-loadbalancing-defined-did-you-forget-to-include-spring-cloud-starter-loadbalancer","link":"#no-feign-client-for-loadbalancing-defined-did-you-forget-to-include-spring-cloud-starter-loadbalancer","children":[]}],"git":{},"readingTime":{"minutes":0.92,"words":275},"filePathRelative":"spring/spring-cloud/12.SpringCloud-趟坑记录.md","localizedDate":"2021年7月27日","excerpt":"<h1> Spring Cloud 趟坑记录</h1>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>本文记录一些在使用 Spring Cloud 中的一些踩坑记录，防止以后再遇到</p>\\n</div>\\n<h2> Spring Cloud 2020 bootstrap 配置文件失效</h2>\\n<p>在使用 nacos-config 读取 nacos 配置时，发现bootstrap.yml一直不生效</p>\\n<h3> 查找原因</h3>\\n<p>从 Spring Boot 2.4 版本开始，配置文件加载方式进行了重构，默认不加载 <strong>bootstrap.yml</strong> 配置文件</p>","autoDesc":true}');export{e as data};
