// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Layout from './components/layout'
import pageIndex from './pages/index'
import DetailPage from './pages/detail'
import OrderListPage from './pages/orderList'
import DetailAnaPage from './pages/detail/analysis'
import DetailCount from './pages/detail/count'
import DetailForecast from './pages/detail/forecast'
import DetailPublic from './pages/detail/publish'

// Vue.config.productionTip = false;
Vue.use(VueRouter);//注册组建
Vue.use(VueResource);
let router = new VueRouter({
  mode:'history',
  routes: [
    {
      path:'/',
      component: pageIndex
    },
    {
      path: '/orderList',
      component: OrderListPage
    },
    {
      path:'/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCount
        },
        {
          path: 'forecast',
          component: DetailForecast
        },
        {
          path: 'publish',
          component: DetailPublic
        }
     ]
    }
  ]
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
});
