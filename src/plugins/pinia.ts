// Types

import type { Plugin } from "vue";

// Plugins

import { createPinia } from "pinia";

const Register: Plugin = (app) => {
	return app.use(createPinia());
};

export default Register;
