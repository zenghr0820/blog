import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as l,d as n,e as s,b as a,a as i}from"./app-e1f53b71.js";const o={},d=i(`<h1 id="ubuntu18-04-安装docker" tabindex="-1"><a class="header-anchor" href="#ubuntu18-04-安装docker" aria-hidden="true">#</a> Ubuntu18.04 安装docker</h1><h2 id="_1-安装方式" tabindex="-1"><a class="header-anchor" href="#_1-安装方式" aria-hidden="true">#</a> 1 安装方式</h2><ul><li>ubuntu 在线安装</li><li>下载 docker 二进制包离线安装</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>本文档操作以上两种方式安装，在国内，如果用官方提供的安装方法会很慢。于是国内也有一些提供镜像的网站。</p></div><h2 id="_2-在线安装" tabindex="-1"><a class="header-anchor" href="#_2-在线安装" aria-hidden="true">#</a> 2 在线安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新包列表</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token comment"># 必须安装的包</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> software-properties-common

<span class="token comment"># 将官方Docker存储库的GPG密钥添加到您的系统</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://mirror.azure.cn/docker-ce/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -

<span class="token comment"># 添加 docker 仓库到 Apt 源</span>
<span class="token function">sudo</span> add-apt-repository <span class="token string">&quot;deb [arch=amd64] https://mirror.azure.cn/docker-ce/linux/ubuntu bionic stable&quot;</span>

<span class="token comment"># 再次更新包列表</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token comment"># 安装docker</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> docker-ce

<span class="token comment"># 验证 docker 安装是否成功</span>
<span class="token function">docker</span> <span class="token parameter variable">--version</span>

<span class="token comment"># 安装 docker compose （可选）</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.23.1/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose

<span class="token comment"># 赋权</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose

<span class="token comment"># 验证</span>
<span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-离线安装" tabindex="-1"><a class="header-anchor" href="#_3-离线安装" aria-hidden="true">#</a> 3. 离线安装</h2>`,7),u={href:"https://download.docker.com/linux/static/stable/x86_64/",target:"_blank",rel:"noopener noreferrer"},p=i(`<h3 id="_3-1-解压缩二进制包" tabindex="-1"><a class="header-anchor" href="#_3-1-解压缩二进制包" aria-hidden="true">#</a> 3.1 解压缩二进制包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> zxvf docker-19.03.9.tgz
<span class="token function">mv</span> docker/* /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-systemd管理docker" tabindex="-1"><a class="header-anchor" href="#_3-2-systemd管理docker" aria-hidden="true">#</a> 3.2 systemd管理docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> /usr/lib/systemd/system/docker.service <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target

[Service]
Type=notify
ExecStart=/usr/bin/dockerd
ExecReload=/bin/kill -s HUP <span class="token variable">$MAINPID</span>
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
TimeoutStartSec=0
Delegate=yes
KillMode=process
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s

[Install]
WantedBy=multi-user.target
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-创建配置文件" tabindex="-1"><a class="header-anchor" href="#_3-3-创建配置文件" aria-hidden="true">#</a> 3.3 创建配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> /etc/docker
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{
  &quot;registry-mirrors&quot;: [&quot;https://b9pmyelo.mirror.aliyuncs.com&quot;]
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>registry-mirrors 阿里云镜像加速器</li></ul><h3 id="_3-4-启动并设置开机启动" tabindex="-1"><a class="header-anchor" href="#_3-4-启动并设置开机启动" aria-hidden="true">#</a> 3.4 启动并设置开机启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
systemctl start <span class="token function">docker</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-更换-docker-源" tabindex="-1"><a class="header-anchor" href="#_4-更换-docker-源" aria-hidden="true">#</a> 4. 更换 docker 源</h2><p>国内的几个源:</p>`,11),m={href:"https://dockerhub.azk8s.cn/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://hub-mirror.c.163.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docker.mirrors.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://registry.docker-cn.com/",target:"_blank",rel:"noopener noreferrer"},h=n("li",null,"阿里云也有镜像，只不过需要登录阿里云控制台后获取自己专属的镜像源。",-1),f=i(`<h3 id="设置方法" tabindex="-1"><a class="header-anchor" href="#设置方法" aria-hidden="true">#</a> 设置方法</h3><ol><li>在配置文件中添加<code>registry-mirrors</code>的配置。启动时自动配置，Linux下的默认配置文件是<code>/etc/docker/daemon.json</code>.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://&lt;my-docker-mirror-host&gt;&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>手动启动dockerd的时候，添加<code>--registry-mirror</code>参数: <code>dockerd --registry-mirror=https://&lt;my-docker-mirror-host&gt;</code></li></ol>`,4);function _(g,x){const e=t("ExternalLinkIcon");return c(),l("div",null,[d,n("p",null,[s("选择你需要的 docker 版本，下载地址："),n("a",u,[s("https://download.docker.com/linux/static/stable/x86_64"),a(e)])]),p,n("ul",null,[n("li",null,[n("a",m,[s("https://dockerhub.azk8s.cn"),a(e)]),s(" - Azure镜像")]),n("li",null,[n("a",v,[s("http://hub-mirror.c.163.com"),a(e)]),s(" - 网易镜像")]),n("li",null,[n("a",b,[s("https://docker.mirrors.ustc.edu.cn"),a(e)]),s(" - 科大镜像站")]),n("li",null,[n("a",k,[s("https://registry.docker-cn.com"),a(e)]),s(" - Docker中国官方镜像")]),h]),f])}const E=r(o,[["render",_],["__file","01.安装Docker.html.vue"]]);export{E as default};
