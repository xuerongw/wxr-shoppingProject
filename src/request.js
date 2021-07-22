import axios from 'axios'
// 请求拦截器
axios.interceptors.request.use((config)=>{
  //在发送之前做什么
  return config
},(error)=>{
  //对请求错误做什么
  return Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use((res)=>{
  //对响应数据做什么
  if(!res.data){
    return Promise.reject(res)
  }
  if(res.data.success){
    return Promise.resolve(res)
  }
  if(res.data.data&&res.data.data.error_code===10004){
    return Promise.reject(res)
  }
},(error)=>{
  //对响应错误做什么
  return Promise.reject(error)
})
// 封装get请求
export function get(url,param,headers){
return new Promise((resolve,reject)=>{
axios.get((url,{param:param}),{headers}).then(response=>{
 const res=response.data
 if(res.success){
   resolve(res)
 } else {
   reject(res)
 }
}).catch(error=>{
  reject(error)
})
})
}
// 封装post方法
export function post(url,param,headers){
  return new Promise((resolve,reject)=>{
    axios.post(url,param,{headers}).then((response=>{
      const res=response.data
      if(res.success){
        resolve(res)
      } else{
        reject(res)
      }
    })).catch(error=>{
      return reject(error)
    })
  })
}
export default{
  get,
  post
}