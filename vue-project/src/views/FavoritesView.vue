<template>
  <v-container>
    <h1>Favorites</h1>
    <v-row v-if="authStore.isLoggedIn">
      <v-col
        v-for="item in menuStore.favorites"
        :key="item.name"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-img :src="item.image" :alt="item.name" height="200px"></v-img>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-card-subtitle>{{ item.category }}</v-card-subtitle>
          <v-card-text>Price: {{ item.price }} €</v-card-text>
          <v-card-actions>
            <v-btn
              icon
              @click="addToCart(item)"
            >
              <v-icon>mdi-basket</v-icon>
            </v-btn>
            <v-btn
              icon
              @click="removeFromFavorites(item.name)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <p v-else>Please log in to see your favorites</p>
  </v-container>
</template>

<script>
import { useMenuStore } from '@/stores/menuStore';
import { useAuthStore } from '@/stores/authStore';

export default {
  data() {
    return {
      menuStore: useMenuStore(),
      authStore: useAuthStore(),
    };
  },
  methods: {
    removeFromFavorites(itemName) {
      this.menuStore.removeFromFavorites(itemName);
    },
    addToCart(item) {
      this.menuStore.addToCart(item);
    },
  },
};
</script>


  
  