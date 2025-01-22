<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in menuStore.items"
        :key="item.name"
        cols="12"
        sm="6"
        md="4"
      >
        <FoodCard
          :name="item.name"
          :category="item.category"
          :price="item.price"
          :image="item.image"
          @add-to-cart="addToCart"
          @add-to-favorites="addToFavorites"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useMenuStore } from '@/stores/menuStore';
import FoodCard from '@/components/FoodCard.vue';
import { useAuthStore } from '@/stores/authStore';

export default {
  components: { FoodCard },
  data() {
    return {
      menuStore: useMenuStore(),
      authStore: useAuthStore(),
    };
  },
  methods: {
    addToCart(item) {
      this.menuStore.addToCart(item);
    },
    addToFavorites(item) {
      if (this.authStore.isLoggedIn) {
        this.menuStore.addToFavorites(item);
      } else {
        alert('sing in before buy');
      }
    },
  },
};
</script>


