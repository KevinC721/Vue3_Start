<template>
  <h3>当前和为：{{ sum }}</h3>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let sum = ref(0)

    return {
      sum
    }
  },
  beforeCreate() {
    console.log('---- beforeCreate ----');
  },
  created() {
    console.log('---- created ----');
  },
  beforeMount() {
    console.log('---- beforeUnmount ----');
  },
  mounted() {
    console.log('---- mounted ----');
  },
  beforeUpdate() {
    console.log('---- beforeUpdate ----');
  },
  updated() {
    console.log('---- updated ----');
  },
  beforeUnmount() {
    console.log('---- beforeUnmount ----');
  },
  unmounted() {
    console.log('---- unmounted ----');
  }
}
</script>

<style scoped>
.hight-red {
  color: red;
}
</style>