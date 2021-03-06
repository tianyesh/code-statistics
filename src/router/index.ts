import Vue from 'vue';
import VueRouter from 'vue-router';
import Statistics from '../views/Statistics.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/statistics',
    alias: '/',
    name: 'statistics',
    component: Statistics
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
