<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
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

    #app {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }
</style>

