<template>
  <div class="content">
    <h3>父组件</h3>
    <!-- Suspense 配合 defineAsyncComponent 优化交互体验，当子组件还为加载完成时，使用 fallback 插槽中的视图进行展示 -->
    <Suspense>
      <template v-slot:default>
        <sonCom1 />
      </template>
      <template v-slot:fallback>
        <h3>请稍等，加载中...</h3>
      </template>
    </Suspense>
    <!-- <sonCom /> -->
  </div>
</template>

<script>
// import sonCom from './sonCom.vue' // 静态引入
// 异步引入 defineAsyncComponent 实现方式
import { defineAsyncComponent } from 'vue'
const sonCom1 = defineAsyncComponent(() => import('./sonCom.vue'))
export default {
  name: 'suspenseStart',
  setup() {
    
  },
  components: {
    // sonCom,
    sonCom1
  }
}
</script>

<style scoped>
.content {
  background-color: gray;
  padding: 10px;
}
</style>