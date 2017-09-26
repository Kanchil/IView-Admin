<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
        <Row>
            <Col :span="spanLeft" class="layout-menu-left left-menu">
            <Menu active-name="1" width="auto">
                <!-- <div class="layout-logo-left"></div> -->
                <MenuItem name="1">
                <router-link to="/bmap">
                    <Icon type="ios-navigate" :size="iconSize"></Icon>
                    <span class="layout-text">百度地图</span>
                </router-link>
                </MenuItem>
            </Menu>
            </Col>
            <Col :span="spanRight" :offset="offsetLeft">
            <div class="layout-header">
                <Button type="text" @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </Button>
            </div>
            <div class="layout-content">
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">首页</BreadcrumbItem>
                        <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
                        <BreadcrumbItem>某应用</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content-main">
                    <router-view></router-view>
                </div>
            </div>
            <div class="layout-copy">
                2017 &copy; Kanchil
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    name: 'layout',
    data() {
        return {
            spanLeft: 3,
            spanRight: 21,
            offsetLeft: 3
        }
    },
    computed: {
        iconSize() {
            return this.spanLeft === 3 ? 16 : 24;
        }
    },
    methods: {
        toggleClick() {
            if (this.spanLeft === 3) {
                this.spanLeft = 1;
                this.spanRight = 23;
                this.offsetLeft = 1;
            } else {
                this.spanLeft = 3;
                this.spanRight = 21;
                this.offsetLeft = 3;
            }
        }
    }
}
</script>
<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
}

.left-menu {
    position: fixed;
    height: 100%;
    z-index: 999;
}

.layout-breadcrumb {
    padding: 10px 15px;
    text-align: left;
    border-bottom: 1px solid #e9eaec;
}

.layout-content {
    position: relative;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 0 10px 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #fff;
}

.layout-header {
    height: 60px;
    text-align: left;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.ivu-col {
    transition: width .2s ease-in-out;
}
</style>
