<template>
  <input type="text" v-model="keyWords">
  <h3>{{ keyWords }}</h3>
</template>

<script>
import { customRef } from 'vue'
export default {
  name: 'customRefStart',
  setup() {
    let keyWords = myRef('Hello', 1000)
    let timer

    function myRef(value, delay) {
      return customRef((track, trigger) =>  {
        return {
          get() {
            console.log('调用属性值', value);
            track() // 通知 Vue 追踪 value的变化
            return value
          },
          set(newValue) {
            value = newValue
            
            clearTimeout(timer)
            // 延迟 1s 后更新数据
            timer = setTimeout(() => {
              trigger()
            }, delay)
            console.log('更新属性值', newValue);
          }
        }
      })
    }

    return {
      keyWords
    }
  }
}
</script>