<script setup></script>

<template>
  <div class="card"><slot></slot></div>
</template>

<style scoped>
.card {
  border: 1px solid var(--outline-primary);
  padding: 48px;

  border-radius: 6px;

  position: relative;
}

@media (max-width: 480px) {
  .card {
    padding: 24px;
  }
}
</style>
