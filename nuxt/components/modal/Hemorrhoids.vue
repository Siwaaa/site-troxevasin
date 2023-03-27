<template>
  <transition @enter="onEnter" @after-leave="onAfterLeave" appear>
    <div v-if="visible" :ref="maskRef" @click="onMaskClick" class="modal-mask">
      <div class="modal">
        <!-- Содержимое модального окна -->
        <div class="modal__content">
          <div class="modal__header">
            <h3 class="title-h1">4 стадии внутреннего <br>геморроя<sup>*</sup></h3>
          </div>
          <div class="modal__main">
            <div class="hemorrhoids__list">
              <div class="hemorrhoids__item">
                <div class="hemorrhoids__img"><img src="/img/modal/gem-1.png" srcset="/img/modal/gem-1@2x.png 2x" alt="" /></div>
                <p>Кровотечение, без выпадения узлов.</p>
              </div>
              <div class="hemorrhoids__item">
                <div class="hemorrhoids__img"><img src="/img/modal/gem-2.png" srcset="/img/modal/gem-2@2x.png 2x" alt="" /></div>
                <p>Выпадение внутренних геморроидальных узлов с самостоятельным вправлением в анальный канал, с/без
                  кровотечения.</p>
              </div>
              <div class="hemorrhoids__item">
                <div class="hemorrhoids__img"><img src="/img/modal/gem-3.png" srcset="/img/modal/gem-3@2x.png 2x" alt="" /></div>
                <p>Выпадение внутренних геморроидальных узлов с необходимостью их ручного вправления в анальный канал, с/без
                  кровотечения.</p>
              </div>
              <div class="hemorrhoids__item">
                <div class="hemorrhoids__img"><img src="/img/modal/gem-4.png" srcset="/img/modal/gem-4@2x.png 2x" alt="" /></div>
                <p>Постоянное выпадение внутренних геморроидальных узлов и невозможность их вправления в анальный канал,
                  с/без кровотечения.</p>
              </div>
            </div>
          </div>
          <div class="modal__footer">
            <p>https://cr.minzdrav.gov.ru/schema/178_1. Дата обращения:и 28.02.2023</p>
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

<style lang="postcss">

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

.hemorrhoids {
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    gap: 40px;
    justify-content: center;

    @media (--xl) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (--sm) {
      gap: 20px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &>p {
      font-weight: 600;
      font-size: 14px;
      line-height: 1.2;

      @media (--sm) {
        font-size: 10px;
        text-align: left;
      }
    }
  }

  &__img {
    position: relative;
    width: 200px;
    min-width: 100px;
    margin-bottom: 20px;

    @media (--lg) {
      width: 60%;
    }

    @media (--sm) {
      margin-bottom: 10px;
    }

    &>img {
      width: 100%;
      object-fit: contain;
    }

    &::before {
      position: absolute;
      top: 50%;
      left: -35%;
      font-weight: 100;
      font-size: 50px;
      line-height: 1;
      color: var(--color-black);
      transform: translate(0, -50%);

      @media (--xl) {
        font-size: 38px;
      }

      @media (--lg) {
        left: -50px;
      }

      @media (--sm) {
        font-size: 20px;
        top: 0;
        left: -30px;
        transform: none;
      }

      @media (--xs) {
        left: -15px;
      }
    }

    .hemorrhoids__item:nth-child(1) & {
      &::before {
        content: "01";
      }
    }

    .hemorrhoids__item:nth-child(2) & {
      &::before {
        content: "02";
      }
    }

    .hemorrhoids__item:nth-child(3) & {
      &::before {
        content: "03";
      }
    }

    .hemorrhoids__item:nth-child(4) & {
      &::before {
        content: "04";
      }
    }
  }
}
</style>