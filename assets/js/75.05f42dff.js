(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{400:function(t,e,a){"use strict";a.r(e);var s=a(2),_=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"elasticsearch-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-介绍"}},[t._v("#")]),t._v(" Elasticsearch 介绍")]),t._v(" "),e("blockquote",[e("p",[t._v("在学习 Elasticsearch 之前，我们需要了解一下什么是Elasticsearch、以及它的一些基础概念")])]),t._v(" "),e("h2",{attrs:{id:"什么是-elasticsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-elasticsearch"}},[t._v("#")]),t._v(" 什么是 Elasticsearch")]),t._v(" "),e("p",[e("strong",[t._v("Elasticsearch")]),t._v(" 是一款非常强大的、基于 "),e("strong",[t._v("Lucene")]),t._v(" 的开源搜索及分析引擎；它是一个实时的分布式搜索分析引擎，它能让你以前所未有的速度和规模，去探索你的数据")]),t._v(" "),e("p",[e("strong",[t._v("Elasticsearch")]),t._v(" 的底层是开源库 Lucene。但是，你没法直接用 Lucene，必须自己写代码去调用它的 接口。Elastic 是 Lucene 的封装，提供了 REST API 的操作接口，开箱即用")]),t._v(" "),e("h2",{attrs:{id:"为什么使用-elasticsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-elasticsearch"}},[t._v("#")]),t._v(" 为什么使用 Elasticsearch")]),t._v(" "),e("blockquote",[e("p",[t._v("根据"),e("a",{attrs:{href:"https://db-engines.com/en/ranking",target:"_blank",rel:"noopener noreferrer"}},[t._v("DB Engine的排名 (opens new window)"),e("OutboundLink")],1),t._v("显示，ElasticSearch是最受欢迎的企业级搜索引擎。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://media.zenghr.cn/blog/img/20210806/nNGtOX.png",alt:"nNGtOX"}})]),t._v(" "),e("h2",{attrs:{id:"elasticsearch-的特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-的特点"}},[t._v("#")]),t._v(" Elasticsearch 的特点")]),t._v(" "),e("ul",[e("li",[t._v("ES 是分布式文档存储，存储的数据都是序列化为 JSON documents")]),t._v(" "),e("li",[t._v("使用"),e("strong",[t._v("倒排索引")]),t._v("存储数据，倒排索引比较适合全文本搜索")]),t._v(" "),e("li",[t._v("支持 JSON 样式的查询语言 —— Query DSL，也支持 SQL 样式的查询")])]),t._v(" "),e("h2",{attrs:{id:"主要功能以及使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要功能以及使用场景"}},[t._v("#")]),t._v(" 主要功能以及使用场景")]),t._v(" "),e("p",[t._v("应用场景")]),t._v(" "),e("ul",[e("li",[t._v("记录和日志分析")]),t._v(" "),e("li",[t._v("采集和组合公共数据")]),t._v(" "),e("li",[t._v("全文搜索及个性化推荐")]),t._v(" "),e("li",[t._v("事件数据和指标")]),t._v(" "),e("li",[t._v("数据可视化")])]),t._v(" "),e("p",[t._v("举例：")]),t._v(" "),e("ul",[e("li",[t._v("维基百科：全文检索，高亮，搜索推荐等等")]),t._v(" "),e("li",[t._v("GitHub：上千亿行的代码搜索")]),t._v(" "),e("li",[t._v("电商网站：搜索商品")]),t._v(" "),e("li",[t._v("日志数据分析：logstash采集数据，ES进行数据分析处理")]),t._v(" "),e("li",[t._v("商品价格监控网站：用户设定某商品的价格阈值，当监控到商品的金额低于这个阈值的时候，就发送消息通知用户")])]),t._v(" "),e("h2",{attrs:{id:"elasticsearch-的基础概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-的基础概念"}},[t._v("#")]),t._v(" Elasticsearch 的基础概念")]),t._v(" "),e("blockquote",[e("p",[t._v("使用 Elasticsearch 之前，先了解一下 Elasticsearch 的概念")])]),t._v(" "),e("h3",{attrs:{id:"索引-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引-index"}},[t._v("#")]),t._v(" 索引(Index)")]),t._v(" "),e("p",[t._v("Elasticsearch 把数据存放到一个或者多个索引(indices)中。如果用关系型数据库模型对比，索引(index) 的地位与数据库实例("),e("strong",[t._v("database")]),t._v(")相当。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("动词")]),t._v("：相当于 MySQL 中的 insert 动作")]),t._v(" "),e("li",[e("strong",[t._v("名词")]),t._v("：相当于 MySQL 中的 Database")])]),t._v(" "),e("h3",{attrs:{id:"类型-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型-type"}},[t._v("#")]),t._v(" 类型(Type)")]),t._v(" "),e("p",[t._v("指在一个索引中，可以索引不同类型的文档，如用户数据、博客数据。")]),t._v(" "),e("p",[t._v("从6.0.0 版本起已废弃，一个索引中只存放一类数据")]),t._v(" "),e("p",[t._v("7.0 弃用了接受类型的 API，引入了新的无类型 API")]),t._v(" "),e("blockquote",[e("p",[t._v("如果你的 Elasticsearch 是 7.0 以上，就可以不用了解 Type 了")])]),t._v(" "),e("h3",{attrs:{id:"文档-document"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档-document"}},[t._v("#")]),t._v(" 文档(Document)")]),t._v(" "),e("p",[t._v("保存在某个索引(Index)下，某种类型(Type)的一个数据(Document)，文档是 JSON 格式的，Document 就像是 MySQL 中的某个 Table 里面的内容")]),t._v(" "),e("h3",{attrs:{id:"集群相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群相关"}},[t._v("#")]),t._v(" 集群相关")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Cluster 集群")]),t._v("，一个集群由一个唯一的名字标识，默认为“elasticsearch”。集群名称非常重要，具有相同集群名的节点才会组成一个集群。集群名称可以在配置文件中指定。")]),t._v(" "),e("li",[e("strong",[t._v("Node 节点")]),t._v("：存储集群的数据，参与集群的索引和搜索功能。像集群有名字，节点也有自己的名称，默认在启动时会以一个随机的UUID的前七个字符作为节点的名字，你可以为其指定任意的名字。通过集群名在网络中发现同伴组成集群。一个节点也可是集群")]),t._v(" "),e("li",[e("strong",[t._v("Shard 分片")]),t._v("：在创建一个索引时可以指定分成多少个分片来存储。每个分片本身也是一个功能完善且独立的“索引”，可以被放置在集群的任意节点上。")]),t._v(" "),e("li",[e("strong",[t._v("Replication 备份")]),t._v(": 一个分片可以有多个备份（副本）")])]),t._v(" "),e("h2",{attrs:{id:"倒排索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引"}},[t._v("#")]),t._v(" 倒排索引")]),t._v(" "),e("blockquote",[e("p",[t._v("倒排索引也可以称为反向索引")])]),t._v(" "),e("p",[t._v("我们平时存储数据用的 mysql，采用的是正向索引，例如 mysql 中有这样的数据")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("id")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("name")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("我是中国人")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("泱泱中华文化")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2021 东京奥运会举办")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中国古诗文化")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中国古代历史")])])])]),t._v(" "),e("p",[t._v("如果想要查询关于 "),e("strong",[t._v("中国")]),t._v(" 相关的信息，然后会开始遍历数据库，找到 1、4、5 记录")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" table_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" name "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%中国%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("如果是倒排索引处理的话，首先会将每个名称进行分词，例如：我是中国人，会被分为 "),e("code",[t._v("我、是、中国、人")])]),t._v(" "),e("p",[t._v("然后关联信息的编号")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("term")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("ids")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("中国")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1、4、5")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("文化")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2、4")])])])]),t._v(" "),e("p",[t._v("在倒排索引中搜索并发，然后进行检索，就很容易定位到关于 中国 相关的信息")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.pdai.tech/md/db/nosql-es/elasticsearch-x-introduce-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.pdai.tech/md/db/nosql-es/elasticsearch-x-introduce-1.html"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=_.exports}}]);