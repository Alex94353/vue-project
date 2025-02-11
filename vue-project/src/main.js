import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; 
import '@mdi/font/css/materialdesignicons.css';
import { initializeCartStore } from '@/stores/cartStore';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.use(router);


initializeCartStore();

app.mount('#app');
