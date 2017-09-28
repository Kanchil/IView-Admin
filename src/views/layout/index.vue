<template>
    <div class="container">
        <div class="main-header">
            <div class="logo"><h2>后台管理中心</h2></div>
            <Button type="text" @click="toggleClick">
                <Icon type="navicon" size="32"></Icon>
            </Button>
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
                
        }
    },
    computed: {

    },
    methods: {
        toggleClick(){
            console.log('ss')
        }
    }
}
</script>
<style scoped>

</style>
