export { default as Border } from '../../components/Border.vue'
export { default as Label } from '../../components/Label.vue'
export { default as MarkdownPreview } from '../../components/Markdown-Preview.vue'
export { default as Markdown } from '../../components/Markdown.vue'
export { default as Marquee } from '../../components/Marquee.vue'
export { default as Overview } from '../../components/Overview.vue'
export { default as Overview2 } from '../../components/Overview2.vue'

export const LazyBorder = import('../../components/Border.vue' /* webpackChunkName: "components/Border" */).then(c => c.default || c)
export const LazyLabel = import('../../components/Label.vue' /* webpackChunkName: "components/Label" */).then(c => c.default || c)
export const LazyMarkdownPreview = import('../../components/Markdown-Preview.vue' /* webpackChunkName: "components/Markdown-Preview" */).then(c => c.default || c)
export const LazyMarkdown = import('../../components/Markdown.vue' /* webpackChunkName: "components/Markdown" */).then(c => c.default || c)
export const LazyMarquee = import('../../components/Marquee.vue' /* webpackChunkName: "components/Marquee" */).then(c => c.default || c)
export const LazyOverview = import('../../components/Overview.vue' /* webpackChunkName: "components/Overview" */).then(c => c.default || c)
export const LazyOverview2 = import('../../components/Overview2.vue' /* webpackChunkName: "components/Overview2" */).then(c => c.default || c)
