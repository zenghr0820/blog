import { hopeTheme, ThemeOptions } from 'vuepress-theme-hope'
import { sidebarConfig } from "./sidebar";
import { navbarConfig } from "./navbar";
import { themePlugins } from "./plugins";
import * as constant from "../utils/constant";
import {Avatar} from "../utils/constant";

export const themeOptions: ThemeOptions =
  // 主题选项
  {
    hostname: constant.HostName,
    author: {
      name: constant.AuthorName
    },
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: constant.Repo,
    // 导航栏
    navbar: navbarConfig,
    // 侧边栏
    sidebar: sidebarConfig,
    // 侧边栏排序
    sidebarSorter: ["readme", "order", "filename", "date", "title"],
    logo: "/logo.png",
    // icon 图标设置
    // iconAssets: 'fontawesome',
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    repoLabel: "GitHub",
    // 是否显示页面贡献者
    contributors: false,
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    // 面包屑导航
    breadcrumb: true,
    // 隐藏打印按钮
    print: false,
    // 全屏按钮
    fullscreen: true,
    // 文档源文件存放在仓库中的目录名
    // docsDir: "docs",
    footer: constant.Footer_Html_Info,
    displayFooter: true,
    // 加密
    encrypt: {
      config: {
        "/chit-chat/少年的第一篇博客.html": "zenghr"
      },
    },
    // page meta
    metaLocales: {
      editLink: "在 GitHub 上编辑此页"
    },
    // blog
    blog: {
      avatar: constant.Avatar,
      description: constant.Description,
    },

    // markdown 配置
    markdown: {
      // 代码高亮
      highlighter: {
        type: 'shiki',
        themes: {
          light: "one-dark-pro",
          dark: "one-dark-pro",
        },
        lineNumbers: 15,
      },
      component: true,
      tabs: true,
      codeTabs: true,
    },

    // 内置插件
    plugins: themePlugins,
  }
;

export default hopeTheme(themeOptions)
