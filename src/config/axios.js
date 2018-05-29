import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import {
  ToastPlugin
} from 'vux'
Vue.use(ToastPlugin, {
  position: 'middle',
  type: 'text',
  width: ''
})
const vueInstance = new Vue()

let options = {}
options.baseURL = 'https://dev.api.qiuxiaomi.cn'
// options.baseURL = 'http://172.16.1.250:8081'
// options.baseURL = 'http://172.16.1.148:8081'

const customAxios = axios.create(options)
customAxios.defaults.timeout = 10000
customAxios.defaults.withCredentials = true
customAxios.defaults.responseType = 'json'
customAxios.defaults.headers.common['Cache-Control'] = 'no-cache'
customAxios.defaults.headers.get['If-Modified-Since'] = '0'
customAxios.defaults.cache = false

customAxios.interceptors.response.use((res) => {
  if (res.status === 200) {
    if (res.data.errorCode === 1) {
      return Promise.resolve(res.data.data)
    } else {
      vueInstance.$vux.toast.show({
        text: `${res.data.msg}`
      })
      return Promise.reject(res.data)
    }
  } else if (res.status === 500) {
    vueInstance.$vux.toast.show({
      text: '服务端异常'
    })
  } else {
    vueInstance.$vux.toast.show({
      text: `${res.status}`
    })
  }
  return Promise.reject()
}, (error) => {
  return Promise.reject()
})

Vue.use(VueAxios, customAxios)
