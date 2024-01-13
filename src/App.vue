<script setup>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
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
      <Footer/>
</template>

<style scoped>
.wrapper__content{
    max-width: 1920px;
    margin: 0 auto;
}
.footer{
  background: #1D2429;
}
</style>
