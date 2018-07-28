<template>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    mounted () {
    }
  }
</script>

<style lang="scss">
    @import '~normalize.css/normalize.css';
    @import '~nprogress/nprogress.css';
    @import 'styles/index';
</style>

