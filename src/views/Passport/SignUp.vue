<template>
    <el-form class="passport-form" ref="signUpForm" label-position="left">
        <h3 class="title">注册GiantGo</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="user.userName" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="signUp" :loading="isSubmitting">
                登录
            </el-button>
        </el-form-item>
    </el-form>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isSubmitting: false,
        signUpForm: {
          userName: '',
          password: ''
        }
      }
    },
    components: {},
    methods: {
      signUp () {
        this.isSubmitting = true

        this.$store.dispatch('signIn', this.user).then(() => {
          this.redirectPage()
        }, (error) => {
          this.isSubmitting = false
          this.$message(error['body']['message'])
        })
      },
      redirectPage () {
        let redirectUrl = this.$route.query.redirect

        if (redirectUrl) {
          this.$router.push({path: redirectUrl})
        } else {
          this.$router.push({name: 'home'})
        }
      }
    }
  }
</script>
<style lang="scss">

</style>
