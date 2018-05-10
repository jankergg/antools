import {isString} from '../util/index'

//  长度限定过滤器
export default (s = '', limit) => (isString(s) && s.length > limit) ? s.slice(0, limit) : s
