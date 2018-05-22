import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from '@/pages/home/home'
// import test from '@/pages/test/test'
// import score from '@/pages/score/score'
const homepage =r=>require.ensure([],()=>r(require('@/pages/homepage/homepage')))
const home =r=>require.ensure([],()=>r(require('@/pages/homepage/home')))
const test =r=>require.ensure([],()=>r(require('@/pages/homepage/test')))
const score =r=>require.ensure([],()=>r(require('@/pages/homepage/score')))
const list =r=>require.ensure([],()=>r(require('@/pages/list/list')))
const picture =r=>require.ensure([],()=>r(require('@/pages/picture/picture')))
const more =r=>require.ensure([],()=>r(require('@/pages/more/more')))

Vue.use(Router)

export default new Router({
    routes: [
        {
          path:'/',
          redirect:'/homepage'
        },
        {
          path:'/homepage',
          redirect:'/homepage/home',
          component:homepage,
          children:[
            {
              path: 'home',
              name: 'home',
              component: home,
            },
            {
              path: 'test',
              // path: 'test',
              name: 'test',
              component: test
            },
            {
              path: 'score',
              name: 'score',
              component: score
            },
          ]
        },
        {
          path:'/list',
          component:list,
          child:[
            {
              path:'home',
              component:home
            }
          ]
        },
        {
          path:'/picture',
          component:home
        },
        {
          path:'/more',
          component:home
        }
    ]
})
