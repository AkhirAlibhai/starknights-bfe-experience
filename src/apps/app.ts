import type { FunctionalComponent, SVGAttributes } from "vue";

export interface AppDefinition {
	id: string;
	name: string;
	icon: FunctionalComponent<SVGAttributes>;
  backgroundColor?: string;
  badge?: number;
	route?: string;
	action?: () => void;
}
