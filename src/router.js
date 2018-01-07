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
      component: index,
      children: [
        {
          path: '/detail/sound',
          component: load(`analysis/content/detail/sound`)
        },
        {
          path: '/detail/acceleration',
          component: load(`analysis/content/detail/acceleration`)
        },
        {
          path: '/detail/distance',
          component: load(`analysis/content/detail/distance`)
        },
        {
          path: '/detail/GPS',
          component: load(`analysis/content/detail/GPS`)
        },
        {
          path: '/detail/gravity',
          component: load(`analysis/content/detail/gravity`)
        },
        {
          path: '/detail/gyroscope',
          component: load(`analysis/content/detail/gyroscope`)
        },
        {
          path: '/detail/Illumination',
          component: load(`analysis/content/detail/Illumination`)
        },
        {
          path: '/detail/rotate',
          component: load(`analysis/content/detail/rotate`)
        },
        {
          path: '/detail/sound',
          component: load(`analysis/content/detail/sound`)
        }
      ]
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
