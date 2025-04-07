
export const headConfig = [
  // 百度统计脚本
  [
    "script",
    {
      type: "text/javascript",
      src: "/scripts/baidu-analytics.js",
      async: ""
    }
  ],
  // 自定义favicon
  ['link', { rel: 'icon', href: "/favicon.ico" }],
  // 谷歌搜索
  ["meta", { name: "google-site-verification", content: "YaZkTUj_yooTpG-N5B8hieXvHDRpHs7xfqTLvGl6nHs" }],
  // 字体
  // ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
  // [
  //   "link",
  //   { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
  // ],
  [
    "link",
    {
      href: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap",
      rel: "stylesheet",
    },
  ],
  [
    "link",
    {
      rel: "stylesheet",
      href:"https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-screen-web/1.510.0/style.css",
    }
  ],
];