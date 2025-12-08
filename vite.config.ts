// Development Environment

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// Plugins

import { cloudflare as Cloudflare } from "@cloudflare/vite-plugin";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import VueRouter from "unplugin-vue-router/vite";
import DevTools from "vite-plugin-vue-devtools";
import Layouts from "vite-plugin-vue-layouts-next";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineConfig({
	plugins: [
		VueRouter({
			dts: "src/typed-router.d.ts",
			routesFolder: "src/pages",
			routeBlockLang: "json",
			extensions: [".vue"],
			importMode: "async",
		}),
		Layouts(),
		AutoImport({
			imports: [
				"vue",
				"@vueuse/core",
				VueRouterAutoImports,
				{
					pinia: ["defineStore", "storeToRefs"],
					notivue: ["push"],
				},
			],
			dts: "src/auto-imports.d.ts",
			vueTemplate: true,
		}),
		Components({
			dts: "src/components.d.ts",
		}),
		Vue({
			template: { transformAssetUrls },
		}),
		Vuetify({
			autoImport: true,
			styles: {
				configFile: "src/styles/settings.scss",
			},
		}),
		Icons({ compiler: "vue3" }),
		DevTools(),
		Cloudflare(),
	],
	optimizeDeps: {
		exclude: [
			"vuetify",
			"vue-router",
			"unplugin-vue-router/runtime",
			"unplugin-vue-router/data-loaders",
			"unplugin-vue-router/data-loaders/basic",
		],
	},
	define: { "process.env": {} },
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("src", import.meta.url)),
		},
		extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
	},
});
