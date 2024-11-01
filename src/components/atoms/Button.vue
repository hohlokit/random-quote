<template>
  <button :class="buttonClass" @click="$emit('click')" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const buttonClass = computed(() => {
  return `btn btn-${props.variant}`
})
</script>

<style scoped>
.btn {
  padding: 12px 24px;
  border: 1px solid;
}
</style>
