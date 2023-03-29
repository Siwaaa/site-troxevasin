<template>
  <main>
    <header class="header-product">
      <div class="header-product__wrapper container">
        <div class="header-product__content">
          <h1 class="title-h1"><strong>Троксактив таблетки </strong>направленно действуют на вены изнутри при варикозе<sup>*,1</sup></h1>
          <p>Самое назначаемое действующее вещество (МНН) для лечения симптомов хронических заболеваний вен<sup>2</sup>
          </p>
          <div class="header-product__menu">
            <Button @click="openUteka" label="Купить" arrowRight />
            <NuxtLink to="#faq">
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
                <img src="/img/product/p-trox-1.png" srcset="/img/product/p-trox-1@2x.png 2x" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-trox-2.png" srcset="/img/product/p-trox-2@2x.png 2x" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-trox-3.png" srcset="/img/product/p-trox-3@2x.png 2x" alt="" loading="lazy" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="header-product__menu_mobile">
          <Button @click="openUteka" label="Купить" arrowRight />
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
            <img src="/img/product/symptoms-trox.png" srcset="/img/product/symptoms-trox@2x.png 2x" alt="" loading="lazy"/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <img src="/img/product/symptom-3.png" srcset="/img/product/symptom-3@2x.png 2x" alt="" loading="lazy"/>
              <p>Усталость <br> и боль <br> в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-6.png" srcset="/img/product/symptom-6@2x.png 2x" alt="" loading="lazy"/>
              <p>Отеки <br>и судороги в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-8.png" srcset="/img/product/symptom-8@2x.png 2x" alt="" loading="lazy"/>
              <p>Венозные трофические <br>язвы</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-11.png" srcset="/img/product/symptom-11@2x.png 2x" alt="" loading="lazy"/>
              <p>Острый и хронический геморрой </p>
            </li>
          </ul>
          <div class="symptoms__menu">
            <Button @click="openUteka" label="Купить" arrowRight />
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
            <h2 class="title-h1"><i>Курс лечения</i> хронических заболеваний вен может длиться <i>от 2 до 12 месяцев</i><sup>9</sup></h2>
            <p>Таблетки Троксактив можно принимать до 12 месяцев<sup>1</sup></p>
          </div>
          <ul class="chronic__list">
            <li class="chronic__item">
              <img src="/img/product/chronic-1.png" srcset="/img/product/chronic-1@2x.png 2x" alt="" loading="lazy"/>
              <p>Одна таблетка в день<sup>**</sup></p>
            </li>
            <li class="chronic__item">
              <img src="/img/product/chronic-2.png" srcset="/img/product/chronic-2@2x.png 2x" alt="" loading="lazy"/>
              <p>Доступная цена<sup>10</sup></p>
            </li>
            <li class="chronic__item">
              <img src="/img/product/chronic-3.png" srcset="/img/product/chronic-3@2x.png 2x" alt="" loading="lazy"/>
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
          <h2 class="title-h1 text-al-center">Экономьте при покупке <br> больших упаковок 25%<sup>5</sup></h2>
        </div>
        <div class="economy-two">
          <div class="economy-two__item">
            <img src="/img/product/economy-two-1.jpg" alt="" loading="lazy"/>
            <p><span class="color-orange">Таблетки Троксактив 90 шт.</span> <br>3 месяца приема<sup>**,1</sup></p>
            <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productId=376941')" label="Купить" arrowRight />
          </div>
          <div class="economy-two__item">
            <img src="/img/product/economy-two-2.jpg" alt="" loading="lazy"/>
            <p><span class="color-orange">Таблетки Троксактив 60 шт.</span> <br>2 месяца приема<sup>**,1</sup></p>
            <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productId=376944')" label="Купить" arrowRight />
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
                <img src="/img/product/economy-two-1.png" alt="" loading="lazy"/>
                <p><span class="color-orange">Таблетки Троксактив 90 шт.</span> <br>3 месяца приема</p>
                <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productId=376941')" label="Купить" arrowRight />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="economy-two__item">
                <img src="/img/product/economy-two-2.png" alt="" loading="lazy"/>
                <p><span class="color-orange">Таблетки Троксактив 60 шт.</span> <br>3 месяца приема</p>
                <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productId=376944')" label="Купить" arrowRight />
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
              <img src="/img/product/other-gel-1-40.png" alt="" loading="lazy"/>
              <p>
                <strong class="others-violet">Узнайте больше <br> о Троксевазин<sup>®</sup> Нео —</strong><br> гель с усиленной<sup>***</sup> трехкомпонентной формулой<sup>6</sup>
              </p>
              <NuxtLink to="/neo">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
            <div class="others__item swiper-gel-1">
              <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
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
                  <img src="/img/product/other-gel-1-40.png" alt="" loading="lazy"/>
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
                  <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
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
                  <h5>Лекарственная форма</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Таблетки покрытые пленочной оболочкой</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Состав</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">1 таблетка, покрытая пленочной оболочкой, содержит: Действующее вещество: Гесперидин + Диосмин (Очищенная микронизированная флавоноидная фракция [90 % диосмин (900 мг), 10 % флавоноиды в пересчете на гесперидин (100 мг)]) 1000,0 мг. Вспомогательные вещества: целлюлоза микрокристаллическая (Vivapur 101) 157,0 мг, повидон (Пласдон К-25) 62,0 мг, карбоксиметилкрахмал натрия тип А (Explotab) 26,8 мг, кремния диоксид коллоидный (кремния диоксид коллоидный безводный) (Aerosil 200 Pharma) 6,2 мг, магния стеарат (Ligamed MF-2-V) 8,0 мг. Пленочная оболочка Опадрай II 85F240141 розовый: поливиниловый спирт —частично гидролизованный (Е1203) 15,12 мг, макрогол-3350 (Макрогол/ПЭГ 3350 (Е1521)) 7,64 мг, 2 титана диоксид (Е171) 8,61 мг, тальк (Е553B) 5,59 мг, краситель железа оксид желтый (Е172) 0,48 мг, краситель железа оксид красный (Е172) 0,36 мг</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Описание</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Дозировка 1000 мг <br><br>Продолговатые двояковыпуклые таблетки, покрытые пленочной оболочкой светлорозового цвета, с риской с обеих сторон.<br><br>На поперечном разрезе ядро от светло-желтого до желтого цвета неоднородной структуры.
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
                  <h5>Фармакологическое действие</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc"><strong>Фармакодинамика</strong>
                  <br><br>Препарат Троксактив представляет собой очищенную микронизированную флавоноидную фракцию, состоящую из диосмина и других флавоноидов в пересчете на гесперидин. Данная комбинация обладает венотонизирующим и ангиопротективным свойствами.</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Показания к применению</h5>
                  <div class="accordion-btn"></div> 
                </div>
                <div class="instruction__desc">
                  Троксактив показан для терапии симптомов хронических заболеваний вен (устранения и облегчения симптомов).
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Применение в период беременности и грудного вскармливания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  <strong>Беременность</strong><br><br>Данные о применении очищенной микронизированной флавоноидной фракции у беременных женщин отсутствуют или ограничены.<br><br>Исследования на животных не выявили репродуктивной токсичности.<br><br>В качестве предупредительной меры предпочтительно не применять препарат Троксактив во время беременности.<br><br>
                  <strong>Грудное вскармливание</strong><br><br>Неизвестно, проникает ли очищенная микронизированная флавоноидная фракция (метаболиты) в грудное молоко человека.<br><br>Не исключен риск для новорожденных и детей грудного возраста. Необходимо принять решение либо о прекращении грудного вскармливания, либо об отмене терапии препаратом Троксактив, принимая во внимание пользу грудного вскармливания для ребенка и пользу терапии для женщины.<br><br>Полная информация представлена в инструкции по медицинскому применению (см. ИМП)
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Организация, принимающая претензии потребителей</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  ООО «Тева», 115054, Москва, ул. Валовая, 35, <br>тел.: +7 (495) 644 22 34, факс: +7 (495) 644 22 35 <br>Адрес в интернете: www.teva.ru<br>Представитель фирмы Чернышева Т.В.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Способ применения и дозы</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Дозировка 1000 мг<br><br>Внутрь.<br><br>Рекомендуемая доза при венозно-лимфатической недостаточности — 1 таблетка в сутки предпочтительно утром, во время приема пищи. Таблетки следует проглатывать целиком, запивая водой. Риска на таблетке предназначена исключительно для деления с целью облегчения проглатывания.<br><br>Продолжительность курса лечения может составлять несколько месяцев (вплоть до 12 месяцев). В случае повторного возникновения симптомов, по рекомендации врача, курс лечения может быть повторен.<br><br>Рекомендуемая доза при остром геморрое — 3 таблетки в сутки: по 1 таблетке утром, днем и вечером в течение 4 дней, затем по 2 таблетки в сутки: по 1 таблетке утром и вечером в течение последующих 3 дней. Рекомендуемая доза при хроническом геморрое — 1 таблетка в сутки с приемом пищи.
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
                  Побочные эффекты, наблюдаемые в ходе клинических исследований, были лёгкой степени выраженности.<br><br>Частота побочных эффектов классифицирована в соответствии с рекомендациями Всемирной организации здравоохранения: очень часто (˃1/10); часто (˃1/100, &lt;1/10); нечасто (˃1/1000, &lt;1/100); редко (˃1/10000, &lt;1/1000); очень редко (включая единичные случаи) (&lt;1/10000), неуточненной частоты (частота не может быть подсчитана по доступным данным).<br><br>Нарушения со стороны желудочно-кишечного тракта: часто — тошнота, рвота, диарея, диспепсия; нечасто — колит; неуточненной частоты — боли в животе.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Передозировка</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Случаев передозировки не описано.<br><br>При передозировке препарата немедленно обратитесь за медицинской помощью.
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
                    <li>При обострении геморроя назначение препарата Троксактив не заменяет специфического лечения других анальных нарушений. Продолжительность лечения не должна превышать сроки, указанные в разделе «Способ применения и дозы». В том случае, если симптомы не исчезают после рекомендуемого курса терапии, следует пройти осмотр у проктолога, который подберет дальнейшую терапию.</li>
                    <li>При наличии нарушений венозного кровообращения максимальный эффект лечения обеспечивается сочетанием терапии со здоровым (сбалансированным) образом жизни: желательно избегать долгого пребывания на солнце, длительного пребывания на ногах, а также, рекомендуется снижение избыточной массы тела. Пешие прогулки и, в некоторых случаях, ношение специальных чулок способствует улучшению циркуляции крови.</li>
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
                  Таблетки, покрытые пленочной оболочкой 1000 мг.<br><br>По 10 таблеток в блистер из ПВХ и алюминиевой фольги.<br><br>По 3, 6 или 9 блистеров вместе с инструкцией по применению помещают в картонную пачку с контролем первого вскрытия.
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
                  Повышенная чувствительность к активным компонентам или к вспомогательным веществам, входящим в состав препарата.
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
            <a href="/pdf/instruction_troxactive.pdf" download>
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
          <br>2. Наиболее рекомендуемое врачами МНН для для лечения ХЗВ (Мониторинг назначений ЛП врачами PrIndex (Приндекс), 3кв 2022)
          <br>3. ГРЛС, Дата доступа 09.02.2023
          <br>4. Garner RC, et al. J Pharm Sci. 2002;91(1):32–40 // Гарнер РС и др. Журнал Фармацевтических Наук. 2002;91(1):32–40
          <br>5. По сравнению с Троксактивом 30шт. Процент экономии определен по отпускным ценам ООО «Тева» на 1 таблетку (Март 2023)
          <br>6. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU) https://portal.eaeunion.org/sites/commonprocesses/ru-ru/Pages/CardView.aspx?documentId=6206058bfb44f12d3bb0566b&codeId=P.MM.01
          <br>7. Розничная цена Троксевазин® гель 2% 40г - 360.4р (IQVIA, декабрь 2022)
          <br>8. Троксевазин® используется в России с 1981 г. РУ Б-8-242 №2654
          <br>9. Регламент применения МОФФ при ХЗВ. Богачев В.Ю., Болдин Б.В., и др. Современные показания к флеботропной терапии и её продолжительность. Амбулаторная хирургия: 2021;18(1):13-23
          <br>10. Розничная цена Троксактива 30 таб – 1197,66 руб (IQVIA, Декабрь 2022)
        </p>
      </div>
    </section>

    <ModalMoff v-model:visible="visible"/>
    <ModalUteka v-model:visible="visibleUteka" :url-products="productsForUteka" />
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