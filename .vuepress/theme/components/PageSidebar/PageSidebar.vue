<template>
  <aside class="page-sidebar">
    <!--  工具栏  -->
    <SideToolbar :config="toolbarConfig" />

    <!--  ----  -->

  </aside>
</template>

<script>
import SideToolbar from "./SideToolbar";

export default {
  components: { SideToolbar },
  data() {
    return {
      toolbarConfig: {
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
            type: "qrcode",
            icon: "/iphone.png",
            title: "手机看",
            imageUrl: "https://api.qrserver.com/v1/create-qr-code/?data=https://blog.zenghr.cn",
          },
          {
            type: "image",
            icon: "/reward.png",
            title: "打赏",
            imageUrl: '/wechat.jpg',
          },
        ]
      },
    };
  },
  created() {
    this.toolbarConfig.title = this.$page.title;
    this.toolbarConfig.path = this.$page.path;
    this.toolbarConfig.headers = this.$page.headers;
  },

  mounted() {},
  computed: {},

  methods: {
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
    }
  }
};
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
