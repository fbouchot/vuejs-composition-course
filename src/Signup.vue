<template>
<form @submit.prevent="submit">
  <form-input type="text" name="UserName" v-model="userName" :error="userNameStatus.message"/>
  <form-input type="password" name="Password" v-model="password" :error="passwordStatus.message"/>
  <button class="button is-primary" :disabled="!isFormValid">Submit</button>
</form>
 </template>

<script lang="ts">
import {required, length, Status, validate } from './validators'
import { computed, defineComponent, ref } from 'vue'
import FormInput from './FormInput.vue'
import { User } from './types'
import { useStore } from './store'
import { useModal } from './useModal'

export default defineComponent({  
  name: 'App',
  components: {    
    FormInput
  },
  
  setup() {
    const userName = ref('username')
    const userNameStatus = computed<Status>(() => validate(userName.value, [ required(), length({ min: 5, max: 15})]))

    const password = ref('password')
    const passwordStatus = computed<Status>(() => validate(password.value, [ required(), length({ min: 7, max: 40})]))
    
    const isFormValid = computed<boolean>(() =>{
        return userNameStatus.value.valid && passwordStatus.value.valid
    })

    const store = useStore()
    const modal = useModal()

    const submit = (e:any) => {
        if(!isFormValid)
            return
        
        const user: User = {
            id: -1,
            userName: userName.value,
            password: password.value
        }

        store.createUser(user)
        modal.hideModal()
    }

    return {
      userName,
      userNameStatus,
      password,
      passwordStatus,
      isFormValid,
      submit
    }
  }
})
</script>
<style scoped>
    form {
        background: white;
        padding: 15px;
    };

</style>