<template>
  <main>
    <header class="header">
      <div class="header__wrapper container">
        <div class="header__content">
          <h1 class="title-h1">ТРОКСЕВАЗИН<sup>®</sup> — <br> шаг вперед в лечении варикоза<sup>*</sup>
          </h1>
          <p>Эксперты бренда Троксевазин<sup>®</sup> всё знают о лечении симптомов варикоза<sup>*</sup> и геморроя<sup>3</sup>.
          </p>
          <p><strong>О чем хотели бы узнать вы?</strong></p>
          <div class="header__menu">
            <NuxtLink to="/case-varikoz-lite" class="btn-hexagon">
              Звездочки, тяжесть, <br> усталость в ногах
              <div class="btn-hexagon__arrow"></div>
            </NuxtLink>
            <NuxtLink to="/case-varikoz-middle" class="btn-hexagon">
              Выпирающие вены <br> и боль в ногах
              <div class="btn-hexagon__arrow"></div>
            </NuxtLink>
            <NuxtLink to="/case-varikoz-hard" class="btn-hexagon">
              Отеки и судороги <br> в ногах 
              <div class="btn-hexagon__arrow"></div>
            </NuxtLink>
            <NuxtLink to="/case-hemorrhoids" class="btn-hexagon">
              Дискомфорт и боль <br> при геморрое
              <div class="btn-hexagon__arrow"></div>
            </NuxtLink>
          </div>
          <div class="header-mobile">
            <img src="/img/main_fon-mobile.webp"  alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </header>

    <section class="expert">
      <div class="expert__wrapper container">
        <div class="expert__img"> 
          <img src="/img/ico.svg" alt="" loading="lazy" />
        </div>
        <div class="expert__content">
          <p class="expert__title">Троксевазин<sup>®</sup> больше 40 лет<sup>1</sup> приходит на помощь людям, которые столкнулись с проявлениями хронической венозной недостаточности<sup>2</sup>. 
          </p>
          <p class="expert__text">Мы ценим доверие нескольких поколений и отвечаем на него широкой линейкой препаратов европейского производства<sup>2</sup> и по доступным ценам<sup>4</sup>.
          </p>
        </div>
      </div>
    </section>

    <section class="products" id="products">
      <div class="products__wrapper container">
        <div class="products__list">
          <div class="products__item">
            <div class="products__item-content">
              <h3 class="products__item-title">Троксевазин<sup>®</sup> <br>Нео гель </h3>
              <div class="products__item-img"> 
                <img src="/img/product-1.png" srcset="/img/product-1@2x.png 2x" alt="" loading="lazy" />
              </div>
              <p class="products__item-desc">Усиленная формула<sup>5</sup> в линейке с тройным действием<sup>6</sup>
              </p>
            </div>
            <div class="products__item-btn">
              <NuxtLink to="/neo" id="neo">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
          </div>
          <div class="products__item">
            <div class="products__item-content">
              <h3 class="products__item-title">Троксевазин<sup>®</sup> <br>гель 2 %</h3>
              <div class="products__item-img"> 
                <img src="/img/product-2.png" srcset="/img/product-2@2x.png 2x" alt="" loading="lazy" />
              </div>
              <p class="products__item-desc">Самый продаваемый гель<sup>7</sup> против тяжести и боли в ногах при варикозе<sup>*</sup>
              </p>
            </div>
            <div class="products__item-btn">
              <NuxtLink to="/gel" id="gel">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
          </div>
          <div class="products__item">
            <div class="products__item-content">
              <h3 class="products__item-title">Троксактив <br>таблетки</h3>
              <div class="products__item-img">
                <img src="/img/product-3.png" srcset="/img/product-3@2x.png 2x" alt="" loading="lazy" />
              </div>
              <p class="products__item-desc">Направленно действуют на вены изнутри<sup>9</sup> при ХВН<sup>*</sup>. Самая востребованная<sup>10</sup> формула (МНН) в лечении варикоза<sup>*</sup>
              </p>
            </div>
            <div class="products__item-btn">
              <NuxtLink to="/troxactive" id="troxactive">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
          </div>
          <div class="products__item">
            <div class="products__item-content">
              <h3 class="products__item-title">Троксевазин<sup>®</sup> <br>капсулы</h3>
              <div class="products__item-img">
                <img src="/img/product-4.png" srcset="/img/product-4@2x.png 2x" alt="" loading="lazy" />
              </div>
              <p class="products__item-desc">Проверенное временем средство<sup>12</sup> при хронической венозной недостаточности и геморрое<sup>11</sup></p>
            </div>
            <div class="products__item-btn">
              <NuxtLink to="/capsules" id="capsules">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="products__swiper">
          <swiper
            :slides-per-view="1"
            :space-between="20"
            @swiper="onSwiper"
            :modules="[Navigation]"
            navigation
          >
            <swiper-slide>
              <div class="products__item">
                <div class="products__item-content">
                  <h3 class="products__item-title">Троксевазин<sup>®</sup> <br>Нео гель </h3>
                  <div class="products__item-img"> 
                    <img src="/img/product-1.png" srcset="/img/product-1@2x.png 2x" alt="" loading="lazy" />
                  </div>
                  <p class="products__item-desc">Усиленная формула<sup>5</sup> в линейке с тройным действием<sup>6</sup>
                  </p>
                </div>
                <div class="products__item-btn"> 
                  <NuxtLink to="/neo">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="products__item">
                <div class="products__item-content">
                  <h3 class="products__item-title">Троксевазин<sup>®</sup> <br>гель 2 %</h3>
                  <div class="products__item-img"> 
                    <img src="/img/product-2.png" srcset="/img/product-2@2x.png 2x" alt="" loading="lazy" />
                  </div>
                  <p class="products__item-desc">Самый продаваемый гель<sup>7</sup> против тяжести и боли в ногах при варикозе<sup>*</sup>
                  </p>
                </div>
                <div class="products__item-btn"> 
                  <NuxtLink to="/gel">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="products__item">
                <div class="products__item-content">
                  <h3 class="products__item-title">Троксактив <br>таблетки</h3>
                  <div class="products__item-img">
                    <img src="/img/product-3.png" srcset="/img/product-3@2x.png 2x" alt="" loading="lazy"/>
                  </div>
                  <p class="products__item-desc">Направленно действуют на вены изнутри<sup>9</sup> при ХВН<sup>*</sup>. Самая востребованная<sup>10</sup> формула (МНН) в лечении варикоза<sup>*</sup>
                  </p>
                </div>
                <div class="products__item-btn">
                  <NuxtLink to="/troxactive">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="products__item">
                <div class="products__item-content">
                  <h3 class="products__item-title">Троксевазин<sup>®</sup> <br>капсулы</h3>
                  <div class="products__item-img">
                    <img src="/img/product-4.png" srcset="/img/product-4@2x.png 2x" alt="" loading="lazy"/>
                  </div>
                  <p class="products__item-desc">Проверенное временем средство<sup>12</sup> при хронической венозной недостаточностии геморрое<sup>11</sup></p>
                </div>
                <div class="products__item-btn">
                  <NuxtLink to="/capsules">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="sources">
      <div class="sources__wrapper container">
        <p>
          *Симптомов хроничесной венозной недостаточности. **При хронической венозной недостаточности
          <br>1. Троксевазин® используется в России с 1981 г. РУ Б-8-242 №2654
          <br>2. Инструкции по медицинскому применению лекарственных препаратов Троксевазин® гель ЛП-№(002561)-(РГ-RU), Троксактив ЛП-№(000726)-(РГ-RU), Троксевазин® капсулы ЛП-№(000083)-(РГ-RU), листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU) от 05.12.2022
          <br>3. Инструкции по медицинскому применению лекарственных препаратов Троксактив ЛП-№(000726)-(РГ-RU), Троксевазин® капсулы ЛП-№(000083)-(РГ-RU)
          <br>4. Розничные цены Троксевазин® гель 2% 40г – 363, Троксевазин® Нео гель 40 г – 530, Троксактив 30шт – 1375, Троксевазин® капсулы 50шт – 834 (АЙКЬЮВИА, февраль 2025)
          <br>5. По сравнению с Троксевазин® гель 2% 
          <br>6. Венотонизирующее, противовоспалительное, противоотечное. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU) https://storage.brandquad.ru/accounts-media/TEVA/DAM/origin/0f2faedc-c44e-11ef-a2ec-061441bd84b0.pdf
          <br>7. В категории наружных венотоников, по продажам в деньгах 2021-2024, АЙКЬЮВИА
          <br>8. Инструкция по медицинскому применению лекарственного препарата Троксевазин® гель ЛП-№(002561)-(РГ-RU)
          <br>9. Инструкция по медицинскому применению лекарственного препарата Троксактив ЛП-№(000726)-(РГ-RU)
          <br>10. МОФФ Гесперидин + Диосмин – это наиболее продаваемое МНН в категории венотоников, продажи в деньгах 2021-2024, АЙКЬЮВИА
          <br>11. Инструкция по медицинскому применению лекарственного препарата Троксевазин® капсулы ЛП-№(000083)-(РГ-RU)
          <br>12. С 2008 г. Регистрационное удостоверение № П N012713/01 от 25.03.2008
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';

useHead({
  title: 'Троксевазин',
})

const onSwiper = (swiper) => {};
</script>

<style lang="postcss">
@import "@/assets/css/main/expert.pcss";
@import "@/assets/css/main/header.pcss";
@import "@/assets/css/main/products.pcss";
@import "@/assets/css/main/sources.pcss";
</style>