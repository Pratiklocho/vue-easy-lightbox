import Lightbox from './main.js'
import Vue from 'vue/dist/vue.min.js'
import App from './App.vue'

Vue.use(Lightbox)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
