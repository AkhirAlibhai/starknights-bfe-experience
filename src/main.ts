import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Plugins from "./plugins";

createApp(App).use(Plugins).mount("#app");

