import Vue from 'vue'
import App from './App.vue'

import '../app/assets/neutralino';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
