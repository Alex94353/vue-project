import { defineStore } from 'pinia';
import menuData from '@/data/info_food.json'; 

export const useMenuStore = defineStore('menu', {
  state: () => ({
    items: menuData.items, 
    cart: [], 
    favorites: [], 
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
    },
  
    removeFromCart(itemName) {
      this.cart = this.cart.filter(item => item.name !== itemName);
    },
    
    addToFavorites(item) {
      if (!this.favorites.find(favoriteItem => favoriteItem.name === item.name)) {
        this.favorites.push(item);
      }
    },
   
    removeFromFavorites(itemName) {
      this.favorites = this.favorites.filter(item => item.name !== itemName);
    },
  },
});
