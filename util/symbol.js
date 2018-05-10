//  一个symbol的factory, 通过属性访问符添加和访问（但不允许重置）
//  这样添加一个symbol:  $.LOAD
//  再次访问这个symbol也依然用 $.LOAD
//  坏的就是IDE还不能解析这种动态语法

const handler = {
  get(target, key) {
    if (!Reflect.has(target, key)) {
      Reflect.set(target, key, Symbol(key))
    }
    return Reflect.get(target, key)
  },
  set (target, key, value) {
    if (Reflect.has(target, key)) {
      throw new TypeError('Assignment to constant variable.')
    } else {
      Reflect.set(target, key, Symbol(value))
    }
    return Reflect.get(target, key)
  }
}

/**
 * 导出一个全局的Symbol工厂函数
 * @type {Proxy} 代理对象
 */
export const $sym = new Proxy(new WeakMap(), handler)

/**
 * 默认导出一个生成Symbol的工厂函数，这是因为很多symbol用时都需要声明成protected，都是需要有访问限制的，而不是全局的
 * 用法：
 *  import factory from '@/utils/symbol'
 *  const $ = factory()
 *  console.log($.anyKey) // => Symbol('anyKey')
 *
 * 也可以给factory传入一个参数，用作存放symbol的地方
 * @param bin {Object | WeakMap} <optional> 存放symbol的表
 */
export default (bin = new WeakMap()) => new Proxy(bin, handler)
