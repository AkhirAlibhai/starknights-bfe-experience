import type { AppDefinition } from "@/apps/app.ts";

// import GalleryIcon from "~icons/material-symbols/photo-library";
// import JannualIcon from "~icons/material-symbols/bar-chart-4-bars";
import PhoneIcon from "~icons/material-symbols/phone-enabled";
// import SolitaireIcon from "~icons/material-symbols/cards-star";
import Jorb from "@/assets/jorb.gif";

import { callLog } from "@/calls/registry.ts";
const callBadge = callLog.length;

export const apps: AppDefinition[] = [
	// {
	// 	id: "gallery",
	// 	name: "Jallery",
	// 	icon: GalleryIcon,
	// 	backgroundColor: "blue",
	// },
	// {
	// 	id: "annual_report",
	// 	name: "Jannual Jeport",
	// 	icon: JannualIcon,
	// 	backgroundColor: "blue",
	// },
	{
		id: "calls",
		name: "Jhone",
		icon: PhoneIcon,
		backgroundColor: "limegreen",
		badge: callBadge,
		route: "/calls",
	},
	// {
	// 	id: "solitaire",
	// 	name: "Jolitaire",
	// 	icon: SolitaireIcon,
	// 	backgroundColor: "crimson",
	// },
	{
		id: "jorb",
		name: "Jorb",
		icon: Jorb,
		backgroundColor: "transparent",
		action: () => {
			window.open(
				"https://www.youtube.com/watch?v=sN55iC6xhxA",
				"_blank",
				"noopener,noreferrer",
			);
		},
	},
];
