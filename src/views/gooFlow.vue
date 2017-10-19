<template>
    <div class="app-container">
        <div id="flow"></div>
        <img id="img" :src="logo" alt="">
        <Button @click="exportImg" type="primary">生成图片</Button>
        <Button @click="exportImg2" type="success">生成图片2</Button>
        <Row>
            <Col span="24">
            <div id="canvas-container" class="canvas-container"></div>
            </Col>
        </Row>
    </div>
</template>
<script>
import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image';
import logo from '@/assets/logo.png'
import '@/../static/flow/GooFlow';
var property = {
    width: 1200,
    height: 800,
    toolBtns: ["start round mix", "end round", "task"],
    haveHead: true,
    headLabel: true,
    headBtns: ["print", "open", "save", "undo", "redo", "reload"],
    haveTool: true,
    haveGroup: true,
    useOperStack: true
};
var remark = {
    cursor: "选择指针",
    direct: "结点连线",
    start: "入口结点",
    "end": "结束结点",
    "task": "任务结点",
    group: "组织划分框编辑开关"
};
export default {
    name: '',
    components: {},
    data() {
        return {
            logo:logo
        }
    },
    created() {
        console.log(html2canvas)
    },
    mounted() {
        this.flow = $.createGooFlow($("#flow"), property);
        this.flow.setNodeRemarks(remark);
    },
    methods: {
        exportImg() {
            console.log('export');
            html2canvas(document.getElementById('flow')).then(function(canvas) {
                console.log('ss')
                let canvasContainer = document.getElementById('canvas-container');
                canvasContainer.appendChild(canvas);
                var url = canvas.toDataURL();
                console.log('url=>', url)
            })
        },
        exportImg2() {
            console.log('export2');
            let node = document.getElementById('flow');
            console.log('node',node)
            domtoimage.toPng(node)
                .then(function(dataUrl) {
                    console.log('dataurl=>',dataUrl)
                    var img = new Image();
                    img.src = dataUrl;
                    let canvasContainer = document.getElementById('canvas-container');
                    canvasContainer.appendChild(img);
                }).catch(function(error) {
                    console.error('oops, something went wrong!', error);
                });
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
@import '../../static/flow/GooFlow.css';
</style>