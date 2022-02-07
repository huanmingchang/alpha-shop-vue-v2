import Vue from 'vue'
import VueRouter from 'vue-router'
// import NotFound from '../views/NotFound.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkout',
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    children: [
      {
        path: '/checkout/step1',
        name: 'checkout-step1',
        component: () => import('../components/Form1.vue'),
      },
      {
        path: '/checkout/step2',
        name: 'checkout-step2',
        component: () => import('../components/Form2.vue'),
      },
      {
        path: '/checkout/step3',
        name: 'checkout-step3',
        component: () => import('../components/Form3.vue'),
      },
    ],
  },

  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
