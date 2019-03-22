import VueRouter from 'vue-router'

//메인
import Main from 'View/Main.vue';
//에러페이지
import PageNotFound from 'View/PageNotFound.vue';

//루트디렉토리
const root = '/';
const routes = [{
    name: 'main',
    path: root.concat('/'),
    component: Main,
  }]
  //404가 가장 마지막에 위치해야함
  .concat({
    name: '404',
    path: root.concat('*'),
    component: PageNotFound,
    meta: {
      header: true,
      footer: false
    }
  })

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  //스크롤 이동 시 위치 to, from으로 분기 가능
  scrollBehavior(to, from, savedPosition) {
    if (to.name == from.name) {
      return savedPosition;
    }
    return {
      x: 0,
      y: 0
    }
  }
})


export default router