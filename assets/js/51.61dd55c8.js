(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{378:function(t,v,_){"use strict";_.r(v);var e=_(2),r=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"设计模式-overview"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计模式-overview"}},[t._v("#")]),t._v(" 设计模式 - Overview")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("设计模式（Design Pattern）是前辈们对代码开发经验的总结，是解决特定问题的一系列套路。它不是语法规定，而是一套用来提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案")])]),t._v(" "),v("h2",{attrs:{id:"为什么要使用设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用设计模式"}},[t._v("#")]),t._v(" 为什么要使用设计模式？")]),t._v(" "),v("p",[t._v("使用设计模式的最终目的是 "),v("strong",[t._v('"高内聚低耦合"')])]),t._v(" "),v("ul",[v("li",[t._v("代码重用性：相同功能的代码，不多多次编写")]),t._v(" "),v("li",[t._v("代码可读性：编程规范性，便于其他程序员阅读")]),t._v(" "),v("li",[t._v("代码可扩展性：当增加新的功能后，对原来的功能没有影响")])]),t._v(" "),v("h2",{attrs:{id:"设计模式的七大原则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设计模式的七大原则"}},[t._v("#")]),t._v(" 设计模式的七大原则")]),t._v(" "),v("p",[t._v("面向对象的设计模式有七大基本原则：")]),t._v(" "),v("ul",[v("li",[t._v("开闭原则（Open Closed Principle，OCP）")]),t._v(" "),v("li",[t._v("单一职责原则（Single Responsibility Principle, SRP）")]),t._v(" "),v("li",[t._v("里氏代换原则（Liskov Substitution Principle，LSP）")]),t._v(" "),v("li",[t._v("依赖倒转原则（Dependency Inversion Principle，DIP）")]),t._v(" "),v("li",[t._v("接口隔离原则（Interface Segregation Principle，ISP）")]),t._v(" "),v("li",[t._v("合成/聚合复用原则（Composite/Aggregate Reuse Principle，CARP）")]),t._v(" "),v("li",[t._v("最少知识原则（Least Knowledge Principle，LKP）或者迪米特法则（Law of  Demeter，LOD）")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("标记")]),t._v(" "),v("th",[t._v("设计模式原则名称")]),t._v(" "),v("th",[t._v("简单定义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("OCP")]),t._v(" "),v("td",[t._v("开闭原则")]),t._v(" "),v("td",[t._v("对扩展开放，对修改关闭")])]),t._v(" "),v("tr",[v("td",[t._v("SRP")]),t._v(" "),v("td",[t._v("单一职责原则")]),t._v(" "),v("td",[t._v("一个类只负责一个功能领域中的相应职责")])]),t._v(" "),v("tr",[v("td",[t._v("LSP")]),t._v(" "),v("td",[t._v("里氏代换原则")]),t._v(" "),v("td",[t._v("所有引用基类的地方必须能透明地使用其子类的对象")])]),t._v(" "),v("tr",[v("td",[t._v("DIP")]),t._v(" "),v("td",[t._v("依赖倒转原则")]),t._v(" "),v("td",[t._v("依赖于抽象，不能依赖于具体实现")])]),t._v(" "),v("tr",[v("td",[t._v("ISP")]),t._v(" "),v("td",[t._v("接口隔离原则")]),t._v(" "),v("td",[t._v("类之间的依赖关系应该建立在最小的接口上")])]),t._v(" "),v("tr",[v("td",[t._v("CARP")]),t._v(" "),v("td",[t._v("合成/聚合复用原则")]),t._v(" "),v("td",[t._v("尽量使用合成/聚合，而不是通过继承达到复用的目的")])]),t._v(" "),v("tr",[v("td",[t._v("LOD")]),t._v(" "),v("td",[t._v("迪米特法则")]),t._v(" "),v("td",[t._v("一个软件实体应当尽可能少的与其他实体发生相互作用")])])])]),t._v(" "),v("p",[v("strong",[t._v("参考资料：如需详细了解七大原则，可以查看👉  "),v("a",{attrs:{href:"https://juejin.cn/post/6844904065806106632",target:"_blank",rel:"noopener noreferrer"}},[t._v("万字总结之设计模式七大原则"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"_23-种设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_23-种设计模式"}},[t._v("#")]),t._v(" 23 种设计模式")]),t._v(" "),v("p",[t._v("根据模式是用来完成什么工作来划分，这种方式可分为创建型模式、结构型模式和行为型模式 3 种：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("创建型模式：")]),t._v(" 这类模式提供创建对象的机制， 能够提升已有代码的灵活性和可复用性")]),t._v(" "),v("li",[v("strong",[t._v("结构型模式：")]),t._v(" 这类模式介绍如何将对象和类组装成较大的结构， 并同时保持结构的灵活和高效")]),t._v(" "),v("li",[v("strong",[t._v("行为型模式：")]),t._v(" 用于描述类或对象之间怎样相互协作共同完成单个对象都无法单独完成的任务，以及怎样分配职责")])]),t._v(" "),v("h2",{attrs:{id:"一、创建型模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、创建型模式"}},[t._v("#")]),t._v(" 一、创建型模式")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("TODO")])]),t._v(" "),v("h2",{attrs:{id:"二、结构型模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、结构型模式"}},[t._v("#")]),t._v(" 二、结构型模式")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/passages/dev-decorator-pattern.html"}},[t._v("结构型 - 装饰器模式(Decorator)")]),t._v(" "),v("ul",[v("li",[t._v("这种设计模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供了额外的功能")])])],1)]),t._v(" "),v("h2",{attrs:{id:"三、行为型模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、行为型模式"}},[t._v("#")]),t._v(" 三、行为型模式")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("TODO")])]),t._v(" "),v("h2",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://www.pdai.tech/md/dev-spec/pattern/1_overview.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("java全栈知识体系 - 设计模式"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"http://c.biancheng.net/view/1317.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("C语言中文网 - 设计模式"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);