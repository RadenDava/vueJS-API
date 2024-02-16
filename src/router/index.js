//! import 2 property dari library vue-router
import { createRouter, createWebHistory } from "vue-router"

//! Set Routes
const routes = [
    //* Route untuk index.vue
    {
        path: '/',
        name: 'post.index',
        component: () => import('@/views/post/Indexweb1.vue')
    },

    //* Route utk Create.vue
    {
        path: '/buat',
        name: 'post.create',
        component: () => import('@/views/post/Createweb1.vue')
    },

    //* Route utk Edit.vue
    {
        path: '/edit',
        name: 'post.edit',
        component: () => import('@/views/post/Editweb1.vue')
    },
]

//? create router
const router = createRouter({
    history: createWebHistory(),
    routes //  config routes
})

export default router