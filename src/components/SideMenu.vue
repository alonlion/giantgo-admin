<template>
    <el-menu :default-active="currentIndex">
        <el-menu-item v-for="(menu, index) in menus" :key="menu.title" :index="index + ''">
            <router-link :to="menu.url">
                <i :class="menu.icon"></i>{{menu.title}}
            </router-link>
        </el-menu-item>
    </el-menu>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    .el-aside {
        position: absolute;
        left: 0;
        height: 100%;
    }

    .el-menu {
        height: 100%;
        border-radius: 2px;
        list-style: none;
        position: relative;
        margin: 0;
        padding-left: 0;
        background-color: #eef1f6;
        .el-menu-item a {
            display: block;
            .active {
                color: #20a0ff;
            }
        }
    }
</style>
<script>
  import { findIndex, find } from 'lodash'

  export default {
    name: 'side-menu',
    data () {
      return {
        currentIndex: ''
      }
    },
    props: {
      menus: Array
    },
    components: {},
    created () {
      this.routeChange()
    },
    watch: {
      '$route': 'routeChange'
    },
    methods: {
      routeChange () {
        this.currentIndex = findIndex(this.menus, menu => {
          return !!find(this.$route.matched, matched => {
            return matched.name === menu.url.name
          })
        }).toString()
      }
    },
    mounted () {
    }
  }
</script>
