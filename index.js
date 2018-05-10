import vueDirective from "./directive"
import vueFilter from "./filter"
import vuePlugin from "./plugin"
import * as jsBridge from './jsBridge'
import * as util from './util'

export default {
  init (Vue) {
    if (!Vue) {
      throw new Error('未找到Vue实例，请检查是否正确引入Vue！')
    }
    vueDirective.init(Vue)
    vueFilter.init(Vue)
    vuePlugin.init(Vue)
  },
  jsBridge,
  util
}