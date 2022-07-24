import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { createRouter, createWebHistory} from "vue-router"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

import App from './App.vue'
import WallPage from './pages/Wall/WallPage.vue'
import loginPage from "./pages/loginPage.vue"


const routes = [
    //{ path: "/", component: App},
    { path: "/login", component: loginPage},
    {path: "/Home", component: WallPage}
]
//Creation du router
const router = createRouter({ history: createWebHistory(), routes })

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
