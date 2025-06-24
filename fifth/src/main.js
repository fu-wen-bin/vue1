import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 导入 Vant 组件库
import Vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app
  .use(router)
  .use(Vant)  // 注册 Vant 组件
  .mount('#app')
