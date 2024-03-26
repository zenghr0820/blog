import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,a as s}from"./app-5ab93b74.js";const i={},l=s(`<h2 id="启动、重启、停止命令" tabindex="-1"><a class="header-anchor" href="#启动、重启、停止命令" aria-hidden="true">#</a> 启动、重启、停止命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
/usr/local/nginx/sbin/nginx 
<span class="token comment"># 重启</span>
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token comment"># 停止</span>
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> stop
<span class="token comment"># 完整有序的停止nginx</span>
/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查配置文件是否正确" tabindex="-1"><a class="header-anchor" href="#检查配置文件是否正确" aria-hidden="true">#</a> 检查配置文件是否正确</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),r=[l];function c(d,t){return a(),e("div",null,r)}const u=n(i,[["render",c],["__file","02.Nginx常用命令.html.vue"]]);export{u as default};
