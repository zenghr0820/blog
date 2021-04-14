const sidebar = require("./sidebar-auto.js");

module.exports = {
  repo: "zenghr0820/blog",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: "更新于",
  sidebar,
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
      text: "Linux",
      items: [
        {
          text: "Docker",
          link: "/passages/2020-02-24-docker-install.html"
        },
        {
          text: "Nginx",
          link: "/passages/2020-02-25-nginx-install.html"
        },
      ]
    },
    {
      text: "开发环境",
      items: [
        {
          text: "开发工具",
          link: "/passages/tool-list-overview.html"
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
