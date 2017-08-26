import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import Hello from '@/components/Hello'
const userLogin = resolve => require(['../views/user/login.vue'], resolve);
const index = resolve => require(['../views/index/index.vue'], resolve);
Vue.use(iView);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {path: '/userLogin', component: userLogin,name:'userLogin'}
  ]
})
