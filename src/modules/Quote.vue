<script setup>
import { onMounted, ref, toRaw } from 'vue'

import { Card, Button, Triangle, Loader, Input } from '../components'

import { getRandomQuote } from '../api/getRandomQuote'

const props = defineProps({
  quotesHistory: {
    default: []
  },
  setQuotesHistory: {
    type: Function,
    required: true
  }
})

const quote = ref('')
const author = ref('')
const error = ref(null)
const category = ref('')

const isLoading = ref(false)

async function getQuote() {
  if (isLoading.value) return

  quote.value = ''
  author.value = ''
  error.value = null

  isLoading.value = true

  try {
    const data = await getRandomQuote(category.value)
    if (!data)
      throw new Error(
        category
          ? `Quotes from provided category wasn't found.`
          : 'Something wrong going wrong while looking for quote :('
      )

    quote.value = data.quote
    author.value = data.author

    props.setQuotesHistory({ quote: quote.value, author: author.value })
  } catch (err) {
    console.log(err)

    error.value = err.response
      ? 'Our computer wizards lost your quote. Please try again later:)'
      : err.message
  } finally {
    isLoading.value = false
  }
}

function copyToClipboard(params) {
  if (!quote.value) return

  navigator.clipboard.writeText(quote.value)
}

getQuote()
</script>

<template>
  <Card v-if="!isLoading && !error && quote">
    <div class="wrapper">
      <div class="triangles">
        <Triangle variant="left-top" size="small" />
        <Triangle variant="left-top" size="small" />
      </div>
      <blockquote @click="copyToClipboard">
        <p>{{ quote }}</p>
        <cite>{{ author }}</cite>
      </blockquote>
    </div>
    <div class="triangles overlay">
      <Triangle variant="right-bot" size="large" />
      <Triangle variant="right-bot" size="large" />
    </div>
  </Card>
  <Card v-if="error && !isLoading">{{ error }}</Card>
  <Loader v-if="isLoading" />

  <div class="reload-quote">
    <Input
      v-model="category"
      label="Category"
      placeholder="Get quote by category"
      type="text"
      :disabled="isLoading"
    />
    <Button @click="getQuote" :disabled="isLoading">
      <span> Get quote </span>
    </Button>
  </div>
</template>

<style scoped>
.reload-quote {
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;

  gap: 32px;

  min-width: 600px;
  z-index: 10;
  position: relative;
  min-height: 300px;
}

.triangles {
  display: flex;
  flex-direction: row;
  gap: 6px;
}
.overlay {
  position: absolute;
  right: 48px;
  bottom: 48px;
  opacity: 0.2;
  z-index: 5;
}
blockquote {
  width: 100%;
  text-align: center;

  margin: 0;
  font-size: 24px;

  cursor: pointer;
}

blockquote:hover > p {
  opacity: 0.8;
}
blockquote:active > p {
  animation: press 0.5s ease-in-out;
}

@media (max-width: 768px) {
  .wrapper {
    min-width: unset;
    width: 100%;
    gap: 0;
  }
  blockquote > p {
    margin: 12px 0 16px;
  }
}
@media (max-width: 480px) {
  blockquote {
    font-size: 16px;
  }
  .overlay {
    right: 24px;
    bottom: 24px;
  }
}

@keyframes press {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.65);
  }
  to {
    transform: scale(1);
  }
}
</style>
