import { createApp } from "vue";
import App from "./App.vue";
import CardBase from "./UI/CardBase";
import ModalView from "./UI/ModalView";
import router from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.component("card-base", CardBase);
app.component("modal-view", ModalView);

app.mount("#app");
