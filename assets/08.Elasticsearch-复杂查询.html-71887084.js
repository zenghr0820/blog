const e=JSON.parse('{"key":"v-037fd512","path":"/database/elasticsearch/08.Elasticsearch-%E5%A4%8D%E6%9D%82%E6%9F%A5%E8%AF%A2.html","title":"Elasticsearch-复杂查询","lang":"zh-CN","frontmatter":{"title":"Elasticsearch-复杂查询","date":"2021-08-19T11:12:00.000Z","re":"2021-08-19-elasticsearch-complex-query","description":"Elasticsearch 复杂查询 前面，我们已经学习了 Elasticsearch 的基本 API 的操作，也在 SpringBoot 中集成了 Elasticsearch，使用 Repository 接口实现简单的 Crud 操作 因为 旧版本的 Repository 中的 search 方法被废弃了，所以我们要实现 复杂查询 只能使用 ElasticsearchRestTemplate 查询条件对象 对象 描述 NativeSearchQueryBuilder Spring提供的一个查询条件构建器，帮助构建json格式的请求体 QueryBuilders 提供了大量的静态方法，用于生成各种不同类型的查询对象，例如：词条、模糊、通配符等QueryBuilder对象 BoolQueryBuilder 多条件查询对象，对应 Elasticsearch 中的 bool MatchQueryBuilder 构建分词查询条件对象，对应 Elasticsearch 中的 match PageRequest 用于构建分页请求 IndexCoordinate 索引对象，通常在查询使用","permalink":"/database/elasticsearch/2021-08-19-elasticsearch-complex-query.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/database/elasticsearch/2021-08-19-elasticsearch-complex-query.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"Elasticsearch-复杂查询"}],["meta",{"property":"og:description","content":"Elasticsearch 复杂查询 前面，我们已经学习了 Elasticsearch 的基本 API 的操作，也在 SpringBoot 中集成了 Elasticsearch，使用 Repository 接口实现简单的 Crud 操作 因为 旧版本的 Repository 中的 search 方法被废弃了，所以我们要实现 复杂查询 只能使用 ElasticsearchRestTemplate 查询条件对象 对象 描述 NativeSearchQueryBuilder Spring提供的一个查询条件构建器，帮助构建json格式的请求体 QueryBuilders 提供了大量的静态方法，用于生成各种不同类型的查询对象，例如：词条、模糊、通配符等QueryBuilder对象 BoolQueryBuilder 多条件查询对象，对应 Elasticsearch 中的 bool MatchQueryBuilder 构建分词查询条件对象，对应 Elasticsearch 中的 match PageRequest 用于构建分页请求 IndexCoordinate 索引对象，通常在查询使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2021-08-19T11:12:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Elasticsearch-复杂查询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-19T11:12:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"查询条件对象","slug":"查询条件对象","link":"#查询条件对象","children":[]},{"level":2,"title":"数据准备","slug":"数据准备","link":"#数据准备","children":[]},{"level":2,"title":"基本分词查询","slug":"基本分词查询","link":"#基本分词查询","children":[]},{"level":2,"title":"分页查询","slug":"分页查询","link":"#分页查询","children":[]},{"level":2,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":2,"title":"聚合","slug":"聚合","link":"#聚合","children":[]},{"level":2,"title":"嵌套聚合，求平均值","slug":"嵌套聚合-求平均值","link":"#嵌套聚合-求平均值","children":[]}],"git":{},"readingTime":{"minutes":8.79,"words":2636},"filePathRelative":"database/elasticsearch/08.Elasticsearch-复杂查询.md","localizedDate":"2021年8月19日","excerpt":"<h1> Elasticsearch 复杂查询</h1>\\n<p>前面，我们已经学习了 Elasticsearch 的基本 API 的操作，也在 SpringBoot 中集成了 Elasticsearch，使用 Repository 接口实现简单的 Crud 操作</p>\\n<p>因为 <em>旧版本的 Repository 中的 search</em> 方法被废弃了，所以我们要实现 <strong>复杂查询</strong> 只能使用 <em>ElasticsearchRestTemplate</em></p>\\n<h2> 查询条件对象</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>对象</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><strong>NativeSearchQueryBuilder</strong></td>\\n<td>Spring提供的一个查询条件构建器，帮助构建json格式的请求体</td>\\n</tr>\\n<tr>\\n<td><strong>QueryBuilders</strong></td>\\n<td>提供了大量的静态方法，用于生成各种不同类型的查询对象，例如：词条、模糊、通配符等QueryBuilder对象</td>\\n</tr>\\n<tr>\\n<td><strong>BoolQueryBuilder</strong></td>\\n<td>多条件查询对象，对应 Elasticsearch 中的 <strong>bool</strong></td>\\n</tr>\\n<tr>\\n<td><strong>MatchQueryBuilder</strong></td>\\n<td>构建分词查询条件对象，对应 Elasticsearch 中的 <strong>match</strong></td>\\n</tr>\\n<tr>\\n<td><strong>PageRequest</strong></td>\\n<td>用于构建分页请求</td>\\n</tr>\\n<tr>\\n<td><strong>IndexCoordinate</strong></td>\\n<td>索引对象，通常在查询使用</td>\\n</tr>\\n<tr>\\n<td></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{e as data};
