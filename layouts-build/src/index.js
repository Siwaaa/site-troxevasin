import { createApp, reactive } from './petite-vue.es.js'
import { initSwiper } from './components/modal/swiper.js'
import { headerBGhandler } from './components/navbar/navbar.js'

document.addEventListener("DOMContentLoaded", startedCheck);
// window.addEventListener('resize', () => { fixVH() });

function startedCheck() {
  fixVH()
  document.addEventListener('scroll', headerBGhandler);
}

// Animation

const e = document.querySelectorAll("[data-animate-on-scroll]")
const t = new IntersectionObserver((e => {
  e.forEach((e => {
    e.isIntersecting && e.target.setAttribute("data-animate-on-scroll", "animated")
  }
  ))
}), {
  threshold: 0.25
});

e.forEach((e => {
  t.observe(e)
}
))

/*
* Решение проблемы с высотой моб браузеров
* with css: height = calc(var(--vh, 1vh) * 100);
*/
function fixVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}