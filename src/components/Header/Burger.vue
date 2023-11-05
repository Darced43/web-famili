<template>
  <Transition name="service" class="service">
    <div v-if="showBurger" class="service__mask">
      <div class="service__container">
        <div class="wrapper">
          <div class="service__header">
            <img class="service__header__logo" src="../../img/header-label.svg" alt="логотип">
            <img class="service__header__cross" @click="$emit('close')" src="../../img/header-closes.svg" alt="крестик">
          </div>
          <div class="service__info">
            <div class="service__info__block service__item_1">
              <h6>Web-разработка</h6>
              <a href="">Разработка интернет-магазина на 1С битрикс</a>
              <a href="">Разработка сайтов</a>
              <a href="">Создание Landing Page</a>
              <a href="">Разработка сайта на Tilda</a>
              <a href="">Доработка сайта</a>
              <a href="">Редизайн сайта</a>
            </div>
            <div class="desctop">
              <div class="service__info__block service__item_2">
                <h6>Интернет-маркетинг</h6>
                <a href="">Контекстная реклама</a>
                <a href="">Аудит контекстной рекламы</a>
              </div>
              <div class="service__info__block service__item_3">
                <h6>Таргетинг</h6>
                <a href="">Таргетированная реклама ВК</a>
                <a href="">SMM в VK</a>
              </div>
              <div class="service__info__block service__item_5 table">
                <h6>Ещё</h6>
                <a href="">Аудит и аналитика</a>
              </div>
            </div>
            <div class="service__info__block service__item_4">
              <h6>Продвижение сайта</h6>
              <a href="">SEO Оптимизация</a>
              <a href="">Поисковый SEO аудит</a>
            </div>
            <div class="service__info__block service__item_5">
                <h6>Ещё</h6>
                <a href="">Аудит и аналитика</a>
              </div>
          </div>
                <div class="burger__info">
                  <a>Об агенстве</a>
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

          <div class="mobile">
            <ModalCityHeader/>
            <div class="mobile__burger__info">
              <a href="">Об агенстве</a>
              <a href="">Кейсы</a>
              <a href="">Отзывы</a>
              <a href="">Контакты</a>
            </div>
            <div class="mobile__burger__agl">Услуги</div>
          </div>
          <MobileCardion/>
        </div>
      </div>
  </Transition>
</template>

<script setup>
import {ref} from 'vue'
import ModalCityHeader from './ModalCityHeader.vue'
import MobileCardion from './MobileCardion.vue';

const props = defineProps({
  showBurger: Boolean
})

</script>

<style lang="scss" scoped>

h6{
  color: #FFF;
  font-family: 'Gilroy';
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

a{
  color:#86919E;
  font-family: 'Gilroy';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-decoration: none;
  cursor: pointer;
}
.service__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: opacity 0.3s ease;
}

.service__container {
  height: 644px;
  width: 100%;
  transition: all 0.3s ease;
  background: #1D2429;
  position: relative;
  overflow: scroll;
}
.service-enter-from {
  top: -125%;
}
.service-enter-active{
  top: -125%;
}
.service-leave-to {
  top: -125%;
}

.service-enter-to {
  transition: 0.7s ;
}
.service-leave-to {
  transition: 0.7s ;
}

.service-enter-to,
.service-leave-from{
  top: 0;
}

.service__header{
  padding: 50px 40px 0 40px;
  display: flex;
  justify-content: space-between;
}

.service__info{
  display: grid;
  margin-top: 90px;
  justify-content: center;
  gap:30px;
}
.service__info__block{
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 360px;
  h6{
    margin: 0;
  }
}

.service__item_1{
  grid-column: 1/2;
  grid-row: 1/3;
}
.service__item_2{
  grid-column: 2/3;
  grid-row: 1/2;
}
.service__item_3{
  grid-column: 2/3;
  grid-row: 2/3;
}
.service__item_4{
  grid-column: 3/4;
  grid-row: 1/2;
}
.service__item_5{
  grid-column: 4/5;
  grid-row: 1/2;
}

.service__item_5.table{
  display: none;
}

.desctop{
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

  

  
  .burger__info{
    display: none;
    column-gap: 40px;
    padding-bottom: 80px;
    height: auto;
    width: 100%;
  }

  .burger__info a{
    font-family: 'Gilroy';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    color: #fff;
  }
  .coint{
    display: flex;
    column-gap: 10px;
  }
  .coint div, span{
    cursor: pointer;
  }
  .coint__number{
    color:  #86919E;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }

  .mobile{
    display: none;
  }
  .mobile__burger__info{
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    margin-top: 60px;
    margin-bottom: 120px;
  }
  .mobile__burger__agl{
    color:  #86919E;
    font-family: 'Gilroy';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; 
    margin-bottom: 20px;
  }

.service__header__cross{
  cursor: pointer;
}

@media(max-width:1600px){
  .service__info {
      column-gap: 20px;
  }
  .service__info__block{
    width: 300px;
  }
}

@media(max-width:1400px){
  .service__info {
      column-gap: 10px;
  }
  .service__info__block{
    width: 285px;
  }
}
@media(max-width:1200px){
  .wrapper{
    padding-left: 124px;
  }
  .service__container{
    height: 100%;
  }
  .service__header{
    padding: 40px 124px 0 0;
  }
  .service__header__logo{
    height: 53px;
  }
  .service__info{
    column-gap: 20px;
    row-gap: 40px;
    justify-content: normal;
    margin: 80px 0 80px 0;
  }
  .service__info__block{
    gap: 20px;
  }
  .service__item_1{
      grid-column: 1/2;
      grid-row: 1/2;
  }
  .service__item_4{
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .desctop{
    grid-column: 2/3;
    grid-row: 1/3;
    row-gap: 40px;
  }
  .service__item_5{
    grid-column: 2/3;
    grid-row: 2/3;
    display: none;
  }
  .service__item_5.table{
    display: block;
  }
  .burger__info{
    display: flex;
  }
}

@media(max-width:1024px){
  .wrapper{
    padding-left: 80px;
  }
  .burger__info{
    column-gap: 30px;
    flex-wrap: wrap;
    row-gap: 30px;
  }
}

@media(max-width:900px){
  .wrapper {
    padding-left: 30px;
  }
  .service__header {
    padding: 40px 30px 0 0;
  }
}

@media(max-width:600px){
  .wrapper{
    padding: 0;
  }
  .service__header__cross{
    width: 50px;
    height: 50px;
  }
  .service__header {
    padding: 40px 60px 0 60px;
  }
  .service__info{
    display: none;
  }
  .burger__info{
    display: none;
  }
  .mobile{
    display: block;
    padding: 60px 60px 20px 60px;
  }
}
</style>