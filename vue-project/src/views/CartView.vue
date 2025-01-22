<template>
  <v-container>
    <h1>Košík</h1>
    <v-list>
      <v-list-item
        v-for="item in menuStore.cart"
        :key="item.name"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Cena: {{ item.price }} € × {{ item.quantity }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn
            icon
            @click="removeFromCart(item.name)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <h3>Celková suma: {{ menuStore.cartTotal }} €</h3>
  </v-container>
</template>

<script>
import { useMenuStore } from '@/stores/menuStore';

export default {
  data() {
    return {
      menuStore: useMenuStore(),
    };
  },
  methods: {
    removeFromCart(itemName) {
      this.menuStore.removeFromCart(itemName);
    },
  },
};
</script>
