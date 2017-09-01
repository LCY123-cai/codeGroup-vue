import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
const login = resolve => require(['../views/login/login.vue'], resolve);
const index = resolve => require(['../views/index/index.vue'], resolve);
const register = resolve => require(['../views/user/register.vue'], resolve);
const showUser = resolve => require(['../views/show/showUser.vue'], resolve);
const showAdmin = resolve => require(['../views/show/showAdmin.vue'], resolve);
const showOneAdmin = resolve => require(['../views/show/showOneAdmin.vue'], resolve);
const showOneUser = resolve => require(['../views/show/showOneAdmin.vue'], resolve);
Vue.use(iView);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {path: '/login', component: login,name:'login'},
    {path: '/register', component: register,name:'register'},
    {path: '/showUser', component: showUser,name:'showUser'},
    {path: '/showAdmin', component: showAdmin,name:'showAdmin'},
    {path: '/showOneAdmin', component: showAdmin,name:'showOneAdmin'},
    {path: '/showOneAdmin', component: showAdmin,name:'showOneAdmin'},
  ]
})
