<template>
  <main>
    <header class="header-product">
      <div class="header-product__wrapper container">
        <div class="header-product__content">
          <h1 class="title-h1"><strong>Троксактив таблетки </strong>направленно действуют на вены изнутри при варикозе<sup>*,1</sup></h1>
          <p>Самое назначаемое действующее вещество (МНН) для лечения симптомов хронических заболеваний вен<sup>2</sup>
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
                <img src="/img/product/p-trox-1.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-trox-2.png" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-trox-3.png" alt="" />
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
            <h2 class="title-h1">Помогает бороться против симптомов варикоза<sup>*</sup> и геморроя<sup>1</sup></h2>
          </div>
          <div class="symptoms__img"> 
            <img src="/img/product/symptoms-trox.png" alt=""/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <img src="/img/product/symptom-3.png" alt=""/>
              <p>Усталость <br> и тяжесть <br> в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-6.png" alt=""/>
              <p>Отеки <br>и судороги в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-8.png" alt=""/>
              <p>Венозные трофические <br>язвы</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-11.png" alt=""/>
              <p>Острый и хронический геморрой </p>
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

    <section class="chronic">
      <div class="chronic__wrapper container">
        <div class="chronic__content">
          <div ref="chronicModalTrigger" class="chronic__head head">
            <h2 class="title-h1"><i>Курс лечения</i> хронических заболеваний вен может длиться <i>от 2 до 12 месяцев</i></h2>
            <p>Таблетки Троксактив можно принимать до 12 месяцев<sup>1</sup></p>
          </div>
          <ul class="chronic__list">
            <li class="chronic__item">
              <img src="/img/product/chronic-1.png" alt=""/>
              <p>Одна таблетка в день<sup>**</sup></p>
            </li>
            <li class="chronic__item">
              <img src="/img/product/chronic-2.png" alt=""/>
              <p>Доступная цена<sup>10</sup></p>
            </li>
            <li class="chronic__item">
              <img src="/img/product/chronic-3.png" alt=""/>
              <p>Европейское производство<sup>1</sup></p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="secret">
      <div class="secret__wrapper container">
        <div class="secret__content secret-aorta">
          <div class="secret__head head">
            <h2 class="title-h1">Таблетки Троксактив – единственный таблетированный МОФФ<sup>3</sup> европейского производства<sup>1</sup></h2>
            <p>МОФФ – это микронизированная очищенная флавоноидная фракция Гесперидин-Диосмин. При микронизации происходит уменьшение частиц для улучшения всасываемости<sup>4</sup></p>
          </div>
        </div>
      </div>
    </section>

    <section class="economy">
      <div class="economy__wrapper container">
        <div class="economy__head head">
          <h2 class="title-h1 text-al-center">Экономьте<sup>4</sup> при покупке <br> больших упаковок 25%<sup>5</sup></h2>
        </div>
        <div class="economy-two">
          <div class="economy-two__item">
            <img src="/img/product/economy-two-1.png" alt=""/>
            <p><span class="color-orange">Таблетки Троксактив 90 шт.</span> <br>3 месяца приема</p>
            <Button label="Купить" arrowRight />
          </div>
          <div class="economy-two__item">
            <img src="/img/product/economy-two-2.png" alt=""/>
            <p><span class="color-orange">Таблетки Троксактив 60 шт.</span> <br>3 месяца приема</p>
            <Button label="Купить" arrowRight />
          </div>
        </div>
        <div class="economy__swiper">
          <swiper
            :slides-per-view="1"
            :space-between="20"
            @swiper="onSwiperEconomy"
            :modules="[Navigation]"
            navigation
          >
            <swiper-slide>
              <div class="economy-two__item">
                <img src="/img/product/economy-two-1.png" alt=""/>
                <p><span class="color-orange">Таблетки Троксактив 90 шт.</span> <br>3 месяца приема</p>
                <Button label="Купить" arrowRight />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="economy-two__item">
                <img src="/img/product/economy-two-2.png" alt=""/>
                <p><span class="color-orange">Таблетки Троксактив 60 шт.</span> <br>3 месяца приема</p>
                <Button label="Купить" arrowRight />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="tutorial">
      <div class="tutorial__wrapper container">
        <div class="tutorial__content">
          <div class="tutorial__head">
            <h2 class="title-h1 text-al-center">Как использовать?<sup>1</sup></h2>
          </div>
          <div class="guide guide-nowrap">
            <div class="guide__block">
              <h4 class="guide__title">При варикозе<sup>*</sup></h4>
              <div class="guide__wrap">
                <div class="guide__item">
                  <img src="/img/product/guide-1.png" alt=""/>
                  <p>Одна таблетка утром во время еды</p>
                </div>
              </div>
            </div>
            <div class="guide__block">
              <h4 class="guide__title">При остром геморрое принимать в течение недели</h4>
              <div class="guide__wrap">
                <div class="guide__item">
                  <img src="/img/product/guide-1.png" alt=""/>
                  <p>по 1 таблетке утром, днем и вечером</p>
                </div>
                <div class="guide__item">
                  <img src="/img/product/guide-1.png" alt=""/>
                  <p>по 1 таблетке утром и вечером</p>
                </div>
              </div>
            </div>
            <div class="guide__block">
              <h4 class="guide__title">При хроническом геморрое</h4>
              <div class="guide__wrap">
                <div class="guide__item">
                  <img src="/img/product/guide-1.png" alt=""/>
                  <p>1 таблетка в день во время еды</p>
                </div>
              </div>
            </div>
          </div>
          <div class="guide__swiper">
            <swiper
              :slides-per-view="1"
              :space-between="20"
              @swiper="onSwiperGuide"
              :modules="[Navigation]"
              navigation
            >
              <swiper-slide>
                <div class="guide__block">
                  <h4 class="guide__title">При варикозе<sup>*</sup></h4>
                  <div class="guide__wrap">
                    <div class="guide__item">
                      <img src="/img/product/guide-1.png" alt=""/>
                      <p>Одна таблетка утром во время еды</p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="guide__block">
                  <h4 class="guide__title">При остром геморрое принимать в течение недели</h4>
                  <div class="guide__wrap">
                    <div class="guide__item">
                      <img src="/img/product/guide-1.png" alt=""/>
                      <p>по 1 таблетке утром, днем и вечером</p>
                    </div>
                    <div class="guide__item">
                      <img src="/img/product/guide-1.png" alt=""/>
                      <p>по 1 таблетке утром и вечером</p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="guide__block">
                  <h4 class="guide__title">При хроническом геморрое</h4>
                  <div class="guide__wrap">
                    <div class="guide__item">
                      <img src="/img/product/guide-1.png" alt=""/>
                      <p>1 таблетка в день во время еды</p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

    <section class="others">
      <div class="others__wrapper container">
        <div class="others__content">
          <h2 class="title-h1" style="max-width: 928px">Линейка Троксевазин<sup>®</sup> – комплексный подход для воздействия на симптомы варикоза<sup>*</sup> не только изнутри, но и снаружи</h2>
          <div class="others__list">
            <div class="others__item swiper-gel-1">
              <img src="/img/product/other-gel-1-40.png" alt=""/>
              <p>
                <strong class="others-violet">Узнайте больше <br> о Троксевазин<sup>®</sup> Нео —</strong><br> гель с усиленной<sup>***</sup> трехкомпонентной формулой<sup>6</sup>
              </p>
              <NuxtLink to="/neo">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
            <div class="others__item swiper-gel-1">
              <img src="/img/product/other-gel.png" alt=""/>
              <p>
                <strong class="others-violet">Узнайте больше <br> о Троксевазин<sup>®</sup> Гель 2 % —</strong><br>доступная цена<sup>7</sup>, проверенный временем гель<sup>8</sup>
              </p>
              <NuxtLink to="/gel">
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
                  <img src="/img/product/other-gel-1-40.png" alt=""/>
                  <p>
                    <strong class="others-violet">Узнайте больше <br> о Троксевазин<sup>®</sup> Нео —</strong><br> гель с усиленной<sup>***</sup> трехкомпонентной формулой<sup>6</sup>
                  </p>
                  <NuxtLink to="/neo">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="others__item">
                  <img src="/img/product/other-gel.png" alt=""/>
                  <p>
                    <strong class="others-violet">Узнайте больше <br> о Троксевазин<sup>®</sup> Гель 2 % —</strong><br>доступная цена<sup>7</sup>, проверенный временем гель<sup>8</sup>
                  </p>
                  <NuxtLink to="/gel">
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
          <h2 class="title-h1">Инструкция по медицинскому применению препарата Троксактив таблетки</h2>
          <div class="instruction">
            <div class="instruction__list">
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Регистрационный номер</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  ЛП-000726
                </div>
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
          <div class="faq__download"> <button class="btn btn-rounded">Скачать PDF</button></div>
        </div>
      </div>
    </section>

    <section class="sources">
      <div class="sources__wrapper container">
        <p>* При хронических заболеваниях вен2
          <br>1. Наиболее рекомендуемое врачами МНН для лечения ХБВ согласно Prindex, 3q2021
          <br>2. Инструкция по медицинскому применению лекарственного препарата Троксактив ЛП-№ (000726)-(РГ-RU)6
          <br>3. Garner RC, et al. J Pharm Sci. 2002;91(1):32–40
          <br>4. По сравнению с упаковкой 30 таб. Троксактив #30 -1109 руб. Розничные цены ноябрь 2021 по данным IQVIA.
          <br>5. В категории наружных венотоников, по продажам в деньгах 2018-2022, АЙКЬЮВИА
          <br>6. Инструкция по медицинскому применению лекарственного препарата Троксевазин® Нео ЛП-002139
          <br>7. По сравнению с другими популярными гелями. Розничные цены Февраль 2022, IQVIA: Троксевазин® гель 2 % 40
          гр – 313,65, Лиотон гель 30 гр – 551.11, Детрагель 40 г – 645,65,Венолайф гель 40 г – 520.35, Флебодиа крем-гель
          50 мл – 681 руб, Венарус гель 40 г – 612 руб, Ангиорус гель 60 мл – 433 руб (по данным на сайте apteka.ru,
          доступ – 12.04.2022.
          <br>8. Инструкция по медицинскому применению лекарственного препарата Троксевазин® Гель 2% П N012713/02
          <br>9. Розничная цена Троксактива 30 таб – 1239 руб (АЙКЬЮВИА, Августа 2022)
        </p>
      </div>
    </section>

    <ModalMoff v-model:visible="visible"/>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

useHead({
  title: 'Троксактив',
})

const onSwiper = (swiper) => {};
const onSwiperEconomy = (swiper) => {};
const onSwiperGuide = (swiper) => {};
const onSwiperHeader = (swiper) => {};

const pagination = ref({
  clickable: true,
  renderBullet: function (index, className) {
    let pagiText = null;

    switch (index) {
      case 0:
        pagiText = '30 г'
        break;
      case 1:
        pagiText = '60 г'
        break;
      case 2:
        pagiText = '90 г'
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

const chronicModalTrigger = ref(null);
const visible = ref(false);

onMounted(() => {
  chronicModalTrigger.value.querySelectorAll('i')
    .forEach(i => i.addEventListener('click', (e) => {
      visible.value = true
    }
  ));
})
</script>

<style lang="postcss">
@import "@/assets/css/product/chronic.pcss";
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