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
    ["@vuepress/back-to-top", true],
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
            "<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>",
          proxy: 'https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token'
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
    // see: https://vuepress.github.io/zh/plugins/copyright
    ['copyright',{
      noCopy: false, // 允许复制内容
      minLength: 200, // 如果长度超过 200 个字符
      authorName: "https://blog.zenghr.cn",
    }],
    // see https://github.com/QiShaoXuan/vuepress-plugin-cat
    // ["vuepress-plugin-cat", {}],
    // ['go-top'],
    [
      "vuepress-plugin-live2d",
      {
        "modelName": ["hijiki", "tororo"],
        "mobileShow": false
      }
    ],
    // see: https://vuepress.github.io/zh/plugins/container
    // 你可以多次使用这个插件
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {},
      },
    ],
    // 文章加密 see：https://www.imaegoo.com/2020/vuepress-encrypt/
    [
      '@zenghr/encrypt',
      {
        contentTitle: '加密的内容',
        unencryptedText: '内容如下所示，它应该在发布时加密.',
        encryptedText: '这部分内容已被加密，你需要输入正确的密钥才能查看.',
        decryptedText: '加密内容已成功解密，如下所示: ',
        decryptButtonText: '解密',
        decryptFailText: '解密失败！',
        unencryptedIcon: undefined,
        encryptedIcon: undefined,
        decryptedIcon: undefined
      }
    ],

  ]
};
