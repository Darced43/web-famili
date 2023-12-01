<template>
            <div class="mobile__burger__cardions">
              <div class="mobile__burger__select" @click="(e) => openWeb(e)">
                <div class="">Web-разработка</div>
                <img src="../../img/arrow-header-menu.svg" alt="arrow"/>
              </div>
              <Transition name="optionWeb">
                <div class="option__info info__1" v-if="web">
                  <a>Разработка интернет-магазина на 1С битрикс</a>
                  <a>Разработка сайтов</a>
                  <a>Создание Landing Page</a>
                  <a>Разработка сайта на Tilda</a>
                  <a>Доработка сайта</a>
                  <a>Редизайн сайта</a>
                </div>
              </Transition>
              <div class="mobile__burger__select" @click="(e) => openPromotion(e)">
                <div>Продвижение сайта</div>
                <img src="../../img/arrow-header-menu.svg" alt="arrow"/>
              </div>
              <Transition name="promotion">
                <div class="option__info info__2" v-if="promotion">
                  <a href="">Редизайн сайта</a>
                  <a href="">Поисковый SEO аудит</a>
                </div>
              </Transition>
              <div class="mobile__burger__select" @click="(e) => openMarketing(e)">
                <div>Интернет-маркетинг</div>
                <img src="../../img/arrow-header-menu.svg" alt="arrow"/>
              </div>
              <Transition name="promotion">
                <div class="option__info info__3" v-if="marketing">
                  <a href="">Контекстная реклама</a>
                  <a href="">Аудит контекстной рекламы</a>
                </div>
              </Transition>
              <div class="mobile__burger__select" @click="(e) => openTargeting(e)">
                <div>Таргетинг</div>
                <img src="../../img/arrow-header-menu.svg" alt="arrow"/>
              </div>
              <Transition name="promotion">
                <div class="option__info info__4" v-if="targeting">
                  <a href="">Таргетированная реклама</a>
                  <a href="">SMM в VK</a>
                </div>
              </Transition>
              <div class="mobile__burger__select" @click="(e) => openMore(e)">
                <div>Ещё</div>
              </div>
              <Transition name="more">
                <div class="option__info info__5" v-if="more">
                  <a href="">Аналитика</a>
                </div>
              </Transition>
            </div>
</template>

<script setup>
import {ref} from 'vue'

const web = ref(false)
const promotion = ref(false)
const marketing = ref(false)
const targeting = ref(false)
const more = ref(false)

function openWeb(e){
  const head = e.currentTarget.lastChild
  head.classList.toggle('arrow__rotate__toggle')
  web.value = !web.value
}

function openPromotion(e){
  const head = e.currentTarget.lastChild
  head.classList.toggle('arrow__rotate__toggle')
  promotion.value = !promotion.value
}

function openMarketing(e){
  const head = e.currentTarget.lastChild
  head.classList.toggle('arrow__rotate__toggle')
  marketing.value = !marketing.value
}
function openTargeting(e){
  const head = e.currentTarget.lastChild
  head.classList.toggle('arrow__rotate__toggle')
  targeting.value = !targeting.value
}
function openMore(e){
  more.value = !more.value
}
</script>

<style>
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

 .mobile__burger__cardions{
    display: none;
    row-gap: 2.5px;
    flex-direction: column;
    padding-bottom: 10px;
  }
  .mobile__burger__select{
    padding: 30px 60px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .mobile__burger__select div{
    color:  #FFF;
    font-family: 'Gilroy';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
  .option__info{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 60px;
    overflow: hidden;
    transition: 1s;
  } 

  .action{
    height: auto;
  }

.optionWeb-enter-from {
  height: 0px;
}

.optionWeb-leave-to {
  height: 0px;
  transition: 0.4s
}

.optionWeb-enter-to {
  transition: 0.4s ;
}

.optionWeb-enter-to,
.optionWeb-leave-from{
  height: 180px;
} 

.promotion-enter-from {
  height: 0px;
}

.promotion-leave-to {
  height: 0px;
  transition: 0.4s
}

.promotion-enter-to {
  transition: 0.4s ;
}

.promotion-enter-to,
.promotion-leave-from{
  height: 54px;
} 
.more-enter-from {
  height: 0px;
}

.more-leave-to {
  height: 0px;
  transition: 0.4s
}

.more-enter-to {
  transition: 0.4s ;
}

.more-enter-to,
.more-leave-from{
  height: 22px;
} 

.arrow__rotate__toggle{
  transform: rotate(180deg);
  transition: 0.5s;
}

@media(hover: hover){
  a:hover{
    background: linear-gradient(88deg, #369AAC 0.86%, #05ADC5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

@media(max-width:600px){

  .mobile__burger__cardions{
    display: flex;
  }
}
</style>