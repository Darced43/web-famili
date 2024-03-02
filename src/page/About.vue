<template>
    <div class="wrapper__internal">
        <div class="about">
            <div class="about__breadClumb">
              <router-link to="/" class="about__breadClumb-main">Главная</router-link>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="20" viewBox="0 0 4 20" fill="none">
                    <path d="M1 14.5L3 11.5L1 8.5" stroke="#86919E" stroke-linecap="round"/>
                </svg>
              <span class="about__breadClumb-about">Об агенстве</span>
            </div>
            <h1>Об агенстве</h1>
            <h2>Компания «Family»</h2>
            <p class="about__description">Комплексный подход к проектам: разработка, поддержка, эффективное продвижение</p>
            <span class="about__famaly"></span>
            <AboutStaff/>
        </div>
    </div>
</template>

<script setup>
    import AboutStaff from '../components/About/AboutStaff.vue'
</script>

<style scoped>
h1{
    font-family: 'Gilroy';
    font-size: 86px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; 
    background:linear-gradient(270deg, #1B558D 0%, #379BAD 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 90px 0;
}
h2{

    font-family: 'Gilroy';
    font-size: 120px;
    font-style: normal;
    font-weight: 900;
    line-height: 100%;
    background:  linear-gradient(270deg, #1B558D 0%, #379BAD 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 40px 0;
}

.about{
    margin-top: 106px;
}

.about__famaly{
    content: url('../img/About-famaly.svg');
    position: absolute;
    top: 308px;
    left: 674px;
}

.about__breadClumb{
    display: flex;
    column-gap: 10px;
    margin-bottom: 20px;
}
.about__breadClumb-main{
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    background:  linear-gradient(88deg, #369AAC 0.86%, #05ADC5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.about__breadClumb-about{
    color:  #86919E;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
}
.about__description{
    color:  #3C4D5C;
    font-family: 'Gilroy';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; 
    max-width: 924px;
    margin: 0 0 150px 0;
}
</style>