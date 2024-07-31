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
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import { 
  NolebaseInlineLinkPreviewPlugin, 
} from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import {  
  NolebaseHighlightTargetedHeading,  
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

import { useData, useRoute } from 'vitepress';
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'; // 导入方法
import 'vitepress-plugin-codeblocks-fold/style/index.css'; // 导入样式

export default {
  // 3. 指定要继承的主题，并基于此主题进行二次扩展
  extends: escookTheme,
  setup() {
    // 获取前言和路由
    const { frontmatter } = useData();
    const route = useRoute();
    // 基础使用
    codeblocksFold({ route, frontmatter }, true, 400);
  },
  Layout: () => {
    return h(escookTheme.Layout, null, {
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'layout-top': () => [
        h(NolebaseHighlightTargetedHeading),
      ],
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, ctx }) {
    // 在这里执行第一个 enhanceApp 函数的内容;
    app.use(NolebaseGitChangelogPlugin)
    app.use(NolebaseInlineLinkPreviewPlugin)
    app.component('Busuanzi', Busuanzi)
    // app.component('PageInfo', PageInfo); // 注册 PageInfo 组件
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
    // 将 ctx 参数传递给 escookTheme.enhanceApp 函数
    escookTheme.enhanceApp({ app, router, ctx });
    // 可以在这里继续扩展自定义的功能...
  }
} satisfies Theme
