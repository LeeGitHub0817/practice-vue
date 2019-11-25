import Vue from 'vue';
import Router from 'vue-router';

import App from '../App';
import Home from '../page/Home.vue';

import Communication from '@/page/Communication.vue';
import DialogBox from '@/page/DialogBox.vue';
import LazyLoad from '@/page/LazyLoad';
import SlotPage from '../page/SlotPage.vue';
import ResponseNull from '../page/ResponseNull.vue';

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
    children: [
      {
        path: '/home',
        redirect: "/" //路径输入home的话从定向到根路经
      },
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/communication',
        name: 'communication',
        component: Communication
      },
      {
        path: '/lazyload',
        name: 'lazyload',
        component: LazyLoad
      },
      {
        path: '/dialogbox',
        name: 'dialogbox',
        component: DialogBox
      },
      {
        path: 'slotpage',
        name: 'slotpage',
        component: SlotPage
      },
      {
        path: 'responsenull',
        name: 'responsenull',
        component: ResponseNull
      }
    ]
  }
]

export default new Router({
  routes: routes
})
