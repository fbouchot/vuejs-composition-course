<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <router-link v-if="canEdit" :to="to" class="button is-rounded-link is-link is-pulled-right" data-test="can-edit">
      <i class="fas fa-edit"/>
      </router-link>
      <h1>post title {{ post.title }}</h1>
      <div v-html="post.html"></div>
    </div>
    <div class="column"></div>
  </div>
 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "./store";

  export default defineComponent({
 async setup() {
    const route = useRoute()
    const store = useStore()
    const id = route.params.id as string    

    if(!store.getState().posts.loaded) {
      await store.fetchPosts()
    }
  
    const post = store.getState().posts.all[id]
   
    const canEdit = post.authorId === parseInt(store.getState().authors.currentUserId!, 10)            
      
    return {
      canEdit,
      post,
      to:`/posts/${post.id}/edit`
      }
  }
})
</script>