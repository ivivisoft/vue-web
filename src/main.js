// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap-theme.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
import './assets/css/docs.css'
import './assets/css/prism-coy.css'
import './assets/css/style.css'
import 'vue-strap/dist/vue-strap-lang'




new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
