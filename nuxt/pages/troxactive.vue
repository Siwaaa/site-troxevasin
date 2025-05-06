<template>
  <main>
    <header class="header-product" id="header">
      <div class="header-product__wrapper container">
        <div class="header-product__content">
          <h1 class="title-h1"><strong>Троксактив таблетки </strong>направленно действуют на вены изнутри при варикозе<sup>*,1</sup></h1>
          <p>Самое назначаемое действующее вещество (МНН) для лечения симптомов хронических заболеваний вен<sup>2</sup>
          </p>
          <div class="header-product__menu">
            <Button @click="openUteka" label="Купить" arrowRight id="buy_troxactive_1" />
            <NuxtLink to="#faq" id="troxactive_faq_1">
              <Button label="Инструкция" arrowRight rounded />
            </NuxtLink>
          </div>
        </div>
        <div class="header-product__swiper">
          <swiper
            :initialSlide="2"
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
                <img src="/img/product/p-trox-1.png" srcset="/img/product/p-trox-1@2x.webp 2x" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-trox-2.png" srcset="/img/product/p-trox-2@2x.webp 2x" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-trox-3.png" srcset="/img/product/p-trox-3@2x.webp 2x" alt="" loading="lazy" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="header-product__menu_mobile">
          <Button @click="openUteka" label="Купить" arrowRight id="buy_troxactive_2" />
          <NuxtLink to="#faq" id="troxactive_faq_2">
            <Button label="Инструкция" arrowRight rounded />
          </NuxtLink>
        </div>
      </div>
    </header>

    <section class="symptoms" id="symptoms">
      <div class="symptoms__wrapper container">
        <div class="symptoms__content">
          <div class="symptoms__head head">
            <h2 class="title-h1">Помогает бороться с симптомами варикоза<sup>*</sup> и геморроя<sup>1</sup></h2>
          </div>
          <div class="symptoms__img"> 
            <img src="/img/product/symptoms-trox.png" srcset="/img/product/symptoms-trox@2x.webp 2x" alt="" loading="lazy"/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <img src="/img/product/symptom-3.png" srcset="/img/product/symptom-3@2x.webp 2x" alt="" loading="lazy"/>
              <p>Усталость <br> и боль <br> в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-6.png" srcset="/img/product/symptom-6@2x.webp 2x" alt="" loading="lazy"/>
              <p>Отеки <br>и судороги в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-8.png" srcset="/img/product/symptom-8@2x.webp 2x" alt="" loading="lazy"/>
              <p>Венозные трофические <br>язвы</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-11.png" srcset="/img/product/symptom-11@2x.webp 2x" alt="" loading="lazy"/>
              <p>Острый и хронический геморрой </p>
            </li>
          </ul>
          <div class="symptoms__menu">
            <Button @click="openUteka" label="Купить" arrowRight id="buy_troxactive_3" />
            <NuxtLink to="#faq" id="troxactive_faq_3">
              <Button label="Инструкция" arrowRight rounded />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="chronic" id="chronic">
      <div class="chronic__wrapper container">
        <div class="chronic__content">
          <div ref="chronicModalTrigger" class="chronic__head head">
            <h2 class="title-h1"><i>Курс лечения</i> хронических заболеваний ног может длиться <i>от 2 до 12 месяцев</i><sup>9</sup></h2>
            <p>Таблетки Троксактив можно принимать до 12 месяцев<sup>1</sup></p>
          </div>
          <ul class="chronic__list">
            <li class="chronic__item">
              <img src="/img/product/chronic-1.png" srcset="/img/product/chronic-1@2x.webp 2x" alt="" loading="lazy"/>
              <p>Одна таблетка в день<sup>**</sup></p>
            </li>
            <li class="chronic__item">
              <img src="/img/product/chronic-2.png" srcset="/img/product/chronic-2@2x.webp 2x" alt="" loading="lazy"/>
              <p>Доступная цена<sup>10</sup></p>
            </li>
            <li class="chronic__item">
              <img src="/img/product/chronic-3.png" srcset="/img/product/chronic-3@2x.webp 2x" alt="" loading="lazy"/>
              <p>Европейское производство<sup>1</sup></p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="secret" id="secret">
      <div class="secret__wrapper container">
        <div class="secret__content secret-aorta">
          <div class="secret__head head">
            <h2 class="title-h1">Таблетки Троксактив – единственный таблетированный МОФФ<sup>3</sup> европейского производства<sup>1</sup></h2>
            <p>МОФФ – это микронизированная очищенная флавоноидная фракция Гесперидин-Диосмин. При микронизации происходит уменьшение частиц для улучшения всасываемости<sup>4</sup></p>
          </div>
        </div>
      </div>
    </section>

    <section class="economy" id="economy">
      <div class="economy__wrapper container">
        <div class="economy__head head">
          <h2 class="title-h1 text-al-center">Экономьте при покупке <br> больших упаковок 25%<sup>5</sup></h2>
        </div>
        <div class="economy-two">
          <div class="economy-two__item">
            <img src="/img/product/economy-two-1(2).webp" alt="" loading="lazy"/>
            <p><span class="color-orange">Таблетки Троксактив 90 шт.</span> <br>3 месяца приема<sup>**,1</sup></p>
            <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productId=376941')" label="Купить" arrowRight id="buy_troxactive_4" />
          </div>
          <div class="economy-two__item">
            <img src="/img/product/economy-two-2(2).webp" alt="" loading="lazy"/>
            <p><span class="color-orange">Таблетки Троксактив 60 шт.</span> <br>2 месяца приема<sup>**,1</sup></p>
            <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productId=376944')" label="Купить" arrowRight id="buy_troxactive_5" />
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
                <img src="/img/product/economy-two-1(2).webp" alt="" loading="lazy"/>
                <p><span class="color-orange">Таблетки Троксактив 90 шт.</span> <br>3 месяца приема</p>
                <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productId=376941')" label="Купить" arrowRight id="buy_troxactive_4" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="economy-two__item">
                <img src="/img/product/economy-two-2(2).webp" alt="" loading="lazy"/>
                <p><span class="color-orange">Таблетки Троксактив 60 шт.</span> <br>3 месяца приема</p>
                <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productId=376944')" label="Купить" arrowRight id="buy_troxactive_5" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="tutorial" id="tutorial">
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
                  <img src="/img/product/guide-4.svg" alt="" loading="lazy"/>
                  <p>Одна таблетка утром во время еды</p>
                </div>
              </div>
            </div>
            <div class="guide__block">
              <h4 class="guide__title">При остром геморрое принимать в течение недели</h4>
              <div class="guide__wrap">
                <div class="guide__item">
                  <img src="/img/product/guide-5.svg" alt="" loading="lazy"/>
                  <p>по 1 таблетке утром, днем и вечером</p>
                </div>
                <div class="guide__item">
                  <img src="/img/product/guide-6.svg" alt="" loading="lazy"/>
                  <p>по 1 таблетке утром и вечером</p>
                </div>
              </div>
            </div>
            <div class="guide__block">
              <h4 class="guide__title">При хроническом геморрое</h4>
              <div class="guide__wrap">
                <div class="guide__item">
                  <img src="/img/product/guide-7.svg" alt="" loading="lazy"/>
                  <p>1 таблетка в сутки во время еды</p>
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
                      <img src="/img/product/guide-4.svg" alt="" loading="lazy"/>
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
                      <img src="/img/product/guide-5.svg" alt="" loading="lazy"/>
                      <p>по 1 таблетке утром, днем и вечером</p>
                    </div>
                    <div class="guide__item">
                      <img src="/img/product/guide-6.svg" alt="" loading="lazy"/>
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
                      <img src="/img/product/guide-7.svg" alt="" loading="lazy"/>
                      <p>1 таблетка в сутки во время еды</p>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

    <section class="others" id="products">
      <div class="others__wrapper container">
        <div class="others__content">
          <h2 class="title-h1" style="max-width: 928px">Линейка Троксевазин<sup>®</sup> – подход для воздействия на симптомы варикоза<sup>*</sup> не только изнутри, но и снаружи</h2>
          <div class="others__list">
            <div class="others__item swiper-gel-1">
              <img src="/img/product/other-gel-neo.png" alt="" loading="lazy"/>
              <p>
                <strong class="others-violet">Узнайте больше <br> о Троксевазин<sup>®</sup> Нео —</strong><br> гель с усиленной<sup>***</sup> трехкомпонентной формулой<sup>6</sup>
              </p>
              <NuxtLink to="/neo" id="neo">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
            <div class="others__item swiper-gel-1">
              <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
              <p>
                <strong class="others-violet">Узнайте больше <br> о Троксевазин<sup>®</sup> Гель 2 % —</strong><br>доступная цена<sup>7</sup>, проверенный временем гель<sup>8</sup>
              </p>
              <NuxtLink to="/gel" id="gel">
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
                  <img src="/img/product/other-gel-neo.png" alt="" loading="lazy"/>
                  <p>
                    <strong class="others-violet">Узнайте больше <br> о Троксевазин<sup>®</sup> Нео —</strong><br> гель с усиленной<sup>***</sup> трехкомпонентной формулой<sup>6</sup>
                  </p>
                  <NuxtLink to="/neo" id="neo">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="others__item">
                  <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
                  <p>
                    <strong class="others-violet">Узнайте больше <br> о Троксевазин<sup>®</sup> Гель 2 % —</strong><br>доступная цена<sup>7</sup>, проверенный временем гель<sup>8</sup>
                  </p>
                  <NuxtLink to="/gel" id="gel">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>

    <section class="faq" id="faq">
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
                <div class="instruction__desc">ЛП-000726</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Торговое наименование препарата</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Троксактив</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Международное непатентованное или группировочное наименование</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Гесперидин + Диосмин</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Лекарственная форма</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Таблетки, покрытые пленочной оболочкой</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Состав</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Дозировка 500 мг1000 мг<br><br>1 таблетка, покрытая пленочной оболочкой, содержит: <br>Действующее вещество: <br><br>Гесперидин + Диосмин (Очищенная микронизированная флавоноидная фракция [90 % диосмин (450 мг), 10 % флавоноиды в пересчете на гесперидин (50 мг)]) 500,0 мг. <br>Вспомогательные вещества: целлюлоза микрокристаллическая (Vivapur 101) 78,5 мг, повидон (Пласдон К-25) 31,0 мг, карбоксиметилкрахмал натрия тип А (Explotab) 13,4 мг, кремния диоксид коллоидный (кремния диоксид коллоидный безводный) (Aerosil 200 Pharma) 3,1 мг, магния стеарат (Ligamed MF-2-V) 4,0 мг. Пленочная оболочка Опадрай II 85F230154 оранжевый: поливиниловый спирт —частично гидролизованный (Е1203) 7,56 мг, макрогол-3350 (Макрогол/ПЭГ 3350 (Е1521)) 3,82 мг, титана диоксид (Е171) 3,80 мг, тальк (Е553B) 2,80 мг, краситель железа оксид желтый (Е172) 0,77 мг, краситель железа оксид красный (Е172) 0,15 мг<br><br>Дозировка 1000 мг<br><br> 1 таблетка, покрытая пленочной оболочкой, содержит: <br>Действующее вещество: <br>Гесперидин + Диосмин (Очищенная микронизированная флавоноидная фракция [90 % диосмин (900 мг), 10 % флавоноиды в пересчете на гесперидин (100 мг)]) 1000,0 мг. Вспомогательные вещества: целлюлоза микрокристаллическая (Vivapur 101) 157,0 мг, повидон (Пласдон К-25) 62,0 мг, карбоксиметилкрахмал натрия тип А (Explotab) 26,8 мг, кремния диоксид коллоидный (кремния диоксид коллоидный безводный) (Aerosil 200 Pharma) 6,2 мг, магния стеарат (Ligamed MF-2-V) 8,0 мг. Пленочная оболочка Опадрай II 85F240141 розовый: поливиниловый спирт —частично гидролизованный (Е1203) 15,12 мг, макрогол-3350 (Макрогол/ПЭГ 3350 (Е1521)) 7,64 мг, 2 титана диоксид (Е171) 8,61 мг, тальк (Е553B) 5,59 мг, краситель железа оксид желтый (Е172) 0,48 мг, краситель железа оксид красный (Е172) 0,36 мг</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Описание</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Дозировка 500 мг <br><br> Овальные двояковыпуклые таблетки, покрытые пленочной оболочкой светло-оранжевого цвета, гладкие с обеих сторон. <br><br> На поперечном разрезе ядро от светло-желтого до желтого цвета неоднородной структуры. <br><br>  Дозировка 1000 мг <br><br>Продолговатые двояковыпуклые таблетки, покрытые пленочной оболочкой светлорозового цвета, с риской с обеих сторон.<br><br>На поперечном разрезе ядро от светло-желтого до желтого цвета неоднородной структуры.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Фармакотерапевтическая группа</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Венотонизирующее и венопротекторное средство</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Код АТХ</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">C05CA53</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Фармакологическое действие</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc"><strong>Фармакодинамика</strong>
                  <br><br>Троксактив обладает венотонизирующим и ангиопротективным свойствами. Препарат уменьшает растяжимость вен и венозный застой, снижает проницаемость капилляров и повышает их резистентность. Результаты клинических исследований подтверждают фармакологическую активность гесперидин+диосмин в отношении показателей венозной гемодинамики. <br><br> Статистически достоверный дозозависимый эффект гесперидин+диосмин был продемонстрирован для следующих венозных плетизмографических параметров: венозной емкости, венозной растяжимости, времени венозного опорожнения. Оптимальное соотношение «доза-эффект» наблюдается при приеме 1000 мг в день (2 таблетки — дозировка 500 мг, 1 таблетка — дозировка 1000 мг). <br><br> Троксактив повышает венозный тонус: с помощью венозной окклюзионной плетизмографии было показано уменьшение времени венозного опорожнения. У пациентов с признаками выраженного нарушения микроциркуляции, после терапии гесперидин+диосмин отмечается (статистически достоверное, по сравнению с плацебо) повышение капиллярной резистентности, оцененной методом ангиостереометрии. Доказана терапевтическая эффективность гесперидин+диосмин при лечении хронических заболеваний вен нижних конечностей, а также при лечении геморроя.
                  <br><br><strong>Фармакокинетика</strong> <br><br>Основное выведение препарата происходит с калом. С мочой в среднем выводится около 14% принятого количества препарата. Период полувыведения составляет 11 часов. Препарат подвергается активному метаболизму, что подтверждается присутствием фенольных кислот в моче.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Показания к применению</h5>
                  <div class="accordion-btn"></div> 
                </div>
                <div class="instruction__desc">
                  Троксактив показан для терапии симптомов хронических заболеваний вен (устранения и облегчения симптомов). <br><br>Терапия симптомов венозно-лимфатической недостаточности:
                  <ul>
                    <li>судороги нижних конечностей;</li>
                    <li>ощущение тяжести и распирания в ногах;</li>
                    <li>«усталость» ног.</li>
                  </ul>
                  <p>Терапия проявлений венозно-лимфатической недостаточности:</p>
                  <ul>
                    <li>отеки нижних конечностей;</li>
                    <li>трофические изменения кожи и подкожной клетчатки;</li>
                    <li>венозные трофические язвы.</li>
                  </ul>
                  <p>Симптоматическая терапия острого и хронического геморроя.</p>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Применение в период беременности и грудного вскармливания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  <strong>Беременность</strong><br><br>Данные о применении очищенной микронизированной флавоноидной фракции у беременных женщин отсутствуют или ограничены.<br><br>Исследования на животных не выявили репродуктивной токсичности.<br><br>В качестве предупредительной меры предпочтительно не применять препарат Троксактив во время беременности.<br><br>
                  <strong>Грудное вскармливание</strong><br><br>Неизвестно, проникает ли очищенная микронизированная флавоноидная фракция (метаболиты) в грудное молоко человека.<br><br>Не исключен риск для новорожденных и детей грудного возраста. Необходимо принять решение либо о прекращении грудного вскармливания, либо об отмене терапии препаратом Троксактив, принимая во внимание пользу грудного вскармливания для ребенка и пользу терапии для женщины.<br><br>Влияние на репродуктивную функцию: исследования репродуктивной токсичности не показали влияния на репродуктивную функцию у крыс обоего пола.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Организация, принимающая претензии потребителей</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  ООО «Тева», 115054, Москва, ул. Валовая, 35, <br>тел.: +7 (495) 644 22 34, факс: +7 (495) 644 22 35 <br><a href="mailto:info@teva.ru">info@teva.ru</a>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Способ применения и дозы</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Дозировка 500 мг<br><br>
                  Внутрь.<br><br>
                  Рекомендуемая доза при венозно-лимфатической недостаточности — 2 таблетки в сутки (за один или два приема): утром, днем и/или вечером, во время приема пищи. Таблетки следует проглатывать целиком, запивая водой. Продолжительность курса лечения может составлять несколько месяцев (вплоть до 12 месяцев). В случае повторного возникновения симптомов, по рекомендации врача, курс лечения может быть повторен.<br><br>
                  Рекомендуемая доза при остром геморрое — 6 таблеток в сутки: по 3 таблетки утром и по 3 таблетки вечером в течение 4 дней, затем по 4 таблетки в сутки: по 2 таблетки утром и по 2 таблетки вечером в течение последующих 3 дней.<br><br>
                  Рекомендуемая доза при хроническом геморрое — 2 таблетки в сутки с приемом пищи.
                  <br><br>Дозировка 1000 мг<br><br>Внутрь.<br><br>Рекомендуемая доза при венозно-лимфатической недостаточности — 1 таблетка в сутки предпочтительно утром, во время приема пищи. Таблетки следует проглатывать целиком, запивая водой. Риска на таблетке предназначена исключительно для деления с целью облегчения проглатывания.<br><br>Продолжительность курса лечения может составлять несколько месяцев (вплоть до 12 месяцев). В случае повторного возникновения симптомов, по рекомендации врача, курс лечения может быть повторен.<br><br>Рекомендуемая доза при остром геморрое — 3 таблетки в сутки: по 1 таблетке утром, днем и вечером в течение 4 дней, затем по 2 таблетки в сутки: по 1 таблетке утром и вечером в течение последующих 3 дней. Рекомендуемая доза при хроническом геморрое — 1 таблетка в сутки с приемом пищи.
                </div>
              </div>
            </div>
            <!-- 2 column   -->
            <div class="instruction__list">
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Побочное действие</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Побочные эффекты, наблюдаемые в ходе клинических исследований гесперидин+диосмин, были лёгкой степени тяжести. Преимущественно отмечались нарушения со стороны желудочно-кишечного тракта (диарея, диспепсия, тошнота, рвота).<br><br>
                    
                  Во время приема гесперидин+диосмин сообщалось о следующих побочных эффектах в виде следующей градации:<br>
                  очень часто (>1/10);<br>
                  часто (>1/100, <1/10);<br>
                  нечасто (>1/1000, <1/100);<br>
                  редко (>1/10000, <1/1000);<br>
                  крайне редко (<1/10000),<br>
                  неуточненной частоты (частота не может быть подсчитана по доступным данным).<br><br>
                  
                  Нарушения со стороны нервной системы:<br>
                  Редко: головокружение, головная боль, общее недомогание.<br><br>
                  
                  Желудочно-кишечные нарушения:<br>
                  Часто: диарея, диспепсия, тошнота, рвота.<br>
                  Нечасто: колит.<br>
                  Неуточненной частоты: боль в животе.<br><br>
                  
                  Нарушения со стороны кожи и подкожных тканей:<br>
                  Редко: кожная сыпь, кожный зуд, крапивница.<br>
                  Неуточненной частоты: изолированный отек лица, губ, век. В исключительных случаях ангионевротический отек.<br><br>
                  
                  Информируйте врача о появлении у вас любых, в том числе не упомянутых в данной инструкции нежелательных реакций и ощущений, а также об изменении лабораторных показателей на фоне терапии.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Передозировка</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  <strong>Симптомы</strong><br>Данные о случаях передозировки препарата Троксактив ограничены. Наиболее частыми нежелательными реакциями в случаях передозировки были желудочно-кишечные нарушения (диарея, тошнота, боль в животе) и кожные реакции (зуд, сыпь).<br><br>
                  <strong>Лечение</strong><br>Помощь при передозировке должна заключаться в устранении клинических симптомов. При передозировке препарата необходимо немедленно обратиться к врачу.<br>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Особые указания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  <ul>
                    <li>Перед тем как начать принимать препарат Троксактив, рекомендуется проконсультироваться с врачом.</li>
                    <li>При лечении геморроя назначение препарата Троксактив не заменяет специфического лечения других заболеваний прямой кишки и анального канала. При самостоятельном применении препарата не превышайте максимальные сроки и рекомендованные дозы, указанные в разделе «Способ применения и дозы». В том случае, если симптомы геморроя сохраняются после рекомендуемого курса терапии, следует пройти осмотр у проктолога, который подберет дальнейшую терапию.</li>
                    <li>При наличии нарушений венозного кровообращения максимальный эффект лечения обеспечивается сочетанием терапии с дополнительными лечебно-профилактическими мероприятиями/здоровым (сбалансированным) образом жизни: желательно избегать долгого пребывания на солнце, длительного пребывания на ногах, а также, рекомендуется снижение избыточной массы тела. Пешие прогулки и, в некоторых случаях, ношение специальных чулок способствует улучшению циркуляции крови.</li>
                  </ul>
                  <br><br>Незамедлительно обратитесь к врачу, если в процессе лечения ваше состояние ухудшилось или улучшения не наступило.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Форма выпуска</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Таблетки, покрытые пленочной оболочкой, 500 мг, 1000 мг.<br><br>По 10 таблеток в блистер из ПВХ и алюминиевой фольги.<br><br>Дозировка 500 мг: По 3, 6, 9 или 12 блистеров вместе с инструкцией по применению помещают в картонную пачку с контролем первого вскрытия.<br><br>Дозировка 1000 мг: По 3, 6 или 9 блистеров вместе с инструкцией по применению помещают в картонную пачку с контролем первого вскрытия.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Условия хранения</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Хранить при температуре не выше 25 ºС.<br>Хранить в недоступном для детей месте!
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Срок годности</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  2 года.<br>Не применять по истечении срока годности.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Условия отпуска</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Отпускают без рецепта
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Производитель</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Тева Оперейшнс Поланд Сп. з о.о.,<br>ул. Могильска 80, 31-546 Краков, Польша.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Противопоказания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Повышенная чувствительность к активным компонентам или к вспомогательным веществам, входящим в состав препарата. <br><br>Беременность и период грудного вскармливания (опыт применения ограничен или отсутствует). <br><br>Детский возраст до 18 лет (опыт применения отсутствует).
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Влияние на способность к управлению транспортными средствами и механизмами</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Клинических исследований по изучению влияния лекарственного препарата Троксактив на способность управлять автомобилем и выполнять работы, требующие высокой скорости психических и физических реакций, не проводилось. Однако на основании доступных данных по безопасности, можно сделать вывод, что препарат Троксактив не влияет (не оказывает значимого влияния) на эти процессы.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Взаимодействие с другими лекарственными средствами</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Клинических исследований по изучению взаимодействий лекарственного препарата Троксактив с другими лекарственными средствами не проводилось. До настоящего времени не сообщалось о выявленных случаях лекарственного взаимодействия.
                </div>
              </div>
            </div>
          </div>

          <div class="faq__download">
            <a href="/pdf/instruction_troxactive-v2.pdf" download>
              <Button label="Скачать PDF" rounded/>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="sources">
      <div class="sources__wrapper container">
        <p>*Симптомы хронических заболеваний вен
          <br>** При симптомах хронической венозной недостаточности 
          <br>1. Инструкция по медицинскому применению лекарственного препарата Троксактив ЛП-№ (000726)-(РГ-RU)
          <br>2. Наиболее рекомендуемое врачами МНН для для лечения ХЗВ (Мониторинг назначений ЛП врачами PrIndex (Приндекс), 4кв 2024)
          <br>3. ГРЛС, Дата доступа 21.04.2025
          <br>4. Garner RC, et al. J Pharm Sci. 2002;91(1):32–40 // Гарнер РС и др. Журнал Фармацевтических Наук. 2002;91(1):32–40
          <br>5. По сравнению с Троксактивом 30шт. Процент экономии определен по отпускным ценам ООО «Тева» на 1 таблетку (Апрель 2025)
          <br>6. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU) https://storage.brandquad.ru/accounts-media/TEVA/DAM/origin/0f2faedc-c44e-11ef-a2ec-061441bd84b0.pdf
          <br>7. Розничная цена Троксевазин® гель 2% 40г - 363р (IQVIA, февраль 2025)
          <br>8. Троксевазин® используется в России с 1981 г. РУ Б-8-242 №2654
          <br>9. Регламент применения МОФФ при ХЗВ. Богачев В.Ю., Болдин Б.В., и др. Современные показания к флеботропной терапии и её продолжительность. Амбулаторная хирургия: 2021;18(1):13-23
          <br>10. Розничная цена Троксактива 30 таб – 1375 руб (IQVIA, февраль 2025)
        </p>
      </div>
    </section>

    <ModalMoff v-model:visible="visible"/>
    <ModalUteka v-model:visible="visibleUteka" :url-products="productsForUteka" :troxactive="true" />
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
        pagiText = '30 т'
        break;
      case 1:
        pagiText = '60 т'
        break;
      case 2:
        pagiText = '90 т'
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

const visibleUteka = ref(false);
let productsForUteka = null;

const openUteka = (i) => {
  i && typeof i === 'string' ? 
    productsForUteka = i : 
    productsForUteka = 'https://widget.uteka.ru/widgets/full/?productIds=376787&productIds=376941&productIds=376944';

  visibleUteka.value = true;
}
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