// Types

import type { Plugin } from "vue";

// Plugins list

import Notivue from "./notivue";
import Pinia from "./pinia";
import Router from "./router";
import Vuetify from "./vuetify";

const Register: Plugin = (app) => {
	return app.use(Pinia).use(Router).use(Vuetify).use(Notivue);
};

export default Register;
