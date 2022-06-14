import {createApp} from 'vue';
import App from './App.vue';
import CardBase from "./components/UI/CardBase";

const app = createApp(App);

app.component("card-base", CardBase);

app.mount('#app');
