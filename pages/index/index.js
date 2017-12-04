//index.js
//获取应用实例
const app = getApp()

/**
 * 后台 API 模块
 * @type {Object}
 */
const api = require('../../utils/api.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    weeklyData: []
  },
  //事件处理函数
  bindViewTap: function(e) {
    let index = e.currentTarget.dataset.index,
        nowToggle = this.data.weeklyData[index].toggle;
    this.setData({
        ['weeklyData[' + index + '].toggle']: !nowToggle
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
    api.getData().then((res) => {
      if (res.code === '0000') {
        var columns = res.data.columns
        columns.forEach((item, index) => {
        if (index === 0) {
            item.toggle = true
        } else {
            item.toggle = false
        }
        this.setData({weeklyData: columns})
      })
        console.log(this.data.weeklyData)
      }
    })
  },
  toNextPage (event) {
    wx.navigateTo({
        url: '../transfer/transfer?url=' + event.currentTarget.dataset.url
    })
    }
})
