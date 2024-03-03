<template>
    <SliderUI :webServices="webServices"/>
    <div class="wrapper__internal">
        <div v-if="store.aboutSlider === '' ||  store.aboutSlider === 'Услуги продвижения'">
            <TitleServicePromotion />
            <TitleServicePromotionSlider />
        </div>        
        <div  
            class="service__working"
            v-if="store.aboutSlider === 'Интернет маркетинг'">
                Cервис пока в разработке
        </div>
        <div  
            class="service__working"
            v-if="store.aboutSlider === 'Создание сайтов'">
                Cервис пока в разработке
        </div>
    </div>
</template>

<script setup>

import {ref, onMounted} from "vue" 
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SliderUI from "../UI/SliderUI.vue";
import TitleServicePromotion from './TitleServicePromotion.vue'
import TitleServicePromotionSlider from './TitleServicePromotionSlider.vue'
import {store} from '../../store/store.js'

onMounted(() => {
    store.aboutSlider = ''
})

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

const webServices = [
    {
        massege: 'Услуги продвижения',
        id: "one",
        idKey: 1
    },
    {
        massege: 'Интернет маркетинг',
        id: "two",
        idKey: 2
    } ,
    {
        massege: 'Создание сайтов',
        id: "three",
        idKey: 3
    }
]

</script>


<style scoped>

</style>