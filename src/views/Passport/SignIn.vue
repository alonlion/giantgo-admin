<template>
    <el-form class="passport-form" ref="form" :model="form" :rules="rules" label-position="left" label-width="0px">
        <h3 class="title">登录GiantGo</h3>
        <el-form-item prop="username" :error="errors.userName">
            <el-input type="text" v-model="form.userName" auto-complete="off" placeholder="手机/邮箱"/>
        </el-form-item>
        <el-form-item prop="password" :error="errors.password">
            <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"/>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="signIn" :loading="isSubmitting">
                登录
            </el-button>
        </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data () {
      return {
        isSubmitting: false,
        form: {
          userName: '15930181489',
          password: 'Pass@word1'
        },
        rules: {
          userName: [
            {required: true, message: '请输入用户名'},
            {max: 255, message: '长度不超过255个字符'}
          ],
          password: [
            {required: true, message: '请输入密码'},
            {max: 255, message: '长度不超过255个字符'}
          ]
        },
        errors: {
          username: '',
          password: ''
        }
      }
    },
    components: {},
    methods: {
      signIn () {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.isSubmitting = true
            this.$store.dispatch('signIn', {
              userName: this.form.userName,
              password: this.form.password
            }).then(() => {
              this.redirectPage()
            }).catch(({response}) => {
              this.isSubmitting = false
              this.$message.warning(response.data.desc)
            })
          }
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
