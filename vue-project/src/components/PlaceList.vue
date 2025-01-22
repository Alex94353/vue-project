<template>
  <v-container>
    <v-row>
      <v-col v-for="place in places" :key="place.id" cols="12" md="4">
        <PlaceCard
          :name="place.name"
          :location="place.location"
          :description="place.description"
          :image="place.image"
          :rating="place.rating"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { usePlacesStore } from "@/stores/placesStore";
import PlaceCard from "./PlaceCard.vue";

export default {
  components: {
    PlaceCard,
  },
  data() {
    return {
      places: usePlacesStore().places,
    };
  },
};
</script>
