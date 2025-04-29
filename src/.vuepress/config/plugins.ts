import { PluginConfig } from "vuepress";
import { PluginsOptions } from "vuepress-theme-hope";
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
import { encryptPlugin } from 'vuepress-plugin-encrypt';
import vuepressPluginCustomRoute from "../plugins/vuepress-plugin-custom-router/index";
import {
  canvasPlugin,
  CanvasPluginType,
} from "../plugins/vuepress-plugin-canvas/index";
import { gradientCoverPlugin } from "../plugins/vuepress-plugin-gradient-cover/index";
import { robotsPlugin } from "../plugins/vuepress-plugin-robots/index";
import { pwaConfig } from "./pwaConfig";
import { HostName } from "../utils/constant";
// VuePress插件配置

export const configPlugins: PluginConfig = [
  // 谷歌统计插件
  // googleAnalyticsPlugin({
  //     id: 'G-GBZBT89WGJ'
  // }),

  // 路径自定义插件
  vuepressPluginCustomRoute,

  encryptPlugin({
    config: {
      "/chit-chat/少年的第一篇博客": "zenghr"
    }
  }),

  // 背景插件
  canvasPlugin({
    type: CanvasPluginType.Figure,
    ribbonOption: {
      zIndex: 1,
      alpha: 0.8,
      size: 90,
    },
  }),

  // 遮罩插件
  gradientCoverPlugin({}),


  // robots.txt 插件
  robotsPlugin({
    host: HostName,
    disallowAll: false,
    allowAll: true, // 以允许搜索引擎收录
  }),

  // 看板娘插件 see: https://oml2d.hacxy.cn/guide/vuepress.html
  oml2dPlugin({
    // dockedPosition: "right",
    tips: {
      style: {
        top: '-100px',
      }
    },
    models: [
      {
        name: 'hijiki',
        path: [
          'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hijiki/hijiki.model.json',
          'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/tororo/tororo.model.json',
        ],
        anchor: [0, 0],
        position: [10, 0],
        scale: 0.07,
        stageStyle: {
          // width: '150px',
          // height: '150px',
          // left: '0px',
          // bottom: '130px',
        }
      }
    ],

  }),

];

// 主题内置插件配置
export const themePlugins: PluginsOptions = {
  // 复制代码插件配置
  copyCode: {
    showInMobile: true // 手机端显示代码复制
  },
  // 自动生成目录配置
  // catalog: true,
  // 版权信息是否显示
  copyright: false,
  // icon 图标设置
  icon: {
    // assets: [
    //   // 默认：
    //   "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
    //   // 自己的
    //   "//at.alicdn.com/t/c/font_3941380_00g6dc2nedwir.css",
    // ]
    assets: 'fontawesome'
  },
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
    components: ["SiteInfo", "Share", "Badge"]
  },

  // 搜索配置
  docsearch: {
    appId: process.env.algoliaAppId || "",
    apiKey: process.env.algoliaAppKey || "",
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
  },

  // pwa
  pwa: pwaConfig

};