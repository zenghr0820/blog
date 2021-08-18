const sidebar = require("./sidebar-auto.js");

module.exports = {
  repo: "zenghr0820/blog",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: "更新于",
  sidebar,
  sidebarDepth: 0,
  nav: [
    {
      text: "最新",
      link: "/guide/"
    },
    {
      text: "Java",
      items: [
        {
          text: "Java 基础与面向对象",
          items: [
            {
              text: "Java 基础知识",
              link: "/passages/2021-04-09-java-lan-basic.html"
            },
            {
              text: "Java 面向对象",
              link: "/passages/2021-04-09-java-basic-oop.html"
            }
          ]
        },
        {
          text: "Java进阶 - 集合框架",
          items: [
            {
              text: "Java 集合框架",
              link: "/passages/2021-04-25-java-collection-frame.html"
            }
          ]
        },
        {
          text: "Java进阶 - IO框架",
          items: [
            {
              text: "Java I/O知识详解",
              link: "/passages/2021-05-05-java-io-basic.html"
            }
          ]
        }
      ]
    },
    {
      text: "Spring",
      items: [
        {
          text: "SpringBoot 系列",
          link: "/passages/2021-08-18-springboot-argument-resolver.html"
        },
        {
          text: "Spring Cloud 基础",
          link: "/passages/2021-07-27-spring-cloud-alibaba.html"
        }
      ]
    },
    {
      text: "Golang",
      link: "/passages/go-catalog.html"
    },
    {
      text: "Kubernetes",
      link: "/passages/2020-08-12-kubernetes-deploy-ready.html"
    },
    {
      text: "Linux系列",
      link: "/passages/2020-02-25-nginx-install.html"
    },
    {
      text: "开发环境",
      items: [
        {
          text: "开发工具",
          link: "/passages/tool-list-overview.html"
        },
        {
          text: "mysql 环境",
          link: "/passages/2021-06-29-mysql-manage-auth.html"
        },
        {
          text: "git 环境",
          link: "/passages/2021-06-28-git-common-cmd.html"
        },
        {
          text: "Redis 知识体系",
          link: "/passages/2021-08-02-redis-overview.html"
        },
        {
          text: "Mongo 知识体系",
          link: "/passages/2021-08-15-mongo-overview.html"
        },
        {
          text: "Elasticsearch 知识体系",
          link: "/passages/2021-08-06-elasticsearch.html"
        },
      ]
    },
    {
      text: "开发指南",
      items: [
        {
          text: "代码规范",
          link: "/passages/code-spec-alibaba.html"
        },
        {
          text: "设计模式详解",
          link: "/passages/dev-pattern-overview.html"
        },
      ]
    },
    // 其它
    {
      text: "其它",
      items: [
        {
          text: "生活闲谈",
          link: "/passages/2020-01-18-first-blog.html"
        },
        {
          text: "友情链接",
          link: "/friends/"
        },
      ]
    }
  ]
};
