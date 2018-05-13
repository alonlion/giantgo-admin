<template>
    <el-header>
        <el-row class="header">
            <el-col :span="6">
                <span>北京企业信息管理系统</span>
            </el-col>
            <el-col :span="14">

            </el-col>
            <el-col :span="4" class="user-info">
                <el-dropdown>
                <span class="el-dropdown-link">
                  {{userInfo.Email}}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </el-header>
</template>
<style lang="scss">
    .logo {
        height: 50px;
        width: auto;
        margin-left: 10px;
        margin-top: 5px;
    }

    .user-info {
        text-align: right;
        float: right;
        span {
            cursor: pointer;
            color: #fff;
        }
    }
</style>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'nav-menu',
  data () {
    return {
      currentIndex: '0'
    }
  },
  props: {},
  components: {},
  created () {
    this.routeChange()
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  watch: {
    '$route': 'routeChange'
  },
  methods: {
    routeChange () {
    }
  },
  mounted () {
  }
}
</script>
