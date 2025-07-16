// Types

import type { Plugin } from "vue";

// Styles

import "notivue/notification.css";
import "notivue/animations.css";

// Plugins

import { createNotivue } from "notivue";

const Register: Plugin = (app) => {
	return app.use(createNotivue());
};

export default Register;
