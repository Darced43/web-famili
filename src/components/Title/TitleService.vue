<template>
    <div>
        <swiper
            :slidesPerView="'2.5'"
            :spaceBetween="30"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide class="">Услуги продвижения</swiper-slide>
            <swiper-slide>Интернет маркетинг</swiper-slide>
            <swiper-slide class="as">Создание сайтов</swiper-slide>
        </swiper>
    </div>
</template>
<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = Pagination

</script>
<style>
    .as{
        background-color: brown;
    }
</style>