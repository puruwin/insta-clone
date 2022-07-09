import { Router } from '@vaadin/router'
import './View/Home'

const router = new Router(document.querySelector('main'))
router.setRoutes([
    { path: '/', component: 'home-view' },
])