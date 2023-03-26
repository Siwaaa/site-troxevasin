<template>
  <transition @enter="onEnter" @after-leave="onAfterLeave" appear>
    <div v-if="visible" :ref="maskRef" @click="onMaskClick" class="modal-mask">
      <div class="modal">
        <!-- Содержимое модального окна -->
        <div class="modal__content">
          <div class="modal__header">
            <h3 class="title-h1">7 классов хронических <br>заболеваний вен<sup>1</sup></h3>
          </div>
          <div class="modal__main">
            <div class="veins__list">
              <div class="veins__item">
                <div class="veins__img"><img src="/img/modal/c0.png" alt="" /></div><span>C0</span>
                <p>Нет визуальных изменений</p>
              </div>
              <div class="veins__item">
                <div class="veins__img"><img src="/img/modal/c1.png" alt="" /></div><span>C1</span>
                <p>Сосудистые звездочки</p>
              </div>
              <div class="veins__item">
                <div class="veins__img"><img src="/img/modal/c2.png" alt="" /></div><span>C2</span>
                <p>Варикозное расширение вен</p>
              </div>
              <div class="veins__item">
                <div class="veins__img"><img src="/img/modal/c3.png" alt="" /></div><span>C3</span>
                <p>Отек</p>
              </div>
              <div class="veins__item">
                <div class="veins__img"><img src="/img/modal/c4.png" alt="" /></div><span>C4</span>
                <p>Изменения кожи (например, гиперпигментация)</p>
              </div>
              <div class="veins__item">
                <div class="veins__img"><img src="/img/modal/c5.png" alt="" /></div><span>C5</span>
                <p>Зажившая язва</p>
              </div>
              <div class="veins__item">
                <div class="veins__img"><img src="/img/modal/c6.png" alt="" /></div><span>C6</span>
                <p>Активная язва</p>
              </div>
            </div>
          </div>
          <div class="modal__footer">
            <p>1. Eklöf B., Rutherford R.B., Bergan J.J. и соавт.; American Venous Forum International Ad Hoc Committee
              for Revision of the CEAP Classification: Revision of the CEAP classification for chronic venous disorders:
              consensus statement. J. Vasc. Surg., 2004; 40 (6): 1251–1252 <br> 2. Золотухин И.А, Селиверстов Е., Шевцов
              Ю., Авакьянц И., Никишков А., Татаринцев А., Кириенко А. Распространенность хронических заболеваний вен:
              результаты популяционного эпидемиологического исследования. Флебология. 2016;10(3):119-125</p>
          </div>
        </div>
        <button @click="closeModal" class="modal__close" type="button" aria-label="close">
          <div class="modal__close-right"></div>
          <div class="modal__close-left"></div>
        </button>
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

<style lang="postcss" scoped>

.modal {
  position: relative;
  max-height: 90%;
  width: 80%;
  max-width: 950px;

  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
    pointer-events: auto;
    overflow-y: auto;
    overflow-x: hidden;

    /* animation: fadeIn ease-in-out .5s; */
  }

  &__close {
    --close-w: 35px;
    width: var(--close-w);
    height: var(--close-w);
    position: absolute;
    top: 15px;
    right: 15px;
    transition: transform .3s ease-in-out;

    @media (--md) {
      top: 7px;
      right: 7px;
    }

    @media (--sm) {
      --close-w: 20px;
    }

    &-right,
    &-left {
      display: block;
      position: absolute;
      width: var(--close-w);
      height: 1px;
      background-color: var(--color-violet);
    }

    &-right {
      transform: rotate(-45deg);
    }

    &-left {
      transform: rotate(45deg);
    }
  }

  &__content {
    background-color: var(--color-white);
    padding: 30px 55px;

    @media (--md) {
      padding: 28px;
    }

    @media (--xs) {
      padding: 20px;
    }
  }

  &__header {
    text-align: center;
    margin-bottom: 30px;

    &>p {
      font-weight: 400;
      font-size: 10px;
      color: #828282;
    }
  }

  &__main {
    margin-bottom: 38px;
  }

  &__footer {
    font-size: 9px;
    color: var(--color-gray);
  }
}

/* @keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
} */

.veins {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 0;

    @media (--md) {
      display: grid;
      grid-template-columns: repeat(3, 33%);
    }
  }

  &__item {
    flex-basis: 25%;
    text-align: center;
    padding: 0 1.5%;

    @media (--md) {
      flex-basis: auto;
    }

    &>span {
      font-size: 50px;
      font-weight: 100;
      line-height: 1;

      @media (--xl) {
        font-size: 38px;
      }

      @media (--sm) {
        font-size: 20px;
      }
    }

    &>p {
      font-size: 14px;
      line-height: 1.2;

      @media (--sm) {
        font-size: 10px;
      }
    }
  }

  &__img {
    width: 100%;
    margin-bottom: 10px;

    @media (--sm) {
      margin-bottom: 5px;
    }

    &>img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>