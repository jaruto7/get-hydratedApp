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

let counter = 0;
const key = new Date().toISOString().slice(0, 10);

const setLocalStorageCounter = (e) => {
  glassCounter.innerHTML = counter;
  localStorage.setItem(key, counter);
}

buttonAdd.addEventListener('click', (e) => {
  if(localStorage.getItem(key)) {
    glassCounter.innerHTML = ++counter;
    localStorage.setItem(key, counter);    
  } else {
    localStorage.setItem(key, 0);
  }
  
  if(localStorage.getItem(key) > 10) {
    counter = 10;
    setLocalStorageCounter();
  }
});

buttonRemove.addEventListener('click', (e) => {
  if(localStorage.getItem(key)) {
    glassCounter.innerHTML = --counter;
    localStorage.setItem(key, counter);    
  } else {
    localStorage.setItem(key, 0);
  }
  
  if(localStorage.getItem(key) < 0) {
    counter = 0;
    setLocalStorageCounter();
  }
});



