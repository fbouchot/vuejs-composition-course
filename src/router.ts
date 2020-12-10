import {createRouter, createWebHistory} from 'vue-router'
import Home from './Home.vue'
import NewPost from './NewPost.vue'
import ShowPost from './ShowPost.vue'
import EditPost from './EditPost.vue'
import { store } from './store'

const routes = [
    {
        name:'Home',
        path:'/',
        component: Home            
    }, 
    {
        name: 'ShowPost',
        path: '/posts/:id',
        component: ShowPost
    },
    {
        name:'NewPost',
        path:'/posts/new',
        component: NewPost,
        meta: {
            requiredAuth: true
        }
    },
    {
        name:'EditPost',
        path:'/posts/:id/edit',
        component: EditPost,
        meta: {
            requiredAuth: true
        }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export const makeRouter = () =>  createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
      
    if(to.meta.requiredAuth && !store.getState().authors.currentUserId) {
        next({
            name: 'Home'
        })
        
    }

    next()
})  