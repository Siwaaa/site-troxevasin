<template>
  <main>
    <header class="header-case">
      <div class="header-case__wrapper container">
        <div class="header-case__top">
          <h1 class="title-h1 header-case__title">Варикоз<sup>*</sup> может сопровождаться такими проявлениями как
            <strong>отеки и судороги в ногах</strong>
          </h1>
          <div class="header-case__img">
            <img src="/img/case/header-1.png" alt=""/>
          </div>
        </div>
        <div class="header-case__list">
          <div class="header-case__item">
            <img src="/img/case/h-list-1.png" alt=""/>
            <p>Заболевание может прогрессировать — <strong>на тяжелых стадиях люди могут сталкиваться даже с трофическими язвами</strong>. Ученые выделяют 7 классов хронических заболеваний вен. Вот как они <i>различаются</i>.
            </p>
          </div>
          <div class="header-case__item">
            <img src="/img/case/h-list-1.png" alt=""/>
            <p>При первых признаках заболевания <strong>необходимо обратиться к врачу</strong> и получить план лечения,
              чтобы избежать прогрессирования заболевания. </p>
          </div>
        </div>
      </div>
    </header>

    <section class="factors">
      <div class="factors__wrapper container">
        <div class="factors__content">
          <h2 class="title-h1">Факторы риска развития хронических заболеваний вен<sup>1</sup></h2>
          <ul class="factors__list">
            <li class="factors__item">
              <img src="/img/case/factor-1.png" alt=""/>
              <p>Ожирение</p>
            </li>
            <li class="factors__item">
              <img src="/img/case/factor-1.png" alt=""/>
              <p>Возраст</p>
            </li>
            <li class="factors__item">
              <img src="/img/case/factor-1.png" alt=""/>
              <p>Беременность</p>
            </li>
            <li class="factors__item factors-50">
              <img src="/img/case/factor-1.png" alt=""/>
              <p>Генетическая <br> предрасположенность</p>
            </li>
            <li class="factors__item factors-50">
              <img src="/img/case/factor-1.png" alt=""/>
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
            <img src="/img/product/symptoms-1.png" alt=""/></div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <img src="/img/product/symptom.png" alt=""/>
              <p>Медикаментозная <br>терапия</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom.png" alt=""/>
              <p>Компрессионный <br>трикотаж</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom.png" alt=""/>
              <p>Лечебная <br>физкультура</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom.png" alt=""/>
              <p>Хирургическое <br>вмешательство</p>
            </li>
          </ul>
          <div class="symptoms__doctor">
            <img src="/img/case/doc.png" alt=""/>
            <p>Не забывайте — программу лечения в каждом конкретном случае назначает врач </p>
          </div>
        </div>
      </div>
    </section>

    <section class="vozdeystvyi">
      <div class="vozdeystvyi__wrapper container">
        <div class="vozdeystvyi__content">
          <div class="vozdeystvyi__head">
            <h2 class="title-h1">Для комплексного воздействия <br> на симптомы изнутри и снаружи</h2>
          </div>
          <div class="vozdeystvyi__body">
            <div class="vozdeystvyi__left">
              <p>Таблетки Троксактив для направленного действия на вены изнутри<sup>3</sup> и гель Троксевазин<sup>®</sup>
                Нео с усиленной<sup>**</sup> формулой для воздействия на симптомы варикоза<sup>*</sup> снаружи<sup>2
                </sup></p>
                <Button label="Купить" arrowRight />
                <span>** По сравнению с Троксевазин® гель 2 % </span>
            </div>
            <div class="vozdeystvyi__right">
              <img src="/img/case/vozdey.png" alt=""/>
              <Button label="Купить" arrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="others">
      <div class="others__wrapper container">
        <div class="others__content">
          <div class="others__list">
            <div class="others__item swiper-gel-1">
              <h2 class="title-h1">Троксевазин<sup>®</sup> <br> НЕО гель</h2>
              <img src="/img/product/other-gel-1-40.png" alt=""/>
              <p><strong class="others-violet">Инновация в линейке Троксевазин<sup>®</sup> — </strong>
                Троксевазин<sup>®</sup> Нео с усиленной<sup>**</sup> трехкомпонентной формулой<sup>2</sup></p>
              <div class="others__btns">
                <Button label="Купить" arrowRight />
                <Button label="Узнать больше" rounded />
              </div>
            </div>
            <div class="others__item swiper-gel-1">
              <h2 class="title-h1">Троксактив <br>Таблетки</h2>
              <img src="/img/product/other-gel-1-40.png" alt=""/>
              <p><strong class="others-orange">Самая востребованная формула (МНН)<sup>4</sup></strong><br> в лечении
                симптомов <br> варикоза<sup>*</sup></p>
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
                  <img src="/img/product/other-gel-1-40.png" alt=""/>
                  <p><strong class="others-violet">Инновация в линейке Троксевазин<sup>®</sup> — </strong>Троксевазин<sup>®</sup> Нео с усиленной<sup>**</sup> трехкомпонентной формулой<sup>3</sup>
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
                  <img src="/img/product/other-gel-1-40.png" alt=""/>
                  <p><strong class="others-orange">Самая востребованная формула (МНН)<sup>5</sup></strong><br> в лечении
                    симптомов <br> варикоза<sup>*</sup></p>
                  <div class="others__btns">
                    <Button label="Купить" arrowRight />
                    <Button label="Узнать больше" rounded />
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <p class="others__footnote">** По сравнению с Троксевазин® гель 2 %</p>
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
                <img src="/img/product/article.jpg" alt=""/>
                <h3>Симптомы варикоза</h3>
                <p>Посмотрим на статистику: по данным исследователей, большая часть пациентов до обращения к специалисту
                  по проблемам с венами, флебологу, имела опыт...</p>
              </div>
              <div class="articles__item">
                <img src="/img/product/article.jpg" alt=""/>
                <h3>Анализы при варикозе</h3>
                <p>Посмотрим на статистику: по данным исследователей, большая часть пациентов до обращения к специалисту
                  по проблемам с венами, флебологу, имела опыт...</p>
              </div>
              <div class="articles__item">
                <img src="/img/product/article.jpg" alt=""/>
                <h3>Кратко о варикозе</h3>
                <p>Посмотрим на статистику: по данным исследователей, большая часть пациентов до обращения к специалисту
                  по проблемам с венами, флебологу, имела опыт...</p>
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
        <p>* Хронической венозной недостаточности
          <br>1. Варикозное расширение вен. Клинические рекомендации МЗ РФ, год утверждения 2021
          <br>2. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU)
          https://portal.eaeunion.org/sites/commonprocesses/ru-ru/Pages/CardView.aspx?documentId=6206058bfb44f12d3bb0566b&amp;codeId=P.MM.01.
          Дата обращения: 28.02.2023.
          <br>3. Инструкция по медицинскому применению лекарственного препарата Троксактив ЛП-№ (000726)-(РГ-RU)
          <br>4. Наиболее рекомендуемое врачами МНН для лечения ХЗВ (Мониторинг назначений ЛП врачами PrIndex (Приндекс),
          3кв 2022)
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
  title: 'Троксевазин® Варикоз',
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