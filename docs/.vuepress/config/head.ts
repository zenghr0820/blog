
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
  ["meta", { name: "google-site-verification", content: "YaZkTUj_yooTpG-N5B8hieXvHDRpHs7xfqTLvGl6nHs" }]
];