<template>
        <div class="promotion">
            <div class="promotion__left">
                <div class="promotion__content">
                    <img src="../../img/promotion-rocet.svg" alt="рокета">
                    <h6>SEO оптимизация</h6>
                    <p>Наиболее эффективный способ привлечения целевой аудитории. Поисковая оптимизация позволяет многократно увеличить количество продаж при разумном рекламном бюджете.</p>
                    <a href="">Узнать стоимость</a>
                </div>
                <div class="promotion__content">
                    <img src="../../img/promotion-search.svg" alt="поиск">
                    <h6>Разовая SEO оптимизация</h6>
                    <p>Рассчитана на молодые или долго не продвигающиеся сайты. Основной задачей разовой seo-оптимизации является приведение вашего сайта и его контента в порядок.</p>
                    <a href="">Заказать оптимизацию</a>
                </div>
            </div>
            <div class="promotion__right">
                <div class="promotion__content right">
                    <img src="../../img/promotion-seo.svg" alt="seo">
                    <h6>SEO аудит сайта</h6>
                    <p>Проведём полный анализ на соответствие требованиям, предъявляемым пусковыми системами для осуществления последующего продвижения сайта.</p>
                    <a href="">Заказать SEO аудит</a>
                </div>
                <div class="promotion__content audit right">
                    <h6>Аудит контекстной рекламы в подарок.</h6>
                    <p>При заказе услуг SEO оптимизации в подарок аудит Яндекс.Директ</p>
                    <a href="">Заказать SEO</a>
                </div>
            </div>
        </div>

</template>

<script setup>

</script>

<style scoped>
h6{
    color: #3C4D5C;
    font-family: 'Gilroy';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin: 0;
}
p{
    color:  #86919E;
    font-family: 'Gilroy';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
    margin: 0;
}
a{
    font-family: 'Gilroy';
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; 
    background: linear-gradient(97deg, #23618D 0%, #277097 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.promotion__wrapper{
    margin-left: 195px;
    margin-right: 195px;
}
.promotion{
    display: flex;
    gap: 90px;
}

.promotion__left{
    display: flex;
    flex-direction: column;
    gap: 90px;
}

.promotion__right{
    display: flex;
    flex-direction: column;
    gap: 90px;
    padding-top: 180px
}

.promotion__content{
    padding: 60px;
    display: grid;
    gap: 26px;
    max-width: 660px;
}
.audit{
    border-radius: 28px;
    background:  #EFF7FB;
}

@media(max-width:1200px){
    h6{
        font-size: 32px;
    }
    p{
        font-size: 20px;
    }
    a{
        font-size: 20px;
    }
    .promotion{
        gap: 70px;
    }
    .promotion__left{
        gap: 70px;
    }
    .promotion__right{
        gap: 70px;
        padding-top: 160px;
    }
    .promotion__content{
        padding: 40px;
        gap: 20px;
    }
    .right{
        padding: 60px;
    }

}
@media(max-width:850px){
    .promotion{
        display: none;
    }
}
</style>