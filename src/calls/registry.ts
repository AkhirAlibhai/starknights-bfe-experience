import { useDateFormat } from "@vueuse/core";
import type { CallDefinition } from "@/calls/call";
import callData from "@/data/calls.json";

const DEFAULT_AVATAR = "https://i.pravatar.cc/300?u=001";
const BUCKET_BFE_ROOT = "https://data.starknights.app/bfe-audio-files/";

function buildAudioUrl(id: number, title: string): string {
	const filename = `${id} - ${title}.mp3`;
	return BUCKET_BFE_ROOT + encodeURIComponent(filename);
}

export const callLog: CallDefinition[] = callData.map((c, i) => {
	const date = useDateFormat(c.timestamp, "MMM D, YYYY, HH:mm").value;

	return {
		id: i,
		avatar: c.avatar ?? DEFAULT_AVATAR,
		title: c.title,
		author: c.author,
		voiced: c.voiced,
		timestamp: c.timestamp,
		audio: buildAudioUrl(c.id, c.title),
		script: c.script,
		date,
	};
});
