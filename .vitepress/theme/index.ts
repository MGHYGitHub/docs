import { h } from 'vue'
import type { Theme } from 'vitepress'
// 1. 导入彬哥的主题
import escookTheme from '@escook/vitepress-theme'
// 2. 导入配套的 CSS 样式（此步骤不能省略）
import '@escook/vitepress-theme/style.css'
// 导入您的自定义的样式
import './style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import Busuanzi from './components/Busuanzi.vue'
// import PageInfo from './components/PageInfo.vue'

export default {
  // 3. 指定要继承的主题，并基于此主题进行二次扩展
  extends: escookTheme,
  Layout: () => {
    return h(escookTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Busuanzi', Busuanzi)
    // app.component('PageInfo', PageInfo) // 注册 PageInfo 组件

    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    // 扩展自定义的功能...
  }
} satisfies Theme
