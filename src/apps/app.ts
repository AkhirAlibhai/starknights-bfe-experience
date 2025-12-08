import type { FunctionalComponent, SVGAttributes } from "vue";

export interface AppDefinition {
	id: string;
	name: string;
	icon: FunctionalComponent<SVGAttributes>;
	route?: string;
	action?: () => void;
}
