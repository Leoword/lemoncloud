<template>
    <b-alert variant="success" show>Success Alert</b-alert>
</template>

<script>
import axios from 'axios';

export default {
    name: 'test',
    mounted() {
        return axios.get('/eureka/apps').then((res) => {
            console.log(res.data);
        })
    }
}
</script>
