import Vue from "vue";
import App from "./App.vue";

import "./assets/main.css";

import Components from '@/entry.esm';

Vue.use(Components);

new Vue({
  render: (h) => h(App),
}).$mount("#app");




