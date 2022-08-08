import WallPage from '../pages/Wall/WallPage.vue'
import loginPage from "../pages/loginPage.vue"
import modifyPost from "../pages/Wall/modifyPost.vue"
import { createRouter, createWebHistory} from "vue-router"



const routes = [
    //{ path: "/", component: App},
    { path: "/login", component: loginPage},
    { path: "/signup", component: loginPage},
    {path: "/home", component: WallPage},
    { name: "modify", path: "/home/modify", component: modifyPost, props: true },
    {path: "/", redirect: "/home"}
]
//Creation du router
const router = createRouter({ history: createWebHistory(), routes })


//Controle des accés aux pages "public"
router.beforeEach((to, from) => {
 if (isLoginRequired(to)){
  return router.push("/login")
  }
})

function isLoginRequired(to){
  if (!isPrivatePage(to)) return false
  //S'il n'y a pas de token dans le cache alors le login est required
  if (!isTokenInCache()) return true
  return false
}

function isPrivatePage(to) {
const publicPages = ["/login", "/signup"]
return !publicPages.includes(to.path)
}

function isTokenInCache(){
  return localStorage.getItem("token") != null
}

export {router}
