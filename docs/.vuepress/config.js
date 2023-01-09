module.exports = {
    title: '方块元服务器',
    description:'玩家文档',
    head: [
      [
          'script', // js 文件
          { src: '/js/main.js' }
      ]
  ],
    themeConfig: {
      nav: [
        { text: '主页', link: '/' },
        { text: '指南', link: '/zh/guide/' },
        { text: '问问题', link: '/zh/questions/'},
        { text: '规则', link: '/zh/rules/'},
        { text: `定价`, link: '/zh/economic/'}
      ],
      
      sidebar: 'auto',
      search: true,
      searchMaxSuggestions: 10
    }
  }
