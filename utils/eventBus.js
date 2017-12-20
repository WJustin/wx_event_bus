let events = new Map();

export function addListener(event, callBack) {
  let callBacks = events.get(event);
  if (callBacks) {
    callBacks.add(callBack);
  } else {
    callBacks = new Set();
    callBacks.add(callBack);
  }
  events.set(event, callBacks);
}

export function removeListener(event, callBack) {
  let callBacks = events.get(event);
  if (callBacks && callBacks.has(callBack)){
    callBacks.delete(callBack);
  }
}

export function emit(event, arg = null) {
  let callBacks = events.get(event);
  if (callBacks) {
    for (let callBack of callBacks.values()) {
      if (arg) {
        callBack(arg);
      } else {
        callBack();
      }
    }
  }
}