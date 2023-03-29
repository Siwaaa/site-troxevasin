<template>
  <main>
    <header class="header-product">
      <div class="header-product__wrapper container">
        <div class="header-product__content">
          <h1 class="title-h1"><strong>Троксевазин<sup>®</sup> 2 % — гель №1</strong><sup>*,1</sup> для лечения симптомов варикоза<sup>**,3</sup></h1>
          <p class="header-product__footnote"><sup>*</sup>по продажам в деньгах (2008 – 2022)<sup>1</sup>
          </p>
          <p>Проверенный временем<sup>2</sup> препарат против тяжести и боли в ногах при варикозе<sup>**</sup>. Способствует укреплению вен и повышению их тонуса<sup>3</sup>.
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
            :initialSlide="1"
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
                <img src="/img/product/test.png" srcset="/img/product/test@2x.png 2x" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-gel-2.png" srcset="/img/product/p-gel-2@2x.png 2x" alt="" loading="lazy" />
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
          <div class="symptoms__head">
            <h2 class="title-h1">Гель Троксевазин<sup>®</sup> 2% — помощь нескольким поколениям<sup>2</sup> в лечении симптомов варикоза<sup>**,3</sup>:</h2>
          </div>
          <div class="symptoms__img">
            <img src="/img/product/symptoms-gel.png" srcset="/img/product/symptoms-gel@2x.png 2x" alt="" loading="lazy"/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <img src="/img/product/symptom.png" srcset="/img/product/symptom@2x.png 2x" alt="" loading="lazy"/>
              <p>Тяжесть <br>и боль в ногах </p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-2.png" srcset="/img/product/symptom-2@2x.png 2x" alt="" loading="lazy"/>
              <p>Синяки<br>(гематомы)</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-3.png" srcset="/img/product/symptom-3@2x.png 2x" alt="" loading="lazy"/>
              <p>Боли и отеки <br>в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-4.png" srcset="/img/product/symptom-4@2x.png 2x" alt="" loading="lazy"/>
              <p>Поверхностный тромбофлебит</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-5.png" srcset="/img/product/symptom-5@2x.png 2x" alt="" loading="lazy"/>
              <p>Варикозное расширение вен</p>
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

    <section class="secret">
      <div class="secret__wrapper container">
        <div class="secret__content">
          <h2 class="title-h1">Секрет популярности Троксевазин<sup>®</sup><br>Гель 2 % прост</h2>
          <ul class="secret__list">
            <li class="secret__item">
              <img src="/img/product/secret-1.png" srcset="/img/product/secret-1@2x.png 2x" alt="" loading="lazy"/>
              <p>Действующее вещество препарата — Троксерутин<sup>3</sup></p>
            </li>
            <li class="secret__item">
              <img src="/img/product/secret-2.png" srcset="/img/product/secret-2@2x.png 2x" alt="" loading="lazy"/>
              <p>Троксерутин уменьшает воспаление и уменьшает ломкость капилляров<sup>3</sup> </p>
            </li>
            <li class="secret__item">
              <img src="/img/product/secret-3.png" srcset="/img/product/secret-3@2x.png 2x" alt="" loading="lazy"/>
              <p>Оказывает противоотечное и венотонизирующее действие<sup>3</sup></p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="economy">
      <div class="economy__wrapper container">
        <div class="economy__content">
          <div class="economy__left">
            <h2 class="title-h1">Сэкономьте<sup>4</sup> до 25% при покупке большой упаковки Троксевазин<sup>®</sup> Гель 2% 100 г. </h2>
            <Button @click="openUteka" label="Купить" arrowRight />
          </div>
          <div class="economy__right">
            <img src="/img/product/economy-25.png" alt="" loading="lazy"/>
            <Button @click="openUteka" label="Купить" arrowRight />
          </div>
        </div>
      </div>
    </section>

    <section class="tutorial">
      <div class="tutorial__wrapper container">
        <div class="tutorial__content">
          <div class="tutorial__head">
            <h2 class="title-h1">Как использовать?<sup>3</sup></h2>
            <p>Полная информация в инструкции по применению<sup>3</sup></p>
          </div>
          <ul class="steps">
            <li class="steps__item">
              <div class="steps__img">
                <img src="/img/product/step-1.svg" alt="" loading="lazy"/>
              </div>
              <p>Утром и вечером</p>
            </li>
            <li class="steps__item">
              <div class="steps__img">
                <img src="/img/product/step-2.svg" alt="" loading="lazy"/>
              </div>
              <p>Нанести полоску геля длиной 1-3 см</p>
            </li>
            <li class="steps__item">
              <div class="steps__img">
                <img src="/img/product/step-3.svg" alt="" loading="lazy"/>
              </div>
              <p>Слегка втереть до полного впитывания</p>
            </li>
            <li class="steps__item">
              <div class="steps__img">
                <img src="/img/product/step-4.svg" alt="" loading="lazy"/>
              </div>
              <p>Можно наносить под окклюзионную повязку</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="maternity">
      <div class="maternity__wrapper container">
        <div class="maternity__content">
          <div class="maternity__text">
            <h2 class="title-h1">Как применять при беременности<sup>3</sup></h2>
            <img src="/img/product/maternity.png" alt="Беременность" loading="lazy"/>
            <p>Препарат может быть использован в II и III триместрах беременности, если ожидаемая польза для мамы выше, чем потенциальный риск для ребенка.<br><br>Перед применением препарата беременным обязательно нужно проконсультироваться с врачом.</p>
          </div>
          <div class="maternity__img">
            <img src="/img/product/maternity.png" alt="Беременность" loading="lazy"/>
          </div>
        </div>
      </div>
    </section>

    <section class="others">
      <div class="others__wrapper container">
        <div class="others__content">
          <h2 class="title-h1">Другие продукты линейки <br>Троксевазин<sup>®</sup></h2>
          <div class="others__list">
            <div class="others__item">
              <img src="/img/product/other-gel-1-40.png" alt="" loading="lazy"/>
              <p><strong class="others-violet">Инновация в линейке Троксевазин<sup>®</sup> —</strong>Троксевазин<sup>®</sup> Нео с усиленной<sup>5</sup> трехкомпонентной формулой<sup>6</sup>
              </p>
              <NuxtLink to="/neo">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
            <div class="others__item">
              <img src="/img/product/other-troxactive.png" alt="" loading="lazy"/>
              <p><strong class="others-orange">Для лечения симптомов варикоза<sup>**</sup> изнутри</strong> используйте таблетки Троксактив<sup>7</sup>
              </p>
              <NuxtLink to="/troxactive">
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
                  <p><strong class="others-violet">Инновация в линейке Троксевазин<sup>®</sup> —</strong>Троксевазин<sup>®</sup> Нео с усиленной<sup>5</sup> трехкомпонентной формулой<sup>6</sup>
                  </p>
                  <NuxtLink to="/neo">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="others__item">
                  <img src="/img/product/other-troxactive.png" alt="" loading="lazy"/>
                  <p><strong class="others-orange">Для лечения симптомов варикоза<sup>**</sup> изнутри</strong> используйте таблетки Троксактив<sup>7</sup>
                  </p>
                  <NuxtLink to="/troxactive">
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
          <h2 class="title-h1">Инструкция по медицинскому применению препарата Троксевазин<sup>®</sup> гель 2 %</h2>
          <div class="instruction">
            <div class="instruction__list">
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Регистрационный номер</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">П N012713/02</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Торговое наименование препарата</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Троксевазин®</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Международное непатентованное наименование</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Троксерутин</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Лекарственная форма</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Гель для наружного применения</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Состав</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">100 г геля содержат: Действующее вещество: троксерутин 2,0 г; Вспомогательные вещества: карбомер 0,60 г, троламин (триэтаноламин) 0,70 г, динатрия эдетата дигидрат 0,05 г, бензалкония хлорид 0,10 г, вода очищенная 96,55 г.</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Описание</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Гель от желтого до светло-коричневого цвета</div>
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
                <div class="instruction__desc">С05СА04</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Фармакологическое действие</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc"><strong>Фармакодинимика</strong><br>Троксевазин® представляет собой флавоноид (производное рутина). Обладает Р-витаминной активностью; оказывает венотонизирующее, венопротекторное, противоотечное, противовоспалительное, противосвертывающее и антиоксидантное действие.<br><br>Уменьшает проницаемость и ломкость капилляров, повышает их тонус.<br><br>Увеличивает плотность сосудистой стенки, уменьшает экссудацию жидкой части плазмы и диапедез клеток крови.<br><br>Уменьшает воспаление в сосудистой стенке, ограничивая прилипание тромбоцитов к ее поверхности.<br><br><strong>Фармакокинетика</strong><br>При нанесении геля на область поражения, действующее вещество быстро проникает через эпидермис, через 30 минут обнаруживается в дерме, а через 2-5 часов в подкожной жировой клетчатке.</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Показания к применению</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  <ul>
                    <li>Варикозное расширение вен ног;</li>
                    <li>Хроническая венозная недостаточность с такими проявлениями, как: отеки, боль, ощущение тяжести в ногах;</li>
                    <li>Поверхностный тромбофлебит, перифлебит, флеботромбоз;</li>
                    <li>Посттромботический синдром;</li>
                    <li>Посттромботический отек, гематомы;</li>
                    <li>Профилактика осложнений после операций на венах.</li>
                  </ul>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Противопоказания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  <ul>
                    <li>Повышенная чувствительность к препарату;</li>
                    <li>Нарушение целостности кожных покровов;</li>
                    <li>Детский возраст до 18 лет (опыт клинического применения недостаточен).</li>
                  </ul>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>С осторожностью</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Хроническая почечная недостаточность (при длительном применении).<br><br>
                  Если у Вас есть одно из перечисленных выше заболеваний, перед применением препарата необходимо проконсультироваться с врачом.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Применение при беременности и в период грудного вскармливания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  <strong>Беременность</strong><br>
                  В I триместре беременности применение препарата противопоказано в связи с отсутствием опыта клинического применения. Во II и III триместрах беременности применение препарата возможно в случае, если ожидаемая польза для матери превышает потенциальный риск для плода. Перед применением препарата во II и III триместрах беременности необходимо проконсультироваться с врачом.<br><br>
                  <strong>Период грудного вскармливания</strong><br>
                  Данные о проникновении троксерутина в грудное молоко отсутствуют. Препарат не следует применять в период грудного вскармливания.
                </div>
              </div>
            <!-- 2 column   -->
            </div>
            <div class="instruction__list">
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Способ применения и дозы</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Наружно!<br><br>
                  Если врачом не рекомендовано иначе, то полоску геля длиной 1-3 см (в зависимости от площади пораженной поверхности) наносят тонким слоем на кожу на область поражения 2 раза в сутки утром и вечером, мягко втирая до полного впитывания. При необходимости гель можно наносить под окклюзионную повязку.<br><br>
                  Рекомендуется сочетать с приемом капсул Троксевазин® для усиления воздействия.<br><br>
                  Если через 6-7 дней лечения улучшения не наступает или симптомы усугубляются, или появляются новые симптомы, необходимо проконсультироваться с врачом.<br><br>
                  Применяйте препарат только согласно тем показаниям, тому способу применения и в тех дозах, которые указаны в инструкции.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Побочное действие</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Нарушения со стороны иммунной системы: редко — крапивница, экзема, дерматит.<br><br>
                  Если у Вас отмечаются побочные эффекты, указанные в инструкции, или они усугубляются, или Вы заметили любые другие побочные эффекты, не указанные в инструкции, сообщите об этом врачу.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Передозировка</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Случаи передозировки при местном применении троксерутина не описаны. При случайном проглатывании большого количества геля необходимо провести общие меры выведения препарата <br>из организма (рвотные средства) и обратиться к врачу. <br><br>При наличии показаний проводится перитонеальный диализ.<br> При передозировке препарата необходимо обратиться к врачу.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Взаимодействие с другими лекарственными средствами</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Данных по взаимодействию троксерутина с другими лекарственными средствами нет.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Особые указания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Гель наносят только на неповрежденную поверхность.<br><br>
                  Избегать попадания на открытые раны, глаза и слизистые оболочки! При состояниях, характеризующихся повышенной проницаемостью сосудов (в т.ч. при скарлатине, гриппе, кори, аллергических реакциях), гель используют в сочетании с аскорбиновой кислотой для усиления ее эффекта.<br><br>
                  Нельзя превышать максимальные сроки и рекомендованные дозы при самостоятельном применении препарата.<br><br>
                  В случае отсутствия уменьшения или при утяжелении симптомов заболевания необходимо обратиться к врачу.<br><br>
                  Влияние на способность управления транспортными средствами, механизмами Троксевазин® гель не оказывает влияния на способность управлять автотранспортным средством и работать с движущимися.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Влияние на способность к управлению транспортными средствами и механизмами</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Троксевазин® гель не оказывает влияния на способность управлять автотранспортным средством и работать с движущимися механизмами.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Форма выпуска</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Гель для наружного применения 2%. По 40 г в алюминиевую тубу с внутренним лаковым покрытием с алюминиевой мембраной или по 20 г, 40 г или 100 г в ламинатную (пластиковую) тубу с алюминиевой мембраной. Каждую тубу вместе с инструкцией по применению помещают в картонную пачку, на которую дополнительно могут быть нанесены защитные наклейки.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Условия хранения</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Хранить при температуре не выше 25 °С. Не замораживать! <br>Хранить в недоступном для детей месте!
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Срок годности</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Для алюминиевой тубы — 5 лет.<br> Для ламинатной (пластиковой) тубы — 5 лет. <br>Не применять по истечении срока годности.
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
                  <h5>Организация, принимающая претензии потребителей</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  ООО «Тева», 115054, Москва, ул. Валовая, 35, <br>тел.: +7 (495) 644 22 34, факс: +7 (495) 644 22 35 <br>Адрес в интернете: www.teva.ru
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Производитель</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Балканфарма-Троян АД, <br>Болгария, г. Троян, 5600, ул. Крайречна 1.
                </div>
              </div>
            </div>
          </div>

          <div class="faq__download">
            <a href="/pdf/instruction_gel.pdf" download>
              <Button label="Скачать PDF" rounded/>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="read-more">
      <div class="read-more__wrapper container">
        <div class="read-more__content">
          <h2 class="title-h1">Узнайте больше о варикозе</h2>
          <div class="articles">
            <div class="articles__content">
              <div class="articles__item"> 
                <img src="/img/product/article.jpg" alt="" loading="lazy"/>
                <h3>Симптомы варикоза</h3>
                <p>Посмотрим на статистику: по данным исследователей, большая часть пациентов до обращения к специалисту по проблемам с венами, флебологу, имела опыт...</p>
              </div>
              <div class="articles__item"> 
                <img src="/img/product/article.jpg" alt="" loading="lazy"/>
                <h3>Анализы при варикозе</h3>
                <p>Посмотрим на статистику: по данным исследователей, большая часть пациентов до обращения к специалисту по проблемам с венами, флебологу, имела опыт...</p>
              </div>
              <div class="articles__item"> 
                <img src="/img/product/article.jpg" alt="" loading="lazy"/>
                <h3>Кратко о варикозе</h3>
                <p>Посмотрим на статистику: по данным исследователей, большая часть пациентов до обращения к специалисту по проблемам с венами, флебологу, имела опыт...</p>
              </div>
            </div>
            <div class="articles__btn">
              <Button label="Смотреть еще" rounded/>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="sources">
      <div class="sources__wrapper container">
        <p>**При хронической венозной недостаточности
          <br>1. В категории наружных венотоников, по продажам в деньгах 2018-2022, IQVIA
          <br>2. Троксевазин® используется в России с 1981 г. РУ Б-8-242 №2654
          <br>3. Инструкция по медицинскому применению лекарственного препарата Троксевазин® П N012713/02
          <br>4. По сравнению с упаковкой Троксевазин гель 2% 40 г. Процент экономии определен по отпускным ценам ООО
          «Тева» для упаковок 40г и 100г при расчете на 1г (Март 2023)
          <br>5. По сравнению с Троксевазин® гелем 2%
          <br>6. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU)
          https://portal.eaeunion.org/sites/commonprocesses/ru-ru/Pages/CardView.aspx?documentId=6206058bfb44f12d3bb0566b&amp;codeId=P.MM.01.
          Дата обращения: 28.02.2023.
          <br>7. Инструкция по медицинскому применению лекарственного препарата Троксактив ЛП-№ (000726)-(РГ-RU)
        </p>
      </div>
    </section>
    <ModalUteka v-model:visible="visibleUteka" :url-products="productsForUteka" />
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

useHead({
  title: 'Троксевазин Гель',
})

const onSwiper = (swiper) => {};
const onSwiperHeader = (swiper) => {};

const pagination = ref({
  clickable: true,
  renderBullet: function (index, className) {
    let pagiText = null;

    switch (index) {
      case 0:
        pagiText = '40 г'
        break;
      case 1:
        pagiText = '100 г'
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

const visibleUteka = ref(false);
const productsForUteka = 'https://widget.uteka.ru/widgets/full/?productIds=365040&productIds=33271';

const openUteka = () => {
  visibleUteka.value = true;
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