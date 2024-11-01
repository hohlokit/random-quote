<script setup>
import History from './modules/History.vue'
import Quote from './modules/Quote.vue'

import { watch, reactive } from 'vue'

const quotesHistory = reactive(
  JSON.parse(localStorage.getItem('quotesHistory'))
)

function setQuotesHisory(newValue) {
  quotesHistory.push(newValue)
}

watch(quotesHistory, (newValue) => {
  localStorage.setItem('quotesHistory', JSON.stringify(newValue))
})
</script>

<template>
  <Quote :setQuotesHistory="setQuotesHisory" :quotesHistory="quotesHistory" />
  <History :quotesHistory="quotesHistory" />
</template>

<style scoped></style>
