import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
import 'primeicons/primeicons.css';

const app = createApp(App);

app.mount('#app');
app.use(PrimeVue);