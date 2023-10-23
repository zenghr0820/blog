import{_ as a,Y as e,Z as s,a0 as n}from"./framework-1b75f830.js";const i={},t=n(`<h1 id="git-忽略已提交文件的修改" tabindex="-1"><a class="header-anchor" href="#git-忽略已提交文件的修改" aria-hidden="true">#</a> git 忽略已提交文件的修改</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在公司项目开发中，使用 git 操作时，经常会遇到项目中有个必要的配置文件，但是呢每个开发人员的本地都要修改，就导致这个文件要被反复修改，要想不冲突，就要每个人提交前，都刻意不提交该文件，很是麻烦</p></div><p>这时候我们就可以使用 <strong>update-index</strong> 命令了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> update-index --skip-worktree aaa.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令的作用是，让git在搜索文件列表时，忽略某个文件，这样该文件即使有修改，git也不会关心</p><p>如果我们需要查看我们忽略过哪些文件，我们可以使用如下命令查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-files <span class="token parameter variable">-v</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^S&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不想继续忽略该文件可以使用如下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> update-index --no-skip-worktree aaa.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),d=[t];function c(l,r){return e(),s("div",null,d)}const p=a(i,[["render",c],["__file","03.git-忽略已提交文件的修改.html.vue"]]);export{p as default};
