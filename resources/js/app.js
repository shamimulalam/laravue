
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'

// Routes are here
Vue.use(VueRouter);
// ES6 Modules or TypeScript

// Multilanguage
import i18n from './localization/i18n'




// Multilanguage

// Vue progress bar
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
});
// VForm
import { Form, HasError, AlertError } from 'vform'

// sweetalert2 start
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000
});

window.Toast = Toast;
// sweetalert2 end
// pagination component
Vue.component('pagination', require('laravel-vue-pagination'));
// new vue instant
window.Fire = new Vue();

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
import routes from './routes'
const router = new VueRouter({
    mode : 'history',
    routes : routes,
});


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
import {auth} from './local-db/auth';

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('locale-changer', require('./components/master/LocaleChanger.vue').default);
Vue.component('main-menu', require('./components/master/MainMenu').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    i18n,
    store:auth,

});