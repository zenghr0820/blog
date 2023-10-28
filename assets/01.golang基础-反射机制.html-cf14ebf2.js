const e=JSON.parse('{"key":"v-2664e678","path":"/golang/basic/01.golang%E5%9F%BA%E7%A1%80-%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.html","title":"golang基础 - 反射机制","lang":"zh-CN","frontmatter":{"title":"golang基础 - 反射机制","date":"2021-06-26T14:14:14.000Z","re":"2021-06-26-golang-reflect","category":["golang"],"description":"golang 反射机制 和 Java 语言一样，Go 也实现运行时反射，这为我们提供一种可以在运行时操作任意类型对象的能力。 在 go 语言中，实现反射能力的是 reflect包，能够让程序操作不同类型的对象。其中，在反射包中有两个非常重要的 类型和 函数，两个函数分别是： reflect.TypeOf - 能获取对象的类型的信息 reflect.ValueOf - 能获取对象的数据","permalink":"/golang/basic/2021-06-26-golang-reflect.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/golang/basic/2021-06-26-golang-reflect.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"golang基础 - 反射机制"}],["meta",{"property":"og:description","content":"golang 反射机制 和 Java 语言一样，Go 也实现运行时反射，这为我们提供一种可以在运行时操作任意类型对象的能力。 在 go 语言中，实现反射能力的是 reflect包，能够让程序操作不同类型的对象。其中，在反射包中有两个非常重要的 类型和 函数，两个函数分别是： reflect.TypeOf - 能获取对象的类型的信息 reflect.ValueOf - 能获取对象的数据"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2021-06-26T14:14:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"golang基础 - 反射机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-06-26T14:14:14.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"golang 反射注意","slug":"golang-反射注意","link":"#golang-反射注意","children":[]},{"level":2,"title":"Type 和 TypeOf","slug":"type-和-typeof","link":"#type-和-typeof","children":[{"level":3,"title":"1. 理解 Type 和 种类 Kind","slug":"_1-理解-type-和-种类-kind","link":"#_1-理解-type-和-种类-kind","children":[]},{"level":3,"title":"2. 获取类型名以及 kind","slug":"_2-获取类型名以及-kind","link":"#_2-获取类型名以及-kind","children":[]},{"level":3,"title":"3. Type 常用方法","slug":"_3-type-常用方法","link":"#_3-type-常用方法","children":[]},{"level":3,"title":"4. 获取成员反射信息","slug":"_4-获取成员反射信息","link":"#_4-获取成员反射信息","children":[]},{"level":3,"title":"5. 通过类型信息创建实例","slug":"_5-通过类型信息创建实例","link":"#_5-通过类型信息创建实例","children":[]}]},{"level":2,"title":"Value 和 ValueOf","slug":"value-和-valueof","link":"#value-和-valueof","children":[{"level":3,"title":"1. 生成原始类型的对象","slug":"_1-生成原始类型的对象","link":"#_1-生成原始类型的对象","children":[]},{"level":3,"title":"2. 操作结构体成员的值","slug":"_2-操作结构体成员的值","link":"#_2-操作结构体成员的值","children":[]}]},{"level":2,"title":"通过反射调用函数","slug":"通过反射调用函数","link":"#通过反射调用函数","children":[]},{"level":2,"title":"通过反射调用对象中的方法","slug":"通过反射调用对象中的方法","link":"#通过反射调用对象中的方法","children":[]},{"level":2,"title":"反射实现：map 转 struct","slug":"反射实现-map-转-struct","link":"#反射实现-map-转-struct","children":[]},{"level":2,"title":"反射实现：struct 转 map","slug":"反射实现-struct-转-map","link":"#反射实现-struct-转-map","children":[]}],"git":{},"readingTime":{"minutes":8.01,"words":2402},"filePathRelative":"golang/basic/01.golang基础-反射机制.md","localizedDate":"2021年6月26日","excerpt":"<h1> golang 反射机制</h1>\\n<p>和 Java 语言一样，Go 也实现运行时反射，这为我们提供一种可以在运行时操作任意类型对象的能力。</p>\\n<p>在 go 语言中，实现反射能力的是 <code>reflect</code>包，能够让程序操作不同类型的对象。其中，在反射包中有两个非常重要的 <strong>类型</strong>和 <strong>函数</strong>，两个函数分别是：</p>\\n<ul>\\n<li><strong><code>reflect.TypeOf</code></strong> - 能获取对象的类型的信息</li>\\n<li><strong><code>reflect.ValueOf</code></strong> - 能获取对象的数据</li>\\n</ul>","autoDesc":true}');export{e as data};
