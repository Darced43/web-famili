<template>
  <div v-for="webService in webServices" :key="webService.id">
    {{ webService.massege }}
  </div>
</template>

<script setup>
const props = defineProps({
  webServices: Array
})
</script>

<style>

</style>