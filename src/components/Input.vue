<template>
  <div class="input-container">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input-field"
    />
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: { type: String, default: 'text' },
  disabled: { type: Boolean, default: false },
  error: String,
  id: String,
  disabled: false
})
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.input-label {
  font-weight: bold;
  margin-bottom: 4px;
}

.input-field {
  padding: 8px 4px;
  border: 1px solid var(--outline-primary);
  border-radius: 4px;
  outline: none;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
</style>
