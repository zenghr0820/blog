import { PWAOptions } from 'vuepress-plugin-pwa2'

export const pwaConfig: PWAOptions = {
  update: 'hint',
  favicon: '/favicon.ico',
  themeColor: '#46bd87',
  cacheHTML: false,
  cachePic: true,
};