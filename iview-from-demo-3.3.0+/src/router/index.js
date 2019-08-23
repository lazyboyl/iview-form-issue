import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import normalForm from '@/views/normalForm.vue'
import otherForm from '@/views/otherForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/normalForm',
      name: 'normalForm',
      component: normalForm
    },
    {
      path: '/otherForm',
      name: 'otherForm',
      component: otherForm
    }
  ]
})
