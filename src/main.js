// 引入 createApp 工厂函数 
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App) 类似于 Vue2 中的 vm，但比 vm 更轻
createApp(App).mount('#app')
