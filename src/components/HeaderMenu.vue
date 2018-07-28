<template>
    <el-row class="header">
        <el-col :span="6">
            <span class="banner-label">GiantGo</span>
        </el-col>
        <el-col :span="14">

        </el-col>
        <el-col :span="4" class="user-info">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  {{email}}<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
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

    .banner-label {
        font-size: 20px;
        font-weight: bold;
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
    computed: {
      ...mapGetters([
        'email'
      ])
    },
    watch: {},
    methods: {
      handleCommand (command) {
        this[command]()
      },
      logout () {
        this.$store.dispatch('logout')
        this.$router.push({name: 'signIn'})
      }
    },
    mounted () {
    }
  }
</script>
