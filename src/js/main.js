"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const glassCounter = document.querySelector('.glass__counter--js');
const buttonAdd = document.querySelector('.glass__button-add--js');
const buttonRemove = document.querySelector('.glass__button-remove--js');
const buttonZeroing = document.querySelector('.glass__button-zeroing--js');

let counter = 0;
const key = new Date().toISOString().slice(0, 10);


if(localStorage.getItem(key)) {
  glassCounter.innerHTML = localStorage.getItem(key);
} else {
  localStorage.setItem(key, counter);
  glassCounter.innerHTML = "0"; 
}

buttonAdd.addEventListener('click', (e) => {
  if(parseInt(localStorage.getItem(key)) >= 10) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
  }
  
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  glassCounter.innerHTML = localStorage.getItem(key);
});

buttonRemove.addEventListener('click', (e) => {
  if(parseInt(localStorage.getItem(key)) <= 0) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  }
  
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
  glassCounter.innerHTML = localStorage.getItem(key);
});

buttonZeroing.addEventListener('click', (e) => {
  glassCounter.value = localStorage.setItem(key, counter);
  glassCounter.innerHTML = "0";
})







