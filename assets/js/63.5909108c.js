(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{387:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-stash-提交当前修改到其他分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-stash-提交当前修改到其他分支"}},[s._v("#")]),s._v(" git stash 提交当前修改到其他分支")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("需要在 branch B 分支上修改代码， 发现不小心在 branch A 分支下进行了修改， 又不想在branch B上重新修改一遍代码，那么就可以用到 "),t("strong",[s._v("git stash(暂存)")]),s._v(" 命令了")])]),s._v(" "),t("h2",{attrs:{id:"命令相关的操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令相关的操作"}},[s._v("#")]),s._v(" 命令相关的操作")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂时存储现在的操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看暂存列表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 恢复暂存操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除暂存操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash drop\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有暂存的操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v("\n")])])]),t("p",[t("em",[s._v("指定stash ID （如：stash@{1} ）即可操作指定的数据")])]),s._v(" "),t("h2",{attrs:{id:"具体操作步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体操作步骤"}},[s._v("#")]),s._v(" 具体操作步骤")]),s._v(" "),t("p",[t("strong",[s._v("git stash")]),s._v(" 原理就是 把当前工作区恢复到上次提交的内容，同时备份本地所做的修改")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂存当前操作")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换分支")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout branch B\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取最近一次stash的修改内容，之后删除栈对应的stash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);