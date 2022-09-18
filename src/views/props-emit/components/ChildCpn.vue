<template>
  <div class="child">
    <h3 :style="{ textAlign: 'center' }">Child Component</h3>
    <div v-if="message">
      <span :style="{ color: 'red' }">Props from Parent: </span>
      <span>{{ message }}</span>
    </div>
    <div>
      <input type="text" v-model="childMessage" />
      <button @click="handleButtonClick">send to Parent</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  message: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['sendMessage'])

const childMessage = ref('')

const handleButtonClick = () => {
  emit('sendMessage', childMessage.value)
}
</script>

<style scoped></style>
