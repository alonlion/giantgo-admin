<template>
    <el-container style="height: 100%;">
        <el-header>
            <header-menu></header-menu>
        </el-header>
        <el-container>
            <el-aside width="230px">
                <side-menu :menus="menus"></side-menu>
            </el-aside>
            <el-container>
                <el-main class="main">
                    <div class="breadcrumb-container">
                        <el-breadcrumb separator="/" class="breadcrumb-inner">
                            <el-breadcrumb-item>当前位置：{{roles}}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-main>
                <el-footer>
                    <footer-menu></footer-menu>
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
  import headerMenu from '../components/HeaderMenu.vue'
  import footerMenu from '../components/FooterMenu.vue'
  import sideMenu from '../components/SideMenu.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    data () {
      return {
        menus: [
          {
            title: '可视化建站',
            url: {
              name: 'dashboard'
            },
            icon: 'el-icon-fa-bell'
          }
        ]
      }
    },
    components: {headerMenu, sideMenu, footerMenu},
    computed: {
      ...mapGetters([
        'roles'
      ])
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
</style>
