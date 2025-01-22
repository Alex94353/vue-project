import { defineStore } from 'pinia';
import placesData from '@/data/info_place.json'; 

export const usePlacesStore = defineStore('places', {
  state: () => ({
    places: placesData.places,
  }),
  getters: {
   
    getPlaceById: (state) => (id) => state.places.find((place) => place.id === id),
  },
});
