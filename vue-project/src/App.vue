<template>
  <v-app>
    
    <Navigation />

   
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    
    <Footer />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';


export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style>

body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f9f9f9;
}
</style>
