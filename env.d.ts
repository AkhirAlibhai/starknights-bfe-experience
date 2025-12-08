/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="unplugin-icons/types/vue" />
/// <reference types="vite-plugin-vue-layouts-next/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
