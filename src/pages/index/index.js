import { router } from 'san-router'
import Home from './components/home'
const Add = () => import(/* webpackChunkName: "add" */ './components/add')
const Reduce = () => import(/* webpackChunkName: "reduce" */ './components/reduce')
const Plus = () => import(/* webpackChunkName: "plus" */ './components/Plus')

router.add({ rule: '/', Component: Home, target: '#app' });
router.add({ rule: '/add', Component: Add, target: '#app' })
router.add({ rule: '/reduce', Component: Reduce, target: '#app' })
router.add({ rule: '/plus', Component: Plus, target: '#app' })

router.start()