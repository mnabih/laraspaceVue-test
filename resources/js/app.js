/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
import router from './router.js'
import utils from './helpers/utilities'
import ThemeSwitcher from './components/ThemeSwitcher'

require('./bootstrap')

Vue.prototype.$utils = utils


/************ new ***********/

import 'jquery';
import 'bootstrap';
window.$ = require('jquery')


import { Form, HasError, AlertError } from 'vform'
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
window.Form = Form;

import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

window.Fire = new Vue();





/********** end ************/

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
  router,

  // Theme Swiching Demo Component (You can remove it if not required)
  components: {
    ThemeSwitcher
  }
}).$mount('#app')
