import { defineUserConfig } from "vuepress";
import theme from './config/theme'
import { AuthorName, Base, Description } from './utils/constant'
import { configPlugins } from './config/plugins'
import {path} from '@vuepress/utils'

export default defineUserConfig({
  base: Base,
  lang: "zh-CN",
  title: AuthorName,
  description: Description,
  theme: theme,
  // Plugin Config
  plugins: configPlugins,
  // Enable it with pwa
  // shouldPrefetch: false,
});
