<template>
    <v-container>
      <v-form @submit.prevent="logIn">
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
        <v-btn type="submit" color="primary">vstup</v-btn>
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
      async logIn() {
        const authStore = useAuthStore();
        try {
          await authStore.logIn({ email: this.email, password: this.password });
          this.$router.push('/'); 
        } catch (error) {
          this.errorMessage = error.message;
        }
      },
    },
  };
  </script>
  
  