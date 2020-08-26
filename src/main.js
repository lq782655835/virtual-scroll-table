import Vue from "vue";
import App from "./app.vue";
import VirtualTableScroll from "./components";
Vue.use(VirtualTableScroll);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
