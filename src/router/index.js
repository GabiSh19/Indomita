import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/TravelsView',
      name: 'TravelsView',
      component: () => import('../views/TravelsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/countries',
      name: 'Pais',
      props: true,
      component: () => import('../views/CountriesView.vue')
    },
    {
      path: '/AdminTravel',
      name: '',
      props: true,
      component: () => import('../views/AdminTravel.vue')
    },
    {
      path: '/paises/:nombre',
      name: 'pais',
      props: true,
      component: () => import('../views/CountryView.vue')
    },
    {
      path: "/:notFound",
      component: () => import('../components/NotFound.vue')
    },
    {
      path: "/ConfirmTravel",
      component: () => import('../views/ConfirmTravel.vue')
    },
    {
      path: "/ContactView",
      component: () => import('../views/ContactView.vue')
    },
  ]
})

export default router
