export default {
	async fetch(_request, _env, _ctx) {
		return new Response("Hello World!");
	},
} satisfies ExportedHandler<Env>;
