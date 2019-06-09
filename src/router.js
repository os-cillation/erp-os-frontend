import Vue from 'vue';
import Router from 'vue-router';
import APIView from './views/APIView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: APIView,
    },
    {
      path: '/table',
      name: 'table',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Table.vue'),
    },
  ],
});
