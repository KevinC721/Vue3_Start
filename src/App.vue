<template>
  <!-- <SetupStart /> -->
  <!-- <RefStart /> -->
  <!-- <ReactiveStartProxy /> -->
  <!-- <WatchStartComputedStart /> -->
  <!-- <button @click="isShow = !isShow">切换显示 Life 组件</button> -->
  <!-- <lifeStart v-if="isShow"/> -->
  <!-- <hookStart /> -->
  <toReftoRefsStart />
</template>

<script>
import { ref } from 'vue'
// import SetupStart from './components/SetupStart.vue'
// import RefStart from './components/RefStart.vue'
// import ReactiveStartProxy from './components/ReactiveStart&Proxy.vue'
// import WatchStartComputedStart from './components/WatchStart&ComputedStart.vue'
// import lifeStart from './components/lifeStart.vue'
// import hookStart from './components/hookStart.vue'
import toReftoRefsStart from './components/toRef&toRefsStart.vue'

export default {
  name: 'App',
  components: {
    // SetupStart,
    // RefStart,
    // ReactiveStartProxy,
    // WatchStartComputedStart,
    // lifeStart,
    // hookStart,
    toReftoRefsStart
  },
  setup() {
    let isShow = ref(true)

    return {
      isShow
    }
  }
}
</script>

<style>
</style>
