import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createRouter, createWebHistory} from "vue-router"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

import App from './App.vue'
import Wall from './components/Wall.vue'
import login from "./components/login.vue"


const routes = [
    //{ path: "/", component: App},
    { path: "/login", component: login},
    {path: "/Home", component: Wall}
]
//Creation du router
const router = createRouter({ history: createWebHistory(), routes })

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
