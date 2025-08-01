import type { DefaultTheme } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { version } from '../../package.json'

const ogUrl = 'https://unocss.dev/'
const ogImage = `${ogUrl}og.png#1`
const title = 'UnoCSS'
const description = '即时按需的原子化 CSS 引擎'

// 导航菜单：指南
const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: '快速开始', link: '/guide/' },
  { text: '为什么选择 UnoCSS？', link: '/guide/why' },
  { text: '预设', link: '/guide/presets' },
  { text: '样式重置', link: '/guide/style-reset' },
  { text: '配置文件', link: '/guide/config-file' },
  { text: '提取与安全列表', link: '/guide/extracting' },
]

// 导航菜单：配置
const Configs: DefaultTheme.NavItemWithLink[] = [
  { text: '概述', link: '/config/' },
  { text: '规则', link: '/config/rules' },
  { text: '快捷方式', link: '/config/shortcuts' },
  { text: '主题', link: '/config/theme' },
  { text: '变体', link: '/config/variants' },
  { text: '提取器', link: '/config/extractors' },
  { text: '转换器', link: '/config/transformers' },
  { text: '预初始化样式', link: '/config/preflights' },
  { text: '层级', link: '/config/layers' },
  { text: '自动补全', link: '/config/autocomplete' },
  { text: '预设', link: '/config/presets' },
]

// 导航菜单：集成方案
const Integrations: DefaultTheme.NavItemWithLink[] = [
  { text: 'Vite', link: '/integrations/vite' },
  { text: 'Nuxt', link: '/integrations/nuxt' },
  { text: 'Next', link: '/integrations/next' },
  { text: 'Astro', link: '/integrations/astro' },
  { text: 'Svelte Scoped', link: '/integrations/svelte-scoped' },
  { text: 'Webpack', link: '/integrations/webpack' },
  { text: 'Runtime', link: '/integrations/runtime' },
  { text: 'CLI', link: '/integrations/cli' },
  { text: 'PostCSS', link: '/integrations/postcss' },
  { text: 'ESLint', link: '/integrations/eslint' },
  { text: 'VS Code 插件', link: '/integrations/vscode' },
  { text: 'JetBrains IDE 插件', link: '/integrations/jetbrains' },
]

// 导航菜单：预设
const Presets: DefaultTheme.NavItemWithLink[] = [
  { text: 'Mini', link: '/presets/mini' },
  { text: 'Wind3', link: '/presets/wind3' },
  { text: 'Wind4', link: '/presets/wind4' },
  { text: '图标', link: '/presets/icons' },
  { text: '属性化模式', link: '/presets/attributify' },
  { text: '排版', link: '/presets/typography' },
  { text: '网页字体', link: '/presets/web-fonts' },
  { text: '遗留兼容', link: '/presets/legacy-compat' },
  { text: '标签化', link: '/presets/tagify' },
  { text: 'Rem 转 px', link: '/presets/rem-to-px' },
]

// 导航菜单：转换器
const Transformers: DefaultTheme.NavItemWithLink[] = [
  { text: '变体分组', link: '/transformers/variant-group' },
  { text: '指令', link: '/transformers/directives' },
  { text: '编译类名', link: '/transformers/compile-class' },
  { text: 'JSX 属性化', link: '/transformers/attributify-jsx' },
]

// 导航菜单：提取器
const Extractors: DefaultTheme.NavItemWithLink[] = [
  { text: 'Pug 提取器', link: '/extractors/pug' },
  { text: 'MDC 提取器', link: '/extractors/mdc' },
  { text: 'Svelte 提取器', link: '/extractors/svelte' },
  { text: '任意变体提取器', link: '/extractors/arbitrary-variants' },
]

// 导航菜单：工具
const Tools: DefaultTheme.NavItemWithLink[] = [
  { text: '检查器', link: '/tools/inspector' },
  { text: '核心', link: '/tools/core' },
  { text: '自动补全', link: '/tools/autocomplete' },
]

// 导航菜单：资源
const Resources: DefaultTheme.NavItemWithLink[] = [
  { text: '交互式文档', link: '/interactive/', target: '_blank' },
  { text: '在线体验', link: '/play/', target: '_blank' },
  { text: '教程', link: 'https://tutorial.unocss.dev/', target: '_blank' },
]

// 其他导航
const Introes: DefaultTheme.NavItemWithLink[] = [
  { text: '团队', link: '/team' },
]

// 顶部导航栏配置
const Nav: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    items: [
      {
        text: '指南',
        items: Guides,
      },
    ],
    activeMatch: '^/guide/',
  },
  {
    text: '集成方案',
    items: [
      {
        text: '概述',
        link: '/integrations/',
      },
      {
        text: '集成方案',
        items: Integrations,
      },
      {
        text: '示例',
        link: '/integrations/#examples',
      },
    ],
    activeMatch: '^/integrations/',
  },
  {
    text: '配置',
    items: [
      {
        text: '配置文件',
        link: '/guide/config-file',
      },
      {
        text: '概念',
        items: Configs,
      },
    ],
    activeMatch: '^/config/',
  },
  {
    text: '预设',
    items: [
      {
        text: '概述',
        link: '/presets/',
      },
      {
        text: '社区预设',
        link: 'https://github.com/unocss-community',
      },
      {
        text: '预设',
        items: Presets,
      },
      {
        text: '转换器',
        items: Transformers,
      },
      {
        text: '提取器',
        items: Extractors,
      },
    ],
    activeMatch: '^/(presets|transformers|extractors)/',
  },
  {
    text: '资源',
    items: [
      ...Resources,
      {
        items: Introes,
      },
    ],
  },
  {
    text: `v${version}`,
    items: [
      {
        text: '更新日志',
        link: 'https://github.com/unocss/unocss/releases',
      },
      {
        text: '贡献指南',
        link: 'https://github.com/unocss/unocss/blob/main/.github/CONTRIBUTING.md',
      },
      {
        component: 'RainbowAnimationSwitcher',
        props: {
          text: '彩虹动画',
        },
      },
    ],
  },
]

// 侧边栏：指南
const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: '指南',
    items: Guides,
  },
  {
    text: '集成方案',
    items: [
      {
        text: '概述',
        link: '/integrations/',
      },
      ...Integrations,
      {
        text: '示例',
        link: '/integrations/#examples',
      },
    ],
  },
  {
    text: '配置',
    link: '/config/',
  },
  {
    text: '预设',
    link: '/presets/',
  },
]

// 侧边栏：预设
const SidebarPresets: DefaultTheme.SidebarItem[] = [
  {
    text: '概述',
    link: '/presets/',
  },
  {
    text: '预设',
    collapsed: false,
    items: Presets,
  },
  {
    text: '社区预设',
    link: 'https://github.com/unocss-community',
  },
  {
    text: '转换器',
    collapsed: false,
    items: Transformers,
  },
  {
    text: '提取器',
    collapsed: false,
    items: Extractors,
  },
  {
    text: '其他工具包',
    collapsed: false,
    items: Tools,
  },
]

// 侧边栏：配置
const SidebarConfig: DefaultTheme.SidebarItem[] = [
  {
    text: '配置',
    collapsed: false,
    items: Configs,
  },
  {
    text: '配置文件',
    link: '/guide/config-file',
  },
]

export default defineConfig({
  lang: 'en-US',
  title,
  titleTemplate: title,
  description,
  outDir: './dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: title }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:site', content: '@antfu7' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
    ['link', { rel: 'search', type: 'application/opensearchdescription+xml', href: '/search.xml', title: 'UnoCSS' }],
  ],
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: [
    /^\/play/,
    /^\/interactive/,
    /:\/\/localhost/,
  ],

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    codeTransformers: [
      transformerTwoslash({
        processHoverInfo: info => info.replace(/_unocss_core\./g, ''),
      }),
    ],
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    nav: Nav,
    search: {
      provider: 'local',
    },
    sidebar: {
      '/guide/': SidebarGuide,
      '/integrations/': SidebarGuide,

      '/tools/': SidebarPresets,
      '/presets/': SidebarPresets,
      '/transformers/': SidebarPresets,
      '/extractors/': SidebarPresets,

      '/config/': SidebarConfig,
    },
    editLink: {
      pattern: 'https://github.com/unocss/unocss/edit/main/docs/:path',
      text: '建议对此页面进行修改',
    },
    socialLinks: [
      { icon: 'bluesky', link: 'https://bsky.app/profile/unocss.dev' },
      { icon: 'github', link: 'https://github.com/unocss/unocss' },
      { icon: 'discord', link: 'https://chat.antfu.me' },
    ],
    footer: {
      message: 'MIT 许可证发布',
      copyright: '版权所有 © 2021-PRESENT Anthony Fu',
    },
  },
})