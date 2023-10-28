import { defineClientConfig } from '@vuepress/client'
import { onBeforeUnmount, onMounted } from 'vue'

import 'vuepress-theme-hope/presets/bounce-icon.scss'

export default defineClientConfig({
  layouts: {
    // NavLayout,
    // TrollStoreLayout
  },
  enhance: ({ app, router, siteData }) => {

  }
})
