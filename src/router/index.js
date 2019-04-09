import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyDemo from '@/components/MyDemo'
import Demo02 from '@/components/demo02'
import LX from '@/components/demo'
import demo04 from '@/components/demo04'
import Homework from '@/components/Homework'
import Hw1 from '@/components/homeword/Hw1'
import Hw2 from '@/components/homeword/Hw2'
import Hw3 from '@/components/homeword/Hw3'
import Hw5 from '@/components/homeword/Hw4'
import Hw4 from '@/components/homeword/Hw5'
import Hw6 from '@/components/MyDemo'
import Hw7 from '@/components/homeword/Hw7'
import Hw8 from '@/components/homeword/Hw8'
import Hw9 from '@/components/homeword/Hw9'
import getData from '@/components/getData'
import Hw10 from '@/components/homeword/Hw10'
import Hw11 from '@/components/homeword/Hw11'
import Hw12 from '@/components/homeword/Hw12'
import Rv1 from '@/components/homeword/hwcomponent/HwRouterView/rv1'
import Rv2 from '@/components/homeword/hwcomponent/HwRouterView/rv2'
import Rv3 from '@/components/homeword/hwcomponent/HwRouterView/rv3'
import Rv4 from '@/components/homeword/hwcomponent/HwRouterView/rv4'
import Rv5 from '@/components/homeword/hwcomponent/HwRouterView/rv5'
import Rv6 from '@/components/homeword/hwcomponent/HwRouterView/rv6'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: Homework,
            redirect: '/hw10',
            children: [
                {
                    path: '/hw1',
                    component: Hw1
                },
                {
                    path: '/hw2',
                    component: Hw2
                },
                {
                    path: '/hw3',
                    component: Hw3
                },
                {
                    path: '/hw4',
                    component: Hw4
                },
                {
                    path: '/hw5',
                    component: Hw5
                },
                {
                    path: '/hw7',
                    component: Hw7
                },
                {
                    path: '/hw6',
                    component: Hw6
                },
                {
                    path: '/hw8',
                    component: Hw8
                },
                {
                    path: '/hw9',
                    component: Hw9
                },
                {
                    path: '/hw10',
                    component: Hw10
                },
                {
                    path: '/hw11',
                    component: Hw11
                },
                {
                    path: '/hw12',
                    component: Hw12,
                    children: [
                        {
                            path: '/',
                            components: {
                                rv1: Rv1,
                                rv2: Rv2,
                                rv3: Rv3,
                                rv4: Rv4,
                                rv5: Rv5,
                                rv6: Rv6
                            }
                        }
                    ]
                },
            ]
        },
        {
            path: '/demo',
            name: 'demo',
            component: LX
        },
        {
            path: '/hw1',
            component: Hw1
        },
        {
            path: '/hw2',
            component: Hw2
        },
        {
            path: '/hw3',
            component: Hw3
        },
        {
            path: '/hw4',
            component: Hw4
        },
        {
            path: '/hw5',
            component: Hw5
        },
        {
            path: '/hw7',
            component: Hw7
        },
        {
            path: '/hw6',
            component: Hw6
        },
        {
            path: '/hw8',
            component: Hw8
        },
        {
            path: '/hw9',
            component: Hw9
        },
        {
            path: '/demo04',
            component: demo04
        },
        {
            path: '/demo02',
            component: Demo02
        },
        {
            path: '/hw10',
            component: Hw10
        },
        {
            path: '/hw11',
            component: Hw11
        },
        {
            path: '/hw12',
            component: Hw12
        },
        {
            path: '/getData',
            component: getData
        },
    ]
})
