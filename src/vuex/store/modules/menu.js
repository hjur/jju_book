import {
  MENU
} from 'Constant/index';

const menun = {
  state: {
    side_menu: [{
        id: 'etc',
        title: 'ETC',
        depth2: []
      },
      {
        id: 'note',
        title: 'NOTE ↓',
        depth2: [{
            title: '마크다운 작성법',
            route: 'md-grammar'
          },
          {
            title: '지도',
            route: 'domestic-map'
          }
        ]
      },
      {
        id: 'python',
        title: 'PYTHON ↓',
        depth2: [{
          title: '파이썬이란 ?',
          route: 'what-py'
        }, ]
      },
      {
        id: 'java',
        title: 'JAVA ↓',
        depth2: [{
          title: 'JAVA',
          route: 'what-java'
        }, ]
      },
      {
        id: 'frontEnd',
        title: 'FRONT END ↓',
        depth2: [{
          title: 'javaScript',
          route: 'js-study'
        }, ]
      },
    ]
  },
  getters: {
    $_menu__side_menu: (state) => {
      return state.side_menu;
    },
  },
  mutations: {},
  actions: {

  }
}

export default menun
