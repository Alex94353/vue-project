import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(item) {
      const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
    },
    clearCart() {
      this.cart = [];
    },
  },
  getters: {
    totalPrice: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
  },
});
