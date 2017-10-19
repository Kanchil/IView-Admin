<template>
    <div class="app-container">
        <img id="img" :src="logo" alt="">
        <Button @click="exportImg">生成图片</Button>
        <Row>
            <Col span="24">
                <div id="canvas-container" class="canvas-container"></div>
            </Col>
        </Row>
    </div>
</template>

<script>
import logo from '@/assets/logo.png'
import html2canvas from 'html2canvas'
export default {
    name: 'hello',
    data() {
        return {
            logo: logo
        }
    },
    mounted() {

    },
    methods: {
        exportImg() {
            console.log('export');
            html2canvas(document.getElementById('img')).then(function(canvas) {
                console.log('ss')
                let canvasContainer = document.getElementById('canvas-container');
                canvasContainer.appendChild(canvas);
                var url = canvas.toDataURL();
                console.log('url=>',url)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less" scoped>
.canvas-container{
    width: 400px;
    height: 400px;
    margin: 0 auto;
    canvas{
        text-align: center;
    }
}
</style>
