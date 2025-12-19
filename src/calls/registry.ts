import { useDateFormat } from "@vueuse/core"
import type { CallDefinition } from "@/calls/call"
import callData from "@/data/calls.json"

const DEFAULT_AVATAR = "https://i.pravatar.cc/300?u=001"

export const callLog: CallDefinition[] = callData.map((c, i) => {
  const date = useDateFormat(c.timestamp, "MMM D, YYYY, HH:mm").value

  return {
    id: i,
    avatar: c.avatar ?? DEFAULT_AVATAR,
    title: c.title,
    author: c.author,
    voiced: c.voiced,
    missed: !!c.missed,
    voicemail: !!c.voicemail,
    timestamp: c.timestamp,
    audio: c.audio,
    date,
  }
})
