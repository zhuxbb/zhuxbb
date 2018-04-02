import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";

import store from "./store/index";
import router from "./router/router";

// Vue.use(ElementUI, { size: "small" });
Vue.use(ElementUI);

const app = new Vue({
  // el: "#app",
  store,
  router,
  ...App
  // render: h => h(App)
});

window.$message = app.$message;
window.$alert = app.$alert;
app.$mount("#app");
