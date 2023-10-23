import { defineUserConfig } from "vuepress";
import theme from './config/theme'
import { headConfig } from './config/head'
import { AuthorName, Base, Description } from './utils/constant'
import { configPlugins } from './config/plugins'
import {path} from '@vuepress/utils'

export default defineUserConfig({
  base: Base,
  lang: "zh-CN",
  title: AuthorName,
  description: Description,
  // 自定义 head
  head: headConfig,
  // 主题配置
  theme: theme,
  // Plugin Config
  plugins: configPlugins,
  // Enable it with pwa
  shouldPrefetch: false,


});
