import VueRouter from 'vue-router'

//메인
import Main from 'View/Main.vue';
//ETC 카테고리
import ETC from 'View/ETC/EtcMain.vue';
//note 카테고리
import MdGrammar from 'View/note/markdown/grammar.vue';
import DomesticMap from 'View/ETC/Map.vue';

//java
import java from "./route/java.js"
//파이썬
import python from "./route/python.js"
//프론트엔드 
import FrontEnd from "./route/FrontEnd.js"

//에러페이지
import PageNotFound from 'View/PageNotFound.vue';

//루트디렉토리
const root = '/';
const routes = [{
    name: 'mainPage',
    path: root.concat('/'),
    component: Main,
  }, {
    name: 'etc',
    path: root.concat('/etc'),
    component: ETC,
  }, {
    name: 'md-grammar',
    path: root.concat('/mdGrammar'),
    component: MdGrammar,
  }, {
    name: 'domestic-map',
    path: root.concat('/domesticMap'),
    component: DomesticMap,
  }]
  .concat(python)
  .concat(java)
  .concat(FrontEnd)
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
