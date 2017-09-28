<template>
    <div class="main-content">
        <nav-bar></nav-bar>
        <transition name="fade" mode="out-in">
            <!-- <router-view :key="key"></router-view> -->
            <router-view></router-view>
        </transition>
        <div class="copyright">CopyRight &copy; 2017 Kanchil </div>
    </div>
</template>
<script>
import NavBar from './nav-bar'
export default {
    name: 'app-main',
    components: {
        NavBar
    },
    computed: {
        // key() {
        //     return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
        // }
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    }
}
</script>
<style scoped>

</style>
