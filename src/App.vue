<template>
  <LayoutView />
</template>

<script setup lang="ts">
import LayoutView from './views/layout/LayoutView.vue'
</script>

<style scoped>
:global(*) {
  padding: 0;
  margin: 0;
}
:global(.parent) {
  width: 800px;
  height: 400px;
  background-color: black;
  color: white;
  position: relative;
}
:global(.child) {
  width: 600px;
  height: 200px;
  background-color: #ddd;
  color: black;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}
</style>
