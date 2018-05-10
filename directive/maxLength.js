/****************************************
 * 添加 Vue directive
 *
 * example:
 * Vue.directive('demo', {
*   bind: function (el, binding, vnode) {
*     var s = JSON.stringify
*     el.innerHTML =
*       'name: ' + s(binding.name) + '<br>' +
*       'value: ' + s(binding.value) + '<br>' +
*       'expression: ' + s(binding.expression) + '<br>' +
*       'argument: ' + s(binding.arg) + '<br>' +
*       'modifiers: ' + s(binding.modifiers) + '<br>' +
*       'vnode keys: ' + Object.keys(vnode).join(', ')
*   }
* })
 * [注：代码迁移出index.js衍生版本]
 ****************************************/
export default {
  inserted: function (el, binding) {
    let length = binding.value || el.maxLength
    el.addEventListener("input", function () {
      if (this.value.length > length) {
        this.value = this.value.slice(0, length)
        console.log(this.value)
      }
    })
    // el.addEventListener("blur", function () {
    //   let _self = this
    //   window.setTimeout(function () {
    //     if (_self.value.length >= length) {
    //       _self.value = _self.value.slice(0, length)
    //       console.log(_self.value)
    //     }
    //   }, 50)
    // })
    // el.addEventListener("focus", function () {
    //   let _self = this
    //   window.setTimeout(function () {
    //     if (_self.value.length >= length) {
    //       _self.value = _self.value.slice(0, length)
    //       console.log(_self.value)
    //     }
    //   }, 20)
    // })
    el.addEventListener("change", function () {
      let _self = this
      window.setTimeout(function () {
        if (_self.value.length >= length) {
          _self.value = _self.value.slice(0, length)
          console.log(_self.value)
        }
      }, 50)
    })
    el.addEventListener("click", function (e) {
      el.focus()
    })
    el.setSelectionRange = function () {
      console.log('mock setSelectionRange')
      let _self = this
      window.setTimeout(function () {
        if (_self.value.length >= length) {
          _self.value = _self.value.slice(0, length)
          console.log(_self.value)
        }
      }, 20)
    }
  }
}
