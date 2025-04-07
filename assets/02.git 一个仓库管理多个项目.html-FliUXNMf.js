import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as h}from"./app-W8Rm2S8d.js";const e={};function n(p,i){return h(),a("div",null,i[0]||(i[0]=[t(`<h1 id="git-多分支平行发展" tabindex="-1"><a class="header-anchor" href="#git-多分支平行发展"><span>git 多分支平行发展</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在开发中，一个项目往往会有多个项目配合，例如采用前后端分离，往往前端一个项目，后端一个项目。项目多了，Git 就需要建立很多仓库，太过于麻烦，所以使用 git 分支功能管理多个项目，这里记录一下操作流程</p></div><h2 id="建立项目仓库" tabindex="-1"><a class="header-anchor" href="#建立项目仓库"><span>建立项目仓库</span></a></h2><p><img src="https://media.zenghr.cn/blog/img/20210630/8rraa3.png" alt="8rraa3"></p><p>新建仓库之后默认分配了 master 主分支，先将仓库 <strong>clone</strong> 到本地：</p><div class="language-bash" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> https://github.com/xxx/xxx</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;">仓库名</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#ABB2BF;">称&gt;</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;">.git</span></span></code></pre></div><h2 id="查看分支" tabindex="-1"><a class="header-anchor" href="#查看分支"><span>查看分支</span></a></h2><p>下载仓库到本地之后，进入项目目录，查看分支信息</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看分支信息</span></span>
<span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> branch</span></span>
<span class="line"><span style="--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看分支状态</span></span>
<span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> status</span></span></code></pre></div><p>此时可以在该分支目录上初始化你的项目，在执行 git 命令提交代码</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 提交代码到本地仓库</span></span>
<span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#D19A66;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> &#39;inid project&#39;</span></span>
<span class="line"><span style="--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 上传代码到 github 仓库</span></span>
<span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> master</span></span></code></pre></div><p>此时 master 分支已经有一个项目了，下面我们创建新的分支管理另一个项目</p><h2 id="创建新分支" tabindex="-1"><a class="header-anchor" href="#创建新分支"><span>创建新分支</span></a></h2><p>我们需要在 git 里面创建一个空分支，该分支不继承任何提交，没有父节点，完全是一个干净的分支，这时候就需要使用 <strong>orphan</strong></p><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#D19A66;--shiki-dark:#D19A66;"> --orphan</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;">分支名</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#ABB2BF;">称&gt;</span></span></code></pre></div><p>该命令会创建一个新的分支，并且该分支有前一个分支下的所有文件，我们不想提交任何内容，所以我们需要把当前内容全部删除</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#D19A66;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> .</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>注意，如果没有在该分支下提交东西，则该分支其实并没有创建，下面随便改一点东西提交上去</p></div><p><strong>提交分支</strong></p><div class="language-sh" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#abb2bf;--shiki-dark:#abb2bf;--shiki-light-bg:#282c34;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#D19A66;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> &#39;new branch&#39;</span></span>
<span class="line"><span style="--shiki-light:#7F848E;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 此时需要指定提交分支</span></span>
<span class="line"><span style="--shiki-light:#61AFEF;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#98C379;--shiki-dark:#98C379;">分支名</span><span style="--shiki-light:#ABB2BF;--shiki-dark:#ABB2BF;">称&gt;</span></span></code></pre></div><p>此时我们就完成了在同一个仓库管理不同项目的需求了</p>`,21)]))}const k=s(e,[["render",n]]),g=JSON.parse('{"path":"/tool/git/02.git%20%E4%B8%80%E4%B8%AA%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86%E5%A4%9A%E4%B8%AA%E9%A1%B9%E7%9B%AE.html","title":"git 一个仓库管理多个项目","lang":"zh-CN","frontmatter":{"title":"git 一个仓库管理多个项目","date":"2021-06-30T19:37:00.000Z","re":"2021-06-30-git-branch-manage","description":"git 多分支平行发展 提示 在开发中，一个项目往往会有多个项目配合，例如采用前后端分离，往往前端一个项目，后端一个项目。项目多了，Git 就需要建立很多仓库，太过于麻烦，所以使用 git 分支功能管理多个项目，这里记录一下操作流程 建立项目仓库 8rraa3 新建仓库之后默认分配了 master 主分支，先将仓库 clone 到本地： 查看分支 下载...","permalink":"/passages/2021-06-30-git-branch-manage.html","head":[["meta",{"property":"og:url","content":"https://blog.zenghr.cn/passages/2021-06-30-git-branch-manage.html"}],["meta",{"property":"og:site_name","content":"Zenghr"}],["meta",{"property":"og:title","content":"git 一个仓库管理多个项目"}],["meta",{"property":"og:description","content":"git 多分支平行发展 提示 在开发中，一个项目往往会有多个项目配合，例如采用前后端分离，往往前端一个项目，后端一个项目。项目多了，Git 就需要建立很多仓库，太过于麻烦，所以使用 git 分支功能管理多个项目，这里记录一下操作流程 建立项目仓库 8rraa3 新建仓库之后默认分配了 master 主分支，先将仓库 clone 到本地： 查看分支 下载..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://media.zenghr.cn/blog/img/20210630/8rraa3.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-07T14:30:15.000Z"}],["meta",{"property":"article:published_time","content":"2021-06-30T19:37:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-07T14:30:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git 一个仓库管理多个项目\\",\\"image\\":[\\"https://media.zenghr.cn/blog/img/20210630/8rraa3.png\\"],\\"datePublished\\":\\"2021-06-30T19:37:00.000Z\\",\\"dateModified\\":\\"2025-04-07T14:30:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Zenghr\\"}]}"]]},"git":{"createdTime":1744036215000,"updatedTime":1744036215000,"contributors":[{"name":"zenghr","username":"zenghr","email":"zenghr","commits":1,"url":"https://github.com/zenghr"}]},"readingTime":{"minutes":1.68,"words":504},"filePathRelative":"tool/git/02.git 一个仓库管理多个项目.md","localizedDate":"2021年6月30日","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>在开发中，一个项目往往会有多个项目配合，例如采用前后端分离，往往前端一个项目，后端一个项目。项目多了，Git 就需要建立很多仓库，太过于麻烦，所以使用 git 分支功能管理多个项目，这里记录一下操作流程</p>\\n</div>\\n<h2>建立项目仓库</h2>\\n<p><img src=\\"https://media.zenghr.cn/blog/img/20210630/8rraa3.png\\" alt=\\"8rraa3\\"></p>\\n<p>新建仓库之后默认分配了 master 主分支，先将仓库 <strong>clone</strong> 到本地：</p>","autoDesc":true}');export{k as comp,g as data};
