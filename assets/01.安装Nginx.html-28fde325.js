import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as t,c as p,d as n,e as s,b as c,a}from"./app-5544069a.js";const o={},r=a(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>目前支持两种安装方式，一种是apt-get的方式，另一种是编译nginx源码包的方式</p></div><h2 id="一、apt-get安装nginx" tabindex="-1"><a class="header-anchor" href="#一、apt-get安装nginx" aria-hidden="true">#</a> 一、apt-get安装nginx</h2><ol><li>更新源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>查看nginx是否安装成功 <em><strong>nginx -v</strong></em></p></li><li><p>启动nginx</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> nginx start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>nginx 文件安装完成之后的文件位置：</p><ul><li>/usr/sbin/nginx：主程序</li><li>/etc/nginx：存放配置文件</li><li>/usr/share/nginx：存放静态文件</li><li>/var/log/nginx：存放日志</li></ul><h2 id="二、编译nginx源码" tabindex="-1"><a class="header-anchor" href="#二、编译nginx源码" aria-hidden="true">#</a> 二、编译nginx源码</h2>`,9),d={href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://nginx.org/download/nginx-1.17.8.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>安装编译需要的依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> build-essential <span class="token punctuation">\\</span>
    libtool <span class="token punctuation">\\</span>
    libpcre3 <span class="token punctuation">\\</span>
    libpcre3-dev <span class="token punctuation">\\</span>
    zlib1g-dev <span class="token punctuation">\\</span>
    libssl-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>运行如下命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> xvf nginx-1.17.8.tar.gz <span class="token comment"># 解压</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> nginx-1.17.8.tar.gz <span class="token comment"># 删除压缩包</span>
<span class="token builtin class-name">cd</span> nginx-1.17.8

./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/nginx  <span class="token punctuation">\\</span>
        --conf-path<span class="token operator">=</span>/usr/local/nginx/config/nginx.conf  <span class="token punctuation">\\</span>
        <span class="token parameter variable">--user</span><span class="token operator">=</span>nginx <span class="token parameter variable">--group</span><span class="token operator">=</span>nginx  <span class="token punctuation">\\</span>
        --error-log-path<span class="token operator">=</span>/usr/local/nginx/nginxlog/error.log  <span class="token punctuation">\\</span>
        --http-log-path<span class="token operator">=</span>/usr/local/nginx/nginxlog/access.log  <span class="token punctuation">\\</span>
        --pid-path<span class="token operator">=</span>/usr/local/nginx/pids/nginx.pid  <span class="token punctuation">\\</span>
        --lock-path<span class="token operator">=</span>/usr/local/nginx/locks/nginx.lock  <span class="token punctuation">\\</span>
        --with-http_ssl_module  <span class="token punctuation">\\</span>
        --with-http_stub_status_module  <span class="token punctuation">\\</span>
        --with-http_gzip_static_module  <span class="token punctuation">\\</span>
        --http-client-body-temp-path<span class="token operator">=</span>/usr/local/nginx/tmp/client  <span class="token punctuation">\\</span>
        --http-proxy-temp-path<span class="token operator">=</span>/usr/local/nginx/tmp/proxy  <span class="token punctuation">\\</span>
        --http-fastcgi-temp-path<span class="token operator">=</span>/usr/local/nginx/tmp/fastcgi  <span class="token punctuation">\\</span>
        --http-uwsgi-temp-path<span class="token operator">=</span>/usr/local/nginx/tmp/uwsgi  <span class="token punctuation">\\</span>
        --http-scgi-temp-path<span class="token operator">=</span>/usr/local/nginx/tmp/scgi
     
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> nginx-1.17.8
<span class="token comment"># 完善目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-pv</span> /usr/local/nginx/tmp/<span class="token punctuation">{</span>client,proxy,fastcgi,uwsgi,scgi<span class="token punctuation">}</span>
<span class="token comment"># 添加nginx用户</span>
<span class="token function">useradd</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>启动nginx</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/nginx/sbin/nginx 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function v(g,m){const e=l("ExternalLinkIcon");return t(),p("div",null,[r,n("ol",null,[n("li",null,[s("下载源码包，或者去"),n("a",d,[s("Nginx官网"),c(e)]),s("下载源码包")])]),u])}const h=i(o,[["render",v],["__file","01.安装Nginx.html.vue"]]);export{h as default};
