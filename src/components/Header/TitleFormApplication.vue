<template>
              <form action="" class="application">
                <div class="application__section">
                    <div class="application__info">
                        <input class="application__info__input" type="text" placeholder="Ваше имя">
                        <input class="application__info__input " type="text" placeholder="Ваш телефон">
                        <span class="application__info__input clock" @click="() => openTime =! openTime" ></span>
                    </div>
                    <div v-show="false">
                        <div>
                            <input type="radio" id="morning" name="time">
                            <label for="morning">10:00-13:00</label>
                        </div>
                        <div>
                            <input type="radio" id="day" name="time">
                            <label for="day">3:00-16:00</label>
                        </div>
                        <div>
                            <input type="radio" id="evening" name="time">
                            <label for="evening">16:00-19:00</label>
                        </div>
                        <p class="application__check__info">Выберите удобное время<br>для звонка</p>
                    </div>
                    <div class="application__politics">
                        <img src="../../img/danger-circle.svg"/>
                        <p>Нажимая кнопку, вы соглашаетесь с <a>политикой</a> обработки<br/>персональных данных</p>
                    </div>
                </div>
                <button class="application__button">
                    <img src="../../img/button-arrow.svg" alt="стрелка">
                </button>
            </form>
</template>

<script setup>
import {ref} from "vue" 

const openTime = ref(false) 

</script>

<style scoped>
.application{
    display: flex;
}
.application__section{
    border-radius: 28px 0px 0px 28px;
    border: 2px solid  #EFF7FB;
    background: #FFF;
    padding: 60px;
    border-right: 0;
}

.application__check{
    display: flex;
    gap: 20px;
}
.application__check__time{
    display: flex;
    gap: 10px;
}
.application__check__time input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.application__radio{
    display: flex;
    height: 44px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: #E1E8F6;

    color:  #86919E;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

.application__check__info{
    color:  #86919E;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}
.application__info{
    display: flex;
    gap: 30px;
    margin-bottom: 26px;
}
.application__info__input{
    display: flex;
    padding: 20px 32px;
    align-items: center;
    border-radius: 12px;
    border: 2px solid  #EFF7FB;
    background: #FFF;
    /* width: 186.5px; */
    color: #86919E;
    font-family: 'Gilroy';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    height: 20px;
}
.clock{
    content: url('../../img/clock.svg');
    padding: 20px;
}
.application__politics{
    display: flex;
    gap: 10px;
}
.application__politics p{
    color: #86919E;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    margin: 0;
}
.application__politics a{
    background:  linear-gradient(88deg, #369AAC 0.86%, #05ADC5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}
.application__button{
    display: flex;
    width: 226px;
    height: auto;
    padding: 0;
    border: 0;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0px 28px 28px 0px;
    background: var(--unnamed, linear-gradient(270deg, #1B558D 0%, #379BAD 100%));
}

</style>