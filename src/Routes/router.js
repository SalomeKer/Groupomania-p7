import WallPage from '../pages/Wall/WallPage.vue'
import loginPage from "../pages/loginPage.vue"
import { createRouter, createWebHistory} from "vue-router"


const routes = [
    //{ path: "/", component: App},
    { path: "/login", component: loginPage},
    {path: "/Home", component: WallPage}
]
//Creation du router
const router = createRouter({ history: createWebHistory(), routes })

export {router}
