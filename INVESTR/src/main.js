import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
// import VueApexCharts from "vue3-apexcharts";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(router);
app.use(pinia);
// app.use(VueApexCharts);

app.mount("#app");
