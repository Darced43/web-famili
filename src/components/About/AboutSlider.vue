<template>
    <div class="wrapper__service__slider" >
        <div class="service">
            <swiper
                :slidesPerView="'2.5'"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide                
                        v-for="webService in webServices"
                        :key="webService.idKey"
                        >
                    <div  
                        @click="(e) => activeMenu(e)" 
                        id={{webService.id}}
                        ref='sliderlem'
                        class="service__info">
                        {{ webService.massege }}
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import {store} from '../../store/store.js'

const props = defineProps({
    webServices: Array,
})

const sliderlem = ref([])

onMounted(() => {
    //console.log(sliderlem.value)

    const firstMenu = sliderlem.value
    for(let i = 0; i < 1; i++){
        firstMenu[i].classList.add('active__info')
    }
})

function activeMenu(e){
    sliderlem.value.forEach(item => {
        item.classList.remove('active__info')
    })
    e.currentTarget.classList.add('active__info')
    store.aboutSlider = e.currentTarget.innerHTML
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