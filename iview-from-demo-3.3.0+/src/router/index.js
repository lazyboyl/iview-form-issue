import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lowerForm from '@/views/lowerForm.vue'
import normalForm from '@/views/normalForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lowerForm',
      name: 'lowerForm',
      component: lowerForm
    },
    {
      path: '/normalForm',
      name: 'normalForm',
      component: normalForm
    }
  ]
})
