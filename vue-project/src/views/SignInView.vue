<template>
    <v-container>
      <v-form @submit.prevent="signUp">
        <v-text-field
          label="Email"
          v-model="email"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          label="password"
          v-model="password"
          type="password"
          required
        ></v-text-field>
        <v-btn type="submit" color="primary">Sing In</v-btn>
        <v-alert v-if="errorMessage" type="error" class="mt-3">
          {{ errorMessage }}
        </v-alert>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import { useAuthStore } from '@/stores/authStore';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async signUp() {
        const authStore = useAuthStore();
        try {
          await authStore.signUp({ email: this.email, password: this.password });
          this.$router.push('/login'); 
        } catch (error) {
          this.errorMessage = error.message;
        }
      },
    },
  };
  </script>
  
  