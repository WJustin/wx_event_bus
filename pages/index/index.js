import * as EventBus from '../../utils/eventBus.js'
import * as Constant from '../../constant.js'

Page({
  data: {
    texts:[]
  },

  add() {
    EventBus.addListener(Constant.didRecevieEventName, this.listener)
  },

  remove() {
    EventBus.removeListener(Constant.didRecevieEventName, this.listener)
  },

  next() {
    wx.navigateTo({
      url: '../next/next',
    })
  },

  listener(e) {
    this.data.texts.push(e + this.data.texts.length);
    this.setData({
      texts: this.data.texts
    });
  }
  
})
