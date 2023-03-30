<template>
  <h2>ref</h2>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>工作种类：{{job.type}}</h3>
  <h3>薪资：{{job.salary}}</h3>
  <button @click="change">🔘 修改</button>
</template>

<script>
// ref 定义一个响应式数据
import { ref } from 'vue'
export default {
  setup() {
    let name = ref('张三')
    let age = ref(20)
    let job = ref({
      type: '前端',
      salary: '30K'
    })

    function change() {
      name.value = '李四'
      age.value = 30
      // 修改响应式对象中的属性值时，不需要[属性.value]来修改，直接[属性 = xxx]即可
      job.value.type = '后端'
      job.value.salary = '40K'
      console.log('修改后的数据为：', name, age, job)
    }

    return {
      name,
      age,
      job,
      change
    }
  }
}
</script>