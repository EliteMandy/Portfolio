import "style.css";

const front = document.getElementById('front')
const back = document.getElementById('back')
const btn = document.getElementById('flip-btn')

function handleFlip() {
  front.classList.toggle('flipped')
  back.classList.toggle('flipped')
}

btn.addEventListener('click', handleFlip)