<template>
              <form action="" class="application">
                <div class="application__section">
                    <div class="application__info">
                        <div class="application__info__userInfo">
                            <input class="application__info__input name" type="text" placeholder="Ваше имя">
                            <input class="application__info__input phone" type="text" placeholder="Ваш телефон">
                        </div>
                        <div class="clock" @click="() => openTime =! openTime">
                            <!-- <span class="application__info__input clock" @click="() => openTime =! openTime" ></span> -->
                            <img src="../../img/clock.svg" alt="clock" >
                        </div>
                    </div>
                    <div v-show="openTime" class="application__check">
                        <div class="application__check__time" >
                            <div class="application__radio">
                                <input 
                                    ref="choseMorning"
                                    @click="(e) => checkRadio(e)"
                                    class="radio__time" 
                                    type="radio" 
                                    id="morning" 
                                    value="morning" 
                                    name="time">
                                <label for="morning">10:00-13:00</label>
                            </div>
                            <div class="application__radio">
                                <input 
                                    ref="choseDay"
                                    @click="(e) => checkRadio(e)"
                                    class="radio__time" 
                                    type="radio" 
                                    id="day" 
                                    value="day"
                                    name="time">
                                <label for="day">13:00-16:00</label>
                            </div>
                            <div class="application__radio">
                                <input 
                                    ref="choseEvening"
                                    @click="(e) => checkRadio(e)"
                                    class="radio__time" 
                                    type="radio" 
                                    id="evening" 
                                    value="evening" 
                                    name="time">
                                <label for="evening">16:00-19:00</label>
                            </div>
                        </div>
                        <p class="application__check__info">Выберите удобное время<br class="table">для звонка</p>
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

const choseMorning = ref()
const choseDay = ref()
const choseEvening = ref()

const allTime = [
    choseMorning, choseDay, choseEvening
]



function checkRadio(e){
    const elementTarget = e.target
    
    elementTarget.parentElement.classList.add('radio__active')
    allTime.forEach( time => {
        if(!(time.value).checked){
            time.value.parentElement.classList.remove('radio__active')
        }
    })

}

</script>

<style scoped>
.application{
    display: flex;
    position: relative;
    z-index: 1000;
    margin-bottom: 300px;
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
    margin-bottom: 26px;
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
    height: 32px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: #E1E8F6;
    cursor: pointer;

    color:  #86919E;
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

.radio__active{
    display: flex;
    height: 32px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background: #86919E;

    color:  #FFF;
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
    margin: 0;
}
.application__info{
    display: flex;
    gap: 30px;
    margin-bottom: 26px;
}
.application__info__userInfo{
    display: flex;
    gap: 30px;
}
.application__info__input{
    display: flex;
    padding: 20px 32px;
    align-items: center;
    border-radius: 12px;
    border: 2px solid  #EFF7FB;
    background: #FFF;
    width: 186.5px;
    color: #86919E;
    font-family: 'Gilroy';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    height: 20px;
}
.clock{
    display: flex;
    padding: 20px 32px;
    align-items: center;
    border-radius: 12px;
    border: 2px solid  #EFF7FB;
    background: #FFF;
    width: 186.5px;
    color: #86919E;
    font-family: 'Gilroy';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    height: 20px;
    content: url('../../img/clock.svg');
    padding: 20px;
    cursor: pointer;
    width: auto;
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
    cursor: pointer;
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

@media(max-width:1400px){
    .titlePage__agl__form{
        font-size: 32px;
    }
    .application__info{
        gap:20px;
    }
    .application__info__userInfo{
        gap: 20px;
    }
    .application__section{
        padding: 40px;
    }
    .application__info__input{
        width: 140px;
        padding: 18px 24px;
        font-size: 18px;
    }
    .clock{
        width: auto;
        padding: 16px;
    }
    .application__politics p{
        font-size: 16px;
    }
    .application__button{
        width: 198px;
    }
    .application__check{
        flex-direction: column;
    }
    .table{
        display: none;
    }
}
@media(max-width:840px){
    .application__section {
    padding: 30px;
    }
    .application__info {
    gap: 10px;
    }
    .application__politics p{
    font-size: 14px;
    }
    .application__section {
    padding: 30px;
    }
    .application{
        flex-direction: column;
    }
    .application__info__userInfo{
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }
    .application__info__input{
        width: auto;
    }
    .application__section{
        padding: 40px;
        border-radius: 28px 28px 0 0 ;
    }
    .application__button{
        width: auto;
        border-radius: 0px 0px 28px 28px;
    }
    .clock{
        height: auto;
    }
}
@media(max-width: 600px){
    .application__info{
        gap: 15px;
    }

    .application__check__time[data-v-fbd40592]{
        flex-direction: column;
    }
    .application__radio{
        font-size: 16px;
        padding: 10px;
    }
}
@media(max-width:550px){
    .application__info__input{
        height: 18px;
        width: 141px;
    }
    .application__politics a{
        font-size: 16px;
    }
}
@media(max-width:470px){
    .wrapper__title{
        margin: 0 20px;
    }
    .application__section{
        padding: 20px;
    }
    .application__info__input{
        height: 18px;
        width: 70%;
    }
}
</style>