<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <div class="footer__top">
        <div class="footer__top-links">
          <a href="https://www.teva.ru/contact-us/med-info/" target="_blank">
            Запросить медицинскую информацию 
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.407715 0.789062L3.78772 4.94709L0.407715 9.09229" stroke="#A71680"></path>
            </svg>
          </a>
          <a href="https://www.teva.ru/contact-us/unwanted-information/" target="_blank">
            Сообщить о нежелательном явлении
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.407715 0.789062L3.78772 4.94709L0.407715 9.09229" stroke="#A71680"></path>
            </svg>
          </a>
          <a href="https://www.teva.ru/contact-us/" target="_blank">
            Отправить вопрос на горячую линию
            <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.407715 0.789062L3.78772 4.94709L0.407715 9.09229" stroke="#A71680"></path>
            </svg>
          </a>
        </div>
        <div class="footer__top-up">
          <Button @click="pageUp" label="Наверх" rounded arrowTop/>
        </div>
      </div>

      <BannerTeva v-if="isIndexPage" />

      <div class="footer__bottom"> 
        <img src="/img/teva.svg" alt="Логотип Teva" />
        <div class="footer__bottom-address">За дополнительной информацией обращайтесь:
          <br>ООО «Тева». Россия, Москва, 115054, <br>ул. Валовая, д. 35 <br>TRAV-RU-00126- Cons-12.2022
        </div>
        <div class="footer__bottom-phone">тел. +7 495 644 22 34 <br>факс. +7 495 644 22 35
        </div>
        <div class="footer__bottom-internet">E-mail: info@teva.ru <br>www.teva.ru
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import BannerTeva from './BannerTeva.vue';

const route = useRoute();

const pageUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// check route name === index
const isIndexPage = computed(() => {
  if (route.name === 'index') {
    return true;
  }
  return false
})

</script>

<style lang="postcss">

.footer {
  &__wrapper {
    padding-bottom: var(--med-h);
  }

  &__top {
    display: flex;

    @media (--lg) {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      align-items: center;
    }

    @media (--sm) {
      border-bottom: none;
    }

    &-links {
      display: flex;
      justify-content: space-around;
      margin-bottom: 30px;

      @media (--sm) {
        flex-direction: column;
        margin-bottom: 10px;
      }

      &>a {
        font-weight: 500;
        font-size: 16px;
        color: var(--color-violet);
        padding: 0 5%;
        border-right: 1px solid var(--color-violet);
        transition: opacity 0.3s ease-in;

        &:last-child {
          border-right: none;

          @media (--sm) {
            border-bottom: 1px solid var(--color-violet);
          }
        }

        @media (--sm) {
          font-size: 14px;
          border-right: none;
          padding: 15px 15px 15px 0;
          border-top: 1px solid var(--color-violet);
        }

        &:hover {
          opacity: .8;

          & svg {
            transform: translateX(5px);
          }
        }

        & svg {
          transition: transform 0.5s ease-in-out;
        }
      }
    }

    &-up {
      @media (--lg) {
        margin-bottom: 30px;
      }

      /* &>button {
        display: inline-flex;
        align-items: center;
        padding: 10px 20px;
        font-size: 16px;
        color: var(--color-violet);
        background-color: var(--color-white);
        border: 1px solid var(--color-violet);

        & .arrow {
          display: flex;
          margin-left: 5px;
        }
      } */
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.7;
    padding-top: 20px;
    border-top: 1px solid #D5D5D5;

    @media (--md) {
      flex-direction: column;
    }

    @media (--sm) {
      font-size: 9px;
    }

    &>*:not(:last-child) {
      margin-right: 15px;

      @media (--md) {
        margin-right: 0;
        margin-bottom: 15px;
      }
    }

    &>img {
      width: 77px;
      object-fit: contain;

      @media (--md) {
        order: 5;
        margin-top: 15px;
      }
    }

    &-address {
      max-width: 310px;
    }

    &-phone {
      max-width: 135px;
    }

    &-internet {
      max-width: 121px;
    }
  }
}
</style>