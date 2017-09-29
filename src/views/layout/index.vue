<template>
    <div class="container">
        <div class="main-header">
            <div class="logo"><h2>后台管理中心</h2></div>
        </div>
        <div class="side-container">
            <side-menu></side-menu>
        </div>
        <div class="main-container">
            <app-main></app-main>
        </div>
    </div>
</template>
<script>
import SideMenu from './side-menu'
import AppMain from './app-main'
export default {
    name: 'layout',
    components:{
        SideMenu,
        AppMain
    },
    data() {
        return {
            open:false 
        }
    },
    computed: {

    },
    methods: {
        
    }
}
</script>
<style scoped>
.hamburger{
    transform: rotate(0deg);
    transition: .38s;
    transform-origin: 50% 50%;
}
.hamburger.active {
    transform: rotate(90deg);
}
</style>
