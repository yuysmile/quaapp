import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/analysis/index'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  routes: [
    // { path: '/', component: load('index') },
    { path: '/', redirect: '/analysis' },
    {
      path: '/analysis',
      component: index,
      children: [
        {
          path: 'content/sensor',
          component: load(`analysis/content/sensor`),
          meta: {
            title: `数据`,
            backRoute: '/',
            showRank: true
          }
        },
        {
          path: 'content/my',
          component: load(`analysis/content/my`),
          meta: {
            title: `个人`,
            backRoute: '/',
            showRank: true
          }
        }
      ]
    }
    // Always leave this last one
    // { path: '*', component: load('Error404') } // Not found
  ]
})
