const e=JSON.parse('{"key":"v-24ce0ae1","path":"/Java/basic/04.Java%E5%9F%BA%E7%A1%80%20-%20%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6.html","title":"Java基础 - 反射机制","lang":"zh-CN","frontmatter":{"title":"Java基础 - 反射机制","date":"2021-05-08T15:00:00.000Z","re":"2021-05-08-java-basic-reflect","category":["Java"],"description":"本文主要记录学习 Java 反射（reflect）的一点心得，在了解反射之前，应该先了解 Java 中的 Class 类 带着BAT大厂的面试问题去理解 Java 反射的作用？; 哪里会用到反射？; 获取 Class 对象有几种方式?; 反射的实现方式有哪些？; 利用反射动态创建对象实例?; 什么是反射机制 Java 反射机制在程序运行时，对于任意一个...","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/Java/basic/2021-05-08-java-basic-reflect.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"Java基础 - 反射机制"}],["meta",{"property":"og:description","content":"本文主要记录学习 Java 反射（reflect）的一点心得，在了解反射之前，应该先了解 Java 中的 Class 类 带着BAT大厂的面试问题去理解 Java 反射的作用？; 哪里会用到反射？; 获取 Class 对象有几种方式?; 反射的实现方式有哪些？; 利用反射动态创建对象实例?; 什么是反射机制 Java 反射机制在程序运行时，对于任意一个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Zenghr"}],["meta",{"property":"article:published_time","content":"2021-05-08T15:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java基础 - 反射机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-08T15:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"headers":[{"level":2,"title":"带着BAT大厂的面试问题去理解","slug":"带着bat大厂的面试问题去理解","link":"#带着bat大厂的面试问题去理解","children":[]},{"level":2,"title":"什么是反射机制","slug":"什么是反射机制","link":"#什么是反射机制","children":[]},{"level":2,"title":"Class（字节码对象）","slug":"class-字节码对象","link":"#class-字节码对象","children":[]},{"level":2,"title":"获取字节码对象的三种方式","slug":"获取字节码对象的三种方式","link":"#获取字节码对象的三种方式","children":[]},{"level":2,"title":"反射前言","slug":"反射前言","link":"#反射前言","children":[]},{"level":2,"title":"反射 API","slug":"反射-api","link":"#反射-api","children":[{"level":3,"title":"newInstance()","slug":"newinstance","link":"#newinstance","children":[]}]},{"level":2,"title":"AccessibleObject","slug":"accessibleobject","link":"#accessibleobject","children":[]},{"level":2,"title":"获取构造器(Constructor)","slug":"获取构造器-constructor","link":"#获取构造器-constructor","children":[]},{"level":2,"title":"获取方法(Method)","slug":"获取方法-method","link":"#获取方法-method","children":[]},{"level":2,"title":"获取字段(Field)","slug":"获取字段-field","link":"#获取字段-field","children":[]},{"level":2,"title":"内省 - Introspector","slug":"内省-introspector","link":"#内省-introspector","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"内省的作用","slug":"内省的作用","link":"#内省的作用","children":[]},{"level":3,"title":"内省相关类以及API","slug":"内省相关类以及api","link":"#内省相关类以及api","children":[]}]},{"level":2,"title":"内省实战","slug":"内省实战","link":"#内省实战","children":[]},{"level":2,"title":"JavaBean to Map 实现","slug":"javabean-to-map-实现","link":"#javabean-to-map-实现","children":[]}],"git":{},"readingTime":{"minutes":9.3,"words":2791},"filePathRelative":"Java/basic/04.Java基础 - 反射机制.md","localizedDate":"2021年5月8日","autoDesc":true}');export{e as data};
