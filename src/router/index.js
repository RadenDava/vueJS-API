//! import 2 property dari library vue-router
import { createRouter, createWebHistory } from "vue-router"

//! Set Routes
const routes = [
    //* Route untuk index.vue
    {
        path: '/',
        name: 'post.index',
        component: () => import('@/views/post/Index.vue')
    },

    //* Route utk Create.vue
    {
        path: '/create',
        name: 'post.create',
        component: () => import('@/views/post/Create.vue')
    },

    //* Route utk Edit.vue
    {
        path: '/edit',
        name: 'post.edit',
        component: () => import('@/views/post/Edit.vue')
    },
]

//? create router
const router = createRouter({
    history: createWebHistory(),
    routes //  config routes
})

export default router