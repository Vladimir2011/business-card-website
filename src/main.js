import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";

import './assets/scss/main.scss'
import 'animate.css'

const app = createApp(App)
app.use(VueGtag, {
  config: { id: 'G-CL3EYX1FEN' }
})

app.mount('#app')
