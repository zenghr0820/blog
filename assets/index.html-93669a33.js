const e=JSON.parse('{"key":"v-346f9ac2","path":"2021-09-02-spring-cloud-openfeign/","title":"OpenFeign 2020 最新教程","lang":"zh-CN","frontmatter":{"title":"OpenFeign 2020 最新教程","date":"2021-09-02T11:32:00.000Z","permalink":"/passages/2021-09-02-spring-cloud-openfeign.html","category":["Spring","SpringCloud"],"description":"OpenFeign 2020 最新教程 OpenFeign是声明式的Http客户端，通过OpenFeign发送Http请求非常的简单 注解式开发，接口+注解的方式 OpenFeign支持多种的对象的序列化 和 反序列化的工具 OpenFeign 默认集成了Ribbon(2020 版本弃用)，可以直接进行负载均衡 Feign 和 OpenFeign 的区别 Feign 和 OpenFeign是两个技术，都是作为服务调用存在的，OpenFeign 是SpringCloud在Feign的基础上进行封装得到的，支持SpringMvc的注解","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/passages/2021-09-02-spring-cloud-openfeign.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"OpenFeign 2020 最新教程"}],["meta",{"property":"og:description","content":"OpenFeign 2020 最新教程 OpenFeign是声明式的Http客户端，通过OpenFeign发送Http请求非常的简单 注解式开发，接口+注解的方式 OpenFeign支持多种的对象的序列化 和 反序列化的工具 OpenFeign 默认集成了Ribbon(2020 版本弃用)，可以直接进行负载均衡 Feign 和 OpenFeign 的区别 Feign 和 OpenFeign是两个技术，都是作为服务调用存在的，OpenFeign 是SpringCloud在Feign的基础上进行封装得到的，支持SpringMvc的注解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2021-09-02T11:32:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OpenFeign 2020 最新教程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-02T11:32:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"2020 版本说明以及坑","slug":"_2020-版本说明以及坑","link":"#_2020-版本说明以及坑","children":[]},{"level":2,"title":"演示环境说明","slug":"演示环境说明","link":"#演示环境说明","children":[]},{"level":2,"title":"启动类","slug":"启动类","link":"#启动类","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"OpenFeign 接口的开发","slug":"openfeign-接口的开发","link":"#openfeign-接口的开发","children":[]},{"level":2,"title":"调用OpenFeign 的接口","slug":"调用openfeign-的接口","link":"#调用openfeign-的接口","children":[]},{"level":2,"title":"启动测试","slug":"启动测试","link":"#启动测试","children":[]},{"level":2,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[{"level":3,"title":"Ribbon(已弃用)","slug":"ribbon-已弃用","link":"#ribbon-已弃用","children":[]},{"level":3,"title":"Spring Cloud LoadBalancer","slug":"spring-cloud-loadbalancer","link":"#spring-cloud-loadbalancer","children":[]}]},{"level":2,"title":"负载均衡器在哪里使用？","slug":"负载均衡器在哪里使用","link":"#负载均衡器在哪里使用","children":[]},{"level":2,"title":"OpenFeign 负载均衡策略","slug":"openfeign-负载均衡策略","link":"#openfeign-负载均衡策略","children":[{"level":3,"title":"编写配置类","slug":"编写配置类","link":"#编写配置类","children":[]},{"level":3,"title":"使用 @LoadBalancerClient","slug":"使用-loadbalancerclient","link":"#使用-loadbalancerclient","children":[]}]},{"level":2,"title":"@FeignClient注解","slug":"feignclient注解","link":"#feignclient注解","children":[]},{"level":2,"title":"OpenFeign 开始GZIP压缩","slug":"openfeign-开始gzip压缩","link":"#openfeign-开始gzip压缩","children":[]},{"level":2,"title":"OpenFeign 超时配置","slug":"openfeign-超时配置","link":"#openfeign-超时配置","children":[]}],"git":{},"readingTime":{"minutes":6.84,"words":2053},"filePathRelative":"spring/spring-cloud/03.SpringCloud-OpenFeign.md","localizedDate":"2021年9月2日","excerpt":"<h1> OpenFeign 2020 最新教程</h1>\\n<p>OpenFeign是声明式的Http客户端，通过OpenFeign发送Http请求非常的简单</p>\\n<ul>\\n<li>注解式开发，接口+注解的方式</li>\\n<li>OpenFeign支持多种的对象的序列化 和 反序列化的工具</li>\\n<li>OpenFeign <s>默认集成了Ribbon</s>(2020 版本弃用)，可以直接进行负载均衡</li>\\n</ul>\\n<p>Feign 和 OpenFeign 的区别</p>\\n<blockquote>\\n<p>Feign 和 OpenFeign是两个技术，都是作为服务调用存在的，OpenFeign 是SpringCloud在Feign的基础上进行封装得到的，支持SpringMvc的注解</p>\\n</blockquote>","autoDesc":true}');export{e as data};
