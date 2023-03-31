<template>
  <div class="son">
    <h3>我是 Son 组件</h3>
    <dialogCom />
  </div>
</template>

<script>
import dialogCom from "./dialogCom.vue"
export default {
  name: "sonCom",
  setup() {
    
  },
  components: {
    dialogCom
  }
}
</script>

<style scoped>
.son {
  background-color: orange;
  padding: 10px;
}
</style>