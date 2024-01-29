<template>

  <UserDetail :user-id="authInfo.user?.id" />

</template>

<script>
  export default {
    name: 'UserProfile',
  }
</script>

<script setup>

  import { inject, } from 'vue';

  import UserDetail from '/src/components/UserDetail.vue';


  const authStore = inject('authStore');
  const { useAuthStore, } = authStore;
  const { authInfo } = useAuthStore();

</script>
