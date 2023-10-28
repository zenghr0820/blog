const e=JSON.parse('{"key":"v-c530905c","path":"/database/redis/06.Redis%E8%BF%9B%E9%98%B6-%E6%8C%81%E4%B9%85%E5%8C%96%E6%95%99%E7%A8%8B.html","title":"Redis进阶-持久化机制","lang":"zh-CN","frontmatter":{"title":"Redis进阶-持久化机制","date":"2021-08-02T20:00:00.000Z","re":"2021-08-02-redis-rdb-aof","description":"Redis 持久化机制 Redis是一个支持持久化的内存数据库，也就是说 redis 需要经常将内存中的数据同步到硬盘来保证持久化 Redis持久化主要分为两种方式，分别是RDB和AOF，当然实际场景下还会使用这两种的混合模式 前言 Redis的数据正常都是存储在内存内，如果宕机突然发生，数据就会全部丢失，因此需要提供一种方式保证 redis 的数据不会因为故障而丢失，这种机制就是 redis 的持久化机制 目前 Redis 主流的持久化机制有两种：RDB 方式 和 AOF 方式","permalink":"/database/redis/2021-08-02-redis-rdb-aof.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/database/redis/2021-08-02-redis-rdb-aof.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"Redis进阶-持久化机制"}],["meta",{"property":"og:description","content":"Redis 持久化机制 Redis是一个支持持久化的内存数据库，也就是说 redis 需要经常将内存中的数据同步到硬盘来保证持久化 Redis持久化主要分为两种方式，分别是RDB和AOF，当然实际场景下还会使用这两种的混合模式 前言 Redis的数据正常都是存储在内存内，如果宕机突然发生，数据就会全部丢失，因此需要提供一种方式保证 redis 的数据不会因为故障而丢失，这种机制就是 redis 的持久化机制 目前 Redis 主流的持久化机制有两种：RDB 方式 和 AOF 方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2021-08-02T20:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis进阶-持久化机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-02T20:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"RDB 持久化","slug":"rdb-持久化","link":"#rdb-持久化","children":[{"level":3,"title":"手动触发","slug":"手动触发","link":"#手动触发","children":[]},{"level":3,"title":"自动触发","slug":"自动触发","link":"#自动触发","children":[]},{"level":3,"title":"redis.conf中配置RDB","slug":"redis-conf中配置rdb","link":"#redis-conf中配置rdb","children":[]},{"level":3,"title":"RDB 的优缺点","slug":"rdb-的优缺点","link":"#rdb-的优缺点","children":[]}]},{"level":2,"title":"AOF 持久化","slug":"aof-持久化","link":"#aof-持久化","children":[{"level":3,"title":"如何实现 AOF","slug":"如何实现-aof","link":"#如何实现-aof","children":[]},{"level":3,"title":"Conf 配置AOF","slug":"conf-配置aof","link":"#conf-配置aof","children":[]}]},{"level":2,"title":"RDB和AOF混合方式","slug":"rdb和aof混合方式","link":"#rdb和aof混合方式","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{},"readingTime":{"minutes":8.25,"words":2475},"filePathRelative":"database/redis/06.Redis进阶-持久化教程.md","localizedDate":"2021年8月2日","excerpt":"<h1> Redis 持久化机制</h1>\\n<blockquote>\\n<p>Redis是一个支持持久化的内存数据库，也就是说 redis 需要经常将内存中的数据同步到硬盘来保证持久化</p>\\n<p>Redis持久化主要分为两种方式，分别是RDB和AOF，当然实际场景下还会使用这两种的混合模式</p>\\n</blockquote>\\n<h2> 前言</h2>\\n<p>Redis的数据正常都是存储在内存内，如果宕机突然发生，数据就会全部丢失，因此需要提供一种方式保证 redis 的数据不会因为故障而丢失，这种机制就是 <strong>redis 的持久化机制</strong></p>\\n<p>目前 Redis 主流的持久化机制有两种：RDB 方式 和 AOF 方式</p>","autoDesc":true}');export{e as data};
