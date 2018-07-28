<template>
    <el-row class="footer">
        <span>联系我们: 15930181489</span>
        <span>技术支持：GiantGo</span>
        <span>问题反馈邮箱：spx123456@foxmail.com</span>
        <span class="contact-us">
            联系我们：
            <el-popover placement="top" width="200" trigger="hover">
                <img src="../assets/images/qrCode.jpg" class="qr-code"/>
                <img slot="reference" src="../assets/images/qrCode.jpg"/>
            </el-popover>
        </span>
    </el-row>
</template>
<style lang="scss">
    .footer {
        span {
            margin: 0 15px;
        }
    }

    .contact-us {
        img {
            display: inline-block;
            width: 43px;
            height: 43px;
            padding: 3px;
            vertical-align: middle;
            background-color: #fff;
        }
    }

    .qr-code {
        width: 200px;
    }
</style>
<script>
  export default {
    name: 'nav-menu',
    data () {
      return {}
    },
    props: {},
    components: {},
    computed: {},
    watch: {},
    methods: {},
    mounted () {
    }
  }
</script>
