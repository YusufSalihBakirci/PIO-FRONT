import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BodyView from "@/layouts/BodyView.vue"
import IndexDashboard from "@/pages/IndexDashboard.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: BodyView,
    meta: {
      title: 'Admiro - Premium Vue Admin Template',
    },
    children: [
      {
        path: '',
        name: 'defaultRoot',
        component: IndexDashboard,
        meta: {
          title: 'Admiro - Premium Vue Admin Template',
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,) => {
  if (typeof (to.meta.title) === 'string') {
    document.title = to.meta.title;
  }

});

export default router
