const { mdConf, themeConf, localesConf, headConf } = require("./config/");

module.exports = {
  locales: localesConf,
  markdown: mdConf,
  themeConfig: themeConf,
  head: headConf,
  // permalink: "/:year-:month-:day-:slug",
  plugins: [
    require("./plugins/my-router"),
    require("./plugins/my-loader"),
    require("vuepress-plugin-viewer"),
    "@vuepress/back-to-top",
    ["@vuepress/google-analytics", { ga: "UA-124601890-1" }],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现页面有新内容",
          buttonText: "刷新"
        }
      }
    ],
    [
      "vuepress-plugin-comment",
      {
        choosen: "gitalk",
        options: {
          clientID: "180b1626afc1b134ecfa",
          clientSecret: process.env.clientSecret || "",
          repo: "blog",
          owner: "zenghr0820",
          admin: ["zenghr0820"],
          id: "<%- frontmatter.commentid || frontmatter.permalink %>", // Ensure uniqueness and length less than 50
          distractionFreeMode: false, // Facebook-like distraction free mode
          labels: ["Gitalk", "Comment"],
          title: "「评论」<%- frontmatter.title %>",
          body:
            "<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>"
        }
      }
    ]
  ]
};
