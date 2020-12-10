<template>
    <div>New Post</div>
    <post-writer :post="post" @save="save"/>    
</template>
<script lang="ts">
import moment from 'moment'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import PostWriter from './PostWriter.vue'
import { useStore } from './store'
import { Post } from './types'

export default defineComponent({
    name:'NewPost',
    
    components: {
        PostWriter
    },

    setup() {

        const store = useStore()
        const router = useRouter()

        const post: Post = {
            id: -1,
            title: 'Post',
            markdown: '## new Post\n Enter your post here...',
            html: '',
            created: moment(),
            authorId: parseInt(store.getState().authors.currentUserId!, 10),            
        }

        const save = async (post: Post) => {

            await store.createPost(post)

            router.push('/')
            
        }

        return {
            post,
            save
        }
    }    
})
</script>