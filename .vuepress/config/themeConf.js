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
      text: "Linux",
      items: [
        {
          text: "docker",
          link: "/passages/2020-02-24-docker-install.html"
        },
        {
          text: "nginx",
          link: "/passages/2020-02-25-nginx-install.html"
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
