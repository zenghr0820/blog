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
    // 其它
    {
      text: "其它",
      items: [
        {
          text: "友情链接",
          link: "/friends/"
        },
      ]
    }
  ]
};
