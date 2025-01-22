<template>
    <v-container>
      <v-card>
        <v-card-title>autorisation</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Email"
              v-model="email"
              type="email"
            ></v-text-field>
            <v-text-field
              label="Пароль"
              v-model="password"
              type="password"
            ></v-text-field>
            <v-btn color="primary" @click="login">vstup</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        if (this.email === 'admin@example.com' && this.password === 'password') {
          alert('success');
          this.$router.push('/');
        } else {
          alert('try again');
        }
      },
    },
  };
  </script>
  