<template>
  <v-card>
    <v-img :src="image" height="200px"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>{{ category }}</v-card-subtitle>
    <v-card-text>
      Cena: {{ price }} €
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="addToCart"><v-icon>mdi-basket</v-icon></v-btn>
      <v-btn
        v-if="isLoggedIn"
        color="secondary"
        @click="addToFavorites"
      >
        <v-icon>mdi-heart</v-icon>  
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { useMenuStore } from '@/stores/menuStore';
import { useAuthStore } from '@/stores/authStore';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      menuStore: useMenuStore(),
      authStore: useAuthStore(),
    };
  },
  computed: {
    isLoggedIn() {
      return this.authStore.isLoggedIn;
    },
  },
  methods: {
    addToCart() {
      this.menuStore.addToCart({
        name: this.name,
        category: this.category,
        price: this.price,
        image: this.image,
      });
    },
    addToFavorites() {
      this.menuStore.addToFavorites({
        name: this.name,
        category: this.category,
        price: this.price,
        image: this.image,
      });
    },
  },
};
</script>


