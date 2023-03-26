<template>
  <transition @enter="onEnter" @after-leave="onAfterLeave" appear>
    <div v-if="visible" :ref="maskRef" @click="onMaskClick" class="modal-mask">
      <div class="modal">
        <!-- Содержимое модального окна -->
        <div class="modal__content">
          <div class="modal__header">
            <h3 class="title-h1">Регламент применения МОФФ при варикозе<sup>*,1</sup></h3>
          </div>
          <div class="modal__main">
            <div class="moff"> <img src="/img/modal/table.svg" srcset="/img/modal/table.svg 1x, /img/modal/table-mob.svg 640w" alt="" /></div>
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

.moff {
  width: 100%;

  &>img {
    width: 100%;
    object-fit: contain;
    object-position: top;
  }
}
</style>