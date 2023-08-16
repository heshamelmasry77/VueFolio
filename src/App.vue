<script setup>
import NavBar from './components/NavBar.vue'

</script>

<template>
  <div class="flex h-screen bg-white">
  <NavBar/>
  <router-view></router-view>
  </div>
</template>