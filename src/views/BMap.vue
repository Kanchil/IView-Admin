<template>
    <div class="app-container">
        <baidu-map ref="map" class="bm-view" :ak="ak" :center="center" :zoom="zoom">
            <bm-control anchor="BMAP_ANCHOR_TOP_LEFT">
                <bm-auto-complete v-model="address" :sugStyle="{zIndex: 1}">
                    <input class="search-address" placeholder="搜地点...">
                    </Input>
                </bm-auto-complete>
            </bm-control>
            <bm-local-search :keyword="address" :auto-viewport="true"
             @infohtmlset="infohtmlset" :panel="false"></bm-local-search>
        </baidu-map>
    </div>
</template>

<script>
import { BaiduMap, BmControl, BmLocalSearch, BmAutoComplete } from 'vue-baidu-map'
import axios from 'axios'
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
            loading: false,
            addressArr: []
        }
    },
    computed: {
        url: function() {
            return `http://api.map.baidu.com/place/v2/search?query=银行&page_size=10&page_num=0&scope=1&region=北京&output=json&ak=${this.ak}`
        }
    },
    methods: {
        infohtmlset(poi) {
            console.log(poi)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bm-view {
    position: relative;
    margin-top: 60px;
    width: 100%;
    height: 400px;
}
.search-address{
    width: 300px;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    &:focus{
        border: 1px solid #2d8cf0;
        outline: none;
    }
}
</style>
