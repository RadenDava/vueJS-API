import { createApp } from 'vue'
import App from './App.vue'

//! import CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//! import router 
import router from './router'

const app = createApp(App)

//! me register vue route agar bisa di akses globally di vuejs
app.use(router)
app.mount('#app')
