module.exports = {
  title: "方块元服务器",
  description: "玩家文档",
  head: [
    [
      "script", // js 文件
      { src: "/js/main.js" },
    ],
    ["link", { rel: "icon", href: "/images/favicon.jpg" }],
  ],
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/zh/" },
      {
        text: "插件教程",
        items: [
          { text: "皮肤插件", link: "/zh/skin/" },
          { text: "粘液科技", link: "/zh/slimefun/" },
          { text: "保护石插件", link: "/zh/protectionstones/" },
        ],
      },
      { text: "问问题", link: "/zh/questions/" },
      { text: "规则", link: "/zh/rules/" },
      { text: `定价`, link: "/zh/economic/" },
    ],

    sidebar: "auto",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "上一次更新",
    smoothScroll: true,
  },
};
