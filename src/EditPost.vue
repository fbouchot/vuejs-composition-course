<template>
  <Suspense>
    <template #default>
      <post-editor/>
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
import PostEditor from './PostEditor.vue'
import ProgressBar from './ProgressBar.vue'

export default defineComponent({
components: {
  PostEditor,
  ProgressBar
},
setup() {
  
}
});

</script>   