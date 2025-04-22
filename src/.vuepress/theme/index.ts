// // 主题继承
// // https://v2.vuepress.vuejs.org/reference/default-theme/extending.html#extending
// // https://vuepress-theme-hope.github.io/v2/zh/cookbook/advanced/extend.html#%E7%BB%A7%E6%89%BF%E4%B8%BB%E9%A2%98
import {getDirname, path} from 'vuepress/utils'
import { Logger } from "@vuepress/helper";
import {
  hopeTheme,
  ThemeOptions,
  HopeThemeBehaviorOptions,
} from 'vuepress-theme-hope'


const __dirname = getDirname(import.meta.url);

export default (options: ThemeOptions, behavior: HopeThemeBehaviorOptions | boolean = true) => ({
  name: 'vuepress-theme-zhr',

  extends: hopeTheme(options, behavior),

  alias: {
    // 你可以在这里将别名定向到自己的组件

    // 重写侧边栏可组合 API
    // "@theme-hope/modules/sidebar/composables/index": path.resolve(
    //   __dirname,
    //   "./sidebar/composables/index",
    // ),

    // 重写加密组件
    "@theme-hope/modules/encrypt/components/LocalEncrypt": path.resolve(
      __dirname,
      "./encrypt/components/LocalEncrypt",
    ),

    // 重写主题布局
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),

  },

})