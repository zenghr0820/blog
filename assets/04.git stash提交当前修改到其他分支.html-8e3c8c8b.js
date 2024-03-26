import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,a as e}from"./app-5b7fea30.js";const i={},t=e(`<h1 id="git-stash-提交当前修改到其他分支" tabindex="-1"><a class="header-anchor" href="#git-stash-提交当前修改到其他分支" aria-hidden="true">#</a> git stash 提交当前修改到其他分支</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>需要在 branch B 分支上修改代码， 发现不小心在 branch A 分支下进行了修改， 又不想在branch B上重新修改一遍代码，那么就可以用到 <strong>git stash(暂存)</strong> 命令了</p></div><h2 id="命令相关的操作" tabindex="-1"><a class="header-anchor" href="#命令相关的操作" aria-hidden="true">#</a> 命令相关的操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 暂时存储现在的操作</span>
<span class="token function">git</span> stash
<span class="token comment"># 查看暂存列表</span>
<span class="token function">git</span> stash list
<span class="token comment"># 恢复暂存操作</span>
<span class="token function">git</span> stash pop
<span class="token comment"># 删除暂存操作</span>
<span class="token function">git</span> stash drop
<span class="token comment"># 删除所有暂存的操作</span>
<span class="token function">git</span> stash <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>指定stash ID （如：stash@{1} ）即可操作指定的数据</em></p><h2 id="具体操作步骤" tabindex="-1"><a class="header-anchor" href="#具体操作步骤" aria-hidden="true">#</a> 具体操作步骤</h2><p><strong>git stash</strong> 原理就是 把当前工作区恢复到上次提交的内容，同时备份本地所做的修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 暂存当前操作</span>
<span class="token function">git</span> stash
<span class="token comment"># 切换分支</span>
<span class="token function">git</span> checkout branch B
<span class="token comment"># 获取最近一次stash的修改内容，之后删除栈对应的stash</span>
<span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[t];function l(d,o){return n(),a("div",null,c)}const h=s(i,[["render",l],["__file","04.git stash提交当前修改到其他分支.html.vue"]]);export{h as default};
