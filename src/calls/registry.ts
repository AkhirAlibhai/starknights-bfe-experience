import { useDateFormat } from "@vueuse/core";
import type { CallDefinition } from "@/calls/call";

import callData from "@/data/calls.json";

function readCallsConfig(): CallDefinition[] {
	return callData.map((c, i) => {
		return {
			id: i,
			avatar: c.avatar,
			title: c.title,
			missed: !!c.missed,
			voicemail: !!c.voicemail,
			timestamp: c.timestamp,
			audio: c.audio,
			date: useDateFormat(c.timestamp, "MMM D, YYYY, HH:mm").value,
		} as CallDefinition;
	});
}

export const callLog = ref<CallDefinition[]>(readCallsConfig());
