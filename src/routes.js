import Vue from 'vue';
import VueRouter from 'vue-router';
import Auth from './components/auth/auth.vue';
import Login from './components/auth/login.vue'
import Register from './components/auth/register.vue'

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/auth',
      component: Auth,
      redirect: '/auth/login',
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        }
      ]
    }
  ]
});

export default router;
