import { defineClientConfig } from '@vuepress/client'

import 'vuepress-theme-hope/presets/bounce-icon.scss'
import { onMounted } from 'vue'
import packageJson from '../../package.json'

export default defineClientConfig({
  layouts: {
    // NavLayout,
    // TrollStoreLayout
  },
  enhance: ({ app, router, siteData }) => {

  },
  setup() {
    onMounted(() => {
      console.log(
        `%c ✨乐子人的博客 v${packageJson.version}✨ %c ✨Zenghr's Blog✨ %c\n
        做个俗人，贪财好色，一身正气\n
        🍻- ( ゜- ゜)つロ 乾杯~🍻\n
                 ---- 遇事不决可问春风\n`,
        `background: #eb507e; padding:5px; font-size:12px; color: #f9f4dc;`,
        `background: #030307; padding:5px; font-size:12px; color:#fff;`,
        `color: #51c4d3; font-size:12px;`
      );
    });
  }
})
