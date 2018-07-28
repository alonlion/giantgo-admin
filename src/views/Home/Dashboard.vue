<template>
    <div>aaa</div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    components: {},
    methods: {
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
