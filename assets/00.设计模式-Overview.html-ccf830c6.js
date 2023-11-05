import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o,c as s,d as t,e,b as r,w as h,a as n}from"./app-84ddd078.js";const c={},p=n('<h1 id="设计模式-overview" tabindex="-1"><a class="header-anchor" href="#设计模式-overview" aria-hidden="true">#</a> 设计模式 - Overview</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>设计模式（Design Pattern）是前辈们对代码开发经验的总结，是解决特定问题的一系列套路。它不是语法规定，而是一套用来提高代码可复用性、可维护性、可读性、稳健性以及安全性的解决方案</p></div><h2 id="为什么要使用设计模式" tabindex="-1"><a class="header-anchor" href="#为什么要使用设计模式" aria-hidden="true">#</a> 为什么要使用设计模式？</h2><p>使用设计模式的最终目的是 <strong>&quot;高内聚低耦合&quot;</strong></p><ul><li>代码重用性：相同功能的代码，不多多次编写</li><li>代码可读性：编程规范性，便于其他程序员阅读</li><li>代码可扩展性：当增加新的功能后，对原来的功能没有影响</li></ul><h2 id="设计模式的七大原则" tabindex="-1"><a class="header-anchor" href="#设计模式的七大原则" aria-hidden="true">#</a> 设计模式的七大原则</h2><p>面向对象的设计模式有七大基本原则：</p><ul><li>开闭原则（Open Closed Principle，OCP）</li><li>单一职责原则（Single Responsibility Principle, SRP）</li><li>里氏代换原则（Liskov Substitution Principle，LSP）</li><li>依赖倒转原则（Dependency Inversion Principle，DIP）</li><li>接口隔离原则（Interface Segregation Principle，ISP）</li><li>合成/聚合复用原则（Composite/Aggregate Reuse Principle，CARP）</li><li>最少知识原则（Least Knowledge Principle，LKP）或者迪米特法则（Law of Demeter，LOD）</li></ul><table><thead><tr><th>标记</th><th>设计模式原则名称</th><th>简单定义</th></tr></thead><tbody><tr><td>OCP</td><td>开闭原则</td><td>对扩展开放，对修改关闭</td></tr><tr><td>SRP</td><td>单一职责原则</td><td>一个类只负责一个功能领域中的相应职责</td></tr><tr><td>LSP</td><td>里氏代换原则</td><td>所有引用基类的地方必须能透明地使用其子类的对象</td></tr><tr><td>DIP</td><td>依赖倒转原则</td><td>依赖于抽象，不能依赖于具体实现</td></tr><tr><td>ISP</td><td>接口隔离原则</td><td>类之间的依赖关系应该建立在最小的接口上</td></tr><tr><td>CARP</td><td>合成/聚合复用原则</td><td>尽量使用合成/聚合，而不是通过继承达到复用的目的</td></tr><tr><td>LOD</td><td>迪米特法则</td><td>一个软件实体应当尽可能少的与其他实体发生相互作用</td></tr></tbody></table>',9),_={href:"https://juejin.cn/post/6844904065806106632",target:"_blank",rel:"noopener noreferrer"},u=n('<h2 id="_23-种设计模式" tabindex="-1"><a class="header-anchor" href="#_23-种设计模式" aria-hidden="true">#</a> 23 种设计模式</h2><p>根据模式是用来完成什么工作来划分，这种方式可分为创建型模式、结构型模式和行为型模式 3 种：</p><ul><li><strong>创建型模式：</strong> 这类模式提供创建对象的机制， 能够提升已有代码的灵活性和可复用性</li><li><strong>结构型模式：</strong> 这类模式介绍如何将对象和类组装成较大的结构， 并同时保持结构的灵活和高效</li><li><strong>行为型模式：</strong> 用于描述类或对象之间怎样相互协作共同完成单个对象都无法单独完成的任务，以及怎样分配职责</li></ul><h2 id="一、创建型模式" tabindex="-1"><a class="header-anchor" href="#一、创建型模式" aria-hidden="true">#</a> 一、创建型模式</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>TODO</p></div><h2 id="二、结构型模式" tabindex="-1"><a class="header-anchor" href="#二、结构型模式" aria-hidden="true">#</a> 二、结构型模式</h2>',6),v=t("ul",null,[t("li",null,"这种设计模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供了额外的功能")],-1),f=n('<h2 id="三、行为型模式" tabindex="-1"><a class="header-anchor" href="#三、行为型模式" aria-hidden="true">#</a> 三、行为型模式</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>TODO</p></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',3),g={href:"https://www.pdai.tech/md/dev-spec/pattern/1_overview.html",target:"_blank",rel:"noopener noreferrer"},P={href:"http://c.biancheng.net/view/1317.html",target:"_blank",rel:"noopener noreferrer"};function b(m,x){const i=a("ExternalLinkIcon"),d=a("RouterLink");return o(),s("div",null,[p,t("p",null,[t("strong",null,[e("参考资料：如需详细了解七大原则，可以查看👉 "),t("a",_,[e("万字总结之设计模式七大原则"),r(i)])])]),u,t("ul",null,[t("li",null,[r(d,{to:"/passages/dev-decorator-pattern.html"},{default:h(()=>[e("结构型 - 装饰器模式(Decorator)")]),_:1}),v])]),f,t("p",null,[t("a",g,[e("java全栈知识体系 - 设计模式"),r(i)])]),t("p",null,[t("a",P,[e("C语言中文网 - 设计模式"),r(i)])])])}const O=l(c,[["render",b],["__file","00.设计模式-Overview.html.vue"]]);export{O as default};
