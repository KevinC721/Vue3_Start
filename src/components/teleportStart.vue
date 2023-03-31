<template>
  <div class="child">
    <h3>我是 Child 组件</h3>
    <SonCom />
  </div>
</template>

<script>
import SonCom from './sonCom.vue'
export default {
  name: 'teleportStart',
  setup() {
    
  },
  components: {
    SonCom
  }
}
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>