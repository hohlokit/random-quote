<script setup>
import { ref, reactive } from 'vue'

import { Card, Button, Triangle, Loader } from '../atoms'

import { getRandomQuote } from '../../api/getRandomQuote'

const props = defineProps(['category'])

const quote = ref('')
const author = ref('')
const error = ref(null)

async function getQuote() {
  quote.value = ''
  author.value = ''
  error.value = null

  try {
    const data = await getRandomQuote(props.category)
    if (!data) throw new Error(`Quotes from provided category wasn't found.`)

    quote.value = data.quote
    author.value = data.author
  } catch (err) {
    console.log(err)

    error.value = err.response
      ? 'Our computer wizards lost your quote. Please try again later:)'
      : err.message
  }
}

getQuote()
</script>

<template>
  <Card v-if="quote">
    <div class="wrapper">
      <div class="triangles">
        <Triangle variant="left-top" size="small" />
        <Triangle variant="left-top" size="small" />
      </div>
      <blockquote>
        <p>{{ quote }}</p>
        <cite>{{ author }}</cite>
      </blockquote>
    </div>
    <div class="triangles overlay">
      <Triangle variant="right-bot" size="large" />
      <Triangle variant="right-bot" size="large" />
    </div>
  </Card>

  <Card v-if="error">{{ error }}</Card>
  <Loader v-if="!quote && !error" />
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 32px;

  z-index: 10;
  position: relative;
  min-height: 300px;
  width: 720px;
  max-width: min(100%, 720px);
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
  margin: 0;
  font-size: 24px;
}

@media (max-width: 768px) {
  .wrapper {
    width: 100%;
    gap: 0;
  }
  blockquote > p {
    margin: 12px 0 16px;
  }
}
@media (max-width: 480px) {
  .overlay {
    right: 24px;
    bottom: 24px;
  }
}
</style>
