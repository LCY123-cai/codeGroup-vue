import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import Hello from '@/components/Hello'
const userLogin = resolve => require(['../views/user/login.vue'], resolve);
Vue.use(iView);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {path: '/userLogin', component: userLogin,name:'userLogin'}
  ]
})
