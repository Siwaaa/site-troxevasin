<template>
  <main>
    <header class="header-product">
      <div class="header-product__wrapper container">
        <div class="header-product__content">
          <h1 class="title-h1"><strong>Троксевазин<sup>®</sup> капсулы — </strong>проверенное временем<sup>1</sup>средство</h1><br>
          <p>Воздействует на проявления хронической венозной недостаточности и геморроя изнутри<sup>2</sup>.
          </p>
          <div class="header-product__menu">
            <Button label="Купить" arrowRight />
            <NuxtLink to="#faq">
              <Button label="Инструкция" arrowRight rounded />
            </NuxtLink>
          </div>
        </div>
        <div class="header-product__swiper">
          <swiper
            :slides-per-view="1"
            :space-between="50"
            effect="fade"
            :fade-effect="{ crossFade: true }"
            :speed="1300"
            :grab-cursor="true"
            @swiper="onSwiperHeader"
            :modules="[Navigation, EffectFade, Pagination]"
            navigation
            :pagination="pagination"
          >
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-caps-1.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-caps-2.png" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="header-product__menu_mobile">
          <Button label="Купить" arrowRight />
          <NuxtLink to="#faq">
            <Button label="Инструкция" arrowRight rounded />
          </NuxtLink>  
        </div>
      </div>
    </header>

    <section class="symptoms">
      <div class="symptoms__wrapper container">
        <div class="symptoms__content">
          <div class="symptoms__head head">
            <h2 class="title-h1">Помогает бороться с симптомами при геморрое и варикозе<sup>*,2</sup></h2>
          </div>
          <div class="symptoms__img">
            <img src="/img/product/symptoms-caps.png" alt=""/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <img src="/img/product/symptom.png" alt=""/>
              <p>Хронической<br>венозной<br>недостаточности</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-8.png" alt=""/>
              <p>Трофических <br>язвах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-9.png" alt=""/>
              <p>После склеротерапии вен<sup>**</sup></p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-10.png" alt=""/>
              <p>Геморрое</p>
            </li>
          </ul>
          <div class="symptoms__menu"> 
            <Button label="Купить" arrowRight />
            <NuxtLink to="#faq">
              <Button label="Инструкция" arrowRight rounded />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="secret">
      <div class="secret__wrapper container">
        <div class="secret__content">
          <div class="secret__head head">
            <h2 class="title-h1">Капсулы Троксевазин<sup>®</sup></h2>
            <p>Действуют изнутри, способствуют уреплению сосудов <br>и улучшению микроциркуляции<sup>2</sup>
            </p>
          </div>
          <ul class="secret__list secret_purpure">
            <li class="secret__item">
              <img src="/img/product/secret-1.png" alt=""/>
              <p>Производится <br>в Европе<sup>2</sup></p>
            </li>
            <li class="secret__item">
              <img src="/img/product/secret-1.png" alt=""/>
              <p>Достигнутый эффект может сохраняться около 4 недель<sup>2</sup></p>
            </li>
            <li class="secret__item">
              <img src="/img/product/secret-1.png" alt=""/>
              <p>Курс лечения в среднем – 3-4 недели<sup>2</sup></p>
            </li>
            <li class="secret__item">
              <img src="/img/product/secret-1.png" alt=""/>
              <p>Обладает доступной ценой<sup>6</sup></p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="economy">
      <div class="economy__wrapper container">
        <div class="economy__content">
          <div class="economy__left">
            <h2 class="title-h1">Экономьте<sup>3</sup> <br> при покупке большой упаковки </h2>
            <Button label="Купить" arrowRight />
          </div>
          <div class="economy__right">
            <img src="/img/product/economy-15.png" alt=""/>
            <Button label="Купить" arrowRight />
          </div>
        </div>
      </div>
    </section>

    <section class="tutorial">
      <div class="tutorial__wrapper container">
        <div class="tutorial__content">
          <div class="tutorial__head">
            <h2 class="title-h1">Как использовать капсулы Троксевазин<sup>®</sup> при хронической венозной недостаточности и геморрое?<sup>2</sup></h2>
          </div>
          <div class="guide">
            <div class="guide__block">
              <h4 class="guide__title">На начальном этапе лечения</h4>
              <div class="guide__wrap">
                <div class="guide__item">
                  <img src="/img/product/guide-1.png" alt=""/>
                  <p>1 капсула</p>
                </div>
                <div class="guide__item">
                  <img src="/img/product/guide-1.png" alt=""/>
                  <p>в зависимости от тяжести симптомов</p>
                </div>
              </div>
            </div>
            <div class="guide__block">
              <h4 class="guide__title">При повторном возникновении симптомов</h4>
              <div class="guide__wrap">
                <div class="guide__item">
                  <img src="/img/product/guide-1.png" alt=""/>

                  </div>
                <div class="guide__item"><img src="/img/product/guide-1.png" alt=""/></div>
              </div>
              <p class="guide__desc">Возобновить лечение в той же дозе или снизить дозу до 1 капсулы 2 раза в день</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="maternity">
      <div class="maternity__wrapper container">
        <div class="maternity__content">
          <div class="maternity__text">
            <h2 class="title-h1">Как применять при беременности<sup>2</sup></h2>
            <img src="/img/product/maternity.png" alt="Беременность"/>
            <p>Гель может быть использован в II и III триместрах беременности, если ожидаемая польза для мамы выше, чем потенциальный риск для ребенка. <br><br>Перед применением препарата беременным обязательно нужно проконсультироваться с врачом.
            </p>
          </div>
          <div class="maternity__img">
            <img src="/img/product/maternity.png" alt="Беременность"/>
          </div>
        </div>
      </div>
    </section>

    <section class="others">
      <div class="others__wrapper container">
        <div class="others__content">
          <h2 class="title-h1" style="max-width: 928px">Комплексный подход для воздействия на симптомы варикоза<sup>*</sup> не только изнутри, но и снаружи</h2>
          <div class="others__list">
            <div class="others__item swiper-gel-1"> 
              <img src="/img/product/other-gel.png" alt=""/>
              <p><strong class="others-violet">Узнайте больше о<br>Троксевазин<sup>®</sup> Гель 2 % —</strong><br>доступная цена<sup>4</sup>, проверенный временем гель<sup>5</sup>
              </p>
              <NuxtLink to="/gel">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
            <div class="others__item swiper-gel-1"> 
              <img src="/img/product/other-gel-1-40.png" alt=""/>
              <p><strong class="others-violet">Узнайте больше о<br>Троксевазин<sup>®</sup> НЕО —</strong><br> гель с усиленной<sup>***</sup> трехкомпонентной формулой<sup>6</sup>
              </p>
              <NuxtLink to="/neo">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
          </div>
          <div class="others__swiper">
            <swiper
              :slides-per-view="1"
              :space-between="20"
              @swiper="onSwiper"
              :modules="[Navigation]"
              navigation
            >
              <swiper-slide>
                <div class="others__item">
                  <img src="/img/product/other-gel.png" alt=""/>
                  <p><strong class="others-violet">Узнайте больше о<br>Троксевазин<sup>®</sup> Гель 2 % —</strong><br>доступная цена<sup>4</sup>, проверенный временем гель<sup>5</sup>
                  </p>
                  <NuxtLink to="/gel">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="others__item">
                  <img src="/img/product/other-gel-1-40.png" alt=""/>
                  <p><strong class="others-violet">Узнайте больше о<br>Троксевазин<sup>®</sup> НЕО —</strong><br> гель с усиленной<sup>***</sup> трехкомпонентной формулой<sup>6</sup>
                  </p>
                  <NuxtLink to="/neo">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="faq__wrapper container">
        <div class="faq__content">
          <h2 class="title-h1">Инструкция по медицинскому применению капсул Троксевазин<sup>®</sup></h2>
          <div class="instruction">
            <div class="instruction__list">
              <!-- <Accordion>
                <template v-slot:header>
                  <h5>Здесь мог быть заголовок страницы</h5>
                </template>
                <template v-slot:desc>
                  Здесь мог быть заголовок страницы
                </template>
              </Accordion> -->
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Регистрационный номер</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc"></div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Торговое наименование препарата</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc"></div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Международное непатентованное наименование</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc"></div>
              </div>
            </div>
            <div class="instruction__list">
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Способ применения и дозы</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc"></div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Побочное действие</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc"></div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Передозировка</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc"></div>
              </div>
            </div>
          </div>
          <div class="faq__download"> 
            <Button label="Скачать PDF" rounded />
          </div>
        </div>
      </div>
    </section>

    <section class="sources">
      <div class="sources__wrapper container">
        <p>* Хронической венозной недостаточности
          <br>** В качестве вспомогательного лечения
          <br>*** По сравнению с Троксевазин® гелем 2%
          <br>1. Дата регистрация лекарственного средства Троксевазин® капсулы – 25.03.2008 г. Регистрационное
          удостоверение П N012713/01
          <br>2. Инструкция по медицинскому применению лекарственного препарата Троксевазин® капсулы ЛП-№ (000083)-(РГ-RU)
          <br>3. По сравнению с упаковкой 50 капсул. Процент экономии определен по отпускным ценам ООО «Тева» на 1
          таблетку (Март 2023)
          <br>4. Розничная цена Троксевазин® гель 2% 40г - 360.4р (IQVIA, декабрь 2022)
          <br>5. Троксевазин® используется в России с 1981 г. РУ Б-8-242 №2654
          <br>6. Листок-вкладыш Троксевазин® Нео П-№(001509)-(РГ-RU)
          <br>7. Розничная цена Троксевазин® капсулы: упаковка 100 капсул – 1298 руб., упаковка 50 капсул – 783 руб
          (IQVIA, декабрь 2022)
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

useHead({
  title: 'Троксевазин Капсулы',
})

const onSwiper = (swiper) => {};
const onSwiperHeader = (swiper) => {};

const pagination = ref({
  clickable: true,
  renderBullet: function (index, className) {
    let pagiText = null;

    switch (index) {
      case 0:
        pagiText = '50 капсул'
        break;
      case 1:
        pagiText = '100 капсул'
        break;
      default:
        break;
    }

    return '<span class="' + className + '">' + pagiText + '</span>';
  },
})

const toggleAccordion = (e) => {
  e.currentTarget.querySelector('.instruction__desc').classList.toggle('active');
  e.currentTarget.querySelector('.accordion-btn').classList.toggle('active');
}
</script>

<style lang="postcss">
@import "@/assets/css/product/economy.pcss";
@import "@/assets/css/product/faq.pcss";
@import "@/assets/css/product/headerProduct.pcss";
@import "@/assets/css/product/maternity.pcss";
@import "@/assets/css/product/others.pcss";
@import "@/assets/css/product/readMore.pcss";
@import "@/assets/css/product/secret.pcss";
@import "@/assets/css/product/symptoms.pcss";
@import "@/assets/css/product/tutorial.pcss";
@import "@/assets/css/main/sources.pcss";
</style>