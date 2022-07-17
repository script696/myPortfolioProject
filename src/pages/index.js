import './index.scss';

import {swiper} from '../utils/constants.js'


const dayNight = document.querySelector('.menu-theme__dayNight')
const menuToggle = document.querySelector('.menu-theme__menuToggle')
const body = document.querySelector('body')
const navigation = document.querySelector('.navigation')

dayNight.onclick = function () {
  body.classList.toggle('dark')
  dayNight.classList.toggle('active')
}
menuToggle.onclick = function () {
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}






const handleProjectMasc = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('project__insight-mask_deactivate')
    }
  });
}


const projectObserver = new IntersectionObserver(handleProjectMasc, { threshold: [0.9] });

document.querySelectorAll('.project__insight-mask').forEach(project => projectObserver.observe(project));