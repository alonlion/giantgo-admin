<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <header-menu></header-menu>
        </el-col>
        <el-col :span="24" class="main">
            <side-menu></side-menu>
            <section class="content">
                <div class="breadcrumb-container">
                    <el-breadcrumb separator="/" class="breadcrumb-inner">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </section>
        </el-col>
    </el-row>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .container {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        .header {
            height: 60px;
            line-height: 60px;
            background: #20a0ff;
            color: #fff;
        }

        .main {
            position: absolute;
            top: 60px;
            bottom: 0px;
            overflow: hidden;
            .content {
                padding: 20px;
                overflow-y: auto;
                .breadcrumb-container {
                    margin-bottom: 15px;
                    .title {
                        width: 200px;
                        float: left;
                        color: #475669;
                    }
                    .breadcrumb-inner {
                        float: right;
                    }
                }
            }
        }
    }
</style>
<script>
import headerMenu from '../components/HeaderMenu.vue'
import sideMenu from '../components/SideMenu.vue'

export default {
  data () {
    return {}
  },
  components: {headerMenu, sideMenu},
  mounted () {

  }
}
</script>
