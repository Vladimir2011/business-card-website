import { createApp } from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'

import './assets/scss/main.scss'
import 'animate.css'

const app = createApp(App)

app.use(VueMeta)

app.mount('#app')
