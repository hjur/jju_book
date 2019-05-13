import Vue from 'vue';
import Vuex from 'vuex';

import dom from "./modules/common/dom";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dom: dom
  }
})

export default store;
