<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in menuStore.favorites"
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
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useMenuStore } from '@/stores/menuStore';
import FoodCard from '@/components/FoodCard.vue';

export default {
  components: { FoodCard },
  data() {
    return {
      menuStore: useMenuStore(),
    };
  },
};
</script>


  
  