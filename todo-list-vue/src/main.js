<<<<<<< HEAD
import {createApp} from 'vue';
import App from './App.vue';
import CardBase from "./components/UI/CardBase";
=======
import { createApp } from 'vue'
import App from './App.vue'
import CardBase from "./components/UI/CardBase"
>>>>>>> d80a2bf46e9dd95646bf24323676741bb44b9328

const app = createApp(App);

app.component("card-base", CardBase);

app.mount('#app');
