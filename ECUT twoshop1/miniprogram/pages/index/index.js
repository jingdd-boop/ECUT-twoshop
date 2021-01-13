Page({
  data: {
    active: 1,
    imageURL:"https://img.yzcdn.cn/vant/ipad.jpeg"
  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
})
