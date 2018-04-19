//index.js
//获取应用实例
const app = getApp()
var common=require("../../js/common.js")
Page({
  data: {
    motto: 'Hello World, mini program',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    objectArray: [
      { id: 1, unique: "unique_1" },
      { id: 4, unique: "unique_4" },
      { id: 2, unique: "unique_3" },
    ]
  },
  switch: function (e) {
    common.sayHello("hi");
    common.sayGoodBye("hi");
    const length = this.data.objectArray.length;
    var arrays = this.data.objectArray;
    var temp = 0;
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (arrays[i].id < arrays[j].id) {
          temp = arrays[j];
          arrays[j] = arrays[i];
          arrays[i] = temp;
        }
      }
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
