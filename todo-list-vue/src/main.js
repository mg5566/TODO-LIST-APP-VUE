import {createApp} from 'vue';
import App from './App.vue';
import CardBase from "./components/UI/CardBase";
import ModalView from "./components/UI/ModalView";

const app = createApp(App);

app.component("card-base", CardBase);
app.component("modal-view", ModalView);

app.mount('#app');
