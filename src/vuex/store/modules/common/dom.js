import {
  DOM
} from 'Constant/index';

const dom = {
  state: {
    use_sidebar: false, // t : mw , f : pc
    h2_tag_list: []
  },
  getters: {
    $_dom_use_sidebar: (state) => {
      return state.use_sidebar;
    },
    $_h2_tag_list: (state) => {
      return state.h2_tag_list;
    },
  },
  mutations: {
    [DOM.SET_SIDEBAR]: (state, payload) => {
      state.use_sidebar = (typeof payload === 'boolean' && payload) ? true : false;
    },
    [DOM.H2_TAG_LIST]: (state, payload) => {
      state.h2_tag_list = payload;
    },
  },
  actions: {

  }
}

export default dom
