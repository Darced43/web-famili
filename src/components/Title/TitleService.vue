<template>
    <div class="wrapper__service__slider">
        <div class="service">
            <swiper
                :slidesPerView="'2.5'"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide>
                    <div  
                        @click="(e) => activeMenu(e)" 
                        ref='serviceAgl' 
                        id="one"
                        class="service__info active__info">
                        Услуги<br/>продвижения
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div 
                        @click="(e) => activeMenu(e)" 
                        ref='serviceInternet' 
                        id="two"
                        class="service__info">
                        Интернет<br/>маркетинг
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div 
                        @click="(e) => activeMenu(e)" 
                        ref='serviceWebsite' 
                        id="three"
                        class="service__info">
                        Создание<br/>сайтов
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <div class="wrapper__internal">
        <div v-if="contenService === 'one'">
            <TitleServicePromotion />
            <TitleServicePromotionSlider />
        </div>        
        <div  
            class="service__working"
            v-if="contenService === 'two'">
                Cервис пока в разработке
        </div>
        <div  
            class="service__working"
            v-if="contenService === 'three'">
                Cервис пока в разработке
        </div>
    </div>
</template>

<script setup>

import {ref} from "vue" 
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TitleServicePromotion from './TitleServicePromotion.vue'
import TitleServicePromotionSlider from './TitleServicePromotionSlider.vue'

const modules = Pagination

const serviceAgl = ref()
const serviceInternet = ref()
const serviceWebsite = ref()
const allService = [
    serviceAgl, serviceInternet, serviceWebsite
]

const contenService = ref('one')

function showContenService(nameService){
    contenService.value = nameService.id
}

function activeMenu(e){
    const activeAgl = e.target
    activeAgl.classList.add('active__info') 
    
     allService.forEach( item => {
        if(activeAgl === item.value){
            return
        } else {
            item.value.classList.remove('active__info')
        }
     })
     showContenService(activeAgl)
}


</script>


<style scoped>

@media(hover:hover){
    .service__info:hover{
        background: linear-gradient(270deg, #1B558D 0%, #379BAD 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: 1s;
        opacity: 1;
    }
}
.wrapper__service__slider{
    margin-left: 195px;
    overflow: hidden;
}
.service{
    margin-bottom: 90px;
}
.service__info{
    font-family: 'Gilroy';
    font-size: 86px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    text-align: start;
    cursor:pointer;
    background: linear-gradient(270deg, #1B558D 0%, #379BAD 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.1;
    transition: 1s;
}
.active__info{
    opacity: 1;
    transition: 0.1s;
    background: linear-gradient(270deg, #1B558D 0%, #379BAD 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
}
.service__working{
    font-family: 'Gilroy';
    font-size: 78px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    background: linear-gradient(97deg, #23618D 0%, #277097 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    padding-top: 90px;
}

@media(max-width:1500px){
    .active__info{
        font-size: 64px;
    }
    .service__info{
        font-size: 64px;
    }
}
@media(max-width:1200px){
    .wrapper__service__slider{
        margin-left: 124px;
    }
}
@media(max-width:1024px){
    .wrapper__service__slider{
        margin-left: 124px;
    }
    .service__info{
        font-size: 48px;
    }
    .service__working{
        font-size: 50px;
    }
}
@media(max-width:550px){
    .wrapper__service__slider{
        margin-left: 60px;
    }
}
@media(max-width:420px){
    .service__info {
        font-size: 30px;
    }
}
</style>