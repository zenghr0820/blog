import { PluginConfig } from "vuepress";
import { PluginsOptions } from "vuepress-theme-hope";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import vuepressPluginCustomRoute from "../plugins/vuepress-plugin-custom-router";

// VuePress插件配置
export const configPlugins: PluginConfig = [
  // 谷歌统计插件
  // googleAnalyticsPlugin({
  //     id: 'G-GBZBT89WGJ'
  // }),

  // 搜索插件
  searchProPlugin({
    indexContent: true
  }),

  // 路径自定义插件
  vuepressPluginCustomRoute,

  // 目录自动生成
  autoCatalogPlugin({
    orderGetter: (page) => {
      const { frontmatter } = page;
      if (frontmatter && frontmatter.order) {
        if (frontmatter.order) {
          return frontmatter.order;
        } else if (frontmatter.dir || frontmatter.dir.order) {
          return frontmatter.dir.order;
        }
      }
      return -1;
    }
  })
];

// 主题内置插件配置
export const themePlugins: PluginsOptions = {
  // 复制代码插件配置
  copyCode: {
    showInMobile: true // 手机端显示代码复制
  },
  // 自动生成目录配置
  // autoCatalog: false,
  // 版权信息是否显示
  copyright: false,
  // If you don’t need comment feature, you can remove following option
  // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
  // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
  // 评论插件配置
  comment: {
    /**
     * Using Giscus
     */
    provider: "Giscus",
    repo: "zenghr0820/blog",
    category: "Announcements",
    repoId: process.env.giscusRepoId || "",
    categoryId: process.env.giscusCategoryId || ""
  },
  // Disable features you don’t want here

  // Markdown 增强插件配置
  mdEnhance: {
    // align: true,
    // attrs: true,
    // chart: true,
    codetabs: true,
    // container: true,
    // demo: true,
    // echarts: true,
    figure: true,
    // flowchart: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true
    // katex: true,
    // mark: true,
    // mermaid: true,
    // playground: {
    //   presets: ['ts', 'vue']
    // },
    // presentation: {
    //   plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
    // },
    // stylize: [
    //   {
    //     matcher: 'Recommended',
    //     replacer: ({ tag }) => {
    //       if (tag === 'em')
    //         return {
    //           tag: 'Badge',
    //           attrs: { type: 'tip' },
    //           content: 'Recommended'
    //         }
    //     }
    //   }
    // ],
    // sub: true,
    // sup: true,
    // tabs: true,
    // vPre: true,
    // vuePlayground: true
  }

};