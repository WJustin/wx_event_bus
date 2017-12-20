import * as EventBus from '../../utils/eventBus.js'
import * as Constant from '../../constant.js'

Page({

  data: {
  
  },

  send() {
    EventBus.emit(Constant.didRecevieEventName, "Next页面发送消息");
  }

})