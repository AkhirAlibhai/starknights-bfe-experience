import type { AppDefinition } from "@/apps/app.ts";
import PhoneIcon from "~icons/material-symbols/phone-enabled";

export const apps: AppDefinition[] = [
  {
    id: "calls",
    name: "Jhone",
    icon: PhoneIcon,
    route: "/calls",
    backgroundColor: "limegreen",
    badge: 3,
  },
];
