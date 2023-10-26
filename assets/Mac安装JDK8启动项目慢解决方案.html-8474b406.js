import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,a as n}from"./app-1229c3d4.js";const l={},o=n(`<h1 id="mac安装jdk8启动项目慢解决方案" tabindex="-1"><a class="header-anchor" href="#mac安装jdk8启动项目慢解决方案" aria-hidden="true">#</a> Mac安装JDK8启动项目慢解决方案</h1><p>在使用 Mac 系统启动 SpringBoot 项目时，切换到 JDK8 发现启动超级慢，切换回 JDK12 又不会这样，后来才发现是MacOS 使用 Java8 的时候都会出现获取主机名会出现这个时间超长的问题</p><blockquote><p>系统环境</p><ul><li>macOS Catalina 10.15.4</li><li>JDK版本 - <em><strong>1.8.0.292</strong></em></li></ul></blockquote><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><ul><li><p>打开终端输入 <em><strong><code>hostname</code></strong></em> ，查看你的mac的主机名称，把它给复制下来</p></li><li><p>修改 <em><strong><code>/etc/hosts文件</code></strong></em> ，大家应该都知道这个文件是做什么的</p></li><li><p>没修改前应该是这个样子</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">##</span>
<span class="token number">127.0</span>.0.1		localhost
<span class="token number">255.255</span>.255.255	broadcasthost
::1             localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>修改后</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">##</span>
<span class="token number">127.0</span>.0.1		localhost macBook-Pro.local
<span class="token number">255.255</span>.255.255	broadcasthost
::1             localhost macBook-Pro.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><em><strong><code>macBook-Pro.local</code></strong></em> 即是前边复制下的主机名</p><p>好了，再运行项目就可以了, 只有在 JDK8 才会出现该问题，在 JDK11 正常。</p></li></ul>`,5),c=[o];function i(t,d){return e(),s("div",null,c)}const p=a(l,[["render",i],["__file","Mac安装JDK8启动项目慢解决方案.html.vue"]]);export{p as default};
