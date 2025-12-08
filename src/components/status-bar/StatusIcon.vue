<script setup lang="ts">
  defineProps<{
    src: string
    alt: string
  }>()
  </script>

  <template>
    <img
      :src="src"
      :alt="alt"
      class="status-icon invert"
    />
  </template>

  <style scoped>
  .status-icon {
    height: 2rem;
    width: auto;
  }
  </style>
