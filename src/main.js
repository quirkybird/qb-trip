import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

import "normalize.css"
import "@/assets/icon/iconfont.css"
import "./assets/css/index.css"
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
