<template>
    <div class="app-container">
        <Card :bordered="false">
            <p slot="title">信息</p>
            <p>当前地址：{{address}}</p>
            <p>当前经度:{{point.lng}}&nbsp;&nbsp;&nbsp;&nbsp;当前纬度：{{point.lat}}</p>
        </Card>
        <baidu-map ref="map" class="bm-view" :ak="ak" :center="center" :zoom="zoom">
            <bm-control anchor="BMAP_ANCHOR_TOP_LEFT">
                <bm-auto-complete v-model="searchAddress" :sugStyle="{zIndex: 1}">
                    <input class="search-address" placeholder="搜地点...">
                    </Input>
                </bm-auto-complete>
            </bm-control>
            <bm-local-search :keyword="searchAddress" :selectFirstResult="true" :auto-viewport="true" @infohtmlset="infohtmlset" :panel="false"></bm-local-search>
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
            center: { lng: 117.178611, lat: 39.143134 },
            zoom: 20,
            address: '',
            point: {
                lng: 117.178611,
                lat: 39.143134
            },
            searchAddress: '',
            loading: false,
        }
    },
    mounted() {
        this.searchAddress = "中关村e谷大厦"
    },
    methods: {
        infohtmlset(poi) {
            if(poi.type == '3'){
                this.address = poi.title
            }else{
                this.address = poi.address
            }
            this.point = poi.point
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.bm-view {
    position: relative;
    margin-top: 60px;
    width: 100%;
    height: 400px;
}

.search-address {
    width: 300px;
    height: 35px;
    line-height: 35px;
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    &:focus {
        border: 1px solid #2d8cf0;
        outline: none;
    }
}
</style>
