import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/analysis/content/index'
import sensor from '@/analysis/content/sensor'
import my from '@/analysis/content/my'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}`)
}

export default new VueRouter({
  routes: [
    // { path: '/', component: load('index') },
    { path: '/', redirect: '/analysis/content' },
    {
      path: '/analysis/content',
      component: index
    },
    {
      path: '/analysis/content/sensor',
      component: sensor
    },
    {
      path: '/analysis/content/my',
      component: my
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
