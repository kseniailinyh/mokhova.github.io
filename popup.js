'use strict';
var popup = document.querySelector('.popup-time');

document.querySelector('.link').addEventListener('click', function () {
  popup.classList.remove('invisible');
});

document.querySelector('.popup-time-close').addEventListener('click', function(evt) {
    popup.classList.add('invisible');
});

document.querySelector('.popup-time-cancel').addEventListener('click', function(evt) {
    popup.classList.add('invisible');
});
