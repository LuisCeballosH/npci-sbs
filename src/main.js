import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from 'bootstrap-vue'
import VeeValidate from 'vee-validate';
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';

Vue.config.productionTip = false

Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    invalid: 'is-invalid'
  }
});

Vue.use(VueAxios, axios)

// axios.defaults.baseURL = 'http://localhost:9080';
axios.defaults.baseURL = 'data';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons);
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
