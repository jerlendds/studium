/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "./global-components";
import utils from "./utils";
import "./libs";

// SASS Theme
import "./assets/sass/app.scss";

const app = createApp(App)
  .use(store)
  .use(router);

globalComponents(app);
utils(app);

app.mount("#app");
