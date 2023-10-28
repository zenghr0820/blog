const e=JSON.parse('{"key":"v-ddacf20e","path":"/spring/spring-boot/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90%E5%99%A8.html","title":"SpringBoot 自定义参数解析器","lang":"zh-CN","frontmatter":{"title":"SpringBoot 自定义参数解析器","date":"2021-08-18T16:00:00.000Z","re":"2021-08-18-springboot-argument-resolver","category":["Spring","SpringBoot"],"description":"自定义参数解析器 在项目开发中，经常会遇到很多地方都需要获取当前的登录用户对象，根据请求的 session 或者 token 去获取用户信息，于是经常会在很多地方出现获取用户信息的代码 //根据token获取用户信息 String token = request.getHeader(\\"token\\"); // 查询用户 User user = userService.getCurrentUser(token);","permalink":"/spring/spring-boot/2021-08-18-springboot-argument-resolver.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/spring/spring-boot/2021-08-18-springboot-argument-resolver.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"SpringBoot 自定义参数解析器"}],["meta",{"property":"og:description","content":"自定义参数解析器 在项目开发中，经常会遇到很多地方都需要获取当前的登录用户对象，根据请求的 session 或者 token 去获取用户信息，于是经常会在很多地方出现获取用户信息的代码 //根据token获取用户信息 String token = request.getHeader(\\"token\\"); // 查询用户 User user = userService.getCurrentUser(token);"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2021-08-18T16:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot 自定义参数解析器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-18T16:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"HandlerMethodArgumentResolver","slug":"handlermethodargumentresolver","link":"#handlermethodargumentresolver","children":[]},{"level":2,"title":"使用自定义的注解来区分","slug":"使用自定义的注解来区分","link":"#使用自定义的注解来区分","children":[]},{"level":2,"title":"将自定义参数解析器添加到Spring容器中","slug":"将自定义参数解析器添加到spring容器中","link":"#将自定义参数解析器添加到spring容器中","children":[]},{"level":2,"title":"使用案例","slug":"使用案例","link":"#使用案例","children":[]}],"git":{},"readingTime":{"minutes":2.33,"words":700},"filePathRelative":"spring/spring-boot/自定义参数解析器.md","localizedDate":"2021年8月18日","excerpt":"<h1> 自定义参数解析器</h1>\\n<p>在项目开发中，经常会遇到很多地方都需要获取当前的登录用户对象，根据请求的 session 或者 token 去获取用户信息，于是经常会在很多地方出现获取用户信息的代码</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">//根据token获取用户信息</span>\\n<span class=\\"token class-name\\">String</span> token <span class=\\"token operator\\">=</span> request<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getHeader</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"token\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 查询用户</span>\\n<span class=\\"token class-name\\">User</span> user <span class=\\"token operator\\">=</span> userService<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getCurrentUser</span><span class=\\"token punctuation\\">(</span>token<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
