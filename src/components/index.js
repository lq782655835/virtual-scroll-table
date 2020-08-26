import Component from "./virtual-scroll-table.jsx";
import infiniteScroll from 'vue-infinite-scroll'

function install(Vue, options = {}) {
  if (install.installed) return;
  install.installed = true;

  Vue.use(infiniteScroll)
  Vue.component("virtual-scroll-table", Component);
}
Component.install = install;

// auto plugin install
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(Component);
}

// export default
export default Component;
