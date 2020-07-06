<template>
  <aside class="page-sidebar">
    <!--  工具栏  -->
    <SideToolbar :config="relatedToc" />

  </aside>
</template>

<script>
import SideToolbar from "./SideToolbar";
import { resolvePage } from "../../util";
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'

export default {
  props: ['sidebarItems'],
  components: { SideToolbar },
  data() {return {}},
  created() {},
  mounted() {},

  computed: {
    relatedToc() {
      return this.getPageToc(this.$page, this.postK);
    },
  },
  methods: {
    getPageToc(p = null) {
      let toolbarConfig = {
        title: "",
        path: "",
        icon: "/toc.png",
        headers: [],
        opts: [
          {
            type: "script",
            icon: "/full.png",
            title: "全屏看",
            event: this.full,
          },
          {
            type: "script",
            icon: "/toggle.png",
            title: "侧边栏",
            event: this.closeNav,
          },
          {
            type: "image",
            icon: "/iphone.png",
            title: "手机看",
            imageUrl: "https://api.qrserver.com/v1/create-qr-code/?data=https://blog.zenghr.cn" + this.$page.path,
          },
          {
            type: "image",
            icon: "/reward.png",
            title: "打赏",
            imageUrl: '/wechat.jpg',
          },
        ]
      };

      if (p) {
        toolbarConfig.title = this.$page.title;
        toolbarConfig.path = this.$page.path;
        toolbarConfig.headers = this.formatPageToc(this.$page.headers);
      }

      // 上/下一篇链接
      const prev = resolvePageLink(LINK_TYPES.PREV, this);
      const next = resolvePageLink(LINK_TYPES.NEXT, this);
      if (prev) {
        toolbarConfig.opts.push({
          type: "PageLink",
          icon: "/prev.png",
          title: "上一篇",
          pageLink: prev,
        })
      }
      if (next) {
        toolbarConfig.opts.push({
          type: "PageLink",
          icon: "/next.png",
          title: "下一篇",
          pageLink: next,
        })
      }

      return toolbarConfig
    },
    isHash(path) { // 获取路由锚点变化
      const hash = this.$route.hash;
      return ('#' + path) === decodeURIComponent(hash);
    },
    full() {
      if (!! (
              document.fullscreen ||
              document.mozFullScreen ||
              document.webkitIsFullScreen ||
              document.webkitFullScreen ||
              document.msFullScreen
      )) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
        document.addEventListener("fullscreenchange", function(e) {});
      }
    },
    closeNav() {
      const theme = document.getElementsByClassName("theme-container")
      if (theme.length > 0) {
        theme[0].classList.toggle("no-sidebar");
      }
    },
    // childrens
    formatPageToc(headers = []) { // 格式化 Toc 数据格式
      if (!headers) return [];
      let menus = JSON.parse(JSON.stringify(headers)); // 深拷贝

      const pageToc = [];
      let currentToc;
      for (let menu of menus) {
        if (menu.level <= 1) continue;
        // 判断锚点
        if (this.isHash(menu.title)) {
          menu.active = true
        }
        if (!currentToc) {
          currentToc = menu;
          continue
        }
        // ...
        if (currentToc.level >= menu.level) {
          pageToc.push(currentToc);
          currentToc = menu;
        } else {
          if (menu.active) {
            currentToc.active = true;
          }
          if (currentToc.childrens && currentToc.childrens.length > 0) {
            currentToc.childrens.push(menu)
          } else {
            currentToc.childrens = [menu]
          }
        }
      }

      if (currentToc) {
        pageToc.push(currentToc)
      }

      return pageToc
    },
  }
};

// func
function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
};

function resolvePageLink (
        linkType,
        { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType

  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig)

  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page)

  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig

  if (link === false) {
    return
  } else if (isString(link)) {
    return resolvePage($site.pages, link, $route.path)
  } else {
    return resolveLink($page, sidebarItems)
  }
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}


</script>

<style lang="stylus">
  .page-sidebar {
    font-size: 12px;
    background-color: #fbfbfb;
    width: 3.8rem;
    position: fixed;
    z-index: 11;
    margin: 0;
    top: 3.6rem;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    border-left: 1px solid #eaecef;
  }

  /* 站点图 */
  .page-side-sitemap {
    position: fixed;
    right: 8px;
    bottom: 50px!important;
    width: 44px;
  }


</style>
