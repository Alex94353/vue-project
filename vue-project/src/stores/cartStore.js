import { defineStore } from 'pinia';
import { watch } from "vue";

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  }),
  actions: {
    addToCart(item) {
      const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    clearCart() {
      this.cart = [];
      localStorage.removeItem('cart');
    },
  },
  getters: {
    totalPrice: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
  },
});

function initializeCartPersistence(cartStore) {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cartStore.cart = JSON.parse(savedCart);
  }

  watch(
    () => cartStore.cart,
    (newCart) => {
      try {
        localStorage.setItem("cart", JSON.stringify(newCart));
      } catch (e) {
        console.error("Failed to save cart to localStorage", e);
      }
    },
    { deep: true }
  );
}

export function initializeCartStore() {
  const cartStore = useCartStore();
  initializeCartPersistence(cartStore);
}
