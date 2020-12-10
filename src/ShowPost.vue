<template>
  <Suspense>
    <template #default>
      <post-viewer/>
    </template>
    <template #fallback>
    <div class="columns">
      <div class="column is-one-third"></div>
      <div class="column is-one-third">
        <progress-bar/>
      </div>
      <div class="column is-one-third"></div>
    </div>      
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostViewer from './PostViewer.vue'
import ProgressBar from './ProgressBar.vue'

export default defineComponent({
components: {
  PostViewer,
  ProgressBar
},
setup() {
  
}
});

</script>