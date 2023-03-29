<template>
  <nav class="navbar" ref="header" :class="{active: showMenu}">
    <div class="navbar__wrapper container">
      <NuxtLink to="/"><img class="logo" src="/img/logo.svg" alt="Логотип" /></NuxtLink>
      <div class="navbar__nav">
        <div class="navbar__item navbar__link">
          <button 
            @click="toggleMenu" 
            class="navbar__product-more" 
            :class="{active: showMenu }" 
            type="button"
          >
            Продукты
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.790527 4.69873L4.94855 1.31873L9.09375 4.69873" stroke="#A71680"></path>
            </svg>
          </button>
        </div>
        <!-- <div class="navbar__item navbar__link">
          <a href="#">Статьи</a>
        </div>
        <div class="navbar__item navbar__sale">
          <Button label="Акции" rounded size="small"/>
        </div> -->
        <div class="navbar__item navbar__cta">
          <button @click="openUteka" class="btn-sale" type="button">Купить</button>
        </div>
      </div>
      <button type="button" class="navbar__burger" @click="toggleMenu" aria-label="menu">
        <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            <line x1="0" y1="11" x2="30" y2="11" stroke-width="2" />
            <line x1="0" y1="21" x2="30" y2="21" stroke-width="2" />
          </g>
          <g>
            <line x1="0" y1="15" x2="30" y2="15" stroke-width="2" />
            <line x1="0" y1="15" x2="30" y2="15" stroke-width="2" />
          </g>
        </svg>
      </button>
      <!-- show menu  -->
      <transition name="menu">
        <div class="menu" v-show="showMenu">
          <div class="menu__wrapper container">
            <swiper
              :slides-per-view="2"
              :slides-per-group="2"
              :space-between="20"
              :modules="[Navigation]"
              :breakpoints="breakpoints"
              navigation
              @swiper="onSwiper"
            >
              <swiper-slide>
                <div class="menu__item">
                  <NuxtLink to="/gel">
                    <img src="/img/navbar/item-3.png" alt=""/>
                    <h4>Троксевазин<sup>®</sup> гель 2 %</h4>
                    <p>
                      Гель против тяжести и боли в ногах при варикозе<sup>*</sup>
                      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.407715 0.789062L3.78772 4.94709L0.407715 9.09229" stroke="#A71680"></path>
                      </svg>
                    </p>
                  </NuxtLink>
                  <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=365040&productIds=33271')" label="Купить" rounded />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="menu__item">
                  <NuxtLink to="/neo">
                    <img src="/img/navbar/item-2.png" alt=""/>
                    <h4>Троксевазин<sup>®</sup> Нео гель</h4>
                    <p>
                      Гель для укрепления вен и уменьшения воспаления при варикозе<sup>*</sup>
                      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.407715 0.789062L3.78772 4.94709L0.407715 9.09229" stroke="#A71680"></path>
                      </svg>
                    </p>
                  </NuxtLink>
                  <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=266995&productIds=377032')" label="Купить" rounded />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="menu__item">
                  <NuxtLink to="/troxactive">
                    <img src="/img/navbar/item-1.png" alt=""/>
                    <h4>Троксактив таблетки</h4>
                    <p>
                      Таблетки для лечения варикоза<sup>*</sup> и геморроя изнутри 
                      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.407715 0.789062L3.78772 4.94709L0.407715 9.09229" stroke="#A71680"></path>
                      </svg>
                    </p>
                  </NuxtLink>
                  <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=376787&productIds=376941&productIds=376944')" label="Купить" rounded />
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="menu__item">
                  <NuxtLink to="/capsules">
                    <img src="/img/navbar/item-4.png" alt=""/>
                    <h4>Троксевазин<sup>®</sup> капсулы</h4>
                    <p>
                      Капсулы при хронической венозной недостаточности и геморрое
                      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.407715 0.789062L3.78772 4.94709L0.407715 9.09229" stroke="#A71680"></path>
                      </svg>
                    </p>
                  </NuxtLink>
                  <Button @click="openUteka('https://widget.uteka.ru/widgets/full/?productIds=33267&productIds=33264')" label="Купить" rounded />
                </div>
              </swiper-slide>
            </swiper>

            <div class="menu-btn">
              <Button @click="openUteka" label="Купить" arrowRight />
            </div>
          </div>
        </div>
      </transition>
    </div>
    <ModalUteka v-model:visible="visible" :url-products="productsForUteka" />
  </nav>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';


const showMenu = ref(false);
const header = ref();
const heightHeaderCSS = 25;

const onSwiper = (swiper) => {};

const breakpoints = ref({
  320: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
  1024: {
    slidesPerView: 4,
  }
});

const toggleMenu = (e) => {
  e.currentTarget.classList.toggle("menu-open");
  showMenu.value = !showMenu.value;
}

const headerBGhandler = throttle(() => { 
  let scrollTop = window.scrollY;
  
  if(scrollTop >= heightHeaderCSS && !header.value.classList.contains('.navbar-bg')){
    header.value.classList.add('navbar-bg')
  } else if (scrollTop <= heightHeaderCSS) {
    header.value.classList.remove('navbar-bg')
  }
}, 150)

onMounted(() => {
  window.addEventListener('scroll', headerBGhandler);
});

const visible = ref(false);
let productsForUteka = null;

const openUteka = (i) => {
  i && typeof i === 'string' ? 
    productsForUteka = i : 
    productsForUteka = 'https://widget.uteka.ru/widgets/full/?productIds=376787&productIds=365040&productIds=266995&productIds=376941&productIds=376944&productIds=377032&productIds=33271&productIds=33267&productIds=33264';

  visible.value = true;
}
</script>

<style lang="postcss">

.navbar {
  position: fixed;
  width: 100%;
  z-index: 50;
  transition: background 0.3s easeInQuad;

  &-bg {
    background: rgba(255, 255, 255, 1);
  }

  &.active {
    background: rgba(255, 255, 255, 1);
  }

  &__wrapper {
    height: var(--navbar-h);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (--md) {
      display: none;
    }
  }

  &__product-more {
    display: flex;
    align-items: center;
    transition: opacity 0.3s easeInQuad;

    &:hover {
      opacity: 0.7;
    }

    &>svg {
      margin-left: 5px;
      transform: rotate(180deg);
      transition: transform .4s ease-in;
    }

    &.active {
      svg {
        transform: rotate(0);
      }
    }
  }

  &__item {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--color-violet);

    &:not(:last-child) {
      margin-right: 30px;

      @media (--lg) {
        margin-right: 20px;
      }
    }

    @media (--xl) {
      font-size: 14px;
    }
  }

  &__cta {
    margin-left: 20px;
  }

  &__burger {
    display: none;

    & svg {
      stroke: var(--color-violet);
      transition: .2s;
      
      & g {
        &:first-child {
          opacity: 1;
          transition: opacity 0s .2s;
          
          & > line {
            transition: transform .2s .2s;
            transform: translateY(0px);
          }
        }
        
        &:last-child {
          opacity: 0;
          transition: opacity 0s .2s;
          
          & > line {
            transition: transform .2s;
            transform: rotate(0deg);
            transform-origin: center;
          }
        }
      }
    }
  
  &.menu-open svg {
    
    & g {
      &:first-child {
        opacity: 0;
        
        & > line {
          transition: transform .2s;
          
          &:first-child {
            transform: translateY(5px);
          }
          
          &:last-child {
            transform: translateY(-5px);
          }
        }
      }
      
      &:last-child {
        opacity: 1;
        
        & > line {
          transition: transform .2s .2s;

          &:first-child {
            transform: rotate(45deg);
          }
          
          &:last-child {
            transform: rotate(-45deg);
          }
        }
      }
    }  
  }

    @media (--md) {
      display: block;
    }
  }
}

.logo {
  width: 100%;
  max-width: 172px;
  object-fit: contain;

  @media (--sm) {
    max-width: 120px;
  }
}

.menu {
  position: absolute;
  top: var(--navbar-h);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--navbar-h));
  max-height: 540px;
  background-color: var(--color-white);
  box-shadow: 0 20px 20px -5px rgb(0 0 0 / 20%);
  z-index: 100;

  @media (--md) {
    max-height: none;
  }

  &__wrapper {
    width: 100%;
    height: 100%;
    padding: var(--container-padding-w);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (--md) {
      display: block;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    padding: 0 20px;

    @media (--md) {
      display: block;
    }

    & img {
      min-width: 130px;
      height: 66px;
      width: 50%;
      object-fit: contain;
      object-position: left;
      margin-bottom: 20px;
    }

    & h4 {
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      color: var(--color-violet);
      margin-bottom: 10px;

      @media (--sm) {
        font-size: 14px;
      }
    }

    & p {
      font-size: 14px;
      line-height: 1.25;

      @media (--sm) {
        font-size: 12px;
      }

      & svg { 
        margin-left: 5px;
      }
    }

    & > .btn {
      max-width: 122px;
      margin-top: 20px;

      @media (--md) {
        display: none;
        margin-top: 0;
      }
    }
  }

  &-btn {
    display: none;
    
    @media (--md) {
      display: block;
      margin-top: 40px;
      text-align: center;
    }
  }
}

/* transition menu */
.menu-enter-active,
.menu-leave-active {
  transition: all .7s ease-in-out;
  transform: translateY(0);
  opacity: 1;
  height: calc(100vh - var(--navbar-h));
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(calc(-1 * var(--navbar-h)));
  opacity: 0;
  height: 0;
}

.swiper-slide {
  height: auto;
}

.btn-sale {
  padding: 5px 22px;
  border: 1px solid var(--color-violet);
  font-size: 19px;
  color: var(--color-white);
  background-color: var(--color-violet);
  transition: background-color .3s ease-in, color .3s ease-in;

  &:hover {
    color: var(--color-violet);
    background: transparent;
  }
}
</style>