<template>
  <main>
    <header class="header-case" id="header">
      <div class="header-case__wrapper container">
        <div class="header-case__top">
          <h1 class="title-h1 header-case__title">Варикоз<sup>*</sup> – распространенное заболевание<sup>1</sup>, признаками которого могут быть <strong>сосудистые звездочки, боль и тяжесть в ногах<sup>2</sup></strong>
          </h1>
          <div class="header-case__img">
            <img src="/img/case/header-case.png" srcset="/img/case/header-case@2x.webp 2x" alt="" loading="lazy"/>
          </div>
        </div>
        <div ref="veniModalTrigger" class="header-case__list">
          <div class="header-case__item">
            <img src="/img/case/h-list-1.png" srcset="/img/case/h-list-1@2x.png 2x" alt="" loading="lazy"/>
            <p>При различных проявлениях могут назначаться разные подходы к лечению. Например, только хирургический метод уберет сосудистые звездочки, <strong>гели же могут применяться против тяжести и отеков в ногах при варикозе<sup>7</sup>.</strong> 
            </p>
          </div>
          <div class="header-case__item">
            <img src="/img/case/h-list-2.png" srcset="/img/case/h-list-2@2x.png 2x" alt="" loading="lazy"/>
            <p><strong>Важна консультация врача.</strong> <br>Заболевание может прогрессировать. На более серьезных
              стадиях могут появиться судороги, отек ног, выпирающие узловатые вены, венозные язвы. Ученые выделяют 7
              классов хронических заболеваний вен. Вот как они <i>различаются</i><sup>2</sup>.</p>
          </div>
        </div>
      </div>
    </header>

    <section class="factors" id="factors">
      <div class="factors__wrapper container">
        <div class="factors__content">
          <h2 class="title-h1">Факторы риска развития хронических заболеваний вен<sup>2</sup></h2>
          <ul class="factors__list">
            <li class="factors__item">
              <img src="/img/case/factor-1.png" alt="" loading="lazy"/>
              <p>Ожирение</p>
            </li>
            <li class="factors__item">
              <img src="/img/case/factor-2.png" alt="" loading="lazy"/>
              <p>Возраст</p>
            </li>
            <li class="factors__item">
              <img src="/img/case/factor-3.png" alt="" loading="lazy"/>
              <p>Беременность</p>
            </li>
            <li class="factors__item factors-50">
              <img src="/img/case/factor-4.png" alt="" loading="lazy"/>
              <p>Генетическая <br> предрасположенность</p>
            </li>
            <li class="factors__item factors-50">
              <img src="/img/case/factor-5.png" alt="" loading="lazy"/>
              <p>Сидячая или <br> стоячая работа</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="symptoms" id="symptoms">
      <div class="symptoms__wrapper container">
        <div class="symptoms__content">
          <div class="symptoms__head">
            <h2 class="title-h1">Для борьбы с варикозом<sup>*</sup></h2>
            <p>Может применяться комбинация различных методов лечения</p>
          </div>
          <div class="symptoms__img">
            <img src="/img/product/symptoms-varikoz.png" srcset="/img/product/symptoms-varikoz@2x.webp 2x" alt="" loading="lazy"/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <img src="/img/product/symptom-case-1.png" srcset="/img/product/symptom-case-1@2x.webp 2x" alt="" loading="lazy"/>
              <p>Медикаментозная <br>терапия</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-case-2.png" srcset="/img/product/symptom-case-2@2x.webp 2x" alt="" loading="lazy"/>
              <p>Компрессионный <br>трикотаж</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-case-3.png" srcset="/img/product/symptom-case-3@2x.webp 2x" alt="" loading="lazy"/>
              <p>Лечебная <br>физкультура</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-case-4.png" srcset="/img/product/symptom-case-4@2x.webp 2x" alt="" loading="lazy"/>
              <p>Хирургическое <br>вмешательство</p>
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
            <img src="/img/case/stats.png" alt="" loading="lazy"/>
          </div>
          <div class="stats__right">
            <h2 class="title-h1">Согласно исследованию<sup>6</sup>, 92% пациентов начинают лечение симптомов варикоза<sup>*</sup> с помощью наружных средств</h2>
            <p>Бороться с варикозом<sup>*</sup> помогут средства бренда Троксевазин<sup>®</sup>, который на протяжении более 40 лет<sup>3</sup> помогает россиянам в борьбе с варикозом<sup>*</sup>.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="others" id="products">
      <div class="others__wrapper container">
        <div class="others__content">
          <div class="others__list">
            <div class="others__item">
              <h2 class="title-h1">Троксевазин<sup>®</sup> <br>Гель 2% </h2>
              <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
              <p><strong class="others-violet">Проверенный временем<sup>3</sup> препарат против тяжести и боли в ногах при варикозе<sup>*</sup></strong><br>Способствует укреплению вен и повышению их тонуса<sup>4</sup>
              </p>
              <div class="others__btns">
                <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=365040&productIds=33271')" label="Купить" arrowRight id="buy_gel" />
                <NuxtLink to="/gel" id="gel">
                  <Button label="Узнать больше" rounded/>
                </NuxtLink>
              </div>
            </div>
            <div class="others__item">
              <h2 class="title-h1">Троксевазин<sup>®</sup> <br> Нео гель</h2>
              <img src="/img/product/other-gel-neo.png" alt="" loading="lazy"/>
              <p><strong class="others-violet">Усиленная<sup>**</sup> формула с тройным действием<sup>***</sup> против симптомов варикоза<sup>*</sup></strong><br> Способствует укреплению вен, уменьшению воспаления и снятию отека при варикозе<sup>*,5</sup>
              </p>
              <div class="others__btns">
                <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=266995&productIds=377032')" label="Купить" arrowRight id="buy_neo" />
                <NuxtLink to="/neo" id="neo">
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
                  <h2 class="title-h1">Троксевазин<sup>®</sup> <br>Гель 2% </h2>
                  <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
                  <p><strong class="others-violet">Проверенный временем<sup>3</sup> препарат против тяжести и боли в ногах при варикозе<sup>*</sup></strong><br>Способствует укреплению вен и повышению их тонуса<sup>4</sup>
                  </p>
                  <div class="others__btns">
                    <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=365040&productIds=33271')" label="Купить" arrowRight id="buy_gel" />
                    <NuxtLink to="/gel" id="gel">
                      <Button label="Узнать больше" rounded/>
                    </NuxtLink>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="others__item">
                  <h2 class="title-h1">Троксевазин<sup>®</sup> <br> НЕО гель</h2>
                  <img src="/img/product/other-gel-neo.png" alt="" loading="lazy"/>
                  <p><strong class="others-violet">Усиленная<sup>**</sup> формула с тройным действием<sup>***</sup> против симптомов варикоза<sup>*</sup></strong><br> Способствует укреплению вен, уменьшению воспаления и снятию отека при варикозе<sup>*,5</sup>
                  </p>
                  <div class="others__btns">
                    <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=266995&productIds=377032')" label="Купить" arrowRight id="buy_neo" />
                    <NuxtLink to="/neo" id="neo">
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
        <p>* Хроническая венозная недостаточность
          <br>** По сравнениню с Троксевазин® Гель 2 %
          <br>*** Венотонизирующее, противовоспалительное, противоотечное<sup>5</sup>. 
          <br>1. Rabe E., Guex J., Puskas A., Scuderi A., Fernandez Quesada F., Coordinators V. Epidemiology of chronic venous disorders in geographically diverse populations: results from the Vein Consult Program//Int Angiol. 2012. Vol. 2. P. 105-115.
          <br>2. Варикозное расширение вен нижних конечностей. Клинические рекомендации МЗ РФ, год утверждения 2024
          <br>3. Троксевазин® используется в России с 1981 г. РУ Б-8-242 №2654
          <br>4. Инструкция по медицинскому применению лекарственного препарата Троксевазин® гель ЛП-№(002561)-(РГ-RU)
          <br>5. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU) https://storage.brandquad.ru/accounts-media/TEVA/DAM/origin/0f2faedc-c44e-11ef-a2ec-061441bd84b0.pdf. Дата обращения: 21.04.2025.
          <br>6. Исследование Ipsos. Изучение привычек и особенностей использования венотоников для вен нижних конечностей. 2024
          <br>7. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU) и инструкция по медицинскому применению лекарственного препарата Троксевазин® гель 2 % NO12713/02.
        </p>
      </div>
    </section>

    <ModalVeni v-model:visible="visible"/>
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

const veniModalTrigger = ref(null);
const visible = ref(false);

onMounted(() => {
  veniModalTrigger.value.querySelectorAll('i')
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