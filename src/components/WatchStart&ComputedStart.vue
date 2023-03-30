<template>
  <h3>姓：{{ person.firstName }}</h3>
  <h3>名：{{ person.lastName }}</h3>
  <h3>全名（简写）：{{ fullName }}</h3>
  <h3>全名（完整）：{{ fullNameAll }}</h3>
  <hr>
  <h3>当前和为：{{ sum }}</h3>
  <button @click="sum++">点我+1</button>
  <hr>
  <h3>当前信息为：{{ msg }}</h3>
  <button @click="msg += '!'">修改信息</button>
</template>

<script>
import { reactive, ref, computed, watch, watchEffect } from 'vue'

export default {
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好啊')
    // reactive 定义的对象，是一个 proxy 定义的对象
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })

    // 计算属性简写
    let fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })
    // 计算属性完整写法
    let fullNameAll = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.firstName = nameArr[1]
      }
    })

    // 1. 监听单个属性
    watch(sum, (newValue, oldValue) => {
      console.log('只监听 sum 的 watch 监听到 sum 变了', newValue, oldValue);
    }, {immediate: true})
    // 2. 监听多个属性
    watch([sum, msg], (newValue, oldValue) => {
      console.log('监听多个属性的 watch 监听到了属性值的变化', newValue, oldValue);
    })
    // 3. 监听 reactive 定义的响应式数据
    //      若 watch 监听的是 reactive 定义的响应式数据，则无法正确获得 oldValue
    //      若 watch 监听的是 reactive 定义的响应式数据，则强制开启了深度监听
    watch(person, (newValue, oldValue) => {
      console.log('person 内的属性数据发生变化了', newValue, oldValue);
    }, {immediate: true, deep: false})
    // 4. 监听 reactive 定义的响应式数据中某个属性
    watch(() => person.job, (newValue, oldValue) =>  {
      console.log('person 中的 job 属性值发生变化了 ', newValue, oldValue);
    }, {immediate: true, deep: true})
    // 5. 监听 reactive 定义的响应式数据中的某些属性
    watch(() => ['job'], (newValue, oldValue) => {
      console.log('同时监听 person 对象中的多个属性值的变化', newValue, oldValue);
    }, {immediate: true})

    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.age
      console.log('watchEffect 监听到使用的属性改变了', x1, x2);
    })

    return {
      person,
      sum,
      msg,
      fullName,
      fullNameAll
    }
  }
}
</script>

<style scoped>
.hight-red {
  color: red;
}
</style>