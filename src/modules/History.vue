<template>
  <Card class="history">
    <h2>Quotes history</h2>
    <ul>
      <li v-for="{ author, quote } in quotesHistory">
        <span>{{ quote }}</span>
      </li>
    </ul>
  </Card>
</template>

<script setup>
import Card from '../components/Card.vue'

const quotesHistory = JSON.parse(localStorage.getItem('quotesHistory')) || []
</script>

<style scoped>
.history {
  margin: 0 auto;
  max-width: min(100%, 480px);
  padding: 12px;
}
ul {
  max-height: 300px;
  overflow: auto;
  padding-left: 4px;
}
li {
  list-style-type: none;
  text-align: start;
  padding: 12px 16px;
}
li:not(:last-child) {
  border-bottom: 1px solid var(--outline-primary);
}
</style>
