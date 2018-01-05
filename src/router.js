import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  routes: [
    // { path: '/', component: load('index') },
    { path: '/', redirect: '/analysis/index' },
    {
      path: '/analysis/index',
      component: load('analysis/index')
    },
    {
      path: '/analysis/sensor',
      component: load('analysis/sensor')
    },
    {
      path: '/analysis/my',
      component: load('analysis/my')
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
