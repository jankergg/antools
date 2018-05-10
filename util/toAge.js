import dateFormat from './dateFormat'
const getYear = function ({from, to}) {
  let [year1, month1, day1] = from.split('-')
  let [year2, month2, day2] = to.split('-')
  let year = year2 - year1 - 1
  if (month2 > month1) {
    year += 1
  } else if (month2 === month1 && day2 >= day1) {
    year += 1
  }
  return year
}

export default function (birthday) {
  const now = dateFormat(new Date(), 'yyyy-MM-dd')
  return birthday ? getYear({from: birthday, to: now}) : null
}
