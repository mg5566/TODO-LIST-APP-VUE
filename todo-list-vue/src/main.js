import {createApp} from 'vue';
import App from './App.vue';
import CardBase from "./components/UI/CardBase";
import ModalView from "./components/UI/ModalView";
import router from './router';

const app = createApp(App);

app.component("card-base", CardBase);
app.component("modal-view", ModalView);

app.use(router);

app.mount('#app');
