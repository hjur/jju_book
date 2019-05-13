import {
  DOM
} from 'Constant/index';

const dom = {
  state: {
    use_sidebar: false // t : mw , f : pc
  },
  getters: {
    $_dom_use_sidebar: (state) => {
      return state.use_sidebar;
    },
  },
  mutations: {
    [DOM.SET_SIDEBAR]: (state, payload) => {
      state.use_sidebar = (typeof payload === 'boolean' && payload) ? true : false;
    },
  },
  actions: {

  }
}

export default dom
