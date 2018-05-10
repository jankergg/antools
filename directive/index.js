import maxLength from './maxLength'
import autoCase from './autoCase'

export default {
  init (Vue) {
    if (!Vue) {
      return
    }
    Vue.directive('maxLength', maxLength)
    Vue.directive('autoCase', autoCase)
  }
}

