import * as EventBus from '../../utils/eventBus.js'
import * as Constant from '../../constant.js'

Page({

  data: {
  
  },

  send() {
    EventBus.emit(Constant.didRecevieEventName, "我来自next页面");
  }

})