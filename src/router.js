import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/analysis/content/index'
// import sensor from '@/analysis/content/sensor'
// import my from '@/analysis/content/my'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  routes: [
    // { path: '/', component: load('index') },
    { path: '/', redirect: '/analysis/content/index' },
    {
      path: '/analysis/content/index',
      component: index
    },
    {
      path: '/analysis/content/sensor',
      // component: sensor,
      component: load('analysis/content/sensor')
    },
    {
      path: '/analysis/content/my',
      // component: my,
      component: load('analysis/content/my')
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
