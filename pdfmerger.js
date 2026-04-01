Page({
  data: {
    pdfMergerUrl: '/pdf-merger.html'
  },

  openInBrowser() {
    wx.showModal({
      title: 'PDF合并工具使用方法',
      content: '由于微信小程序限制，PDF合并功能需要通过H5页面实现。\n\n请按以下步骤操作：\n\n1. 在电脑上找到项目文件夹\n2. 找到 "pdf-merger.html" 文件\n3. 双击用浏览器打开即可使用\n\n或者将 pdf-merger.html 部署到服务器，配置业务域名后通过小程序web-view打开。',
      showCancel: false,
      confirmText: '知道了'
    });
  }
})