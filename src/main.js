import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//라우트설정
import router from 'Config/route'
Vue.use(VueRouter)

//■□■□■□■□■□■□■□■□■□■□■□■□ CREATE VUE APP ■□■□■□■□■□■□■□■□■□■□■□■□■□
let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})

//■□■□■□■□■□■□■□■□■□■□■□■□ NATIVE APP INTERFACE ■□■□■□■□■□■□■□■□■□■□■□
window.vueApp = vm
