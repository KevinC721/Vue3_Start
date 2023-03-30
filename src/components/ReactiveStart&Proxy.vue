<template>
  <h1>Reactive</h1>
  <i>作用：定义一个对象类型的响应式数据（基本类型不要用它，要用 ref 函数）</i><br>
  <i>reactive 接受一个对象（或数组），返回一个代理对象（Proxy 的实例对象，简称 proxy 对象）</i><br>
  <i>内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作</i>
  <hr>

  <h3>姓名：{{ person.name }}</h3>
  <h3 v-show="person.sex">性别：{{ person.sex }}</h3>
  <h3>工作：{{ person.job.type }}</h3>
  <h3>薪资：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <button @click="change">🔘 按钮</button>
  <button @click="addProp">🔘 添加一个属性</button>
  <button @click="deleteProp">🔘 删除一个属性</button>
  <hr>
  
  <h1>Vue2 与 Vue3 响应式原理对比</h1>
  <h2>Vue2</h2>
  <h3>实现原理</h3>
  <ol>
    <li>对象类型：通过 object.defineProperty()对属性的读取、修改进行拦截（数据劫持）</li>
    <li>
      数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）<br>
      <code>
        Object.defineProperty(data, 'count', {
          get() {},
          set() {}
        })
      </code>
    </li>
  </ol>
  <h3>存在问题</h3>
  <ol>
    <li>新增<b class="hight-red">属性、删除</b>属性，界面不会更新</li>
    <li>直接通过<b class="hight-red">下标修改</b>数组，界面不会自动更新</li>
  </ol>
  <h2>Vue3</h2>
  <h3>实现原理</h3>
  <ol>
    <li>通过 Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等</li>
    <li>通过 Reflect（反射）：对被代理对象的属性进行操作。相比较 Object，Reflect 更加友好，可以是开发者更灵活的通过操作返回的结果进行后续逻辑编写与异常处理</li>
    <li>
      <code>
        new Proxy(data, {<br>
          // 拦截读取属性值<br>
          get(target, prop) {<br>
            return Reflect.get(target, prop)<br>
          },<br>
          // 拦截设置属性值或添加新属性
          set(target, prop, value) {<br>
            return Reflect.set(target, prop, value)<br>
          },<br>
          // 拦截删除属性
          deleteProperty(target, prop) {<br>
            return Reflect.deleteProperty(target, prop)
          }<br>
        })<br>
        <br>
        proxy.name = 'tom'
      </code>
    </li>
  </ol>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    // reactive 定义的对象，是一个 proxy 定义的对象
    let person = reactive({
      name: '张三',
      job: {
        type: '前端',
        salary: '30K'
      },
      hobby: ['篮球', '旅行']
    })

    // Vue3 响应式实现原理
    // const p = new Proxy(person)
    // console.log(p);

    function change() {
      person.job.type = '后端'
      person.job.salary = '40K'
      person.hobby[2] = '游戏'
      console.log('🎾🎾🎾', person);
    }

    function addProp() {
      person.sex = 'male'
    }
    function deleteProp() {
      delete person.sex
    }

    return {
      person,
      change,
      addProp,
      deleteProp
    }
  }
}
</script>

<style scoped>
.hight-red {
  color: red;
}
</style>