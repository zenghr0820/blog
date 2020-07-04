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
    // ["@vuepress/back-to-top", true],
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
    ],
    // see: https://vssue.js.org/guide/vuepress.html#usage
    // ['@vssue/vuepress-plugin-vssue', {
    //   // set `platform` rather than `api`
    //   platform: 'github',
    //   // all other options of Vssue are allowed
    //   owner: 'zenghr0820',
    //   repo: 'blog',
    //   admin: ["zenghr0820"],
    //   clientId: '4002c8fb700ad54cfffc',
    //   clientSecret: process.env.vssueClientSecret || "",
    //   labels: ["Gitalk", "Comment"],
    //   title: "「评论」<%- frontmatter.title %>",
    //   issueContent: ({ url }) => `这个 Issue 由 Vssue 自动创建，用来存储该页面的评论：${url}`,
    //   autoCreateIssue: true,
    // }],
    [
      '@vuepress/plugin-last-updated',
      {
        transformer: (timestamp) => {
          const moment = require('moment');
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        },
      },
    ],
    // see: https://github.com/ekoeryanto/vuepress-plugin-sitemap
    ['sitemap', {
      hostname: 'https://blog.zenghr.cn'
    }],
    // see: https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ['vuepress-plugin-baidu-autopush', {

    }],
    // see: https://github.com/webmasterish/vuepress-plugin-autometa
    ['autometa', {
      author: {
        name   : 'zenghr',
      },
      canonical_base: 'https://blog.zenghr.cn',
    }],
    // see: https://github.com/znicholasbrown/vuepress-plugin-code-copy
    ["vuepress-plugin-code-copy", {
      staticIcon: true,
      color: '#ccc',
    }],
    // see https://github.com/QiShaoXuan/vuepress-plugin-cat
    // ["vuepress-plugin-cat", {}],
    ['go-top'],
    [
      "vuepress-plugin-live2d",
      {
        "modelName": ["hijiki", "tororo"],
        "mobileShow": false
      }
    ]

  ]
};
