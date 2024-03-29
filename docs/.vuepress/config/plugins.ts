import { PluginConfig } from "vuepress";
import { PluginsOptions } from "vuepress-theme-hope";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { containerPlugin } from "@vuepress/plugin-container";
import { live2dPlugin } from "vuepress-plugin-live2d-plus";
import { renderProjects } from "../containers/projects";
import vuepressPluginCustomRoute from "../plugins/vuepress-plugin-custom-router";
import { pwaConfig } from "./pwaConfig";

// VuePress插件配置

// @ts-ignore
export const configPlugins: PluginConfig = [
  // 谷歌统计插件
  // googleAnalyticsPlugin({
  //     id: 'G-GBZBT89WGJ'
  // }),

  // 搜索插件
  docsearchPlugin({
    appId: process.env.algoliaAppId || "BGZI1WD543",
    apiKey: process.env.algoliaAppKey || "06d648afe2ad649b8852561f40f39efe",
    indexName: "prod_blog",
    contextualSearch: true,
    searchParameters: {
    },
    locales: {
      '/': {
        lang: 'zh-CN',
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消',
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除',
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接',
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者',
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈',
            },
          },
        },
      }
    }
  }),

  // 路径自定义插件
  vuepressPluginCustomRoute,

  // 目录自动生成
  // autoCatalogPlugin({
  //   orderGetter: (page) => {
  //     const { frontmatter } = page;
  //     if (frontmatter && frontmatter.order) {
  //       if (frontmatter.order) {
  //         return frontmatter.order;
  //       } else if (frontmatter.dir || frontmatter.dir.order) {
  //         return frontmatter.dir.order;
  //       }
  //     }
  //     return -1;
  //   }
  // }),

  // 自定义容器插件
  containerPlugin({
    type: "projects",
    render: (tokens, idx) => {
      return renderProjects(tokens, idx);
    }
  })

  // 看板娘插件 see: https://github.com/xinlei3166/vuepress-plugin-live2d-plus
  // live2dPlugin({
  //   enable: true,
  //   model: {
  //     url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hijiki/hijiki.model.json',
  //     // url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/tororo/tororo.model.json'
  //   },
  //   display: {
  //     position: 'right',
  //     width: '135px',
  //     height: '300px',
  //     xOffset: '-25px',
  //     yOffset: '35px'
  //   },
  //   mobile: {
  //     show: false
  //   }
  // })

];

// 主题内置插件配置
export const themePlugins: PluginsOptions = {
  // 复制代码插件配置
  copyCode: {
    showInMobile: true // 手机端显示代码复制
  },
  // 自动生成目录配置
  autoCatalog: false,
  // 版权信息是否显示
  copyright: false,

  // 博客插件配置
  blog: {
    hotReload: true, // 启用热更新
    // timeline: 'archives', // 时间轴访问路径修改成archives
    // 过滤列表页面
    filter: ({ filePathRelative, frontmatter }) => {
      // 舍弃那些不是从 Markdown 文件生成的页面
      if (!filePathRelative) return false;
      // 舍弃所有的README.md页面
      if (filePathRelative.toLowerCase().endsWith("readme.md")) return false;
      // 舍弃那些没有使用默认布局的页面
      const excludeLayouts = ["ArticleLayout"];
      if (
        frontmatter.home ||
        (frontmatter.layout && !excludeLayouts.includes(frontmatter.layout))
      )
        return false;
      return true;
    }
  },

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

  // 组件插件
  components: {
    rootComponents: {
      backToTop: true
    },
    components: ["CodePen", "StackBlitz", "Replit", "SiteInfo", "Share"]

  },

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
    card: true,
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
  },

  // pwa
  pwa: pwaConfig

};