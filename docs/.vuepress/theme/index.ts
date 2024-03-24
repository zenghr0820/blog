// // 主题继承
// // https://v2.vuepress.vuejs.org/reference/default-theme/extending.html#extending
// // https://vuepress-theme-hope.github.io/v2/zh/cookbook/advanced/extend.html#%E7%BB%A7%E6%89%BF%E4%B8%BB%E9%A2%98
import { ThemeObject, App } from '@vuepress/core'
import { getDirname, path } from '@vuepress/utils'
import { isPlainObject } from "@vuepress/shared";
// import { prepareSidebarData } from "./sidebar/prepare"
import {
    hopeTheme,
    ThemeOptions,
    // getStatus,
    // getThemeData,
    // prepareHighLighterScss,
    // prepareSocialMediaIcons,
    HopeThemeBehaviorOptions,
    // getSidebarSorter,
    // checkSocialMediaIcons
} from 'vuepress-theme-hope'


const __dirname = getDirname(import.meta.url);

export default (options: ThemeOptions, behavior: HopeThemeBehaviorOptions | boolean = true) => ({
    name: 'vuepress-theme-zhr',

    extends: hopeTheme(options, behavior),

    alias: {

        // 你可以在这里将别名定向到自己的组件
        // "@theme-hope/modules/sidebar/components/Sidebar": path.resolve(
        //   __dirname,
        //   "./sidebar/components/Sidebar.ts",
        // ),
        // "@theme-hope/modules/sidebar/composables/index": path.resolve(
        //   __dirname,
        //   "./sidebar/composables/index",
        // ),
        // 替换加密可组合 API
        "@theme-hope/modules/encrypt/composables/index": path.resolve(
          __dirname,
          "./encrypt/composables/index",
        ),

    },

    // 覆盖原来的onPrepared，使用自定义的prepareSidebarData
    // 以便自定义sidebarText
    // onPrepared: (app: App): Promise<void> => {
    //     const themeStatus = getStatus(app, options);
    //     const themeData = getThemeData(app, options, themeStatus);
    //     const icons = themeStatus.enableBlog ? checkSocialMediaIcons(themeData) : {};
    //
    //     return Promise.all([
    //         prepareSidebarData(app, themeData, options.sidebarSorter),
    //         prepareHighLighterScss(app, options.plugins),
    //         prepareSocialMediaIcons(app, icons),
    //     ]).then(() => void 0)
    // },
})