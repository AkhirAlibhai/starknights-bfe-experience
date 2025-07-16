// Types

import type { Plugin } from "vue";

// Styles

import "vuetify/styles";

// Plugins

import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const Register: Plugin = (app) => {
	return app.use(
		createVuetify({
      theme: {
        defaultTheme: 'dark',
      },
			blueprint: md3,
			icons: {
				defaultSet: "mdi",
				aliases,
				sets: {
					mdi,
				},
			},
		}),
	);
};

export default Register;
