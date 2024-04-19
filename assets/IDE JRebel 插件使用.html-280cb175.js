import{_ as t,r,o,c as l,d as e,e as a,b as c,a as i}from"./app-d6e30719.js";const d={},s=i('<h1 id="jrebel-热更新" tabindex="-1"><a class="header-anchor" href="#jrebel-热更新" aria-hidden="true">#</a> JRebel 热更新</h1><p>最近在写 <strong>springboot</strong> 项目时，修改代码后都需要更新启动服务，当项目很大时，启动就很慢了，严重限制开发效率，所以就用上了热部署插件 <strong>JReble</strong></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>JRebel是一款JVM插件，它使得Java代码修改后不用重启系统，立即生效。记录一下插件配置步骤</p></div><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><p>在 <strong>IDE</strong> 的插件市场中查找插件并安装</p><figure><img src="https://media.zenghr.cn/blog/img/20210630/vscB1Q.png" alt="vscB1Q" tabindex="0" loading="lazy"><figcaption>vscB1Q</figcaption></figure><p><strong>在插件安装后 Idea 设置界面会出现 JRebel 的设置选项, 但是该插件是付费的，所以我们需要进行一些配置才能使用</strong></p><h2 id="插件注册" tabindex="-1"><a class="header-anchor" href="#插件注册" aria-hidden="true">#</a> 插件注册</h2><p>在 <strong>JRebel</strong> 设置中填写注册信息:</p>',9),g={href:"https://www.iamwawa.cn/guid.html",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,[a("根据反向代理服务器地址拼接激活地址，服务器地址："),e("code",null,"https://jrebel.qekang.com/{你生成的GUID}")],-1),p=i('<p>在注册窗口第一个选项填写 上面拼接的 URL , 第二个选项填写你的邮箱地址 点击注册即可完成激活插件</p><h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置" aria-hidden="true">#</a> 插件配置</h2><h3 id="_1-开启离线模式" tabindex="-1"><a class="header-anchor" href="#_1-开启离线模式" aria-hidden="true">#</a> 1. 开启离线模式</h3><p><strong>设置JRebel插件进入离线工作模式，双击 Work offline 按钮，一定要设置！！！</strong></p><figure><img src="https://media.zenghr.cn/blog/img/20210630/VubDWo.png" alt="VubDWo" tabindex="0" loading="lazy"><figcaption>VubDWo</figcaption></figure><p><strong>设置离线模式成功，如果离线模式到期。可以打开破解软件，再点击renew offline seat 即可刷新离线时间</strong></p><figure><img src="https://media.zenghr.cn/blog/img/20210630/FrLmbz.png" alt="FrLmbz" tabindex="0" loading="lazy"><figcaption>FrLmbz</figcaption></figure><h3 id="_2-打开自动编译" tabindex="-1"><a class="header-anchor" href="#_2-打开自动编译" aria-hidden="true">#</a> 2. 打开自动编译</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于JRebel是实时监控class文件的变化来实现热部署的，所以在idea环境下需要打开自动编译功能才能实现随时修改，随时生效</p></div><ul><li>打开 IDEA 设置界面：<code>Build, Execution, Deployment</code> ==&gt; <code> Compiler</code> 然后勾选☑️ <code>Build project automatically</code></li></ul><figure><img src="https://media.zenghr.cn/blog/img/20210630/N5fXQZ.png" alt="N5fXQZ" tabindex="0" loading="lazy"><figcaption>N5fXQZ</figcaption></figure><ul><li>Intellij IEDA 使用 <code>ctrl + shift + alt + / </code>快捷键选择 <code>Registry... </code>，勾选 <code>compiler.automake.allow.when.app.running</code></li></ul><figure><img src="https://media.zenghr.cn/blog/img/20210630/IseCCT.png" alt="IseCCT" tabindex="0" loading="lazy"><figcaption>IseCCT</figcaption></figure><h3 id="_3-使用-jrebel" tabindex="-1"><a class="header-anchor" href="#_3-使用-jrebel" aria-hidden="true">#</a> 3. 使用 JRebel</h3><p>将我们的项目使用JRebel进行管理项目，勾选中我们的 maven 项目，当勾选上之后，在我们 Maven 项目的 resources 文件夹下生成了管理文件<code>rebel.xml</code>，并且右上角多了两个按钮，使用 JRebel 启动，这样我们每次修改代码只需要稍微等待一会，就会自动更新代码了</p><figure><img src="https://media.zenghr.cn/blog/img/20210630/hPVkQC.png" alt="hPVkQC" tabindex="0" loading="lazy"><figcaption>hPVkQC</figcaption></figure>',16);function f(b,u){const n=r("ExternalLinkIcon");return o(),l("div",null,[s,e("ul",null,[e("li",null,[a("先生成 GUID 信息，"),e("a",g,[a("GUID 在线生成工具"),c(n)])]),h]),p])}const _=t(d,[["render",f],["__file","IDE JRebel 插件使用.html.vue"]]);export{_ as default};
