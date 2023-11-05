<template>
  <div class="header">
    <div class="wrapper__header">
        <div class="header__filling">
            <div class="header__logog__and__service">
                <img class="header__filling__logo" src="../../img/logo.svg" alt="логотип"/>
                <div class="header__filling__attractionClien">
                    <div class="header__filling__attractionClien__info">
                        привлечь клинетов
                    </div>
                    <div class="header__filling__attractionClien__plus">
                        <img src="../../img/header-plus.svg" alt="плюс"/>
                    </div>
                </div>
            </div>
            <div class="header__filling__services" @click="showServiceModal = true" @close="showServiceModal = false">
                <div class="header__filling__services__text">
                    услуги
                </div>
                <div class="header__filling__services__button">
                    <img  src="../../img//arrow-header-menu.svg" alt="arrow" >
                </div>
                <Teleport to="body">
                    <ServiceModalHeader :showServiceModal="showServiceModal" @close="showServiceModal = false"/>
                </Teleport>
            </div>
            <div class="header__filling__route">
                <a href="">Об агенстве </a>
                <a href="">кейсы</a>
                <a href="">отзывы</a>
            </div>
            <div class="shell">
                <ModalCityHeader/>
            </div>
            <div class="header__filling__lastBlock">
                <div class="header__filling__lastBlock__telephone">8 800 351-45-66</div>
                <div style='width:64px; height:64px'></div>
            </div>
            <Teleport to='body'>
                <Burger :showBurger="showBurger" @close="showBurger = false"/>
            </Teleport>
            <img  @click='showBurger = true' class="header__filling__lastBlock__burger" src="../../img/burger.svg" alt="two-string"/>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import ServiceModalHeader from './ServiceModalHeader.vue';
import ModalCityHeader from './ModalCityHeader.vue';
import Burger from './Burger.vue'

const showServiceModal = ref(false)
const showBurger = ref(false)


</script>

<style scoped lang="scss">

@mixin gradientBorder{
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 21px;
    padding: 10px;

  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          mask-composite: exclude; 
          &::before{
                content: "";
                position: absolute;
                inset: 0;
                border-radius: 12px; 
                padding: 1px; 
                background:linear-gradient(rgba(54, 154, 172, .1) , rgba(5, 173, 197, .1)) border-box; 
                -webkit-mask: 
                    linear-gradient(#fff 0 0) content-box, 
                    linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                        mask-composite: exclude; 
          }
}
.wrapper__header{
    padding: 30px 50px 0 50px;
}
.header__filling{
    display: flex;
    justify-content: space-between;
}
.header__logog__and__service{
    display: flex;
    column-gap: 175px;
}
.header__filling__logo{
    margin-bottom: 30px;
    cursor: pointer;
}
.header__filling__attractionClien{
    display: flex;
    align-items: center;
    column-gap: 20px;
    cursor: pointer;
    .header__filling__attractionClien__info{
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        font-family: 'Gilroy';
        background: linear-gradient(270deg, #1B558D 0%, #379BAD 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

.header__filling__attractionClien__plus{
    @include gradientBorder;
    padding: 15px;
    cursor: pointer;
}
.header__filling__services{
    display: flex;
    align-items: center;
    column-gap: 20px;
    cursor: pointer;
    .header__filling__services__text{
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        font-family: 'Gilroy';
        background: linear-gradient(97deg, #23618D 0%, #277097 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}


.header__filling__services__button{
    @include gradientBorder;
}
.header__filling__route{
    display: flex;
    column-gap: 40px;
    align-items: center;
    a{
        font-family: 'Gilroy';
        text-decoration: none;
        color: #3C4D5C;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        cursor: pointer;
    }
}
.shell{
    position: relative;
    width: 235px;
    display: flex;
    justify-content: center;
}

.header__filling__lastBlock{
    display: flex;
    align-items: center;
    column-gap: 81px;
}
.header__filling__lastBlock__telephone{
    font-family: 'Gilroy';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    background: linear-gradient(88deg, #369AAC 0.86%, #05ADC5 100%);
    background-clip: text;
    cursor: pointer;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.header__filling__lastBlock__burger{
    cursor: pointer;
    position:fixed;
    top:41px;
    right:3%;
}

@media (min-width:2500px) {
    .header__filling__lastBlock__burger{
        right:13%
    }
}

@media (min-width:4000px) {
    .header__filling__lastBlock__burger{
        right:28%
    }
}

@media(max-width:1700px){
    .header__logog__and__service{
        column-gap: 77px;
    }
}
@media (max-width:1600px) {
    .header__filling__lastBlock{
        column-gap: 30px;
    }
    .header__filling__route{
        column-gap: 30px;
    }
    .header__filling__lastBlock{
        gap:10px;
    }
    .header__logog__and__service{
        column-gap: 45px;
    }
}

@media (max-width:1400px) {
    .header__filling__route{
        display: none;
    }
    .header__logog__and__service{
        column-gap: 75px;
    }
}
@media (max-width:1200px) {
    .wrapper__header{
        padding: 30px 124px 0 124px;
    }
    .header__logog__and__service{
        column-gap: 37px;
    }
    .header__filling__sity{
        column-gap: 20px;
    }
    .header__filling__lastBlock{
        gap: 37px;
    }
    .header__filling__services{
        display: none;
    }
    .header__filling__lastBlock__burger{
        right: 10%;
    }
    .header__filling__sity__enter{
        font-size: 19px;
    }
    @media(max-width: 1150px){
        .header__filling__attractionClien{
            display: none;
        }
        .shell{
            display: none;
        }
    }
    @media(max-width: 768px){
        .wrapper__header{
            padding: 16px 60px 0 60px;
        }
        .header__filling__logo{
            height: 40px;
            width: 90px;
            margin-bottom: 0;
        }
        .header__filling__lastBlock__burger{
            right: 9%;
            top: 25px;
            width: 50px;
            height: 50px;
        }
        .header__filling__lastBlock{
            gap: 12px;
        }
        .header__filling__lastBlock__telephone{
            font-size: 18px;
        }
    }
    
    @media(max-width:480px){
        .header__filling__lastBlock__burger{
            right:14%
        }
    }
    @media(max-width:440px){
        .wrapper__header {
            padding: 16px 40px 0 40px;
        }
        .header__filling__lastBlock__burger {
            right: 11%;
        }
    }
    @media(max-width:400px){
        .wrapper__header {
            padding: 16px 20px 0 20px;
        }
        .header__filling__lastBlock__burger {
            right: 7%;
        }
    }
    @media(max-width:360px){
        .wrapper__header {
            padding: 16px 10px 0 10px;
        }
        .header__filling__lastBlock__burger {
            right: 5%;
        }
        .header__filling__lastBlock{
            gap: 0px;
        }
    }
}

</style>