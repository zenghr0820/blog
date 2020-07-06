module.exports = [
  [
    "script",
    {
      type: "text/javascript",
      src: "/scripts/baidu-analytics.js",
      async: ""
    }
  ],
  ["link", { rel: "icon", href: "/favicon.ico" }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  // IOS、iPhone移动端，表单input聚焦时页面放大的解决办法
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" }]
];
