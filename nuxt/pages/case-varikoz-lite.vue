<template>
  <main>
    <header class="header-case">
      <div class="header-case__wrapper container">
        <div class="header-case__top">
          <h1 class="title-h1 header-case__title">Варикоз<sup>*</sup> – распространенное заболевание<sup>1</sup>, признаками которого могут быть <strong>сосудистые звездочки, боль и тяжесть в ногах<sup>2</sup></strong>
          </h1>
          <div class="header-case__img">
            <nuxt-img src="/img/case/header-case.png" alt=""/>
          </div>
        </div>
        <div class="header-case__list">
          <div class="header-case__item">
            <nuxt-img src="/img/case/h-list-1.png" alt=""/>
            <p>При различных проявлениях могут назначаться разные подходу к лечению. Например, только хирургический метод уберет сосудистые звездочки, <strong>гели же могут применяться против тяжести и отеков в ногах при варикозе<sup>7</sup>.</strong> 
            </p>
          </div>
          <div class="header-case__item">
            <nuxt-img src="/img/case/h-list-1.png" alt=""/>
            <p><strong>Важна консультация врача.</strong> <br>Заболевание может прогрессировать. На более серьезных
              стадиях могут появиться судороги, отек ног, выпирающие узловатые вены, венозные язвы. Ученые выделяют 7
              классов хронических заболеваний. Вот как они <i>различаются</i>.</p>
          </div>
        </div>
      </div>
    </header>

    <section class="factors">
      <div class="factors__wrapper container">
        <div class="factors__content">
          <h2 class="title-h1">Факторы риска развития хронических заболеваний вен<sup>2</sup></h2>
          <ul class="factors__list">
            <li class="factors__item">
              <nuxt-img src="/img/case/factor-1.png" alt=""/>
              <p>Ожирение</p>
            </li>
            <li class="factors__item">
              <nuxt-img src="/img/case/factor-1.png" alt=""/>
              <p>Возраст</p>
            </li>
            <li class="factors__item">
              <nuxt-img src="/img/case/factor-1.png" alt=""/>
              <p>Беременность</p>
            </li>
            <li class="factors__item factors-50">
              <nuxt-img src="/img/case/factor-1.png" alt=""/>
              <p>Генетическая <br> предрасположенность</p>
            </li>
            <li class="factors__item factors-50">
              <nuxt-img src="/img/case/factor-1.png" alt=""/>
              <p>Сидячая или <br> стоячая работа</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="symptoms">
      <div class="symptoms__wrapper container">
        <div class="symptoms__content">
          <div class="symptoms__head">
            <h2 class="title-h1">Для борьбы с варикозом<sup>*</sup></h2>
            <p>Может применяться комбинация различных методов лечения</p>
          </div>
          <div class="symptoms__img">
            <nuxt-img src="/img/product/symptoms-1.png" alt=""/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <nuxt-img src="/img/product/symptom.png" alt=""/>
              <p>Медикаментозная <br>терапия</p>
            </li>
            <li class="symptoms__item">
              <nuxt-img src="/img/product/symptom.png" alt=""/>
              <p>Компрессионный <br>трикотаж</p>
            </li>
            <li class="symptoms__item">
              <nuxt-img src="/img/product/symptom.png" alt=""/>
              <p>Лечебная <br>физкультура</p>
            </li>
            <li class="symptoms__item">
              <nuxt-img src="/img/product/symptom.png" alt=""/>
              <p>Хирургическое <br>вмешательство</p>
            </li>
          </ul>
          <div class="symptoms__doctor">
            <nuxt-img src="/img/case/doc.png" alt=""/>
            <p>Не забывайте — программу лечения в каждом конкретном случае назначает врач </p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="stats__wrapper container">
        <div class="stats__content">
          <div class="stats__left">
            <nuxt-img src="/img/case/stats.png" alt=""/>
          </div>
          <div class="stats__right">
            <h2 class="title-h1">Согласно исследованию,<sup>6</sup> 92% пациентов начинают лечение симптомов варикоза<sup>*</sup> с помощью наружных средств</h2>
            <p>Бороться с варикозом помогут средства бренда Троксевазин<sup>®</sup>, который на протяжении более 40 лет<sup>3</sup> помогает россиянам справляться с варикозом<sup>*</sup>.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="others">
      <div class="others__wrapper container">
        <div class="others__content">
          <div class="others__list">
            <div class="others__item">
              <h2 class="title-h1">Троксевазин<sup>®</sup> <br> НЕО гель</h2>
              <nuxt-img src="/img/product/other-gel-1-40.png" alt=""/>
              <p><strong class="others-violet">Препарат следующего поколения — </strong><br> Троксевазин<sup>®</sup> Нео с усиленной<sup>7</sup> трехкомпонентной формулой<sup>8</sup>
              </p>
              <div class="others__btns">
                <Button label="Купить" arrowRight />
                <Button label="Узнать больше" rounded />
              </div>
            </div>
            <div class="others__item">
              <h2 class="title-h1">Троксактив <br>Таблетки</h2>
              <nuxt-img src="/img/product/other-gel-1-40.png" alt=""/>
              <p><strong class="others-orange">Самая востребованная формула<sup>4</sup></strong> в лечении симптомов<br>варикоза<sup>**</sup>
              </p>
              <div class="others__btns">
                <Button label="Купить" arrowRight />
                <Button label="Узнать больше" rounded />
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
                  <h2 class="title-h1">Троксевазин<sup>®</sup> <br> НЕО гель</h2>
                  <nuxt-img src="/img/product/other-gel-1-40.png" alt=""/>
                  <p><strong class="others-violet">Препарат следующего поколения — </strong><br> Троксевазин<sup>®</sup> Нео с усиленной<sup>7</sup> трехкомпонентной формулой<sup>8</sup>
                  </p>
                  <div class="others__btns">
                    <Button label="Купить" arrowRight />
                    <Button label="Узнать больше" rounded />
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="others__item">
                  <h2 class="title-h1">Троксактив <br>Таблетки</h2>
                  <nuxt-img src="/img/product/other-gel-1-40.png" alt=""/>
                  <p><strong class="others-orange">Самая востребованная формула<sup>4</sup></strong> в лечении симптомов<br>варикоза<sup>**</sup>
                  </p>
                  <div class="others__btns">
                    <Button label="Купить" arrowRight />
                    <Button label="Узнать больше" rounded />
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

    <section class="read-more">
      <div class="read-more__wrapper container">
        <div class="read-more__content">
          <h2 class="title-h1">Узнайте больше о варикозе</h2>
          <div class="articles">
            <div class="articles__content">
              <div class="articles__item">
                <nuxt-img src="/img/product/article.jpg" alt=""/>
                <h3>Симптомы варикоза</h3>
                <p>Посмотрим на статистику: по данным исследователей, большая часть пациентов до обращения к специалисту по проблемам с венами, флебологу, имела опыт...</p>
              </div>
              <div class="articles__item">
                <nuxt-img src="/img/product/article.jpg" alt=""/>
                <h3>Анализы при варикозе</h3>
                <p>Посмотрим на статистику: по данным исследователей, большая часть пациентов до обращения к специалисту по проблемам с венами, флебологу, имела опыт...</p>
              </div>
              <div class="articles__item">
                <nuxt-img src="/img/product/article.jpg" alt=""/>
                <h3>Кратко о варикозе</h3>
                <p>Посмотрим на статистику: по данным исследователей, большая часть пациентов до обращения к специалисту по проблемам с венами, флебологу, имела опыт...</p>
              </div>
            </div>
            <div class="articles__btn">
              <Button label="Смотреть еще" rounded />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="sources">
      <div class="sources__wrapper container">
        <p>* Хроническая венозная недостаточность
          <br>** По сравнениню с Троксевазин® Гель 2 %
          <br>*** Венотонизирующее, противовоспалительное, противоотечное5.
          <br>1. Rabe E., Guex J., Puskas A., Scuderi A., Fernandez Quesada F., Coordinators V. Epidemiology of chronic
          venous disorders in geographically diverse populations: results from the Vein Consult Program//Int Angiol. 2012.
          Vol. 2. P. 105-115.
          <br>2. Варикозное расширение вен. Клинические рекомендации МЗ РФ, год утверждения 2021
          <br>3. Троксевазин® используется в России с 1981 г. РУ Б-8-242 №2654
          <br>4. Инструкция по медицинскому применению лекарственного препарата Троксевазин® П N012713/02
          <br>5. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU)
          https://portal.eaeunion.org/sites/commonprocesses/ru-ru/Pages/CardView.aspx?documentId=6206058bfb44f12d3bb0566b&amp;codeId=P.MM.01.
          Дата обращения: 28.02.2023.
          <br>6. Исследование Ipsos. Изучение привычек и особенностей использования венотоников. 2021
          <br>7. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU) и инструкция по медицинскому применению
          лекарственного препарата Троксевазин® Гель 2 %
          NO12713/02.
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
  title: 'Троксевазин'
})

const onSwiper = (swiper) => {};
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