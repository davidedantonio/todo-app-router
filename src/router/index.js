import { createRouter, createWebHistory } from 'vue-router'
import TodoPage from '../views/TodoPage'
import DonePage from '../views/DonePage'

const routes = [
  {
    path: '/',
    name: 'To do',
    component: TodoPage
  },
  {
    path: '/done',
    name: 'Done',
    component: DonePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
