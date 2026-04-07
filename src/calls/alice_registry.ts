import { useDateFormat } from "@vueuse/core";
import type { CallDefinition } from "@/calls/call";
import callData from "@/data/alice_calls.json";

const DEFAULT_AVATAR = "/avatars/alice.jpg";
const BUCKET_ALICE_ROOT = "alice-audio-files";

function buildAudioUrl(id: number, title: string): string {
	const filename = `${id} - ${title}.mp3`;
	return BUCKET_ALICE_ROOT + encodeURIComponent(filename);
}

export const aliceCallLog: CallDefinition[] = callData.map((c, i) => {
	const date = useDateFormat(c.timestamp, "MMM D, YYYY, HH:mm").value;

	return {
		id: i,
		avatar: DEFAULT_AVATAR,
		title: c.title,
		author: "Alice",
		voiced: "Alice",
		timestamp: c.timestamp,
		audio: buildAudioUrl(c.id, c.title),
		script: "",
		date,
	};
});
