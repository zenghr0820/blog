import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { themeOptions } from './config/theme'
import { headConfig } from './config/head'
import { AuthorName, Base, Description } from './utils/constant'
import { configPlugins } from './config/plugins'
import themeZhr from './theme/index'

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: Base,
  lang: "zh-CN",
  title: AuthorName,
  description: Description,
  // 自定义 head
  head: headConfig,
  // 主题配置
  theme: themeZhr(themeOptions, {
    custom: true,
  }),
  // Plugin Config
  plugins: configPlugins,
  // Enable it with pwa
  shouldPrefetch: false,

  alias: {
    // 你可以在这里将别名定向到自己的组件
    "@MyLink": path.resolve(__dirname, "./components/Mylink.vue"),
    "@MyCoverLink": path.resolve(__dirname, "./components/MyCoverLink.vue"),
    "@Utils": path.resolve(__dirname, "./utils/index"),
  },

});
