import Vue from 'vue'
import VueRouter from 'vue-router'
const login = () => import('@/view/login')
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/home',
        component:() => import('../view/home')
    }

]
})

router.beforeEach((to, from, next) =>{
    
    if(to.path == '/login') return next()
    const username = sessionStorage.getItem('username')

    if(!username) return next('/login')

    next()
})

export default router



