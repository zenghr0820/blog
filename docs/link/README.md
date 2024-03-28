---
home: true
icon: link
title: 链接
heroImage: /avatar.png
heroText: 链接
tagline: 工具链接，友情链接
description: 链接

containerClass: zenghr links

tools:
  - name: vuepress-theme-hope
    desc: 一个具有强大功能的 vuepress 主题✨
    logo: https://theme-hope.vuejs.press/logo.svg
    url: https://theme-hope.vuejs.press/zh/
    repo: https://github.com/vuepress-theme-hope/vuepress-theme-hope
    preview: /assets/image/preview/theme-hope.jpg

  - name: OKTools
    desc: 在线工具
    url: https://oktools.net
    preview: /assets/image/preview/oktools.jpg

  - name: Regexr
    desc: 学习，构建，测试正则表达式
    url: https://regexr.com/
    preview: /assets/image/preview/no-preview.jpg

  - logo: https://image.liubing.me/2022/12/30/c827badf9fa7a.jpg
    name: iconfont
    desc: 阿里巴巴矢量图标库。
    url: https://www.iconfont.cn/
    preview: /assets/image/preview/no-preview.jpg

links:
  - logo: https://mister-hope.com/logo.svg
    name: Mr.Hope
    desc: VuePress Theme Hope 主题作者。
    url: https://mister-hope.com/
    preview: https://theme-hope.vuejs.press/assets/image/mrhope.jpg


  - logo: https://www.pdai.tech/images/index-read.gif
    name: pdai
    desc: Java 全栈知识体系
    url: https://www.pdai.tech
    preview: /assets/image/preview/no-preview.jpg
---

## 工具

<SiteInfo
  v-for="item in $frontmatter.tools"
  :key="item.link"
  v-bind="item"
/>

## 友情链接

<SiteInfo
  v-for="item in $frontmatter.links"
  :key="item.link"
  v-bind="item"
/>