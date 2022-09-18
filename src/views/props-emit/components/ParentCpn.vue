<template>
  <div class="parent">
    <h3 :style="{ textAlign: 'center' }">Parent Component</h3>
    <div>
      <input type="text" v-model="parentMessage" />
    </div>
    <div v-if="childMessage">
      <span :style="{ color: 'red' }">Props from Child: </span>
      <span>{{ childMessage }}</span>
    </div>
    <ChildCpn :message="parentMessage" @send-message="handleSendMessage" />
  </div>
</template>

<script setup lang="ts">
import ChildCpn from '@/views/props-emit/components/ChildCpn.vue'
import { ref } from 'vue'

const parentMessage = ref('')
const childMessage = ref('')

const handleSendMessage = (message: string) => {
  childMessage.value = message
}
</script>

<style scoped></style>
