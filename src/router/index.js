import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Base.vue'),
    children: [
      {
        path: 'lista',
        component: () => import('../views/Nav.vue'),
        children: [
          {
            path: 'informe',
            component: () => import('../views/ListaInforme.vue')
          },
          {
            path: 'historico',
            component: () => import('../views/ListaHistorico.vue')
          },
        ]
      },
      {
        path: 'crear-informe',
        component: () => import('../views/CrearInforme.vue')
      },
    ]
  }
]

const router = new VueRouter({
  base: '/buildapp/',
  routes
})

export default router
