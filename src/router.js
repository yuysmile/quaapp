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
    { path: '/', redirect: '/analysis/content' },
    {
      path: '/analysis/content',
      component: index
    },
    {
      path: '/analysis/content/detail/sound',
      component: load('analysis/content/detail/sound')
    },
    {
      path: '/analysis/content/detail/acceleration',
      component: load('analysis/content/detail/acceleration')
    },
    {
      path: '/analysis/content/detail/distance',
      component: load('analysis/content/detail/distance')
    },
    {
      path: '/analysis/content/detail/GPS',
      component: load('analysis/content/detail/GPS')
    },
    {
      path: '/analysis/content/detail/gravity',
      component: load('analysis/content/detail/gravity')
    },
    {
      path: '/analysis/content/detail/gyroscope',
      component: load('analysis/content/detail/gyroscope')
    },
    {
      path: '/analysis/content/detail/Illumination',
      component: load('analysis/content/detail/Illumination')
    },
    {
      path: '/analysis/content/detail/rotate',
      component: load('analysis/content/detail/rotate')
    },
    {
      path: '/analysis/content/detail/sound',
      component: load('analysis/content/detail/sound')
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
