<template>
  <Card v-if="copiedHistory.length > 1" class="history">
    <h2>Quotes history</h2>
    <ul>
      <li v-for="({ quote }, index) in copiedHistory" :key="index">
        <span>{{ quote }}</span>
      </li>
    </ul>
  </Card>
</template>

<script setup>
import { ref, watch } from 'vue'
import Card from '../components/Card.vue'

const props = defineProps({
  quotesHistory: {
    default: []
  }
})

const copiedHistory = ref(props.quotesHistory)

watch(props.quotesHistory, () => {
  copiedHistory.value = props.quotesHistory
    .slice(0, props.quotesHistory.length )
    .reverse()
})
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
