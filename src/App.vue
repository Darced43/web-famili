<script setup>
import Header from './components/Header/Header.vue'
</script>

<template>
    <div class="wrapper">
      <Header/>
      <div class="wrapper__content">
        <RouterView/>
        <div style='width:100px; height:100px'>1</div>
        <div style='width:100px; height:100px'>1</div>
        <div style='width:100px; height:100px'>1</div>
      </div>
    </div>
</template>

<style scoped>
.wrapper__content{
    max-width: 1920px;
    margin: 0 auto;
}
</style>
