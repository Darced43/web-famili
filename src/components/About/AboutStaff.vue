<template>
  <p>В нашей команде</p>
  <TitleServiceSlider :webServices="webServices"/>
</template>

<script setup>
import {ref} from 'vue'
import TitleServiceSlider from '../Title/TitleServiceSlider.vue'

const serviceAgl = ref()
const serviceInternet = ref()
const serviceWebsite = ref()
const allService = [
    serviceAgl, serviceInternet, serviceWebsite
]

const webServices = [
    {
        massege: 'Услуги продвижения',
        id: "one",
        status: 'active__info',
        anchor: serviceAgl
    },
    {
        massege: 'Интернет маркетинг',
        id: "two",
        status: '',
        anchor: serviceInternet
    } ,
    {
        massege: 'Создание сайтов',
        id: "three",
        status: '',
        anchor: serviceWebsite
    }
]
</script>

<style>

</style>