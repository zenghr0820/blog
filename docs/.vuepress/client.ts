import { defineClientConfig } from '@vuepress/client'
import { onBeforeUnmount, onMounted } from 'vue'
import { setDurationTime } from './utils'

export default defineClientConfig({
  layouts: {
    // NavLayout,
    // TrollStoreLayout
  },
  enhance: ({ app, router, siteData }) => {

  },
  setup() {
    let timerInterval: ReturnType<typeof setInterval> | null;
    onMounted(() => {
      setDurationTime();
      timerInterval = setInterval(() => {
        setDurationTime()
      }, 1000)
    });
    onBeforeUnmount(() => {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = null
    })
  }
})
