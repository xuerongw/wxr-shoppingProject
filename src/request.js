import axios from 'axios'
// 返回一个Promise(发送post请求)
export function post (url, params, headers) {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
        headers
      }).then((response) => {
        const res = response.data
        if (res.success) {
          resolve(res)
        } else {
          reject(res)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }
  
  // 返回一个Promise(发送get请求)
  export function get (url, param, headers) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: param }, {
        headers
      }).then((response) => {
        const res = response.data
        if (res.success) {
          resolve(res)
        } else {
          reject(res)
        }
      }).catch((error) => {
        reject(error)
      })
    })
  }
  
  export default {
    post,
    get,
  }