import * as EventBus from '../../utils/eventBus.js'
import * as Constant from '../../constant.js'

Page({
  data: {
    content:'',
  },

  onLoad(options) {
    EventBus.addListener(Constant.didRecevieEventName, this.listener)
  },

  onUnload() {
    EventBus.removeListener(Constant.didRecevieEventName, this.listener)
  },

  next() {
    wx.navigateTo({
      url: '../next/next',
    })
  },

  listener(e) {
    this.setData({
      content: e
    });
  }
  
})
