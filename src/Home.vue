<template>      
     <Suspense>
      <template #default>
      <timeline />
     </template>

     <template #fallback>
      <div class="columns">
        <div class="column is-one-third"/>
        <div class="column is-one-third">
          <progress-bar />  
        </div>
        <div class="column is-one-third"/>
      </div>
    
     </template>
      
     </Suspense>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timeline from './Timeline.vue'
import ProgressBar from './ProgressBar.vue'

export default defineComponent({
  components: {
    Timeline,
    ProgressBar
  },
  name: 'Home'
})
</script>
