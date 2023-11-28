<template>
        <div class="wrapper">
            <div class="titlePage__advertisement">
                <h2 class="titlePage__advertisement__text">
                    Приведём клиентов
                    <br>
                    <span>от 49 ₽ за лид</span>
                    в течение 1 дня
                </h2>
            </div>
            <div class="titlePage__advertisement__circle"></div>
            <div class="titlePage__agl__form">Просто оставьте заявку</div>
            <TitleFormApplication/>
        </div>
</template>

<script setup>
import TitleFormApplication from '../components/Header/TitleFormApplication.vue';

</script>

<style scoped>
.wrapper{
    margin: 0 195px;
}
.titlePage__advertisement{
    position: relative;
}
.titlePage__advertisement__text{
    color: #3C4D5C;
    font-family: 'Gilroy';
    font-size: 86px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-top: 256px;
    margin-bottom: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.titlePage__advertisement__text span{
    font-family: 'Gilroy';
    font-size: 120px;
    font-style: normal;
    font-weight: 900;
    line-height: 100%;
    background: linear-gradient(270deg, #1B558D 0%, #379BAD 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.titlePage__advertisement__circle{
    position: absolute;
    width: 1100px;
    height: 1100px;
    flex-shrink: 0;
    border-radius: 1100px;
    opacity: 0.1;
    background: linear-gradient(88deg, #369AAC 0.86%, #05ADC5 100%);
    filter: blur(150px);
    top: 0;
}
.titlePage__agl__form{
    color:  #3C4D5C;
    font-family: 'Gilroy';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; 
    margin-bottom: 30px;
}
</style>