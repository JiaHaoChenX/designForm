import Vue from 'vue'
import VueRouter from 'vue-router'
import DraggableForm from '../views/DraggableForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DraggableForm',
    component: DraggableForm
  }
]

const router = new VueRouter({
  routes
})

export default router
