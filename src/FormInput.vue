<template>
    <div class="field">
    <label :for="name" class="label">
    {{ name }}
    </label>
    <div class="control">
        <input class="input" :type="type" :id="name" @input="handleInput" :value="modelValue"/>        
    </div>
    <p class="help is-danger" v-if="error"> {{ error }} </p>
    </div>
</template>
<script lang="ts">
import string from '*.txt'
import Vue, { defineComponent } from 'vue'

export default defineComponent({
    props: {
        error: {
            type: String            
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            required: true
        }
    },
    setup(props, ctx) {
        const handleInput = (event: any) => {
            ctx.emit('update:modelValue', event.target.value)
        }

        return {
            handleInput
        }
    }
})
</script>