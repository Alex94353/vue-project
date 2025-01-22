<template>
    <v-card>
   
      <v-img :src="image" height="200px" class="align-center">
        <v-card-title>{{ name }}</v-card-title>
      </v-img>
  
      <v-card-subtitle>{{ location }}</v-card-subtitle>
      <v-card-text>
        {{ description }}
      
      </v-card-text>
  
    
      <v-card-actions>
        <div class="rating-container">
          <div
            v-for="index in 5"
            :key="index"
            class="circle"
            :class="{ active: index <= rating }"
          ></div>
        </div>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      name: { type: String, required: true },
      location: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      rating: { type: Number, required: true }, 
    },
  };
  </script>
  
  <style scoped>
  .v-card-title {
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }
  

  .rating-container {
    display: flex;
    gap: 5px;
  }
  
 
  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: grey;
  }
  
 
  .circle.active {
    background-color: yellow;
  }
  </style>
  