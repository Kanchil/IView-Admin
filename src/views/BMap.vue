<template>
    <div class="app-container">
        <baidu-map class="bm-view" :ak="ak" :center="center" :zoom="zoom">
            <bm-control :offset="{width: '10px', height: '10px'}">
                <bm-auto-complete v-model="address" :sugStyle="{zIndex: 1}">
                    <Input v-model="address" placeholder="请输入..." style="width: 300px">
                        <Button slot="append" icon="ios-search" @click="searchAddress"></Button>
                    </Input>
                </bm-auto-complete>
            </bm-control>
            <!-- <bm-local-search :keyword="address" :auto-viewport="true"></bm-local-search> -->
        </baidu-map>
    </div>
</template>

<script>
import { BaiduMap, BmControl, BmLocalSearch,BmAutoComplete } from 'vue-baidu-map'
export default {
    name: '',
    components: {
        BaiduMap,
        BmControl,
        BmLocalSearch,
        BmAutoComplete,
    },
    data() {
        return {
            ak: '34xTcparwDZW9knG2fcUhFGSrumvaZq7',
            center: { lng: 116.404, lat: 39.915 },
            zoom: 15,
            address: '',
            keyword: '西南角',
            location: '天津',
        }
    },
    methods: {
        // 搜索
        searchAddress(val) {
            let address = this.address;
            console.log(address)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bm-view {
    margin-top: 60px;
    width: 100%;
    height: 400px;
}
</style>
