import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/:name',
    name: 'Superhero',
    component: () => import('../pages/search.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
