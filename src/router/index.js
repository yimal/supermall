import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Cart = () => import('../views/cart/Cart.vue')

//安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    comments: Home
  },
  {
    path: '/category',
    comments: Category
  },
  {
    path: '/profile',
    comments: Profile
  },
  {
    path: '/cart',
    comments: Cart
  }
]
//创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router