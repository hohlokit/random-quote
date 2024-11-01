<template>
  <button :class="buttonClass" @click="$emit('click')" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  disabled: {
    default: false
  },
  variant: {
    default: 'primary'
  }
})

const buttonClass = computed(() => {
  return `btn ${props.variant || ''}`
})
</script>

<style scoped>
.btn {
  padding: 12px 24px;
  border: 1px solid;
  font-weight: 600;
  border-radius: 6px;

  cursor: pointer;
}
.btn:hover {
  opacity: 0.8;
  animation: bounce 1s infinite;
}

.btn:disabled:hover {
  opacity: 1;
  cursor: not-allowed;
  animation: none;
}

.primary {
  color: var(--bg-primary);
  border-color: var(--outline-primary);
  background-color: var(--text-primary);
}
.secondary {
  color: var(--text-primary);
  border-color: var(--outline-primary);
  background-color: var(--bg-primary);
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
