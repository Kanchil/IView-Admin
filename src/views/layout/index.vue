<template>
    <div class="container">
        <div class="side-container">
            <side-menu></side-menu>
        </div>
        <app-main></app-main>
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

    }
}
</script>
<style scoped>

</style>
