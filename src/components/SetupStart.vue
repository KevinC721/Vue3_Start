<template>
  <h2>信息：{{name}}</h2>
  <h3>在 Vue3 中读取 Vue2 的数据 {{sex}}</h3>
  <button @click="say">🔘 按钮</button>
  <hr>
  <h2>向下兼容 Vue2 配置</h2>
  <h3>性别：{{sex}}</h3>
  <h3>在 Vue2 中读取 Vue3 的数据 {{name}}</h3>
  <button @click="say2">🔘 按钮</button>
</template>

<script>
// import { h } from 'vue'
export default {
  name: 'SetupStart',
  //! Vue3 向下兼容 Vue2 的配置方法，但不建议这么写，在 Vue3 中最好使用 Vue3 的配置，否则会出现一些不兼容的情况
  data() {
    return {
      sex: 'man'
    }
  },
  methods: {
    say2() {
      alert(this.sex)
    }
  },
  setup() {
    let name = 'HelloWorld';

    function say() {
      alert(name)
      //! 在 Vue3 中无法读取 Vue2 配置中的数据
      // alert(sex)
    }

    // setup 有两种返回形式
    // 第一种：返回一个对象，此时对象中的属性、方法，在模板中均可直接使用（常用）
    return {
      name,
      say
    }

    // 第二种：返回一个渲染函数，此时可以自定义渲染内容（很少用）
    // return () => {
    //   return h('h1', name)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
