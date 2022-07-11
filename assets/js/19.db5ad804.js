(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{346:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("转载自： "),s("a",{attrs:{href:"https://juejin.im/post/5ca4239ef265da30807fea48",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go slice扩容深度分析"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("参考资料："),s("a",{attrs:{href:"https://studygolang.com/articles/15786",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go内存管理"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[s("code",[t._v("slice")]),t._v(" 使用时可以不用指定数组长度，超出长度也可以继续添加元素")])]),t._v(" "),s("h2",{attrs:{id:"引起注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引起注意"}},[t._v("#")]),t._v(" 引起注意")]),t._v(" "),s("p",[t._v("之前使用"),s("code",[t._v("slice")]),t._v("时一直以为当cap小于1024时每次都是翻倍，大于1024时就是添加 0.25(1.25倍)")]),t._v(" "),s("p",[t._v("直到遇到下面的场景引起我的注意：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("byte")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a.cap = "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b.cap = "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"分析源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析源码"}},[t._v("#")]),t._v(" 分析源码")]),t._v(" "),s("p",[t._v("以我之前的翻倍的理解，cap应该都是8才对，但结果让我意外：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("a.cap = 16\nb.cap =  10\n")])])]),s("p",[t._v("这结果让我一头雾水，于是出于好奇去看了关于slice扩容的源代码"),s("a",{attrs:{href:"https://github.com/golang/go/blob/master/src/runtime/slice.go",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/golang/go/blob/master/src/runtime/slice.go"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("发现涉及扩容的方法是"),s("code",[t._v("growslice")]),t._v("，下面贴出一部分代码")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" old"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("cap")]),t._v("\ndoublecap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" newcap\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("cap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" doublecap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("cap")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" old"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doublecap\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check 0 < newcap to detect overflow")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and prevent an infinite loop.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("cap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set newcap to the requested cap when")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the newcap calculation overflowed.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("cap")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("看了源码才发现上面的代码append多个元素没走翻倍扩容流程，而是直接复制最新的长度作为cap长度：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("newcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\ndoublecap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\ncap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\ncap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" doublecap\nnewcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("p",[t._v("所以"),s("code",[t._v("b.cap = 10")]),t._v("也就说得通了，但是"),s("code",[t._v("a.cap = 16")]),t._v("这个就不对了，往下看源码：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specialize for common values of et.size.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For 1 we don't need any division/multiplication.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For sys.PtrSize, compiler will optimize division/multiplication into a shift by a constant.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For powers of 2, use a variable shift.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" et"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tlenmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("old"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tnewlenmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("cap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tcapmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("roundupsize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newcap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\toverflow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newcap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" maxAlloc\n\t\tnewcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("capmem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" et"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PtrSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\tlenmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("old"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PtrSize\n\t\tnewlenmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("cap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PtrSize\n\t\tcapmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("roundupsize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newcap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PtrSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\toverflow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uintptr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newcap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" maxAlloc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PtrSize\n\t\tnewcap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("capmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PtrSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isPowerOfTwo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("et"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 省略")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 省略")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("查资料得知这里的"),s("code",[t._v("et.size")]),t._v("是指元素在计算机的字节大小，我用的是window 64位，所以int也就是int 64，大小位8字节，发现进行内存分配的是"),s("code",[t._v("capmem")]),t._v(":")]),t._v(" "),s("p",[t._v("a因为是byte类型，所以字节大小为 1，满足 "),s("strong",[s("code",[t._v("et.size == 1")])]),t._v("   =>  "),s("strong",[s("code",[t._v("capmem = roundupsize(uintptr(newcap))")])]),t._v("  =>  "),s("strong",[s("code",[t._v("capmem = 10 ? 16")])])]),t._v(" "),s("p",[s("code",[t._v("roundupsize")]),t._v(" 为什么会将 10 变为 16 呢，查了资料发现是go内存管理的原因："),s("a",{attrs:{href:"https://studygolang.com/articles/15786",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go内存管理"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://github.com/golang/go/blob/master/src/runtime/sizeclasses.go")]),t._v("\n// class  bytes/obj  bytes/span  objects  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" waste  max waste\n//     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("87.50")]),t._v("%\n//     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("43.75")]),t._v("%\n//     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("46.88")]),t._v("%\n//     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("170")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("31.52")]),t._v("%\n//     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.44")]),t._v("%\n//     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19.07")]),t._v("%\n//     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("85")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.95")]),t._v("%\n//     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("112")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("73")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13.56")]),t._v("%\n//     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.72")]),t._v("%\n//    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("144")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("56")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.82")]),t._v("%\n\n//    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n//    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28672")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("57344")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.91")]),t._v("%\n//    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("66")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32768")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32768")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.50")]),t._v("%\n")])])]),s("p",[t._v("看"),s("code",[t._v("bytes/obj")]),t._v(" 没有大小为10 的类型，所以向上取整得到的是：16。"),s("strong",[s("code",[t._v("roundupsize")])])]),t._v(" "),s("p",[t._v("b因为是int 64类型，所以字节大小为 8，满足 "),s("strong",[s("code",[t._v("et.size == 8")])]),t._v("  =>  "),s("strong",[s("code",[t._v("capmem = roundupsize(uintptr(newcap) * sys.PtrSize)")])]),t._v("  =>  "),s("strong",[s("code",[t._v("capmem = 10 * 8 = 80")])]),t._v("  =>  "),s("strong",[s("code",[t._v("newcap = 80 / 8 = 10")])])]),t._v(" "),s("h2",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("p",[t._v("slice 扩容真相")]),t._v(" "),s("ul",[s("li",[t._v("append单个元素，或者append多个元素，小于"),s("code",[t._v("doublecap")]),t._v("双倍容量，这样就会走以下扩容流程，不足1024，双倍扩容，超过1024的，1.25倍扩容。")]),t._v(" "),s("li",[t._v("若是append多个元素，且double后的容量不能容纳，直接使用预估的容量。")])]),t._v(" "),s("p",[s("strong",[t._v("！！得到新容量后，都需要根据slice类型，算出新的容量所需的内存情况"),s("code",[t._v("capmem")]),t._v("，然后再进行"),s("code",[t._v("capmem")]),t._v("向上取整，得到新的所需内存，除上类型size，得到真正的最终容量,作为新的slice的容量。")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("最后感谢"),s("a",{attrs:{href:"https://juejin.im/post/5ca4239ef265da30807fea48",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go slice扩容深度分析"),s("OutboundLink")],1),t._v(" 的博客")])])]),t._v(" "),s("p",{staticStyle:{color:"gray"},attrs:{align:"right"}},[t._v("END\t二零二零年二月二十八日")])])}),[],!1,null,null,null);s.default=e.exports}}]);