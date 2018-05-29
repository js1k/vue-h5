// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index.js'
import store from './store/index'
import './assets/common.less'
import axios from 'axios';
import './config/axios.js'
import 'lib-flexible/flexible'
require('./mock')
import VueLazyLoad from 'vue-lazyload'
import error from './assets/images/timg4.jpeg'

Vue.use(VueLazyLoad,{
  error:error,
  loading:error
})
Vue.config.productionTip = false
Vue.prototype.$axios=axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    Vuex,
    store,
    components: { App },
    template: '<App/>'
})

Vue.filter('getYMD',function(input){
  return input.split(' ')[0];
})
