/****************************************
* 添加 Vue filter
****************************************/
/*
 *     name: timefilter
 * descript: 时间格式化
 *   author: stanley
 */
import bankCard from './bankCard'
import mosaic from './mosaic'
import maxLength from './maxLength'
import number from './number'

export default {
  init (Vue) {
    if (!Vue) {
      return
    }
    Date.prototype.Format = function (fmt) {
      let o = {
        "M+": this.getMonth() + 1,  // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
      }

      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))

      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1)
            ? (o[k])
            : (("00" + o[k]).substr(("" + o[k]).length)))
        }
      }
      return fmt
    }


    String.prototype.wordbreak = function () {
      let v = this.toString()
      return v.split(';').join('<br/>')
    }
    /*
    *     name:toDecimal2
    * descript:货币补2位小数
    *   author:stanley
    */
    String.prototype.checkMoney = function () {
      let n = this.toString()
      let newstr = n ? n.replace(/(^\s*)|(\s*$)/g, "") : ''
      let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
      return reg.test(newstr)
    }
    Vue.filter('toDecimal2', function (x) {
      let f = parseFloat(x)
      if (isNaN(f)) return false
      let f1 = Math.round(f * 100) / 100
      let s = f1.toString()
      let rs = s.indexOf('.')
      if (rs < 0) {
        rs = s.length
        s += '.'
      }
      while (s.length <= rs + 2) {
        s += '0'
      }
      return s
    })

    /*
    *       name: astro
    *   descript: 获取星座
    *     author: xx
    *      value: 1990-12-10
    */
    Vue.filter('astro', function (value) {
      function getAstro (m, d) {
        return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m * 2 - (d < "102223444433".charAt(m - 1) - -19) * 2, 2)
      }
      return getAstro(value.split('-')[1], value.split('-')[2]) + '座'
    })

    // 自动转大写
    Vue.filter('autoCase', function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    })

    String.prototype.bool = function () {
      return (/^true$/i).test(this)
    }
    Vue.filter('bool', function (value) {
      console.log(value)
      // return value.toString() == 'true' ? true : false
    })


    Vue.filter('timefilter', function (value) {
      return new Date(value).Format("yyyy-MM-dd")
    })

    Vue.filter('timedate', function (value) {
      return new Date(value).Format("yyyy-MM-dd hh:mm")
    })

    Vue.filter('bankCard', bankCard)  //  银行卡号码格式化，无参数

    Vue.filter('mosaic', mosaic)  //  将手机号码中间4位马赛克，无参数

    Vue.filter('maxLength', maxLength)  //  长度限定过滤器，无参数

    Vue.filter('number', number)  //  数字筛选器，过滤掉非数字部分
    /*
    *     name: trim
    * descript: 去空格
    *   author: stanley
    */
    Vue.filter('trim', function (value) {
      return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    })

    Vue.prototype.$stobool = function (n) {
      if (typeof n == 'object') {
        let son = []
        let stb = null
        if (Array.isArray(n)) {
          n.map(function (v, i, arr) {
            stb = stobool(v)
            switch (stb) {
            case 0:
              arr[i] = true
              break
            case 1:
              arr[i] = false
              break
            case 3:
              arr[i] = null
              break
            }
          })
        } else {
          Object.keys(n).map(function (v, i, arr) {
            stb = stobool(n[v])
            switch (stb) {
            case 0:
              n[v] = true
              break
            case 1:
              n[v] = false
              break
            case 3:
              n[v] = null
              break
            }
          })
        }
      } else if (typeof n == "string") {
        if (n == "true") {
          return 0
        } else if (n == "false") {
          return 1
        } else if (n == "null") {
          return 2
        }
      }
    }
  }
}