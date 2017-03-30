import Vue from "vue";
import App from "./App.vue";
import VueFire from "vuefire";
import Firebase from "firebase";

Vue.use(VueFire);

new Vue({
  el: '[data-render="root"]',
  render: h => h(App)
})
