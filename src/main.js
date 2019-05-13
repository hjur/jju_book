import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

//라우트설정
import router from 'Config/route'
Vue.use(VueRouter)

//상태관리
import store from 'Store/index'
Vue.use(Vuex)

//■□■□■□■□■□■□■□■□■□■□■□■□ CREATE VUE APP ■□■□■□■□■□■□■□■□■□■□■□■□■□
let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

//■□■□■□■□■□■□■□■□■□■□■□■□ NATIVE APP INTERFACE ■□■□■□■□■□■□■□■□■□■□■□
window.vueApp = vm
