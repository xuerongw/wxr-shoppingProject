//过滤和判断的方法封装
//获取url的参数
export const getUrlParams = (url, params) => {
    if (!url) {
        url = window.location.href
    }
    const reg = new RegExp("(^|&)" + params + "(=([^&]*)|$|&|#)")
    const result = reg.exec(url)
    if (!result) return ''
    if (!result[2]) return ''
    return decodeURIComponent(result[2].replace(/\+/g, ''))
}
//格式化年月日 yyyy/MM/dd hh:mm:ss 
export function dateFormat(date) {
    if (!date) return ''
    if (date.constructor != Date) {
        date = new Date(date)
    }
    const DateListOne = [date.getYear(),
    date.getMonth() + 1,
    date.getDate(),]
    const DateListTow = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ]
    const StrOne = DateListOne[0] + '年' + DateListOne[1] + '月' + DateListOne[2] + '日'
    const StrTow = DateListTow.join(':')
    return StrOne + ' ' + StrTow
    // 格式化为2021年7月22日 12:38:12
}
//判断是否是手机端
export const isMobile = () => /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
//判断是否为闰年
export const isLeapYear = (year) => { return (year % 400 === 0) || (year % 4 === 0 && year % 100 != 0) }
//深度克隆
export const deepClone = (data) => {
    if (data === null || typeof data !== 'object') {
        return data
    }
    if (Array.isArray(data)) {
        return data.map(item => {
            return deepClone(item)
        })
    }
    let obj = {}
    for (let key in data) {
        obj[key] = deepClone(data[key])
    }
    return obj
}
//数字千分位
// '(?=(\d{3})+(?!\d))代表的是：后面需要跟3的倍数个数字，且在这（3的倍数个数字）之后不能再有数字了。'
export const numberThousand=(number)=>{
let numberArr=number.toString().split('.')
let intString=numberArr[0]
let pointString ='.'+numberArr[1]
return intString.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1'+(','))+pointString
}