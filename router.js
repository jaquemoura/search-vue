import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const routes = [
  {
    path: "/filtro",
    // name: filtro,
    component: () => import(/* webpackChunkName: "filtro" */ '@/components/listagem/todos-filtros.vue'),
  }
]
