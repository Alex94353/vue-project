<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>E-Jedáleň</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Domov</v-btn>
    <v-btn text to="/menu">Jedálny lístok</v-btn>

    <v-btn
      v-if="authStore.currentUser"
      text
      to="/favorites"
    >
      Obľúbené
    </v-btn>
  
    <v-btn
      v-if="authStore.currentUser"
      text
      to="/cart"
    >
      Košík
    </v-btn>
   
    <v-btn
      v-if="!authStore.currentUser"
      text
      to="/signin"
    >
      Sign In
    </v-btn>
    <v-btn
      v-if="!authStore.currentUser"
      text
      to="/login"
    >
      Log In
    </v-btn>
  
    <v-btn
      v-if="authStore.currentUser"
      text
      @click="logOut"
    >
      vystup
    </v-btn>
  </v-app-bar>
</template>

<script>
import { useAuthStore } from '@/stores/authStore';

export default {
  data() {
    return {
      authStore: useAuthStore(),
    };
  },
  methods: {
    logOut() {
      this.authStore.logOut();
    },
  },
};
</script>

