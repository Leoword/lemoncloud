'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import head from '../component/header.vue';

const routes = [
    {
        path: '/',
        component: head
    }
];

const router = new VueRouter({
    routes
});

export default router;