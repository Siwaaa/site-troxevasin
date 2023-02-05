import { throttle } from '../../throttle.js';

const header = document.querySelector('.navbar');
const heightHeaderCSS = 65;

export const headerBGhandler = throttle(() => { 
  let scrollTop = window.scrollY;
  
  if(scrollTop >= heightHeaderCSS && !header.classList.contains('.navbar-bg')){
    header.classList.add('navbar-bg')
  } else if (scrollTop <= heightHeaderCSS) {
    header.classList.remove('navbar-bg')
  }
}, 150)
