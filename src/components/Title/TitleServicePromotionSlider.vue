<template>
  <div class="promotion__mobile">
    <Carousel :itemsToShow="showSlider" :wrap-around="false" >
      <Slide :key="slide">
        <div class="promotion__content">
            <img src="../../img/promotion-rocet.svg" alt="рокета">
            <h6>SEO оптимизация</h6>
            <p>Наиболее эффективный способ привлечения целевой аудитории. Поисковая оптимизация позволяет многократно увеличить количество продаж при разумном рекламном бюджете.</p>
            <a href="">Узнать стоимость</a>
        </div>
      </Slide>
      <Slide  :key="slide">
        <div class="promotion__content">
                      <img src="../../img/promotion-search.svg" alt="поиск">
                      <h6>Разовая SEO оптимизация</h6>
                      <p>Рассчитана на молодые или долго не продвигающиеся сайты. Основной задачей разовой seo-оптимизации является приведение вашего сайта и его контента в порядок.</p>
                      <a href="">Заказать оптимизацию</a>
                  </div>
      </Slide>
      <Slide  :key="slide">
        <div class="promotion__content right">
                      <img src="../../img/promotion-seo.svg" alt="seo">
                      <h6>SEO аудит сайта</h6>
                      <p>Проведём полный анализ на соответствие требованиям, предъявляемым пусковыми системами для осуществления последующего продвижения сайта.</p>
                      <a href="">Заказать SEO аудит</a>
                  </div>
      </Slide>
      <Slide :key="slide">
        <div class="promotion__content audit right">
                      <h6>Аудит контекстной рекламы в подарок.</h6>
                      <p>При заказе услуг SEO оптимизации в подарок аудит Яндекс.Директ</p>
                      <a href="">Заказать SEO</a>
                  </div>
      </Slide>
  
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup >
import { ref, watch } from 'vue'
import './style-slider.css'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

let showSlider = ref(1.25)
const widtWindow = document.documentElement.clientWidth

console.log(widtWindow)

  switch(widtWindow){
    case 850:
      showSlider = ref(1.5);
      break;
    case 480:
      showSlider = ref(1.25);
      break;
    case 360:
      showSlider = ref(1);
      break;
  }



</script>

<style scoped>
h6{
    color: #3C4D5C;
    font-family: 'Gilroy';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin: 0;
    text-align: start;
}
p{
    color:  #86919E;
    font-family: 'Gilroy';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
    margin: 0;
    text-align: start;
}
a{
    font-family: 'Gilroy';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; 
    text-align: start;
    background: linear-gradient(97deg, #23618D 0%, #277097 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.promotion__mobile{
  display: none;
  margin-bottom: 80px;
}
.promotion__content{
    padding: 40px;
    display: grid;
    gap: 20px;
    max-width: 660px;
}
.carousel__track{
  column-gap: 20px;
  margin-top: 0;
  margin-bottom: 20px;
}
.carousel__pagination{
  /* width: 360px; */
  height: 60px;
  padding: 20px 125px;
}
@media(max-width:850px){
  .promotion__mobile{
    display: block;
  }
}
</style>