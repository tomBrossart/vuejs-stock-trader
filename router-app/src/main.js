// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './vuex/store'
import VueCurrencyFilter from 'vue-currency-filter'
import VueResource from 'vue-resource'


Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = 'https://tomtests-38c25.firebaseio.com/'


Vue.use(VueCurrencyFilter,
  {
    symbol : '$',
    thousandsSeparator: ',',
    fractionCount: 2,
    fractionSeparator: '.',
    symbolPosition: 'front',
    symbolSpacing: true
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
