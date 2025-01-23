import { defineStore } from 'pinia';
import menuData from '@/data/info_food.json'; 

export const useMenuStore = defineStore('menu', {
  state: () => ({
    items: menuData.items, 
    cart: JSON.parse(localStorage.getItem('cart')) || [], 
    favorites: JSON.parse(localStorage.getItem('favorites')) || [], 
  }),
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },
    cartItemCount(state) {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
  },
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
    removeFromCart(itemName) {
      this.cart = this.cart.filter(item => item.name !== itemName);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    addToFavorites(item) {
      if (!this.favorites.find(favoriteItem => favoriteItem.name === item.name)) {
        this.favorites.push(item);
      }
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
    removeFromFavorites(itemName) {
      this.favorites = this.favorites.filter(item => item.name !== itemName);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    },
  },
});
