'use strict';

console.log('funguju');

const kosile = document.querySelector('#product-image')



document.querySelector('#bila').addEventListener('click', () => {
  kosile.style = "fill: white"
})  

document.querySelector('#cerna').addEventListener('click', () => {
  kosile.style = "fill: black"
})

document.querySelector('#cervena').addEventListener('click', () => {
  kosile.style = "fill: firebrick"
})

document.querySelector('#modra').addEventListener('click', () => {
  kosile.style = "fill: skyblue"
})