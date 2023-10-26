import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as n,c as d,d as t,e as i,b as e,a as o}from"./app-1229c3d4.js";const s={},g=t("h1",{id:"spring-cloud-alibaba",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#spring-cloud-alibaba","aria-hidden":"true"},"#"),i(" Spring Cloud Alibaba")],-1),b={class:"hint-container tip"},u=t("p",{class:"hint-container-title"},"提示",-1),p=t("p",null,"记录一下 Spring Cloud Alibaba 的使用，参考文档如下：",-1),h={href:"https://spring-cloud-alibaba-group.github.io/github-pages/hoxton/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"},c=o('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案。此项目包含开发分布式应用服务的必需组件，方便开发者通过 Spring Cloud 编程模型轻松使用这些组件来开发分布式应用服务。</p><p>依托 Spring Cloud Alibaba，您只需要添加一些注解和少量配置，就可以将 Spring Cloud 应用接入阿里分布式应用解决方案，通过阿里中间件来迅速搭建分布式应用系统。</p><h2 id="服务" tabindex="-1"><a class="header-anchor" href="#服务" aria-hidden="true">#</a> 服务</h2><p>目前 Spring Cloud Alibaba 提供了如下功能:</p><ol><li><strong>服务限流降级</strong>：支持 WebServlet、WebFlux, OpenFeign、RestTemplate、Dubbo 限流降级功能的接入，可以在运行时通过控制台实时修改限流降级规则，还支持查看限流降级 Metrics 监控。</li><li><strong>服务注册与发现</strong>：适配 Spring Cloud 服务注册与发现标准，默认集成了 Ribbon 的支持。</li><li><strong>分布式配置管理</strong>：支持分布式系统中的外部化配置，配置更改时自动刷新。</li><li><strong>Rpc服务</strong>：扩展 Spring Cloud 客户端 RestTemplate 和 OpenFeign，支持调用 Dubbo RPC 服务</li><li><strong>消息驱动能力</strong>：基于 Spring Cloud Stream 为微服务应用构建消息驱动能力。</li><li><strong>分布式事务</strong>：使用 @GlobalTransactional 注解， 高效并且对业务零侵入地解决分布式事务问题。</li><li><strong>阿里云对象存储</strong>：阿里云提供的海量、安全、低成本、高可靠的云存储服务。支持在任何应用、任何时间、任何地点存储和访问任意类型的数据。</li><li><strong>分布式任务调度</strong>：提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。同时提供分布式的任务执行模型，如网格任务。网格任务支持海量子任务均匀分配到所有 Worker（schedulerx-client）上执行。</li><li><strong>阿里云短信服务</strong>：覆盖全球的短信服务，友好、高效、智能的互联化通讯能力，帮助企业迅速搭建客户触达通道。</li></ol><h2 id="重要的组件" tabindex="-1"><a class="header-anchor" href="#重要的组件" aria-hidden="true">#</a> 重要的组件</h2><ul><li>服务发现、配置管理 Nacos</li><li>负载均衡Ribbon</li><li>声明式HTTP客户端-Feign</li><li>服务容错Sentinel</li><li>消息驱动RocketMQ</li><li>API网关GateWay</li><li>用户认证与授权</li><li>调用链监控Sleuth</li></ul><h2 id="技术" tabindex="-1"><a class="header-anchor" href="#技术" aria-hidden="true">#</a> 技术</h2><ul><li><strong>Spring Cloud Alibaba - Nacos： 注册中心 - 服务发现/注册</strong></li><li><strong>Spring Cloud Alibaba - Nacos： 配置中心 - 动态配置管理</strong></li><li><strong>Spring Cloud Alibaba - Sentinel：</strong> 阿里巴巴开源产品,把流量作为切入点,从流量控制,熔断降级,系统负载保护等多个维度保护服务的稳定性</li><li><strong>Spring Cloud Alibaba - Seata：</strong> 原 Fescar，阿里巴巴开源产品，一个易于使用的高性能微服务分布式事务解决方案</li><li><strong>Spring Cloud - Ribbon：</strong> 负载均配</li><li><strong>Spring Cloud - Gateway：</strong> API 网关（webflux 编程模式）</li><li><strong>Spring Cloud - Feign/OpenFeign：</strong> 一个轻量级RESTful的HTTP服务客户端</li></ul><h2 id="spring-cloud-alibaba和spring-cloud-的区别和联系" tabindex="-1"><a class="header-anchor" href="#spring-cloud-alibaba和spring-cloud-的区别和联系" aria-hidden="true">#</a> Spring Cloud Alibaba和Spring Cloud 的区别和联系</h2><p>SpringCloudAlibaba实际上对我们的SpringCloud2.x和1.x实现拓展组件功能</p><table><thead><tr><th></th><th>SpringCloud</th><th>SpringCloudAlibaba</th></tr></thead><tbody><tr><td>注册中心</td><td>Eureka</td><td>nacos</td></tr><tr><td>消息中间件</td><td>无(第三方替代方案：rabbitmq)</td><td>RecketMQ</td></tr><tr><td>分布式事务解决方案</td><td>无(第三方替代方案：2pc)</td><td>Seata</td></tr><tr><td>分布式调度服务</td><td>无(第三方替代方案：xxl-job)</td><td>Alibaba Cloud SchedulerX</td></tr><tr><td>短信平台</td><td>无</td><td>Alibaba Cloud SMS</td></tr><tr><td>分布式配置中心</td><td>SpringCloudConfig</td><td>nacos</td></tr><tr><td>熔断降级</td><td>Hystrix</td><td>Sentinel</td></tr><tr><td>网关</td><td>zuul</td><td>gateway</td></tr></tbody></table><h3 id="springcloud-的几大痛点" tabindex="-1"><a class="header-anchor" href="#springcloud-的几大痛点" aria-hidden="true">#</a> SpringCloud 的几大痛点</h3><p>SpringCloud 部分组件停止维护和更新，给开发带来不便;<br> SpringCloud 部分环境搭建复杂，没有完善的可视化界面，我们需要大量的二次开发和定制 SpringCloud 配置复杂，难以上手，部分配置差别难以区分和合理应用</p><h3 id="springcloud-alibaba-的优势" tabindex="-1"><a class="header-anchor" href="#springcloud-alibaba-的优势" aria-hidden="true">#</a> SpringCloud Alibaba 的优势:</h3><p>阿里使用过的组件经历了考验，性能强悍，设计合理，现在开源出来大家用 成套的产品搭配完善的可视化界面给开发运维带来极大的便利 搭建简单，学习曲线低。</p>',17);function S(C,_){const a=l("ExternalLinkIcon");return n(),d("div",null,[g,t("div",b,[u,p,t("p",null,[t("a",h,[i("Spring Cloud Alibaba 参考文档"),e(a)])])]),c])}const A=r(s,[["render",S],["__file","01.SpringCloud-Alibaba介绍.html.vue"]]);export{A as default};
