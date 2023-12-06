<template>
    <div class="wrapper__service">
        <div class="service">
            <swiper
                :slidesPerView="'2.5'"
                :pagination="{
                clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide>
                    <div  @click="(e) => activeMenu(e)" ref='serviceAgl' class="service__info active__info">
                        Услуги продвижения
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div @click="(e) => activeMenu(e)" ref='serviceInternet' class="service__info">
                        Интернет маркетинг
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div @click="(e) => activeMenu(e)" ref='serviceWebsite' class="service__info">
                        Создание сайтов
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="service__promotion">
            1
        </div>
        <div class="service__internet">2</div>
        <div class="service__website">3</div>
    </div>
</template>

<script setup>

import {ref} from "vue" 
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = Pagination

const serviceAgl = ref()
const serviceInternet = ref()
const serviceWebsite = ref()
const allService = [
    serviceAgl, serviceInternet, serviceWebsite
]

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
}

</script>


<style scoped>
.wrapper__service{
    margin-left: 195px;
    overflow: hidden;
}
.service__info{
    color:  #EFF7FB;
    font-family: 'Gilroy';
    font-size: 86px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    text-align: start;
    cursor:pointer;
}
.active__info{
    font-family: 'Gilroy';
    font-size: 86px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    background: linear-gradient(270deg, #1B558D 0%, #379BAD 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>