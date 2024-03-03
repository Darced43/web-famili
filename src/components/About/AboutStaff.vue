<template>
    <p>В нашей команде</p>
    <SliderUI
        :webServices="webServices"
    />
    <div class="wrapper__internal">
        <div 
            v-if="store.aboutSlider === '' || store.aboutSlider === 'Руководство'"
            class="service__working">
            Первый
        </div>        
        <div  
            class="service__working"
            v-if="store.aboutSlider === 'Seo отдел'">
                Второй
        </div>
        <div  
            class="service__working"
            v-if="store.aboutSlider === 'Прочая челядь'">
                Третий
        </div>
    </div>
</template>

<script setup>
import {onMounted} from 'vue'
import SliderUI from '../UI/SliderUI.vue'
import {store} from '../../store/store.js'

onMounted(() => {
    store.aboutSlider = ''
})
const webServices = [
    {
        massege: 'Руководство',
        id: "one",
        idKey: 1
    },
    {
        massege: 'Seo отдел',
        id: "two",
        idKey: 2
    } ,
    {
        massege: 'Прочая челядь',
        id: "three",
        idKey: 3
    }
]
</script>

<style>

</style>