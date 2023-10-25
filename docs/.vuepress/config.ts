import { defineUserConfig } from "vuepress";
import { themeOptions } from './config/theme'
import { headConfig } from './config/head'
import { AuthorName, Base, Description } from './utils/constant'
import { configPlugins } from './config/plugins'
import {path} from '@vuepress/utils'
import themeZhr from './theme/index'

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

  // alias: {
  //   // 你可以在这里将别名定向到自己的组件
  //   // 比如这里我们将主题的主页组件改为用户 .vuepress/components 下的 HomePage.vue
  //   "@theme-hope/modules/sidebar/components/Sidebar": path.resolve(
  //     __dirname,
  //     "./components/Sidebar.vue",
  //   ),
  // },


});
