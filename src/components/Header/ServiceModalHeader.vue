<template>
    <Transition name="burger" class="burger">
      <div v-if="showServiceModal" class="burger__mask">
        <div class="burger__container">
          <div class="wrapper">
            <div class="burger__header">
              <img src="../../img/header-label.svg" alt="логотип">
              <img @click="$emit('close')" src="../../img/header-closes.svg" alt="крестик">
            </div>
            <div class="burger__info">
              <router-link to="/About">Об агенстве</router-link>
              <a class="coint">
                <div>Кейсы</div>
                <span class="coint__number">25</span>
              </a>
              <a class="coint"> 
                <div>Отзывы</div>
                <span class="coint__number">12</span>
              </a>
              <a>Контакты</a>
              <a>Услуги</a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup>
  const props = defineProps({
    showServiceModal: Boolean
  })
  
  
  </script>
  
  <style lang="scss" scoped>
  
  
  a{
    color:#fff;
    font-family: 'Gilroy';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    text-decoration: none;
    cursor: pointer;
  }
  .burger__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: opacity 0.3s ease;
  }
  
  .burger__container {
    height: auto;
    width: 100%;
    transition: all 0.3s ease;
    background: #1D2429;
    position: relative;
  }
  .burger-enter-from {
    top: -125%;
  }
  .burger-enter-active{
    top: -125%;
  }
  .burger-leave-to {
    top: -125%;
  }
  
  .burger-enter-to {
    transition: 0.7s ;
  }
  .burger-leave-to {
    transition: 0.7s ;
  }
  
  .burger-enter-to,
  .burger-leave-from{
    top: 0;
  }
  
  .burger__header{
    padding: 50px 40px 0 40px;
    display: flex;
    justify-content: space-between;
  }
  
  .burger__info{
    display: flex;
    column-gap: 60px;
    padding: 90px 0 90px 195px;
  }

  .coint{
    display: flex;
    column-gap: 10px;
  }
  .coint__number{
    color:  #86919E;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  @media(max-width:1400px){
    .burger__info {
      padding: 90px 0 90px 8%;
      column-gap: 50px;
  }
  }
  </style>