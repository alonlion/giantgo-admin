<template>
    <el-container class="bg-container">
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>
            <footer-menu class="footer"></footer-menu>
        </el-footer>
    </el-container>
</template>
<style lang="scss">
    .passport-form {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .title {
            margin: 0 auto 40px auto;
            text-align: center;
            color: #505458;
        }
        .remember {
            margin: 0 0 35px 0;
        }
    }

    .bg-container {
        height: 100%;
        background-size: cover;
        background-image: url('../assets/images/background.png');
        background-repeat: no-repeat;
    }
</style>
<script>
  import footerMenu from '../components/FooterMenu.vue'

  export default {
    data () {
      return {}
    },
    components: {footerMenu},
    mounted () {
    }
  }
</script>
