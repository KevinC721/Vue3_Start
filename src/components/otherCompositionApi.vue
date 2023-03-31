<template>
  <h4>{{ sum }}</h4>
  <button @click="sum++">点我只读</button>

  <hr>
  <h3>{{ person }}</h3>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h3>工作：{{ type }}</h3>
  <h3>薪资：{{ salary }}K</h3>
  <button @click="age++">修改年龄</button>
  <button @click="salary++">修改薪资</button>
  <h3>x的值为：{{ x }}</h3>
  <button @click="x++">修改x的值</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <hr>
  <h3 v-if="person.car">车辆信息：{{ person.car }}</h3>
  <button @click="buyCar">给我买辆车</button>
  <button @click="person.car.name += '!'">修改车辆信息</button>
</template>

<script>
import { toRef, toRefs,  reactive, shallowRef, ref, shallowReadonly, toRaw, markRaw  } from 'vue'
export default {
  name: 'toRef&toRefsStart',
  setup() {
    // 只将对象中第一层属性实现响应式，深层次的不会实现响应式
    // let person = shallowReactive({
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端',
        salary: 30
      },
      hobby: ['篮球', '旅行']
    })
    // let x = ref(0)
    let x = shallowRef(0)
    let x1 = shallowRef({
      y: 0
    })

    // 将对象转为只读
    // person = readonly(person)
    // person = shallowReadonly(person)
    // 将普通 ref 定义的数据转为只读
    let sum = ref(0)
    // sum = readonly(sum)
    sum = shallowReadonly(sum)

    function showRawPerson() {
      // 输出响应式 person
      console.log(person);
      // 输出最原始的 person
      let rawPerson = toRaw(person)
      rawPerson.age++ // 不起作用，页面不会更新
      console.log(rawPerson);
    }

    function buyCar() {
      let car = {
        name: 'tank',
        price: '21.58'
      }
      // person.car = car // 增加后，car属性也是响应式的，页面会随着数据的修改而不断更新
      person.car = markRaw(car) // 使用 markRaw 新增的属性，均为普通数据类型，无响应式
    }

    return {
      name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      ...toRefs(person.job),
      person,
      x,
      x1,
      sum,
      showRawPerson,
      buyCar
    }
  }
}
</script>