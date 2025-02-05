import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "方块元服务器",
  description: "玩家文档",
  base: '/',
  head: [
    [
      "script",
      { src: "/js/main.js" },
    ],
    ["link", { rel: "icon", href: "/images/favicon.jpg" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "皮肤站（不可用）", link: "https://skin.bytemetasg.top/" },
      { text: "指南", link: "/zh/" },
      { text: `支持我们`, link: "/zh/sponsor/" },
      {
        text: "插件教程",
        items: [
          { text: "粘液科技", link: "/zh/slimefun/" },
          { text: "保护石插件", link: "/zh/protectionstones/" },
          { text: "点歌插件", link: "/zh/allmusic/" },
          { text: "箱子商店", link: "/zh/quickshop/" },
          { text: "皮肤插件（已过时）", link: "/zh/skin/" },
        ],
      },
      { text: "问问题", link: "/zh/questions/" },
      { text: "规则", link: "/zh/rules/" },
      {
        text: "关于",
        // ariaLabel: "",
        items: [
          { text: `关于我们`, link: "/zh/about/" },
          { text: "为什么选择我们", link: "/zh/why/" },
          { text: "开源许可证", link: "/zh/open-source/" },
          { text: "支持与贡献名单列表", link: "/zh/sponsor/list.md" },
        ],
      },
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Byte-Meta-Studio-Group/block-server-wiki/' }
    ],

    footer: {
      message: "",
      copyright: "Copyright © 2024-present"
    }
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    }
  },

  lastUpdated: true
})
