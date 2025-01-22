
import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: [],
  }),
  actions: {
    addFavorite(item) {
      if (!this.favorites.find((fav) => fav.name === item.name)) {
        this.favorites.push(item);
      }
    },
    removeFavorite(itemName) {
      this.favorites = this.favorites.filter((fav) => fav.name !== itemName);
    },
  },
});
