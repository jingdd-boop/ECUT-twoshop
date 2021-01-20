
Page({
  data: {
    shopList:[],
    isShow:true,
    imgUrls:[
      'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/152869/36/733/129848/5f6da644E8c640b50/35117f17f08456ad.jpg!q70.dpg.webp',
      'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/149571/38/9289/117895/5f6da644E784f911b/21a284afecffdb4f.jpg!q70.dpg.webp'
    ],
    activeTypeId:'01',
    type: '',
    // 类型的数据配置
    typeCat: [{
      id:'0',name:'电子产品',
    },
    {
      id:'1',name:'生活用品',
    },
    {
      id:'2',name:'小吃零食',
    },
    {
      id:'3',name:'书籍资料',
    }]
    
  },
  typeSwitch(e) {
    this.setData({
      activeTypeId:e.currentTarget.dataset.id,
      
    })

    let that = this
   
     
    // 数据库
    wx.cloud.database().collection("shop-list").where({
      // _openid: 'user-open-id',
      id:e.currentTarget.dataset.id
    }).get({
      success(res) {
        console.log("请求成功",res)
        that.setData({
          shopList:res.data
        })
      },
      fail(res) {
        console.log("请求失败",res)
      }
    })
    
    
  },
  
 
  // 按需加载
  onLoadChoose() {
    
  },
  onLoad() {

    let that = this
    wx.cloud.database().collection("shop-list").get({
      success(res) {
        console.log("请求成功",res)
        that.setData({
          shopList:res.data
        })
      },
      fail(res) {
        console.log("请求失败",res)
      }
    })
  },

})
