// Types

import type { Plugin } from "vue";

// Plugins

import { setupLayouts } from "virtual:generated-layouts";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "vue-router/auto-routes";

const Register: Plugin = (app) => {
	const router = createRouter({
		history: createWebHistory(import.meta.env.BASE_URL),
		routes: setupLayouts(routes),
	});

	router.onError((err, to) => {
		if (
			err?.message?.includes?.("Failed to fetch dynamically imported module")
		) {
			if (localStorage.getItem("vuetify:dynamic-reload")) {
				console.error(
					"Dynamic import error, reloading page did not fix it",
					err,
				);
			} else {
				console.log("Reloading page to fix dynamic import error");
				localStorage.setItem("vuetify:dynamic-reload", "true");
				location.assign(to.fullPath);
			}
		} else {
			console.error(err);
		}
	});

	router.isReady().then(() => {
		localStorage.removeItem("vuetify:dynamic-reload");
	});

	return app.use(router);
};

export default Register;
