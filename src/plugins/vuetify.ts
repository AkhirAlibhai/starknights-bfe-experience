// Types

import type { Plugin } from "vue";

// Styles

import "vuetify/styles";

// Plugins

import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

// Icons

import IconEdit from "~icons/material-symbols/edit";
import IconText from "~icons/material-symbols/android-messages";
import IconPhone from "~icons/material-symbols/call";
import IconCallMissed from "~icons/material-symbols/call-missed";
import IconRead from "~icons/material-symbols/check";
import IconPause from "~icons/material-symbols/pause";
import IconPlay from "~icons/material-symbols/play-arrow";
import IconSearch from "~icons/material-symbols/search";
import IconStop from "~icons/material-symbols/stop";
import IconVidcall from "~icons/material-symbols/video-call";
import IconVoicemail from "~icons/material-symbols/voicemail";
import IconMute from "~icons/material-symbols/volume-off";
import IconSpeaker from "~icons/material-symbols/volume-up";
import IconBook from "~icons/material-symbols/book";

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
					play: IconPlay,
					speaker: IconSpeaker,
					stop: IconStop,
					read: IconRead,
					mute: IconMute,
					pause: IconPause,
					call: IconPhone,
					vidcall: IconVidcall,
					text: IconText,
					edit: IconEdit,
					book: IconBook,
				},
				sets: {
					mdi,
				},
			},
		}),
	);
};

export default Register;
