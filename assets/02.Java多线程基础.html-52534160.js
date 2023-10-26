const e=JSON.parse('{"key":"v-17cdc827","path":"/Java/concurrency/02.Java%E5%A4%9A%E7%BA%BF%E7%A8%8B%E5%9F%BA%E7%A1%80.html","title":"Java 多线程基础","lang":"zh-CN","frontmatter":{"title":"Java 多线程基础","date":"2021-05-04T16:20:00.000Z","re":"2021-05-04-java-thread-basic","category":["Java"],"description":"Java 多线程基础 提示 本文用于理解Java多线程的基础以及实现方式 带着BAT大厂的面试题去理解 线程有几种状态？ 线程有哪些实现方式？ 线程的常用方法？ 线程的同步方法有哪些？怎么选择 sleep 和 wait 有什么区别？ 线程状态","permalink":"/passages/2021-05-04-java-thread-basic.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/passages/2021-05-04-java-thread-basic.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"Java 多线程基础"}],["meta",{"property":"og:description","content":"Java 多线程基础 提示 本文用于理解Java多线程的基础以及实现方式 带着BAT大厂的面试题去理解 线程有几种状态？ 线程有哪些实现方式？ 线程的常用方法？ 线程的同步方法有哪些？怎么选择 sleep 和 wait 有什么区别？ 线程状态"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2021-05-04T16:20:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 多线程基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-04T16:20:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"带着BAT大厂的面试题去理解","slug":"带着bat大厂的面试题去理解","link":"#带着bat大厂的面试题去理解","children":[]},{"level":2,"title":"线程状态","slug":"线程状态","link":"#线程状态","children":[{"level":3,"title":"新生状态","slug":"新生状态","link":"#新生状态","children":[]},{"level":3,"title":"就绪状态","slug":"就绪状态","link":"#就绪状态","children":[]},{"level":3,"title":"运行状态","slug":"运行状态","link":"#运行状态","children":[]},{"level":3,"title":"阻塞状态","slug":"阻塞状态","link":"#阻塞状态","children":[]},{"level":3,"title":"死亡状态","slug":"死亡状态","link":"#死亡状态","children":[]}]},{"level":2,"title":"线程使用","slug":"线程使用","link":"#线程使用","children":[{"level":3,"title":"继承 Thread 类","slug":"继承-thread-类","link":"#继承-thread-类","children":[]},{"level":3,"title":"实现 Runnable 接口","slug":"实现-runnable-接口","link":"#实现-runnable-接口","children":[]}]},{"level":2,"title":"线程常用方式","slug":"线程常用方式","link":"#线程常用方式","children":[{"level":3,"title":"sleep()","slug":"sleep","link":"#sleep","children":[]},{"level":3,"title":"wait()","slug":"wait","link":"#wait","children":[]},{"level":3,"title":"yield()","slug":"yield","link":"#yield","children":[]},{"level":3,"title":"Daemon","slug":"daemon","link":"#daemon","children":[]},{"level":3,"title":"join()","slug":"join","link":"#join","children":[]},{"level":3,"title":"setPriority()","slug":"setpriority","link":"#setpriority","children":[]}]},{"level":2,"title":"线程互斥同步","slug":"线程互斥同步","link":"#线程互斥同步","children":[{"level":3,"title":"synchronized","slug":"synchronized","link":"#synchronized","children":[]},{"level":3,"title":"ReentrantLock","slug":"reentrantlock","link":"#reentrantlock","children":[]}]}],"git":{},"readingTime":{"minutes":6.59,"words":1978},"filePathRelative":"Java/concurrency/02.Java多线程基础.md","localizedDate":"2021年5月4日","excerpt":"<h1> Java 多线程基础</h1>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>本文用于理解Java多线程的基础以及实现方式</p>\\n</div>\\n<h2> 带着BAT大厂的面试题去理解</h2>\\n<ul>\\n<li>线程有几种状态？</li>\\n<li>线程有哪些实现方式？</li>\\n<li>线程的常用方法？</li>\\n<li>线程的同步方法有哪些？怎么选择</li>\\n<li>sleep 和 wait 有什么区别？</li>\\n</ul>\\n<h2> 线程状态</h2>\\n<img src=\\"https://media.zenghr.cn/blog/img/20210504/oFexCdLx4QcU.png?imageslim\\" alt=\\"mark\\" style=\\"zoom: 33%;\\">","autoDesc":true}');export{e as data};
