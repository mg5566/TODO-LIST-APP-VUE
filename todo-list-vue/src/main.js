import { createApp } from 'vue'
import App from './App.vue'
import CardBase from "./components/UI/Card-Base"

const app = createApp(App)

app.component("card-base", CardBase);

app.mount('#app')
