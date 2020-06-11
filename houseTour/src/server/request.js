import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: 'http://localhost:8888',
      url,
      data: JSON.stringify(data),
      timeout: 10000,
      withCredentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        'charset': 'utf-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).catch((e) => {
      console.log(e)
      return new Promise((resolve, reject) => {
        reject(e)
      })
    })
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
  }
}
function checkStatus (response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}
