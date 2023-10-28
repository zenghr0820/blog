const e=JSON.parse('{"key":"v-26910afd","path":"/dev-guide/design/22.%E8%A1%8C%E4%B8%BA%E5%9E%8B-%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F(Chain).html","title":"行为型 - 责任链模式(Chain)","lang":"zh-CN","frontmatter":{"title":"行为型 - 责任链模式(Chain)","date":"2022-07-07T15:50:12.000Z","re":"chain-of-responsibility","description":"责任链(Chain) 提示 责任链（Chain of Responsibility）模式的定义：为了避免请求发送者与多个请求处理者耦合在一起，于是将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止 在责任链模式中，客户只需要将请求发送到责任链上即可，无须关心请求的处理细节和请求的传递过程，请求会自动进行传递。所以责任链将请求的发送者和请求的处理者解耦了","permalink":"/passages/chain-of-responsibility.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/passages/chain-of-responsibility.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"行为型 - 责任链模式(Chain)"}],["meta",{"property":"og:description","content":"责任链(Chain) 提示 责任链（Chain of Responsibility）模式的定义：为了避免请求发送者与多个请求处理者耦合在一起，于是将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止 在责任链模式中，客户只需要将请求发送到责任链上即可，无须关心请求的处理细节和请求的传递过程，请求会自动进行传递。所以责任链将请求的发送者和请求的处理者解耦了"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2022-07-07T15:50:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"行为型 - 责任链模式(Chain)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-07T15:50:12.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"责任链 - 优缺点","slug":"责任链-优缺点","link":"#责任链-优缺点","children":[]},{"level":2,"title":"责任链模式的结构与实现","slug":"责任链模式的结构与实现","link":"#责任链模式的结构与实现","children":[{"level":3,"title":"责任链模式的结构","slug":"责任链模式的结构","link":"#责任链模式的结构","children":[]},{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]}]}],"git":{},"readingTime":{"minutes":3.25,"words":975},"filePathRelative":"dev-guide/design/22.行为型-责任链模式(Chain).md","localizedDate":"2022年7月7日","excerpt":"<h1> 责任链(Chain)</h1>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>责任链（Chain of Responsibility）模式的定义：<strong>为了避免请求发送者与多个请求处理者耦合在一起，于是将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止</strong></p>\\n</div>\\n<p>在责任链模式中，客户只需要将请求发送到责任链上即可，无须关心请求的处理细节和请求的传递过程，请求会自动进行传递。所以责任链将请求的发送者和请求的处理者解耦了</p>","autoDesc":true}');export{e as data};
