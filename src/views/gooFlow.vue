<template>
    <div class="app-container">
        <div id="flow"></div>
        <Button @click="exportImg">生成图片</Button>
        <Row>
            <Col span="24">
                <div id="canvas-container" class="canvas-container"></div>
            </Col>
        </Row>
    </div>
</template>
<script>
import html2canvas from 'html2canvas'
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
        return {}
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
                console.log('url=>',url)
            })
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
@import '../../static/flow/GooFlow.css';
</style>