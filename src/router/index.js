import Vue from 'vue'
import Router from 'vue-router'

const HomeCom = () => import('views/home/Home')
const CategoryCom = () => import('views/category/Category')
const CartCom = () => import('views/cart/Cart')
const ProfileCom = () => import('views/profile/Profile')

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: HomeCom
      },
      {
        path: '/category',
        name: 'Category',
        component: CategoryCom
      },
      {
        path: '/cart',
        name: 'Cart',
        component: CartCom
      },
      {
        path: '/profile',
        name: 'Profile',
        component: ProfileCom
      }
]

export default new Router ({
    routes,
    mode: 'history'
})
