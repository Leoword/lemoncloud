'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainPage from '../component/index.vue';

const routes = [
    {
        path: '/',
        component: MainPage
    }
];

const router = new VueRouter({
    routes
});

export default router;