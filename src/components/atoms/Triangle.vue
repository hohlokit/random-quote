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

.small {
  border-width: 24px;
}

.gradient {
  background-image: var(--gradient-primary);
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.left-top {
  rotate: 180deg;
}
.right-bot {
  rotate: 0;
}

</style>
