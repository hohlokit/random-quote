<template>
  <div>
    <ul>
      <li v-for="{ author, quote } in quotesHistory"></li>
    </ul>
  </div>
</template>

<script setup>
const quotesHistory = JSON.parse(localStorage.getItem('quotesHistory')) || []
</script>

<style scoped></style>
