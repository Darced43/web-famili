<template>
    <div class="footer">
        <div class="wrapper__footer">
            <div class="footer__content">
                <div class="footer__content__left">
                    <div class="nav__list__left">
                      <nav>
                          <h3>Web-разработка</h3>
                          <a href="">Разработка интернет-магазина на 1С битрикс</a>
                          <a href="">Разработка сайтов</a>
                          <a href="">Создание Landing Page</a>
                          <a href="">Разработка сайта на Tilda</a>
                          <a href="">Доработка сайта</a>
                          <a href="">Редизайн сайта</a>
                      </nav>
                      <nav>
                          <h3>Таргетинг</h3>
                          <a href="">Таргетированная реклама ВК</a>
                      </nav>
                    </div>
                    <div class="nav__list__right">
                      <nav>
                          <h3>Интернет-маркетинг</h3>
                          <a href="">Контекстная реклама</a>
                          <a href="">Аудит контекстной рекламы</a>
                      </nav>
                      <nav>
                          <h3>Продвижение сайта</h3>
                          <a href="">SEO Оптимизация</a>
                          <a href="">Поисковый SEO аудит</a>
                      </nav>
                      <nav>
                          <h3>Ещё</h3>
                          <a href="">Аналитика</a>
                      </nav>
                    </div>
                </div>
                <div class="footer__content__right">
                  <a class="vk" href="">Vkontakte</a>
                  <div class="content__contanct">
                      <div>8 800 351-45-66</div>
                      <span>info@family-web.ru</span>
                  </div>
                  <div class="content__social">
                      <p>Напишите нам в мессенджер —<br/> ответим в течение 5 минут</p>
                      <div class="content__social__img">
                        <a class="back__drop">
                            <img src="../../img/telegram-icon.svg" alt="иконка телеграм">
                        </a>
                          <a class="back__drop">
                              <img src="../../img/whatcApp-icon.svg" alt="иконка ватсап">
                          </a>
                      </div>
                  </div>
                  <div class="content__political">
                      <div>© 2006–2022, digital-агентство Family</div>
                      <p>Политика конфиденциальности</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
h3{
    color:  #FFF;
    font-family: 'Gilroy';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    margin: 0;
}

a{
    color: #86919E;
    font-family: 'Gilroy';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
}

nav{
    display: flex;
    flex-direction: column;
    row-gap: 30px;
}
.footer{
    background:  #1D2429;
}
.wrapper__footer{
    margin: 0 195px;
    padding: 100px 0;
}

.footer__content{
    display: flex;
    justify-content: space-between;
    column-gap: 293px;
}

.footer__content__left{
    display: flex;
    column-gap: 30px;
}

.nav__list__left{
    gap:58px;
    display:flex;
    flex-direction: column;
    max-width: 223px;
}

.nav__list__right{
    display: flex;
    flex-direction: column;
    gap: 80px;
}
.footer__content__right{
    text-align: end;
}
.vk{
    font-family: 'Gilroy';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    background: linear-gradient(88deg, #369AAC 0.86%, #05ADC5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.content__contanct{
    display: flex;
    flex-direction: column;
    row-gap:10px;
    margin-top: 40px;
    margin-bottom: 60px;
    div{
        color:  #FFF;
        font-family: 'Gilroy';
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
    }
    span{
        color: #86919E;
        font-family: 'Gilroy';
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; 
    }
}
.content__social{
    margin-bottom: 162px;
    p{
        color: #86919E;
        text-align: right;
        font-family: 'Gilroy';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        margin: 0 0 20px 0;
    }
}
.back__drop{
    width: 44px;
    height: 44px;
    display: flex;
    border-radius: 12px;
    background: #EFF7FB;
    justify-content: center;
    img{
        width: 50%;
        height: auto;
    }
}
.content__social__img{
    display: flex;
    column-gap: 10px;
    justify-content: end;
}
.content__political{
    div{
        color:  #FFF;
        text-align: right;
        font-family: 'Gilroy';
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        margin-bottom: 10px;
    }
    p{
        color: #86919E;
        text-align: right;
        font-family: 'Gilroy';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; 
        margin: 0;
    }
}

@media(max-width:1650px){
    .footer__content{
        column-gap: 120px;
    }
    .content__contanct div{
        font-size: 48px;
    }
}
@media(max-width:1400px){
    .wrapper__footer{
        margin: 0 125px;
    }
    nav{
        row-gap: 20px;
    }
    .nav__list__left{
        gap: 40px;
    }
    .nav__list__right{
        gap:40px;
    }
    .footer__content__left{
        column-gap: 20px;
    }
    .vk{
        font-size: 16px;
    }
    .content__contanct{
        margin-top: 20px;
        margin-bottom: 82px;
    }
    .content__social{
        margin-bottom: 82px;
    }
}
@media(max-width:1999px){
    .footer__content{
        column-gap: 50px;
    }
    .content__contanct{
        margin-bottom: 42px;
    }
    .content__contanct div{
        font-size: 40px;
    }
    .content__contanct span{
        font-size: 20px;
    }
    .content__social p{
        font-size: 16px;
    }
    .content__political div{
        font-size: 18px;
    }
    .content__political p{
        font-size: 16px;
    }
    .content__social{
        margin-bottom: 42px;
    }
}

@media(max-width:1024px){
    .wrapper__footer{
        margin: 0 auto;
        padding: 70px 0;
    }
    .footer__content{
        justify-content: center;
    }  
    .footer__content__left{
        display: none;
    }
    .footer__content__right{
        text-align: center;
    }
    .content__social p{
        text-align: center;
    }
    .content__social__img{
        justify-content: center;
    }
    .content__political div{
        text-align: center;
    }
    .content__political p{
        text-align: center;
    }
}
</style>