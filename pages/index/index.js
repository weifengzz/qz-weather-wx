//index.js
//获取应用实例
const app = getApp()

const fetchData = that => {
  wx.request({
    url: "http://t.weather.sojson.com/api/weather/city/101120602",
    method: "GET",
    success(res) {
      that.setData({
        data: res.data
      })
    },
    fail(res) {
    }
  })
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    fetchData(this)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
