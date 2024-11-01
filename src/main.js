import { createApp } from 'vue'
import './assets/base.css'
import App from './App.vue'

if (!localStorage.getItem('quotesHistory')) {
  localStorage.setItem('quotesHistory', '[]')
}
createApp(App).mount('#app')
