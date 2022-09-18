<template>
  <div class="layout">
    <div class="side-bar">
      <router-link :to="{ name: 'propsEmit' }">1.props-emit</router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
}
.side-bar {
  padding: 10px;
  box-shadow: 1px 0 10px 0 #ddd;
}
.main {
  flex-grow: 1;
}
</style>
