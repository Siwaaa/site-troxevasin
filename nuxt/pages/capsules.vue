<template>
  <main>
    <header class="header-product">
      <div class="header-product__wrapper container">
        <div class="header-product__content">
          <h1 class="title-h1"><strong>Троксевазин<sup>®</sup> капсулы — </strong>проверенное временем<sup>1</sup> средство</h1><br>
          <p>Воздействует на проявления хронической венозной недостаточности и геморроя изнутри<sup>2</sup>.
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
                <img src="/img/product/p-caps-1.png" srcset="/img/product/p-caps-1@2x.png 2x" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-caps-2.png" srcset="/img/product/p-caps-2@2x.png 2x" alt="" loading="lazy" />
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
            <h2 class="title-h1">Помогает бороться с симптомами при геморрое и варикозе<sup>*,2</sup></h2>
          </div>
          <div class="symptoms__img">
            <img src="/img/product/symptoms-caps.png" srcset="/img/product/symptoms-caps@2x.png 2x" alt="" loading="lazy"/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <img src="/img/product/symptom.png" srcset="/img/product/symptom@2x.png 2x" alt="" loading="lazy"/>
              <p>Хронической<br>венозной<br>недостаточности</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-8.png" srcset="/img/product/symptom-8@2x.png 2x" alt="" loading="lazy"/>
              <p>Трофических <br>язвах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-9.png" srcset="/img/product/symptom-9@2x.png 2x" alt="" loading="lazy"/>
              <p>После склеротерапии вен<sup>**</sup></p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-10.png" srcset="/img/product/symptom-10@2x.png 2x" alt="" loading="lazy"/>
              <p>Геморрое</p>
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
          <div class="secret__head head">
            <h2 class="title-h1">Капсулы Троксевазин<sup>®</sup></h2>
            <p>Действуют изнутри, способствуют укреплению сосудов <br>и улучшению микроциркуляции<sup>2</sup>
            </p>
          </div>
          <ul class="secret__list secret_purpure">
            <li class="secret__item">
              <img src="/img/product/secret-6.png" srcset="/img/product/secret-6@2x.png 2x" alt="" loading="lazy"/>
              <p>Производится <br>в Европе<sup>2</sup></p>
            </li>
            <li class="secret__item">
              <img src="/img/product/secret-7.png" srcset="/img/product/secret-7@2x.png 2x" alt="" loading="lazy"/>
              <p>Достигнутый эффект может сохраняться около 4 недель<sup>2</sup></p>
            </li>
            <li class="secret__item">
              <img src="/img/product/secret-8.png" srcset="/img/product/secret-8@2x.png 2x" alt="" loading="lazy"/>
              <p>Курс лечения в среднем – 3-4 недели<sup>2</sup></p>
            </li>
            <li class="secret__item">
              <img src="/img/product/secret-9.png" srcset="/img/product/secret-9@2x.png 2x" alt="" loading="lazy"/>
              <p>Обладает доступной ценой<sup>7</sup></p>
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
            <Button @click="openUteka" label="Купить" arrowRight />
          </div>
          <div class="economy__right">
            <img src="/img/product/economy-15.png" srcset="/img/product/economy-15@2x.png 2x" alt="" loading="lazy"/>
            <Button @click="openUteka" label="Купить" arrowRight />
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
                  <img src="/img/product/guide-1.svg" alt="" loading="lazy"/>
                  <p>1 капсула</p>
                </div>
                <div class="guide__item">
                  <img src="/img/product/guide-2.svg" alt="" loading="lazy"/>
                  <p>в зависимости от тяжести симптомов</p>
                </div>
              </div>
            </div>
            <div class="guide__block">
              <h4 class="guide__title">При повторном возникновении симптомов</h4>
              <div class="guide__wrap">
                <div class="guide__item">
                  <img src="/img/product/guide-1.svg" alt="" loading="lazy"/>
                  </div>
                <div class="guide__item">
                  <img src="/img/product/guide-3.svg" alt="" loading="lazy"/>
                </div>
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
            <img src="/img/product/maternity.png" alt="Беременность" loading="lazy"/>
            <p>Капсулы могут быть использованы в II и III триместрах беременности, если ожидаемая польза для мамы выше, чем потенциальный риск для ребенка. <br><br>Перед применением препарата беременным обязательно нужно проконсультироваться с врачом.
            </p>
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
          <h2 class="title-h1" style="max-width: 928px">Комплексный подход для воздействия на симптомы варикоза<sup>*</sup> не только изнутри, но и снаружи</h2>
          <div class="others__list">
            <div class="others__item swiper-gel-1"> 
              <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
              <p><strong class="others-violet">Узнайте больше о<br>Троксевазин<sup>®</sup> Гель 2 % —</strong><br>доступная цена<sup>4</sup>, проверенный временем гель<sup>5</sup>
              </p>
              <NuxtLink to="/gel">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
            <div class="others__item swiper-gel-1"> 
              <img src="/img/product/other-gel-neo.png" alt="" loading="lazy"/>
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
                  <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
                  <p><strong class="others-violet">Узнайте больше о<br>Троксевазин<sup>®</sup> Гель 2 % —</strong><br>доступная цена<sup>4</sup>, проверенный временем гель<sup>5</sup>
                  </p>
                  <NuxtLink to="/gel">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="others__item">
                  <img src="/img/product/other-gel-neo.png" alt="" loading="lazy"/>
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

    <section class="faq" id="faq">
      <div class="faq__wrapper container">
        <div class="faq__content">
          <h2 class="title-h1">Инструкция по медицинскому применению капсул Троксевазин<sup>®</sup></h2>
          <div class="instruction">
            <div class="instruction__list">
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Регистрационный номер</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">П N012713/01</div>
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
                <div class="instruction__desc">Капсулы</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Состав</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">1 капсула содержит: действующее вещество: троксерутин 300,0 мг; Вспомогательные вещества: лактозы моногидрат 47,0 мг, магния стеарат 3,0 мг. Оболочка капсулы: корпус — краситель хинолиновый желтый (E 104) 0,9%, краситель солнечный закат желтый (E 110) 0,039%, титана диоксид (E 171) 3%, желатин до 100%; крышечка — краситель хинолиновый желтый (E 104) 0,9%, краситель солнечный закат желтый (E 110) 0,039%, титана диоксид (E 171) 3%, желатин до 100%.</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Описание</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Твердые цилиндрические желатиновые капсулы № 1, корпус — желтый, крышечка — желтая.<br><br>Содержимое капсул: порошок от желтого до желто-зеленого цвета, допускается наличие конгломератов, которые разрушаются при легком надавливании стеклянной палочкой.
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
                <div class="instruction__desc">С05СА04</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Фармакологическое действие</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Троксевазин содержит не менее 95% троксерутина. Троксерутин избирательно накапливается в эндотелиальном слое сосудов, проникает глубоко в субэндотелиальный слой венозной стенки, создавая там более высокие концентрации по сравнению с окружающими тканями. Предотвращает вызванное окислительными реакциями повреждение клеточных мембран. Антиоксидантное действие проявляется в предотвращении и устранении окислительных свойств кислорода, подавлении окисления липидов и защите эндотелия сосудов от окислительного воздействия гидроксильных радикалов. Троксерутин уменьшает повышенную проницаемость капилляров и оказывает венотоническое действие. Цитопротективный эффект является результатом подавления активирования и адгезии нейтрофилов, снижения агрегации эритроцитов и повышении их устойчивости к деформации, уменьшении высвобождения медиаторов воспаления. <br><br>Троксерутин повышает венозно-артериальный рефлюкс и увеличивает время повторного наполнения вен, улучшает микроциркуляцию и микрососудистую перфузию.<br><br>Троксерутин уменьшает патологические изменения, связанные с венозной недостаточностью: отек, боль, улучшает трофику тканей.<br><br>Благодаря воздействию на проницаемость и резистентность стенок капилляров троксерутин способствует замедлению прогрессирования диабетической ретинопатии.<br><br>Влияние троксерутина на реологические свойства крови способствует предотвращению развития микротромбоза сосудов сетчатки.</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Фармакокинетика</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  <strong>Всасывание</strong><br>
                  После приема внутрь препарата с радиоактивной меткой абсорбция 14С-O-(β-гидроксиэтил)-рутозидов у человека составляет около 10–15%. Максимальная концентрация в плазме крови (Сmax) достигается в пределах 1–9 часов. В течение 120 часов концентрации остаются определяемыми, снижение концентрации носит биоэкспоненциальный характер.<br><br>
                  <strong>Распределение</strong><br>
                  Связь с белками плазмы крови составляет 27–29%, в наибольших количествах накапливается в эндотелии. Не проникает через гематоэнцефалический барьер. Проникает через плацентарный барьер незначительно, в минимальных количествах выводится с грудным молоком.<br><br>
                  <strong>Биотрансформация</strong><br>
                  Метаболизируется в основном посредством о-глюкуронирования в печени.<br><br>
                  <strong>Выведение</strong><br>
                  Выводится в основном через кишечник и в меньшей степени почками.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Показания к применению</h5>
                  <div class="accordion-btn"></div> 
                </div>
                <div class="instruction__desc">
                  <ul>
                    <li>Хроническая венозная недостаточность.</li>
                    <li>Посттромботический синдром.</li>
                    <li>Трофические нарушения при варикозной болезни и трофические язвы.</li>
                    <li>В качестве вспомогательного лечения после склеротерапии вен и удаления варикозных узлов.</li>
                    <li>Геморрой (боль, экссудация, зуд и кровотечение).</li>
                    <li>Профилактика осложнений после операций на венах.</li>
                    <li>В качестве вспомогательного лечения ретинопатии у пациентов с сахарным диабетом, артериальной гипертензией и атеросклерозом.</li>
                  </ul>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Применение в период беременности и грудного вскармливания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Применение препарата в течение I триместра беременности противопоказано. Возможность применения препарата во время II и III триместра беременности определяется врачом и возможно лишь в том случае, если предполагаемая польза для матери превышает потенциальный риск для плода.<br><br>В случае необходимости применения препарата во II и III триместрах беременности следует проконсультироваться с врачом.<br><br>В минимальных количествах выводится с грудным молоком. Применение препарата в период грудного вскармливания не изучено.
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
            <!-- 2 column   -->
            </div>
            <div class="instruction__list">
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Способ применения и дозы</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Внутрь, во время еды. Капсулы следует проглатывать целиком, запивая достаточным количеством воды.<br><br>При хронической венозной недостаточности и ее осложнениях, при симптоматическом лечении геморроя на начальном этапе лечения назначают по 1 капсуле (300 мг) 2–3 раза в сутки (600–900 мг) в зависимости от тяжести симптомов. Эффект обычно развивается в течение 2 недель. Лечение прекращают после исчезновения симптомов и отека.<br><br>В случае повторного возникновения симптомов лечение возобновляют в той же дозе или снижают дозу — 1 капсула 2 раза в сутки (600 мг).<br><br>Достигнутый эффект сохраняется на протяжении не менее 4 недель. Курс лечения составляет в среднем 3–4 недели.<br><br>При диабетической ретинопатии препарат применяют в дозе 1800–3000 мг по 6–10 капсул (2 раза в сутки по 3–5 капсул (1800–3000 мг)). Курс лечения составляет в среднем 3–4 недели.<br><br>Необходимость более длительного лечения определяется после консультации с врачом и индивидуально.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Побочное действие</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Частота возникновения нежелательных реакций приведена в соответствии с классификацией ВОЗ: очень часто (≥1/10), часто (≥1/100, ˂1/10), нечасто (≥1/1000, ˂1/100), редко (≥1/10000, ˂1/1000), очень редко (˂1/10000), частота неизвестна (не может быть оценена на основании имеющихся данных).<br><br>Нарушения со стороны иммунной системы: очень редко — анафилактический шок, анафилактоидные реакции, реакции повышенной чувствительности (например, кожная сыпь).<br><br>Нарушения со стороны нервной системы: очень редко — головная боль, головокружение.<br><br>Нарушения со стороны сосудов: очень редко — гиперемия («приливы» крови), экхимозы.<br><br>Нарушения со стороны желудочно-кишечного тракта: редко — тошнота, боль и дискомфорт в желудке, диспепсия, метеоризм, диарея, эрозивно-язвенные поражения желудочно-кишечного тракта.<br><br>Нарушения со стороны кожи и подкожных тканей: редко — зуд, сыпь, крапивница.<br><br>Прочие: очень редко — чувство усталости.<br><br>В случае возникновения нежелательных реакций следует обратиться к врачу.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Передозировка</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  При передозировке возможно появление следующих симптомов: возбуждение, тошнота, головная боль, «приливы» крови к лицу.<br><br>Лечение: Необходимо промыть желудок, принять активированный уголь, при необходимости проводят симптоматическое лечение.<br><br>В случае передозировки препарата следует немедленно обратиться к врачу.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Особые указания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  При лечении поверхностного тромбофлебита или тромбоза глубоких вен применение препарата не исключает необходимость назначения средств противовоспалительной и антитромботической терапии.<br><br>Троксерутин неэффективен при отеках, вызванных сопутствующими заболеваниями печени, почек и сердца.<br><br>Если в период применения препарата выраженность симптомов заболевания не уменьшается или симптомы заболевания утяжеляются, следует немедленно обратиться к врачу. Опыт применения препарата у детей в возрасте младше 18 лет недостаточен. При самостоятельном применении препарата не следует превышать максимальные сроки и рекомендованные дозы.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Форма выпуска</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Капсулы 300 мг.<br><br>По 10 капсул в блистер из ПВХ/Ал фольги или ПВХ/ПВДХ/Ал фольги.<br><br>По 5 или 10 блистеров вместе с инструкцией по применению в картонной пачке.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Условия хранения</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  При температуре не выше 25 °C. <br>Хранить в недоступном для детей месте!
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Срок годности</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  5 лет.<br>Не применять по истечении срока годности.
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
                  Балканфарма-Троян АД, <br>бул. Апрельского восстания, 68, 7200, Разград, Болгария.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Противопоказания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  <ul>
                    <li>Повышенная чувствительность к рутозидам или к другим компонентам препарата.</li>
                    <li>Беременность (I триместр).</li>
                    <li>Язвенная болезнь желудка и двенадцатиперстной кишки.</li>
                    <li>Хронический гастрит в фазе обострения.</li>
                    <li>Детский возраст до 18 лет (опыт клинического применения недостаточен).</li>
                    <li>Период грудного вскармливания.</li>
                    <li>Редкая наследственная непереносимость галактозы, дефицит лактазы, синдром глюкозо-галактозной мальабсорбции.</li>
                    <li>С осторожностью</li>
                    <li>При почечной недостаточности (при длительном применении).</li>
                    <li>Беременность (II и III триместры).</li>
                  </ul>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Влияние на способность к управлению транспортными средствами и механизмами</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Прием препарата не оказывает влияния на двигательные и психические реакции, не препятствует управлению транспортными средствами и другими сложными механизмами.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Взаимодействие с другими лекарственными средствами</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Нет установленного лекарственного взаимодействия.
                </div>
              </div>
            </div>
          </div>

          <div class="faq__download"> 
            <a href="/pdf/instruction_capsules.pdf" download>
              <Button label="Скачать PDF" rounded />
            </a>
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

    <ModalUteka v-model:visible="visibleUteka" :url-products="productsForUteka" />
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

const visibleUteka = ref(false);
const productsForUteka = 'https://widget.uteka.ru/widgets/full/?productIds=33267&productIds=33264';

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