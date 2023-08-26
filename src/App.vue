<script setup>
import NavBar from './components/NavBar.vue'
import Toaster from "./components/Toaster.vue";

</script>

<template>
  <div class="flex h-screen bg-white">
    <NavBar/>
    <router-view></router-view>
  </div>
</template>