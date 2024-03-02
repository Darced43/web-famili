<template>
      <div class="wrapper__service__slider">
        <div class="service">
            <swiper
                :slidesPerView="'2.5'"
                :modules="modules"
                class="mySwiper"
                >
                <swiper-slide v-for="webService in webServices" :key="webService.id">
                    <div  
                        @click="(e) => activeMenu(e)" 
                        :id='webService.id' 
                        :ref="webService.anchor"
                        class="service__info"
                        :class="webService.status">
                        {{ webService.massege }}
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue" 
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const props = defineProps({
    webServices: Array
})

const serviceAgl = ref()
const serviceInternet = ref()
const serviceWebsite = ref()

const allService = []

const allObject = document.querySelectorAll('.service__info')

onMounted(() => {

})


function activeMenu(e){
    const activeAgl = e.target
    activeAgl.classList.add('active__info') 
    
    allObject.forEach( item => {
            console.log(item)
        })

    //  allService.forEach( item => {
    //     if(activeAgl === item.value){
    //         return
    //     } else {
    //         item.value.classList.remove('active__info')
    //     }
    //  })
    //  console.log(allService)
    //  showContenService(activeAgl)
}
</script>

<style>
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
</style>