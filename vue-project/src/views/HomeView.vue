<template>
  <v-container>
    <h1 class="text-center">Vitajte</h1>
    <br>
  
    <v-carousel show-arrows-on-hover>
      <v-carousel-item
        v-for="place in places"
        :key="place.id"
        :src="place.image"
      >
        <v-row justify="center" class="mt-4">
          <v-col cols="12" md="6">
            <h2 class="text-center" >{{ place.name }}</h2>
            <p class="text-center">{{ place.location }}</p>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <br>

 
    <PlaceList />
  </v-container>
</template>

<script>
import { usePlacesStore } from '@/stores/placesStore';
import PlaceList from '@/components/PlaceList.vue';

export default {
  components: {
    PlaceList,
  },
  data() {
    return {
      places: usePlacesStore().places, 
    };
  },
};
</script>

<style scoped>

  h2.text-center, p.text-center {
    color: white;
  }

</style>