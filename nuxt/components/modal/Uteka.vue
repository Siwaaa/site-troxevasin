<template>
  <transition @enter="onEnter" @after-leave="onAfterLeave" appear>
    <div id="modal-uteka" v-if="visible" :ref="maskRef" @click="onMaskClick">
      <div class="uteka-widget">
        <!-- Шапка виджета -->
        <div class="uteka-widget-header">
          <div class="uteka-widget__container">
            <div class="uteka-widget-header__inner">
              <!-- Логотип -->
              <a class="uteka-widget-header__logo" href="https://uteka.ru/" target="_blank">
                <img src="https://widget.uteka.ru/static/img/widgets/logo-light.svg" alt="Заказать в Ютеке" title="поиск в аптеках" />
              </a>
              <!-- Заголовок -->
              <div class="uteka-widget-header__title"></div>
              <!-- Крестик -->
              <a @click.prevent="closeModal" href="#" class="uteka-widget-header__close"></a>
            </div>
          </div>
        </div>
        <iframe :src="urlProducts"></iframe>
        <!-- аптеки -->
        <div class="pharma-container">
          <div class="pharma-title">Забронировать в ближайшей аптеке или заказать с доставкой на дом</div>
          <div class="pharma-wrap">
            <div class="pharms__item">
              <a href="https://zdravcity.ru/g_troksevazin/" target="_blank">
                <img loading="lazy" src="/img/apteks/zdravsiti.png" alt="Здрависти"/>
              </a>
            </div>
            <div class="pharms__item">
              <a href="https://gorzdrav.org/catalog/troksaktiv/" target="_blank">
                <img loading="lazy" src="/img/apteks/gorzdrav.png" alt="Горздрав"/>
              </a>
            </div>
            <div class="pharms__item">
              <a href="https://366.ru/g/troksaktiv/" target="_blank">
                <img loading="lazy" src="/img/apteks/36.png" alt="36"/>
              </a>
            </div>
            <div class="pharms__item">
              <a href="https://www.rigla.ru/search?q=%D1%82%D1%80%D0%BE%D0%BA%D1%81%D0%B0%D0%BA%D1%82%D0%B8%D0%B2" target="_blank">
                <img loading="lazy" src="/img/apteks/rigla.png" alt="ригла"/>
              </a>
            </div>
            <div class="pharms__item">
              <a href="https://ozerki.ru/alphabet_brand/t/troksaktiv/" target="_blank">
                <img loading="lazy" src="/img/apteks/ozerki.png" alt="Озерки"/>
              </a>
            </div>
            <div class="pharms__item">
              <a href="https://stoletov.ru/alphabet/t/troksaktiv/" target="_blank">
                <img loading="lazy" src="/img/apteks/stoletov.png" alt="Столетов"/>
              </a>
            </div>
            <div class="pharms__item">
              <a href="https://superapteka.ru/alphabet_brand/t/troksaktiv-10/" target="_blank">
                <img loading="lazy" src="/img/apteks/superapteka.png" alt="Супераптека"/>
              </a>
            </div>
            <div class="pharms__item">
              <a href="https://planetazdorovo.ru/reclame/?reclame=207&amp;utm_source=teva_troksevazin&amp;utm_medium=button" target="_blank">
                <img loading="lazy" src="/img/apteks/planet.png" alt="Планета здоровья"/>
              </a>
            </div>
            <div class="pharms__item">
              <a href="https://www.eapteka.ru/goods/drugs/cardio/veins/troksevazin_aktavis/" target="_blank">
                <img loading="lazy" src="/img/apteks/eapteka.png" alt="сбераптека"/>
              </a>
            </div>
            <div class="pharms__item">
              <a href="https://apteka.ru/search/?q=%D1%82%D1%80%D0%BE%D0%BA%D1%81%D0%B5%D0%B2%D0%B0%D0%B7%D0%B8%D0%BD&amp;utm_source=teva&amp;utm_medium=buy_now&amp;utm_campaign=troxevasin" target="_blank">
                <img loading="lazy" src="/img/apteks/aptekaru.png" alt="Аптека РУ"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ['update:visible'],
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    urlProducts: {
      type: String,
      default: 'https://widget.uteka.ru/widgets/full/?productIds=376787&productIds=365040&productIds=266995&productIds=376941&productIds=376944&productIds=377032&productIds=33271&productIds=33267&productIds=33264'
    }
  },
  data() {
    return {
      mask: null
    }
  },
  methods: {
    closeModal() {
      this.$emit('update:visible', false);
    },
    maskRef(el) {
      this.mask = el;
    },
    onMaskClick(event) {
      if (this.mask === event.target) {
        this.closeModal();
      }
    },
    onEnter() {
      document.body.style.overflow = 'hidden';
    },
    onAfterLeave() {
      document.body.style.overflow = 'auto';
    }
  }
}
</script>

<style lang="postcss">
#modal-uteka {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: var(--color-white);
}

.uteka-widget {
  width: 100%;
  height: calc(100vh - 80px);
  outline: 1px solid #e0e0e0;
  overflow: auto;
}

.uteka-widget iframe {
  border: none;
  width: 100%;
  height: 480px;
}

.uteka-widget__container {
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 600px) {
  .uteka-widget__container {
    padding: 0 20px;
  }
}

@media (min-width: 768px) {
  .uteka-widget__container {
    padding: 0 40px;
  }
}

@media (min-width: 1024px) {
  .uteka-widget__container {
    padding: 0 44px;
  }
}

@media (min-width: 1440px) {
  .uteka-widget__container {
    padding: 0 60px;
    max-width: 1440px;
  }
}

.uteka-widget-header {
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
}

.uteka-widget-header__inner {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 56px;
}

.uteka-widget-header__title {
  background: url('https://widget.uteka.ru/static/img/widgets/title_2@mobile.svg') no-repeat;
  background-position: center;
  width: 230px;
  height: 24px;
}

.uteka-widget-header__logo {
  height: 16px;
}

.uteka-widget-header__logo img {
  height: 100%;
}

.uteka-widget-header__close {
  position: absolute;
  top: 0;
  right: -8px;
  bottom: 0;
  z-index: 5;
  margin: auto;
  width: 32px;
  height: 32px;
  background: url('https://widget.uteka.ru/static/img/widgets/close_2.svg') no-repeat center;
}

@media (min-width: 1024px) {
  .uteka-widget-header__inner {
    flex-direction: row;
  }

  .uteka-widget-header__title {
    background-image: url('https://widget.uteka.ru/static/img/widgets/title_2.svg');
    width: 264px;
    height: 24px;
  }

  .uteka-widget-header__logo {
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    height: 32px;
  }
}

.pharma-wrap {
	display: inline-block;
	padding: 40px 0;
	text-align: center;
  background: url(/img/uteka_fon.jpg) no-repeat center/cover;  
}

.pharma-title {
  margin-top: 30px;
	margin-bottom: 3.75vh;
	font-size: 24px;
	font-weight: 700;
	text-align: center
}

.pharma-title.promo {
	font-size: 12px
}

.pharms__item {
	box-sizing: border-box;
	display: inline-flex;
	width: 270px;
	height: 120px;
	padding: 13px 20px;
	margin: 10px;
	overflow: hidden;
	text-align: center;
	cursor: pointer;
	border: 1px solid #e2e3ec;
  background: var(--color-white);
	border-radius: 15px;
	transition: border .4s ease, box-shadow .4s ease
}

.pharms__item:hover {
	box-shadow: 0 4px 10px var(--color-violet);
}

.pharms__item a {
	margin: auto
}

.pharms__item img {
	max-width: 90%;
	height: 96px;
	min-height: 24px;
	margin: auto;
	object-fit: contain
}

@media only screen and (max-width: 600px) {
	.pharma-wrap {
		width: 100%
	}

	.pharma-title {
		margin: 3.75vh;
		font-size: 16px;
		font-weight: 700;
		text-align: center
	}

	.uteka-widget iframe {
		width: 100%;
		border: 0
	}

	.pharms__item {
		box-sizing: border-box;
		display: inline-flex;
		width: calc(100% - 15px);
		height: 39px;
		padding: .5vh 0;
		margin: 5px;
		overflow: hidden;
		text-align: center;
		cursor: pointer;
		border: 1px solid #e2e3ec;
		border-radius: 15px;
		transition: border .4s ease, box-shadow .4s ease
	}

	.pharms__item img {
		max-width: 90%;
		height: 24px;
		margin: auto;
		-o-object-fit: contain;
		object-fit: contain
	}
}
</style>