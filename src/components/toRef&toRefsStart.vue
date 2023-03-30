<template>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>工作：{{ type }}</h3>
  <h3>薪资：{{ salary }}K</h3>
  <button @click="age++">修改年龄</button>
  <button @click="salary++">修改薪资</button>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  name: 'toRef&toRefsStart',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端',
        salary: 30
      },
      hobby: ['篮球', '旅行']
    })
    console.log('asasxxaxsa', toRefs(person.job));
    return {
      name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      ...toRefs(person.job)
    }
  }
}
</script>