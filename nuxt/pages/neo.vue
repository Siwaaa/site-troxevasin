<template>
  <main>
    <header class="header-product">
      <div class="header-product__wrapper container">
        <div class="header-product__content">
          <h1 class="title-h1"><strong>Троксевазин<sup>®</sup> НЕО гель</strong> с усиленной<sup>*</sup> формулой тройного действия<sup>**</sup></h1>
          <p>Для укрепления вен, уменьшения <br>воспаления и уменьшения отеков при варикозе<sup>***,1</sup>.
          </p>
          <div class="header-product__menu"> 
            <Button @click="openUteka" label="Купить" arrowRight />
            <NuxtLink to="#faq">
              <Button label="Инструкция" arrowRight rounded />
            </NuxtLink>
          </div>
          <div class="header-product__desc">
            <p><sup>*</sup> По сравнению с Троксевазин<sup>®</sup> гелем 2 %<sup>1</sup> </p>
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
                <img src="/img/product/p-neo-1.png" srcset="/img/product/p-neo-1@2x.png 2x" alt="" loading="lazy" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="header-product__swiper-item">
                <img src="/img/product/p-neo-2.png" srcset="/img/product/p-neo-2@2x.png 2x" alt="" loading="lazy" />
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
            <h2 class="title-h1">Помогает бороться <br>с симптомами варикоза<sup>***,1</sup></h2>
          </div>
          <div class="symptoms__img">
            <img src="/img/product/symptoms-neo.png" srcset="/img/product/symptoms-neo@2x.png 2x" alt="" loading="lazy"/>
          </div>
          <ul class="symptoms__list">
            <li class="symptoms__item">
              <img src="/img/product/symptom.png" srcset="/img/product/symptom@2x.png 2x" alt="" loading="lazy"/>
              <p>Распирание <br> и тяжесть <br> в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-6.png" srcset="/img/product/symptom-6@2x.png 2x" alt="" loading="lazy"/>
              <p>Судороги <br>и парестезии в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-3.png" srcset="/img/product/symptom-3@2x.png 2x" alt="" loading="lazy"/>
              <p>Боли и отеки <br>в ногах</p>
            </li>
            <li class="symptoms__item">
              <img src="/img/product/symptom-7.png" srcset="/img/product/symptom-7@2x.png 2x" alt="" loading="lazy"/>
              <p>Варикозный <br>дерматит</p>
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
          <h2 class="title-h1">Усиленная формула<sup>*</sup> <br>тройного действия<sup>**</sup></h2>
          <ul class="secret__list">
            <li class="secret__item">
              <img src="/img/product/secret-1.png" srcset="/img/product/secret-1@2x.png 2x" alt="" loading="lazy"/>
              <span>Троксерутин</span>
              <p>способствует повышению тонуса вен и укреплению стенок сосудов<sup>1</sup></p>
            </li>
            <li class="secret__item"> 
              <img src="/img/product/secret-4.png" srcset="/img/product/secret-4@2x.png 2x" alt="" loading="lazy"/>
              <span>Гепарин</span>
              <p>помогает снимать воспаление и регенерировать соединительные ткани<sup>1</sup></p>
            </li>
            <li class="secret__item"> 
              <img src="/img/product/secret-5.png" srcset="/img/product/secret-5@2x.png 2x" alt="" loading="lazy"/>
              <span>Декспантенол</span>
              <p>улучшает процессы обмена веществ и способствует регенерации поврежденных тканей<sup>1</sup></p>
            </li>
          </ul>
          <p class="secret__footnote"><sup>*</sup> По сравнению с Троксевазин<sup>®</sup> гелем 2 % </p>
        </div>
      </div>
    </section>

    <section class="economy">
      <div class="economy__wrapper container">
        <div class="economy__content">
          <div class="economy__left">
            <h2 class="title-h1">Сэкономьте<sup>2</sup> до 25% при покупке<br>большой упаковки Троксевазин<sup>®</sup> НЕО<br>100 г. </h2>
            <Button @click="openUteka" label="Купить" arrowRight />
          </div>
          <div class="economy__right">
            <img src="/img/product/economy-25-neo.png" srcset="/img/product/economy-25-neo@2x.png 2x" alt="" loading="lazy"/>
            <Button @click="openUteka" label="Купить" arrowRight />
          </div>
        </div>
      </div>
    </section>

    <section class="tutorial">
      <div class="tutorial__wrapper container">
        <div class="tutorial__content">
          <div class="tutorial__head">
            <h2 class="title-h1">Как использовать?<sup>1</sup></h2>
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
              <p>Мягко втереть до полного впитывания</p>
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
            <h2 class="title-h1">Как применять при беременности<sup>1</sup></h2>
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
            <div class="others__item swiper-gel-1">
              <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
              <p><strong class="others-violet">Узнайте больше о<br>Троксевазин<sup>®</sup> Гель 2 % —</strong><br> выгодная цена<sup>3</sup>, <br> европейское производство<sup>1</sup>
              </p>
              <NuxtLink to="/gel">
                <Button label="Узнать больше" rounded/>
              </NuxtLink>
            </div>
            <div class="others__item swiper-gel-1">
              <img src="/img/product/other-troxactive.png" alt="" loading="lazy"/>
              <p>
                <strong class="others-orange">Для лечения симптомов <br>варикоза<sup>**</sup> изнутри</strong><br>используйте таблетки <br>Троксактив<sup>5</sup>
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
                  <img src="/img/product/other-gel.png" alt="" loading="lazy"/>
                  <p><strong class="others-violet">Узнайте больше о<br>Троксевазин<sup>®</sup> Гель 2 % —</strong><br> выгодная цена<sup>3</sup>, <br> европейское производство<sup>1</sup>
                  </p>
                  <NuxtLink to="/gel">
                    <Button label="Узнать больше" rounded/>
                  </NuxtLink>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="others__item">
                  <img src="/img/product/other-troxactive.png" alt="" loading="lazy"/>
                  <p>
                    <strong class="others-orange">Для лечения симптомов <br>варикоза<sup>**</sup> изнутри</strong><br>используйте таблетки <br>Троксактив<sup>5</sup>
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
          <h2 class="title-h1">Листок-вкладыш (инструкция) <br> Троксевазин<sup>®</sup> Нео</h2>
          <div class="instruction">
            <div class="instruction__list">
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5><strong>1. Что из себя представляет препарат Троксевазин® Нео, и для чего его применяют</strong></h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">Действующими веществами препарата Троксевазин® Нео являются гепарин натрия, декспантенол и троксерутин. Препарат относится к антикоагулянтным средствам прямого действия для местного применения.</div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Показания к применению</h5>
                  <div class="accordion-btn"></div> 
                </div>
                <div class="instruction__desc">
                  Вам назначили препарат Троксевазин® Нео поскольку:
                  <ul>
                    <li>у Вас варикозная болезнь;</li>
                    <li>у Вас хроническая венозная недостаточность, с такими симптомами как: отечность, боль, ощущение тяжести, распирания, «усталости» в нижних конечностях, наличие сосудистых звездочек и сеточки, судорог, парестезий (ощущение онемения, покалывания, жжения);</li>
                    <li>у Вас имеется воспаление стенок вен, в которых формируется тромб, закрывающий ее просвет (тромбофлебит);</li>
                    <li>у Вас есть воспаление клетчатки, окружающей вены (перифлебит);</li>
                    <li>у Вас имеется варикозный дерматит;</li>
                    <li>у Вас присутствуют боли и отеки из-за ушибов, растяжений или полученных травм.</li>
                  </ul>
                  <br>Если улучшение не наступило или Вы чувствуете ухудшение, Вам необходимо обратиться к врачу.
                </div>
              </div>
              <div class="instruction__item">
                <div class="instruction__title">
                  <h5><strong>2. О чем следует знать перед применением препарата Троксевазин® Нео</strong></h5>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Противопоказания</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Не применяйте препарат Троксевазин® Нео в следующих случаях:<br><br>
                  <ul>
                    <li>если у Вас аллергия на гепарин, декспантенол или троксерутин, или на любые другие компоненты этого препарата (перечисленные в разделе 6 листка-вкладыша);</li>
                    <li>если у Вас имеются открытые раны или другие нарушения целостности кожных покровов;</li>
                    <li>если у Вас I триместр беременности или Вы кормите грудью;</li>
                    <li>если Вам менее 18 лет (в связи с отсутствием данных по эффективности и безопасности применения препарата);</li>
                  </ul>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Особые указания и меры предосторожности</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Перед применением препарата Троксевазин® Нео проконсультируйтесь с лечащим врачом или работником аптеки. Обязательно сообщите врачу или работнику аптеки, если у Вас есть проблемы с почками.<br><br>Препарат Троксевазин® Нео следует наносить только на неповрежденную поверхность кожи.<br><br>При применении препарата Троксевазин® Нео следует избегать попадания на открытые раны, глаза и слизистые оболочки.<br><br>Препарат Троксевазин® Нео не предназначен для применения в офтальмологии, для интравагинального и ректального введения.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Дети и подростки</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Препарат Троксевазин® Нео противопоказан для применения у детей и подростков младше 18 лет вследствие вероятной небезопасности и неэффективности.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Другие препараты и препарат Троксевазин® Нео</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Взаимодействия препарата Троксевазин® Нео с другими лекарственными средствами не выявлено.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Беременность и грудное вскармливание</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Не применяйте препарат Троксевазин® Нео, если у Вас I триместр беременности или Вы кормите грудью. Перед применением препарата во II и III триместрах беременности необходимо проконсультироваться врачом.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Управление транспортными средствами и работа с механизмами</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Препарат Троксевазин® Нео не оказывает влияния на способность управлять транспортными средствами и механизмами.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Препарат Троксевазин® Нео содержит пропиленгликоль</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Препарат Троксевазин® Нео содержит пропиленгликоль, который может оказывать раздражающее действие на кожу
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Препарат Троксевазин® Нео содержит пропилпарагидроксибензоат</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Препарат Троксевазин® Нео содержит пропилпарагидроксибензоат, который может вызывать аллергические реакции (в том числе, отсроченные).
                </div>
              </div>
            </div>
            <!-- 2 column   -->
            <div class="instruction__list">
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>3. Применение препарата Троксевазин® Нео</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Всегда применяйте данный препарат в полном соответствии с листком-вкладышем или с рекомендациями лечащего врача или работника аптеки. При появлении сомнений посоветуйтесь с лечащим врачом или работником аптеки.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Способ применения препарата Троксевазин® Нео</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Препарат Троксевазин® Нео применяют наружно. Если врачом не рекомендовано иначе, то полоску геля длиной 1 – 3 см (в зависимости от площади пораженной поверхности) наносят тонким слоем на кожу на область поражения 2 раза в сутки утром и вечером, равномерно распределяя по поверхности кожи легкими втирающими движениями до полного впитывания. При необходимости гель можно наносить под бинты или эластичные чулки.<br><br>Успех лечения препаратом в большой степени зависит от его регулярного применения в течение длительного времени.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Продолжительность терапии</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Курс лечения составляет 2 – 3 недели. Необходимость более длительного лечения определяет лечащий врач.<br><br>Повторный курс лечения рекомендуется проводить 2 – 3 раза в год.<br><br>Рекомендуется сочетать с приемом капсул троксерутина для усиления терапевтического действия препарата.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Если Вы применили препарата Троксевазин® Нео больше, чем следовало</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Передозировка препаратом Троксевазин® Нео маловероятна в связи с малым системным всасыванием действующих веществ геля.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5><strong>4. Возможные нежелательные реакции</strong></h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Подобно всем лекарственным препаратам, Троксевазин® Нео может вызывать нежелательные реакции, однако они возникают не у всех.<br><br>Возможные нежелательные реакции, которые могут наблюдаться при применении препарата Троксевазин® Нео:<br>
                  <ul>
                    <li>кожная сыпь, зуд в месте нанесения геля.</li>
                  </ul>
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Сообщение о нежелательных реакциях</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Если у Вас возникают какие-либо нежелательные реакции, проконсультируйтесь с врачом.<br><br>Данная рекомендация распространяется на любые возможные нежелательные реакции, в том числе не перечисленные в данном листке-вкладыше.<br><br>На территории Российской Федерации Вы также можете сообщить о нежелательных реакциях лекарственного препарата напрямую в Федеральную службу по надзору в сфере здравоохранения (интернет-сайт: <a href="https://roszdravnadzor.gov.ru/">https://roszdravnadzor.gov.ru/</a>).<br><br>На территории Республики Казахстан рекомендуется сообщать о нежелательных реакциях в РГП на ПХВ «Национальный центр экспертизы лекарственных средств и медицинских изделий» Комитета медицинского и фармацевтического контроля Министерства здравоохранения Республики Казахстан (интернет-сайт: <a href="https://www.ndda.kz/">https://www.ndda.kz/</a>).<br><br>Сообщая о нежелательных реакциях, Вы помогаете получить больше сведений о безопасности препарата.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5><strong>5. Хранение препарата Троксевазин® Нео</strong></h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Храните препарат в недоступном для ребенка месте так, чтобы ребенок не мог увидеть его.<br><br>Не применяйте препарат после истечения срока годности (срока хранения), указанного на упаковке после слов «Годен до:».<br><br>Датой истечения срока годности является последний день указанного месяца.<br><br>Храните препарат при температуре не выше 25 °С.Не выбрасывайте препарат в канализацию. Уточните у работника аптеки, как следует утилизировать (уничтожить) препарат, который больше не потребуется. Эти меры позволят защитить окружающую среду.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5><strong>6. Содержимое упаковки и прочие сведения</strong></h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Препарат Троксевазин® Нео содержит:<br><br>Действующими веществами являются гепарин натрия, декспантенол, троксерутин.<br><br>100 г геля содержат: 2,00 г троксерутина, 5,00 г декспантенола, 0,17 г гепарина натрия (соответствует 30000 МЕ).<br><br>Вспомогательными веществами являются: карбомер 980 NF, пропиленгликоль, метилпарагидроксибензоат, пропилпарагидроксибензоат, троламин, вода очищенная.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Внешний вид препарата Троксевазин® Нео и содержимое упаковки</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Гель для наружного применения.<br><br>Препарат Троксевазин® Нео представляет собой прозрачный или почти прозрачный гель от желтоватого до зеленовато-желтого цвета.<br><br>По 40 г в алюминиевую тубу с внутренним лаковым покрытием с защитной алюминиевой мембраной для контроля первого вскрытия с навинчиваемой полимерной крышкой, оснащенной пробойником.<br><br>По 40 г или 100 г в мембранную ламинатную тубу с защитной алюминиевой мембраной для контроля первого вскрытия с навинчиваемой полимерной крышкой.<br><br>1 тубу вместе с листком-вкладышем помещают в пачку картонную, на которой дополнительно могут быть нанесены защитные наклейки.
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Держатель регистрационного удостоверения</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Актавис Групп ПТС ехф.,<br>Рейкьявикурвегур 76-78, 220 Хафнарфьердур, Исландия
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>Производитель</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Балканфарма – Троян АД,<br>Болгария
                </div>
              </div>
              <div @click="toggleAccordion" class="instruction__item">
                <div class="instruction__title">
                  <h5>За любой информацией о препарате, а также в случаях возникновения претензий следует обращаться к местному представителю держателя регистрационного удостоверения:</h5>
                  <div class="accordion-btn"></div>
                </div>
                <div class="instruction__desc">
                  Российская Федерация<br>
                  ООО «Тева»<br>
                  Москва, 115054, ул. Валовая, 35, Российская Федерация<br>
                  Телефон: +7 (495) 644 22 34<br>
                  Факс: +7 (495) 644 22 35<br>
                  Адрес электронной почты: <a href="mailto:info@teva.ru">info@teva.ru</a><br>
                  Республика Казахстан<br>
                  ТОО «ратиофарм Казахстан»<br>
                  Алматы, 050059 (А15Е2Р), пр. Аль-Фараби, 17/1, БЦ Нурлы-Тау, 5Б, 6 этаж, <br>Республика Казахстан<br>
                  Телефон: +7 (727) 325-16-15<br>
                  Адрес электронной почты: <a href="mailto:info.tevakz@tevapharm.com">info.tevakz@tevapharm.com</a><br>
                </div>
              </div>
            </div>
          </div>

          <div class="faq__download">
            <a href="/pdf/instruction_neo.pdf" download>
              <Button label="Скачать PDF" rounded />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="sources">
      <div class="sources__wrapper container">
        <p>** Венотонизирующее, противовоспалительное, противоотечное<sup>1</sup>
          <br>***При симптомах хронической венозной недостаточности
          <br>1. Листок-вкладыш Троксевазин® Нео ЛП-№(001509)-(РГ-RU)
          https://portal.eaeunion.org/sites/commonprocesses/ru-ru/Pages/CardView.aspx?documentId=6206058bfb44f12d3bb0566b&amp;codeId=P.MM.01
          <br>2. По сравнению с Троксевазин® гель 2% 40 гр. Процент экономии определен по отпускным ценам ООО «Тева» для
          упаковок 40г и 100г при расчете на 1г (Март 2023)
          <br>3. Розничная цена Троксевазин® гель 2% 40г - 360.4р (IQVIA, декабрь 2022)
          <br>4. Троксевазин® используется в России с 1981 г. РУ Б-8-242 №2654
          <br>5. Инструкция по медицинскому применению лекарственного препарата Троксактив ЛП-№ (000726)-(РГ-RU)
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
  title: 'Троксевазин Нео гель',
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
const productsForUteka = 'https://widget.uteka.ru/widgets/full/?productIds=266995&productIds=377032';

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