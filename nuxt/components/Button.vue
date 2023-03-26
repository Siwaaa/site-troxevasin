<template>
  <button :class="buttonClass" :type="type" :disabled="disabled">
    <slot>
      <span class="btn__label">{{ label || '&nbsp;' }}</span>
      <span v-if="arrowRight" class="btn__arrow">
        <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.407715 0.789062L3.78772 4.94709L0.407715 9.09229"></path>
        </svg>
      </span>
      <span v-if="arrowTop" class="btn__arrow">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.790527 4.69873L4.94855 1.31873L9.09375 4.69873"></path>
        </svg>
      </span>
    </slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    label: {
      type: String,
      default: null
    },
    rounded: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    arrowRight: {
      type: Boolean,
      default: false
    },
    arrowTop: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return [
        'btn',
        {
          'btn-rounded': this.rounded,
          'btn-up': this.arrowTop,
          'btn-sm': this.size === 'small',
          'btn-lg': this.size === 'large',
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  padding: 13px 5px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  background: var(--color-violet);
  border: 1px solid var(--color-violet);
  color: var(--color-white);
  text-align: center;
  transition: background-color .3s ease-in, color .3s ease-in;

  @media (--xl) {
    font-size: 16px;
    min-width: 180px;
  }

  @media (--sm) {
    font-size: 14px;
    min-width: 136px;
  }

  &:hover {
    color: var(--color-violet);
    background: var(--color-white);

    & path {
      animation: btn-arrow .3s ease-in both;
    }
  }

  &__arrow {
    position: relative;
    display: flex;
    margin-left: 5px;
    
    & path {
      stroke: var(--color-white);
    }

    /* &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: inline-block;
      width: 1px;
      height: 10px;
      background: #000;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: inline-block;
      width: 1px;
      height: 10px;
      background: #000;
    } */
  }

  &-rounded {
    color: var(--color-violet);
    background: var(--color-white);

    & path {
      stroke: var(--color-violet);
    }

    &:hover {
      background: var(--color-violet);
      color: var(--color-white);

      & path {
        animation: btn-arrow_rounded .3s ease-in both;
      }
    }
  }

  &-up {
    min-width: auto;
    padding: 10px 20px;
    font-size: 16px;
  }

  &-sm {
    min-width: auto;
    padding: 3px 14px;
    font-size: inherit;
    background: transparent;
  }
}

@keyframes btn-arrow {
  0% {
    stroke: var(--color-white);
  }

  100% {
    stroke: var(--color-violet);
  }
}

@keyframes btn-arrow_rounded {
  0% {
    stroke: var(--color-violet);
  }

  100% {
    stroke: var(--color-white);
  }
}

/* not included in the component */
.btn-hexagon {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 100%;
  padding: 2px 0;
  text-align: center;
  background: #FBFBFD;
  font-size: 16px;
  line-height: 1.4;
  color: var(--color-violet);
  margin-left: 26px;

  border-top: 1px solid var(--color-violet);
  border-bottom: 1px solid var(--color-violet);
  transition: background-color .3s ease-in, color .3s ease-in;
  transform-style: preserve-3d;

  @media (--md) {
    font-size: 14px;
    height: 47px;
  }

  @media (--sm) {
    font-size: 10px;
    height: 41px;
    margin-left: 13px;
  }

  &__arrow {
    position: absolute;
    top: 0;
    right: -5px;
    width: 30px;
    height: 100%;
    background: url(/img/hexagon-arrow.svg) no-repeat right center;
    opacity: 0;
    transition: transform .5s ease-in-out .3s, opacity .3s ease-in .3s;

    @media (--sm) {
      right: 0;
      background: url(/img/hexagon-arrow_mob.svg) no-repeat right center;
    }
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -1px;
    /* magic number = border width */
    width: 3.2em;
    height: 3.2em;
    background: inherit;
    transform-origin: center;
    border: 1px solid var(--color-violet);

    @media (--sm) {
      top: 2px;
    }
  }

  &::before {
    right: 100%;
    transform: translateX(50%) translateZ(-1px) rotate(45deg) scale(0.707);

    @media (--sm) {
      transform: translateX(50%) translateZ(-1px) rotate(45deg) scale(0.677) skew(15deg, 15deg);
    }
  }

  &::after {
    left: 100%;
    transform: translateX(-50%) translateZ(-1px) rotate(45deg) scale(0.707);

    @media (--sm) {
      transform: translateX(-50%) translateZ(-1px) rotate(45deg) scale(0.667) skew(15deg, 15deg);
    }
  }

  &:hover {
    background-color: var(--color-violet);
    color: var(--color-white);

    & .btn-hexagon__arrow {
      transform: translateX(5px);
      opacity: 1;
    }
  }

  &>*:first-child {
    margin-right: 6px;
  }

  &-not-icon {
    &>*:first-child {
      margin-right: 0;
    }
  }
}
</style>