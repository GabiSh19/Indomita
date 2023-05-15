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
      path: '/travels',
      name: 'travels',
      component: () => import('../views/TravelsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/countries',
      name: 'Pais',
      props: true,
      component: () => import('../views/CountriesView.vue')
    },
    {
      path: '/AppPrueba',
      name: 'AppPrueba',
      props: true,
      component: () => import('../views/AppPrueba.vue')
    },
    {
      path: '/paises',
      name: 'paises',
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
      path: "/HomeSass",
      component: () => import('../views/HomeSass.vue')
    },
  ]
})

export default router
