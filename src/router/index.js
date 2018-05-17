import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import home from '@/pages/home/home'
// import test from '@/pages/test/test'
// import score from '@/pages/score/score'
const home =r=>require.ensure([],()=>r(require('@/pages/home/home')))
const test =r=>require.ensure([],()=>r(require('@/pages/test/test')))
const score =r=>require.ensure([],()=>r(require('@/pages/score/score')))

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: home
        },
        {
            path: '/home',
            name: 'home',
            component: home,
        },
        {
            path: '/score',
            name: 'score',
            component: score
        },
        {
            // path: '/test/:id',
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})
