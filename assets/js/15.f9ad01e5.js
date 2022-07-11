(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{342:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"activiti7-填坑笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activiti7-填坑笔记"}},[t._v("#")]),t._v(" Activiti7 填坑笔记")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("该文章记录一下使用 Activiti7 时所遇到的一些异常或者坑")])]),t._v(" "),s("h2",{attrs:{id:"error-usernamenotfoundexception"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-usernamenotfoundexception"}},[t._v("#")]),t._v(" Error: UsernameNotFoundException")]),t._v(" "),s("blockquote",[s("p",[t._v("环境：SpringBoot 集成 Activiti7")]),t._v(" "),s("p",[t._v("Activiti7 版本：7.0.0")])]),t._v(" "),s("h3",{attrs:{id:"异常原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常原因"}},[t._v("#")]),t._v(" 异常原因")]),t._v(" "),s("p",[t._v("Activiti7 默认和Spring Security集成了，当我们的项目中不需要Spring Security时，需要排除Spring Security配置，但是 Activiti7 在代码中"),s("strong",[t._v("强耦合")]),t._v("了SpringScurity，所以我们在使用 activiti 的 Api 查询候选人任务时会遇到异常")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("taskService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("taskCandidateUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("candidateUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Caused by: org.springframework.security.core.userdetails.UsernameNotFoundException: XX")])]),t._v(" "),s("p",[t._v("该 Api 会调用 SpringScurity 中的 "),s("strong",[t._v("UserDetailsService")]),t._v(" 类型的bean中的 "),s("strong",[s("code",[t._v("loadUserByUsername")])]),t._v(" 方法.然后是找不到的,所以报错了")]),t._v(" "),s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),s("p",[t._v("写一个类实现 "),s("strong",[t._v("UserDetailsService")]),t._v(" 然后重写 loadUserByUsername 方法")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelfUserDetailsServiceImpl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDetailsService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserDetails")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadUserByUsername")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UsernameNotFoundException")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emptyList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);