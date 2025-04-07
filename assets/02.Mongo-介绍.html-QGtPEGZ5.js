import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as n,o}from"./app-W8Rm2S8d.js";const a={};function d(r,t){return o(),l("div",null,t[0]||(t[0]=[n('<h1 id="mongo-介绍" tabindex="-1"><a class="header-anchor" href="#mongo-介绍"><span>Mongo 介绍</span></a></h1><p>MongoDB 是一个可扩展、高性能的 NoSQL 数据库，由 C++ 语言编写，旨在为 web 应用提供高性能可扩展的数据存储解决方案。 它的特点是高性能、易部署、易使用，存储数据非常方便，主要特性有:</p><ul><li>模式自由，支持动态查询、完全索引，可轻易查询文档中内嵌的对象及数组。</li><li>面向集合存储，易存储对象类型的数据 , 包括文档内嵌对象及数组。</li><li>高效的数据存储 , 支持二进制数据及大型对象 ( 如照片和视频 )。</li><li>支持复制和故障恢复；提供了 主-从、主-主模式的数据复制及服务器之间的数据复制。</li><li>自动分片以支持云级别的伸缩性，支持水平的数据库集群，可动态添加额外的服务器</li></ul><h2 id="mongo-的基本概念" tabindex="-1"><a class="header-anchor" href="#mongo-的基本概念"><span>Mongo 的基本概念</span></a></h2><ul><li><strong>文档(document)</strong> - 是 mongo 中的基本数据单元，类似于关系型数据库中的行，但是比行要复杂的多</li><li><strong>集合</strong> - 就是一组文档，如果说文档就是行那么集合就类似关系型数据库中的表</li><li><strong>数据库</strong> - Mongo 中多个文档组成集合，同样的多个集合组成数据库，每个数据库都有独立的权限控制</li></ul><h2 id="mongodb与rdbms区别" tabindex="-1"><a class="header-anchor" href="#mongodb与rdbms区别"><span>MongoDB与RDBMS区别</span></a></h2><table><thead><tr><th style="text-align:left;">SQL术语/概念</th><th style="text-align:left;">MongoDB术语/概念</th><th style="text-align:left;">解释/说明</th></tr></thead><tbody><tr><td style="text-align:left;">database</td><td style="text-align:left;">database</td><td style="text-align:left;">数据库</td></tr><tr><td style="text-align:left;">table</td><td style="text-align:left;">collection</td><td style="text-align:left;">数据库表/集合</td></tr><tr><td style="text-align:left;">row</td><td style="text-align:left;">document</td><td style="text-align:left;">数据记录行/文档</td></tr><tr><td style="text-align:left;">column</td><td style="text-align:left;">field</td><td style="text-align:left;">数据字段/域</td></tr><tr><td style="text-align:left;">index</td><td style="text-align:left;">index</td><td style="text-align:left;">索引</td></tr><tr><td style="text-align:left;">table joins</td><td style="text-align:left;"></td><td style="text-align:left;">表连接,MongoDB不支持</td></tr><tr><td style="text-align:left;">primary key</td><td style="text-align:left;">primary key</td><td style="text-align:left;">主键,MongoDB自动将_id字段设置为主键</td></tr></tbody></table><h2 id="mongo-的术语" tabindex="-1"><a class="header-anchor" href="#mongo-的术语"><span>Mongo 的术语</span></a></h2><p><strong>_id</strong> – 这是每个MongoDB文档中必填的字段。_id字段表示MongoDB文档中的唯一值。_id字段类似于文档的主键。如果创建的新文档中没有_id字段，MongoDB将自动创建该字段。</p><p><strong>集合</strong> – 这是MongoDB文档的分组。集合等效于在任何其他RDMS（例如Oracle或MS SQL）中创建的表。集合存在于单个数据库中。从介绍中可以看出，集合不强制执行任何结构。</p><p><strong>游标</strong> – 这是指向查询结果集的指针。客户可以遍历游标以检索结果。</p><p><strong>数据库</strong> – 这是像RDMS中那样的集合容器，其中是表的容器。每个数据库在文件系统上都有其自己的文件集。MongoDB服务器可以存储多个数据库。</p><p><strong>文档</strong> - MongoDB集合中的记录基本上称为文档。文档包含字段名称和值。</p><p><strong>字段</strong> - 文档中的名称/值对。一个文档具有零个或多个字段。字段类似于关系数据库中的列。</p><h2 id="mongo-的数据类型" tabindex="-1"><a class="header-anchor" href="#mongo-的数据类型"><span>Mongo 的数据类型</span></a></h2><table><thead><tr><th style="text-align:left;">数据类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>String</strong></td><td style="text-align:left;">字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。</td></tr><tr><td style="text-align:left;">Integer</td><td style="text-align:left;">整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。</td></tr><tr><td style="text-align:left;">Boolean</td><td style="text-align:left;">布尔值。用于存储布尔值（真/假）。</td></tr><tr><td style="text-align:left;">Double</td><td style="text-align:left;">双精度浮点值。用于存储浮点值。</td></tr><tr><td style="text-align:left;">Min/Max keys</td><td style="text-align:left;">将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。</td></tr><tr><td style="text-align:left;">Array</td><td style="text-align:left;">用于将数组或列表或多个值存储为一个键。</td></tr><tr><td style="text-align:left;"><strong>Timestamp</strong></td><td style="text-align:left;">时间戳。记录文档修改或添加的具体时间。</td></tr><tr><td style="text-align:left;">Object</td><td style="text-align:left;">用于内嵌文档。</td></tr><tr><td style="text-align:left;">Null</td><td style="text-align:left;">用于创建空值。</td></tr><tr><td style="text-align:left;">Symbol</td><td style="text-align:left;">符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。</td></tr><tr><td style="text-align:left;"><strong>Date</strong></td><td style="text-align:left;">日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。</td></tr><tr><td style="text-align:left;"><strong>Object ID</strong></td><td style="text-align:left;">对象 ID。用于创建文档的 ID。</td></tr><tr><td style="text-align:left;"><strong>Binary Data</strong></td><td style="text-align:left;">二进制数据。用于存储二进制数据。</td></tr><tr><td style="text-align:left;">Code</td><td style="text-align:left;">代码类型。用于在文档中存储 JavaScript 代码。</td></tr><tr><td style="text-align:left;">Regular expression</td><td style="text-align:left;">正则表达式类型。用于存储正则表达式。</td></tr></tbody></table>',16)]))}const s=e(a,[["render",d]]),y=JSON.parse('{"path":"/database/mongo/02.Mongo-%E4%BB%8B%E7%BB%8D.html","title":"Mongo-介绍","lang":"zh-CN","frontmatter":{"title":"Mongo-介绍","date":"2021-08-15T19:00:00.000Z","re":"2021-08-15-mongo-introduce","description":"Mongo 介绍 MongoDB 是一个可扩展、高性能的 NoSQL 数据库，由 C++ 语言编写，旨在为 web 应用提供高性能可扩展的数据存储解决方案。 它的特点是高性能、易部署、易使用，存储数据非常方便，主要特性有: 模式自由，支持动态查询、完全索引，可轻易查询文档中内嵌的对象及数组。 面向集合存储，易存储对象类型的数据 , 包括文档内嵌对象及数...","permalink":"/passages/2021-08-15-mongo-introduce.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/passages/2021-08-15-mongo-introduce.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"Mongo-介绍"}],["meta",{"property":"og:description","content":"Mongo 介绍 MongoDB 是一个可扩展、高性能的 NoSQL 数据库，由 C++ 语言编写，旨在为 web 应用提供高性能可扩展的数据存储解决方案。 它的特点是高性能、易部署、易使用，存储数据非常方便，主要特性有: 模式自由，支持动态查询、完全索引，可轻易查询文档中内嵌的对象及数组。 面向集合存储，易存储对象类型的数据 , 包括文档内嵌对象及数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-07T14:30:15.000Z"}],["meta",{"property":"article:published_time","content":"2021-08-15T19:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-07T14:30:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mongo-介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-15T19:00:00.000Z\\",\\"dateModified\\":\\"2025-04-07T14:30:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"git":{"createdTime":1744036215000,"updatedTime":1744036215000,"contributors":[{"name":"zenghr","username":"zenghr","email":"zenghr","commits":1,"url":"https://github.com/zenghr"}]},"readingTime":{"minutes":3.45,"words":1035},"filePathRelative":"database/mongo/02.Mongo-介绍.md","localizedDate":"2021年8月15日","excerpt":"\\n<p>MongoDB 是一个可扩展、高性能的 NoSQL 数据库，由 C++ 语言编写，旨在为 web 应用提供高性能可扩展的数据存储解决方案。\\n它的特点是高性能、易部署、易使用，存储数据非常方便，主要特性有:</p>\\n<ul>\\n<li>模式自由，支持动态查询、完全索引，可轻易查询文档中内嵌的对象及数组。</li>\\n<li>面向集合存储，易存储对象类型的数据 , 包括文档内嵌对象及数组。</li>\\n<li>高效的数据存储 , 支持二进制数据及大型对象 ( 如照片和视频 )。</li>\\n<li>支持复制和故障恢复；提供了 主-从、主-主模式的数据复制及服务器之间的数据复制。</li>\\n<li>自动分片以支持云级别的伸缩性，支持水平的数据库集群，可动态添加额外的服务器</li>\\n</ul>","autoDesc":true}');export{s as comp,y as data};
