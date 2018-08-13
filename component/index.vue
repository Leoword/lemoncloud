<template>
    <div id="container">
        <b-navbar type="dark" variant="info" toggleable>
            <b-collapse is-nav id="nav_dropdown_collapse">
                <b-navbar-nav>
                    <b-navbar-brand>lemon cloud</b-navbar-brand>
                    <b-nav-item-dropdown v-for="(tab, key) in tabs"
                        :key="key"
                        :text="tab.name" left>
                        <b-dropdown-item v-for="(tab, key) in tab.subItem"
                            :key="key"
                            @click="changePage(tab.src)"
                        >{{tab.name}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item :href="rancherUrl" target="_blank">应用容器集群管理</b-nav-item>
                    <!-- <b-nav-item @click="changePage(rancherUrl)">应用容器集群管理</b-nav-item> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <iframe :src="iframeSrc" frameborder="0"></iframe>
        <!-- @click="activeItem = key;iframeSrc = tab.src" -->
    </div>
</template>

<script>
import axios from 'axios';

const EURAKE_BASE = 'http://39.107.110.199:18761';
const RABBITMQ_BASE = 'http://39.107.110.199:15672/#'

const tabs = [{
    name: '服务监控',
    subItem: [{
        name: '服务信息概览',
        src: `${EURAKE_BASE}`
    }, {
        name: '最新1000条服务信息',
        src: `${EURAKE_BASE}/lastn`
    }]
}, {
    name: '消息队列管理',
    subItem: [{
        name: '全部信息概览',
        src: `${RABBITMQ_BASE}/`
    }, {
        name: '连接信息概览',
        src: `${RABBITMQ_BASE}/connections`
    }, {
        name: '频道信息概览',
        src: `${RABBITMQ_BASE}/channels`
    }, {
        name: '交换机概览',
        src: `${RABBITMQ_BASE}/exchanges`
    }, {
        name: '队列概览',
        src: `${RABBITMQ_BASE}/queues`
    }, {
        name: '管理',
        src: `${RABBITMQ_BASE}/users`
    }]
}];

export default {
    name: 'test',
    data() {
        return {
            tabs: tabs,
            iframeSrc: 'http://39.107.110.199:18761/',
            rancherUrl: 'https://39.107.110.199:10443/'
        };
    },
    methods: {
        changePage(src) {
            if (src) {
                this.iframeSrc = src;
            }
        }
    }
}
</script>

<style lang="less">
html,body,#container {
    width: 100%;
    height: 100%;
}
body {
    overflow-y: hidden;
}
iframe {
    width: 100%;
    height: 100%;
}
</style>

