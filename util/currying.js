// 柯里化后的部分常用函数
import {ToastPlugin} from 'vux'
import Vue from 'vue'
import Axios from 'axios'
import {isString, isObject} from './index'
Vue.use(ToastPlugin)

export const toast = function (text) {
  if (text instanceof Error) {
    console.error(text)
    return
  }
  const opt = {width: '200px', type: 'text'}
  if (isString(text)) {
    Vue.$vux.toast.show({...opt, text})
  } else if (isObject(text)) {
    Vue.$vux.toast.show({...opt, ...text})
  }
}

export const fetch = function (uri, payload) {
  return Axios.post(uri, payload)
    .then(({data: {success, errorMsg, value}}) => success ? Promise.resolve(value) : Promise.reject(errorMsg))
}
