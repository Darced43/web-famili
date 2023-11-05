<template>
    <div class="header__filling__sity" @click="openModalCity">
      <div 
          class="header__filling__sity__enter"
      >
              {{ showEnterCity }}
      </div>
      <img class='header__filling__sity__arrow' src="../../img/arrow-header-menu.svg" alt="arrow" ref='arrowCity'/>
  </div>
  <Transition name='cityBar'>
    <div class="modal__city" v-show="showCity === true">
      <div 
        class="modal__city_name" 
        v-for="item in citysName " 
        :key="item.id"
        @click="chooseCity(item.name)"
        >
          {{ item.name }}
      </div>
    </div>
  </Transition>
</template>

<script setup>
import {ref, inject} from 'vue'

const showEnterCity = inject('cityName')
const showCity = ref(false)
const arrowCity = ref(null)

const citysName = ref([
  {id:1, name: 'Киров'},
  {id:2, name: 'Санкт-Петербург'},
  {id:3, name: 'Москва'}
])

function chooseCity (name) {
  showEnterCity.value = name
  showCity.value = !showCity.value
  arrowCity.value.classList.toggle('arrow__rotate__toggle')
}

function openModalCity(){
    showCity.value = !showCity.value
    arrowCity.value.classList.toggle('arrow__rotate__toggle')
}
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

.header__filling__sity{
    @include gradientBorder;
    top: 11px;
    height: 44px;
    cursor: pointer;
}
.header__filling__sity__enter{
    font-family: 'Gilroy';
    cursor: pointer;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    background: linear-gradient(97deg, #23618D 0%, #277097 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.header__filling__sity__arrow{
    transform: rotate(0deg);
    transition: 0.5s ;
}
.arrow__rotate__toggle{
    transform: rotate(180deg);
    transition: 0.5s ;
}

.modal__city{
  position: absolute;
  top: 114px;
  left: -29%;
  display: flex;
  padding: 40px;
  flex-direction: column;
  gap: 25px;
  border-radius: 12px;
  border: 1px solid rgba(134, 134, 134, 0.10);
  background:  #FFF;
  box-shadow: 0px 4px 50px 0px rgba(35, 97, 141, 0.05);

}
.modal__city_name{
  font-family: 'Gilroy';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  background: linear-gradient(97deg, #23618D 0%, #277097 100%);
  background-clip: text;
  cursor: pointer;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cityBar-enter-from {
  top: 100px;
  opacity:0;
}
.cityBar-enter-active{
  top: 100px;
  opacity:0;
}
.cityBar-leave-to {
  top: 100px;
  opacity:0;
}

.cityBar-enter-to {
  transition: 0.4s ;
}
.cityBar-leave-to {
  transition: 0.4s ;
}

.cityBar-enter-to,
.cityBar-leave-from{
  opacity:1;
  top: 114px;
}

@media(max-width:600px){
  .header__filling__sity{
    justify-content: space-between;
    background: #1D2429;
  }
  .modal__city{
    position: relative;
    top: 0;
    left: 0;
    background: transparent;
    z-index: 99;
    border-top: 0px;
    border-bottom: 1px solid rgba(134, 134, 134, 0.1);
    border-left: 1px solid rgba(134, 134, 134, 0.1);
    border-right: 1px solid rgba(134, 134, 134, 0.1);
    border-radius: 0 0 12px 12px;
    top: 0px;
    margin-bottom: -10px;
  }
  .cityBar-enter-from {
      top: -30px;
    opacity:0;
  }
  .cityBar-enter-active{
    top: -30px;
    opacity:0;
  }
  .cityBar-leave-to {
    top: -30px;
    opacity:0;
  }

  .cityBar-enter-to {
    transition: 0.4s ;
  }
  .cityBar-leave-to {
    transition: 0.4s ;
  }

  .cityBar-enter-to,
  .cityBar-leave-from{
    opacity:1;
    top: 0px;
  }
}

</style>