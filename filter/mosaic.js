//  依赖的正则列表
let reg = {
  mobile: /^(\d{3})(\d{4})(\d{4})$/
}

//  是否是一个手机号码
let isMobile = seq => reg.mobile.test(seq)

let mosaic = {
  mobile: seq => seq.replace(reg.mobile, ($0, $1, $2, $3) => $1 + '****' + $3)
}

//  （如果看起来像一个手机号码），把中间的4位 马赛克（即用*号代替）
export default seq => {
  let reg = /^(\d{3})(\d{4})(\d{4})$/
  return reg.test(seq) ? seq.replace(reg, ($0, $1, $2, $3) => $1 + '****' + $3) : seq
}
