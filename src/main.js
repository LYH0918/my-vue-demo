// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
import { store } from './store.js'

Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.prototype.axios = axios;

Vue.filter("upper", function (val) {
    return val.charAt(0).toUpperCase() + val.slice(1)
})

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})


// router.beforeEach((to, from, next) => {
//     if (!window.sessionStorage.uname) {
//         alert("请先登录")
//         next('/')
//     } else {
//         next()
//     }
// })
