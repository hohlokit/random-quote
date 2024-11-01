<template>
  <div :class="['gradient', props.variant, props.size]">
    <div :class="['triangle', props.size]" />
  </div>
</template>

<script setup>
const props = defineProps(['variant', 'size'])
</script>

<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-radius: 8px;
  border-style: solid;
  border-color: var(--bg-primary) transparent transparent var(--bg-primary);
}

.left-top {
  rotate: 180deg;
}
.right-bot {
  rotate: 0;
}

.small {
  border-width: 24px;
}
.large {
  border-width: 136px;
}

.gradient {
  background-image: var(--gradient-primary);
  border-radius: 8px;
}
.gradient.large {
  border-radius: 32px;
}

@media (max-width: 768px) {
  .large {
    border-width: 72px;
  }
  .gradient.large {
    border-radius: 24px;
  }
}

@media (max-width: 480px) {
  .large {
    border-width: 24px;
  }
  .gradient.large {
    border-radius: 8px;
  }
}
</style>
