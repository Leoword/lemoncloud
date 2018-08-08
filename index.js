'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'font-awesome/css/font-awesome.min.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import App from './component/app.vue';

import router from './router';
import store from './store/index';

const $app = new Vue(Object.assign({ router, store }, App));

window.addEventListener('load', () => {
	$app.$mount('#app');
});

export default { router, store };
