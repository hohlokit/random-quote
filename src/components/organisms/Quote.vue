<script setup>
import Card from '../atoms/Card.vue'
import Triangle from '../atoms/Triangle.vue'
</script>

<template>
  <Card>
    <div>
      <div class="triangles">
        <Triangle variant="left-top" size="small" />
        <Triangle variant="left-top" size="small" />
      </div>
    </div>
  </Card>
</template>

<style scoped>
.triangles {
  display: flex;
  flex-direction: row;
  gap: 6px;
}
</style>
