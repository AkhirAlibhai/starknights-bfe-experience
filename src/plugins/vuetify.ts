// Types

import type { Plugin } from "vue";

// Styles

import "vuetify/styles";

// Plugins

import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

// Icons

import IconCallMissed from "~icons/material-symbols/call-missed";
import IconSearch from "~icons/material-symbols/search";
import IconVoicemail from "~icons/material-symbols/voicemail";

const Register: Plugin = (app) => {
	return app.use(
		createVuetify({
			theme: {
				defaultTheme: "system",
			},
			blueprint: md3,
			icons: {
				defaultSet: "mdi",
				aliases: {
					...aliases,
					search: IconSearch,
					callMissed: IconCallMissed,
					voicemail: IconVoicemail,
				},
				sets: {
					mdi,
				},
			},
		}),
	);
};

export default Register;
