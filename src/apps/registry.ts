import type { AppDefinition } from "@/apps/app.ts";

import GalleryIcon from "~icons/material-symbols/photo-library";
import JannualIcon from "~icons/material-symbols/bar-chart-4-bars";
import PhoneIcon from "~icons/material-symbols/phone-enabled";
import SolitaireIcon from "~icons/material-symbols/cards-star";

export const apps: AppDefinition[] = [
	{
		id: "gallery",
		name: "Jallery",
		icon: GalleryIcon,
		backgroundColor: "blue",
	},
	{
		id: "annual_report",
		name: "Jannual Jeport",
		icon: JannualIcon,
		backgroundColor: "blue",
		badge: 2,
	},
	{
		id: "calls",
		name: "Jhone",
		icon: PhoneIcon,
		backgroundColor: "limegreen",
		badge: 3,
		route: "/calls",
	},
	{
		id: "solitaire",
		name: "Jolitaire",
		icon: SolitaireIcon,
		backgroundColor: "crimson",
	},
];
