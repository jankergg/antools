export default {
  inserted: function (el, binding) {
    // el.addEventListener("change", function () {
    //   let _self = this
    //   window.setTimeout(function () {
    //     _self.value = _self.value.toUpperCase()
    //     console.log(_self.value)
    //   }, 20)
    // })
    el.addEventListener("change", function () {
      let _self = this
      _self.value = _self.value.toUpperCase()
      window.setTimeout(function () {
        _self.value = _self.value.toUpperCase()
      }, 50)
    })
  }
}
