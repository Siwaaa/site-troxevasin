<template>
  <main>
    <header class="header-case" id="header">
      <div class="header-case__wrapper container">
        <div class="header-case__top">
          <h1 class="title-h1 header-case__title"><strong>Геморрой</strong> – распространенное заболевание среди взрослого
            населения<sup>1</sup></h1>
          <div class="header-case__img">
            <img src="/img/case/header-hemo.png" srcset="/img/case/header-hemo@2x.png 2x" alt="" loading="lazy"/>
          </div>
        </div>
        <div ref="hemorrhoidsModalTrigger" class="header-case__list">
          <div class="header-case__item">
            <img src="/img/case/h-list-3.png" srcset="/img/case/h-list-3@2x.png 2x" alt="" loading="lazy"/>
            <p>Заболевание может сопровождаться такими крайне неприятными симптомами как <strong>боль, зуд и кровотечение из геморроидальных узлов</strong>, а при развитии заболевания может привести к <strong>выпадению
                геморроидальных узлов.</strong> Ученые<sup>2</sup> выделяют 4 стадии хронического геморроя. Вот как они <i>различаются</i>.
            </p>
          </div>
          <div class="header-case__item">
            <img src="/img/case/h-list-2.png" srcset="/img/case/h-list-2@2x.png 2x" alt="" loading="lazy"/>
            <p>При первых признаках заболевания <strong>необходимо обратиться к врачу</strong> и получить план лечения,
              чтобы избежать прогрессирования заболевания. </p>
          </div>
        </div>
      </div>
    </header>

    <section class="factors" id="factors">
      <div class="factors__wrapper container">
        <div class="factors__content">
          <h2 class="title-h1">Факторы риска <br> развития геморроя<sup>2</sup></h2>
          <ul class="factors__list">
            <li class="factors__item">
              <img src="/img/case/factor-4-v2.png" alt="" loading="lazy"/>
              <p style="word-break: break-all;">злоупотребление алкоголем</p>
            </li>
            <li class="factors__item">
              <img src="/img/case/factor-6.png" alt="" loading="lazy"/>
              <p>Тяжелые физические нагрузки</p>
            </li>
            <li class="factors__item">
              <img src="/img/case/factor-5.png" alt="" loading="lazy"/>
              <p style="word-break: break-all;">Малоподвижный и сидячий образ жизни</p>
            </li>
            <li class="factors__item">
              <img src="/img/case/factor-7-v2.png" alt="" loading="lazy"/>
              <p>Беременность и роды</p>
            </li>
            <li class="factors__item">
              <img src="/img/case/factor-8.png" alt="" loading="lazy"/>
              <p>Желудочно-кишечные расстройства (запор, диарея, неустойчивый стул)</p>
            </li>
            <li class="factors__item">
              <img src="/img/case/factor-9.png" alt="" loading="lazy"/>
              <p>Погрешности в диете</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="symptoms" id="symptoms">
      <div class="symptoms__wrapper container">
        <div class="symptoms__content">
          <div class="symptoms__head">
            <h2 class="title-h1">Как бороться с геморроем<sup>2</sup></h2>
          </div>
          <div class="symptoms__img"> 
            <img src="/img/product/symptoms-hemo.png" srcset="/img/product/symptoms-hemo@2x.webp 2x" alt="" loading="lazy"/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item"> 
              <img src="/img/product/symptom-case-5.png" srcset="/img/product/symptom-case-5@2x.webp 2x" alt="" loading="lazy"/>
              <p>Диетотерапия</p>
            </li>
            <li class="symptoms__item"> 
              <img src="/img/product/symptom-case-1.png" srcset="/img/product/symptom-case-1@2x.webp 2x" alt="" loading="lazy"/>
              <p>Медикаментозное лечение</p>
            </li>
            <li class="symptoms__item"> 
              <img src="/img/product/symptom-case-4.png" srcset="/img/product/symptom-case-4@2x.webp 2x" alt="" loading="lazy"/>
              <p>Хирургическое вмешательство</p>
            </li>
            <li class="symptoms__item"> 
              <img src="/img/product/symptom-case-6.png" srcset="/img/product/symptom-case-6@2x.webp 2x" alt="" loading="lazy"/>
              <p>Малоинвазивное операционное вмешательство</p>
            </li>
          </ul>
          <div class="symptoms__doctor">
            <img src="/img/case/doc.png" alt="" loading="lazy"/>
            <p>Не забывайте — программу лечения в каждом конкретном случае назначает врач </p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats" id="stats">
      <div class="stats__wrapper container">
        <div class="stats__content">
          <div class="stats__left">
            <img src="/img/case/stats-hemo.png" alt="" loading="lazy"/>
          </div>
          <div class="stats__right">
            <h2 class="title-h1">Для воздействия <br>на симптомы геморроя</h2>
            <p>Удобный формат лечения неудобной проблемы. Таблетки Троксактив и Троксевазин<sup>®</sup> капсулы
              направленно действуют на вены изнутри<sup>5</sup> при геморрое.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="others" id="products">
      <div class="others__wrapper container">
        <div class="others__content">
          <div class="others__list">
            <div class="others__item swiper-gel-1">
              <h2 class="title-h1">Троксактив <br>Таблетки</h2>
              <img src="/img/product/other-troxactive.png" alt="" loading="lazy"/>
              <p><strong class="others-orange">Курс лечения – 7 дней при остром геморрое. 1 таблетка (1000 мг) в день при хроническом геморрое.<sup>6</sup></strong>
              </p>
              <div class="others__btns">
                <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=376787&productIds=376941&productIds=376944')" label="Купить" arrowRight id="buy_troxactive" />
                <NuxtLink to="/troxactive" id="troxactive">
                  <Button label="Узнать больше" rounded/>
                </NuxtLink>
              </div>
            </div>
            <div class="others__item swiper-gel-1">
              <h2 class="title-h1">Троксевазин<sup>®</sup> <br> капсулы</h2>
              <img src="/img/product/other-caps.png" alt="" loading="lazy"/>
              <p><strong class="others-violet">Доступная цена<sup>3</sup>, <br> европейское
                  производство<sup>4</sup></strong></p>
              <div class="others__btns">
                <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=33267&productIds=33264')" label="Купить" arrowRight id="buy_capsules" />
                <NuxtLink to="/capsules" id="capsules">
                  <Button label="Узнать больше" rounded/>
                </NuxtLink>
              </div>
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
                  <h2 class="title-h1">Троксактив <br>Таблетки</h2>
                  <img src="/img/product/other-troxactive.png" alt="" loading="lazy"/>
                  <p><strong class="others-orange">Курс лечения – всего 7 дней при остром геморрое. Или 1 таблетка в день при
                      хроническом<sup>6</sup></strong>
                  </p>
                  <div class="others__btns">
                    <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=376787&productIds=376941&productIds=376944')" label="Купить" arrowRight id="buy_troxactive" />
                    <NuxtLink to="/troxactive" id="troxactive">
                      <Button label="Узнать больше" rounded/>
                    </NuxtLink>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="others__item">
                  <h2 class="title-h1">Троксевазин<sup>®</sup> <br> капсулы</h2>
                  <img src="/img/product/other-caps.png" alt="" loading="lazy"/>
                  <p><strong class="others-violet">Доступная цена<sup>3</sup>, <br> европейское
                      производство<sup>4</sup></strong></p>
                  <div class="others__btns">
                    <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=33267&productIds=33264')" label="Купить" arrowRight />
                    <NuxtLink to="/capsules" id="capsules">
                      <Button label="Узнать больше" rounded/>
                    </NuxtLink>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

    <section class="sources">
      <div class="sources__wrapper container">
        <p>* При хронических заболеваниях вен.
          <br>** Хронической венозной недостаточности
          <br>1. Пенетрационное исследование по геморрою. 1511 респондентов. Ipsos. Декабрь 2021
          <br>2. https://cr.minzdrav.gov.ru/schema/178_1
          <br>3. По сравнению с лидерами рынка венотоников для системного применения. Согласно данным базы «АЙКЬЮВИА
          Солюшнс» «Розничный аудит ГЛС и БАД в РФ», продажи в рублях в категории «Препараты, снижающие проницаемость
          капилляров» в виде твердых лекарственных форм; средние розничные цены в рублях в пересчете на 1 таблетку/капсулу
          в феврале 2025 г.
          <br>4. Инструкция по медицинскому применению лекарственного препарата Троксевазин® капсулы ЛП-№ (000083)-(РГ-RU)
          <br>5. Инструкции по медицинскому применению лекарственных препаратов Троксактив ЛП-№ (000726)-(РГ-RU),
          Троксевазин® капсулы ЛП-№(000083)-(РГ-RU),
          <br>6. Инструкция по медицинскому применению лекарственного препарата Троксактив ЛП-№ (000726)-(РГ-RU)
        </p>
      </div>
    </section>

    <ModalHemorrhoids v-model:visible="visible"/>
    <ModalUteka v-model:visible="visibleUteka" :url-products="productsForUteka" />
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';

useHead({
  title: 'Троксевазин'
})

const onSwiper = (swiper) => {};

const hemorrhoidsModalTrigger = ref(null);
const visible = ref(false);

onMounted(() => {
  hemorrhoidsModalTrigger.value.querySelectorAll('i')
    .forEach(i => i.addEventListener('click', (e) => {
      visible.value = true
    }
  ));
})

const visibleUteka = ref(false);
let productsForUteka = null;

const openUteka = (i) => {
  if (i && typeof i === 'string') productsForUteka = i;

  visibleUteka.value = true;
}
</script>

<style lang="postcss">
@import "@/assets/css/case/factors.pcss";
@import "@/assets/css/case/headerCase.pcss";
@import "@/assets/css/case/stats.pcss";
@import "@/assets/css/case/vozdeystvyi.pcss";
@import "@/assets/css/product/symptoms.pcss";
@import "@/assets/css/product/others.pcss";
@import "@/assets/css/product/readMore.pcss";
@import "@/assets/css/main/sources.pcss";
</style> 