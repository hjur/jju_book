<template>
  <div :class="{'side-wrap-block':shwoSideBar ,'side-wrap-none':!shwoSideBar  }">
    <div class="page-overlay" v-show="shwoSideBar" @click="closeMenu()"> </div>
    <div class="side-menu-container animate app-theme-side" style="z-index:5">
      <section v-for="(depth1, depth1Idx) in sideMenuList" :key="depth1Idx">
        <button @click="controlDepth('depth1',depth1, depth1Idx)" class="menu-depth1 menu-depth1-st" :class="{'active':selDepth1Idx == depth1Idx}">
          {{depth1.title}}
        </button>
        <section v-if="selDepth1Idx == depth1Idx">
          <div v-for="(depth2, depth2Idx) in depth1.depth2" :key="depth2Idx">
            <button :id="depth2.route" @click="controlDepth('depth2',depth2, depth2Idx)" class="menu-depth2 menu-depth2-st" :class="{'active':selDepth2Idx == depth2Idx}">
              <span v-if="selDepth2Idx == depth2Idx">「 {{depth2.title}} 」</span>
              <span v-else>{{depth2.title}}</span>
            </button>
            <ul v-if="h2TagList.length> 0 && depth2.route != 'md-grammar'">
              <li v-for="(item,idx) in h2TagList" :key="idx" class="active" v-if="item.key == depth2.route">
                <a :href="item.url">{{item.id}}</a>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import { DOM } from "Constant/index";
import { MENU } from "Constant/index";

import "Style/aside/aside.css"

export default {
  name: 'app-aside',
  computed: {
    shwoSideBar: function () {
      return this.$store.getters.$_dom_use_sidebar;
    },
    h2TagList: function () {
      return this.$store.getters.$_h2_tag_list;
    },
    sideMenuList: function () {
      return this.$store.getters.$_menu__side_menu;
    }
  },
  methods: {
    goMenu(menuName) {
      this.$router.push({
        name: menuName
      })
      this.closeMenu();
    },
    closeMenu() {
      this.$store.commit(DOM.SET_SIDEBAR, false)
    },
    controlDepth(flag, item, idx) {
      console.log("item", item)
      if (flag == 'depth1') {
        this.selDepth1Idx = idx
        if (item.depth2.length > 0) {
          this.goMenu(item.depth2[0].route)
          this.$nextTick(() => {
            this.createDepth3(item.depth2[0].route)

          })
          this.selDepth2Idx = 0
        } else {
          this.goMenu(item.id)
        }
      }
      if (flag == 'depth2') {
        this.selDepth2Idx = idx
        this.goMenu(item.route)
        this.createDepth3(item.route)
      }
    },
    createDepth3(el_id) {
      if (document.getElementById(el_id)) {
        let h2_tag = document.getElementsByTagName("h2")
        if (h2_tag.length > 0) {
          let h2_tag_id = [];
          for (var i = 0; i < h2_tag.length; i++) {
            let v = h2_tag.item(i)
            v.id = v.innerText
            let item = {
              key: el_id,
              id: v.innerText,
              url: `#${v.innerText}`
            }
            h2_tag_id.push(item)
          }
          this.$store.commit(DOM.H2_TAG_LIST, h2_tag_id)
        }
      }
    },
    movingScroll(el_id) {
      window.scroll(0, this.getOffsetTop(document.getElementById(el_id)))
    },
    getOffsetTop(el) {
      let top = 0;
      if (el.offsetParent) {
        do {
          top += el.offsetTop
        } while (el = el.offsetParent)
        return [top]
      }
    }
  },
  data() {
    return {
      show2depth: null,
      selDepth1Idx: -1,
      selDepth2Idx: -1,
      sideStyle: {
        'display': 'none'
      },
    }
  }
}
</script>

<style>
</style>