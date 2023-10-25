import { hopeTheme, ThemeOptions } from 'vuepress-theme-hope'
import { sidebarConfig } from "./sidebar";
import { navbarConfig } from "./navbar";
import { themePlugins } from "./plugins";
import { AuthorName, Footer_Html_Info, HostName, Repo } from "../utils/constant";

export const themeOptions: ThemeOptions =
  // 主题选项
  {
    hostname: HostName,
    author: {
      name: AuthorName
    },
    // 默认为 GitHub. 同时也可以是一个完整的 URL
    repo: Repo,
    // 导航栏
    navbar: navbarConfig,
    // 侧边栏
    sidebar: sidebarConfig,
    // 侧边栏排序
    sidebarSorter: ["readme", "order", "filename", "date", "title"],
    // 图标
    iconAssets: "fontawesome-with-brands",
    logo: "/favicon.ico",
    // 自定义仓库链接文字。默认从 `repo` 中自动推断为
    repoLabel: "GitHub",
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    // 面包屑导航
    breadcrumb: false,
    // 隐藏打印按钮
    print: false,
    // 文档源文件存放在仓库中的目录名
    docsDir: "docs",
    footer: Footer_Html_Info,
    displayFooter: true,
    encrypt: {
      config: {
        "/chit-chat/2020-01-18-first-blog.html": "zenghr"
      }
    },
    // page meta
    metaLocales: {
      editLink: "在 GitHub 上编辑此页"
    },
    // 内置插件
    plugins: themePlugins
  }
;

export default hopeTheme(themeOptions)
