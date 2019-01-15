(function(){
  'use strict';

  const slideBar = document.getElementById('load__bar').style;
  const slideButton = document.getElementsByClassName('slide__button');
  let aleatorio = Math.round(Math.random()*10)
  for (let button of slideButton) {
    button.addEventListener('click', () => {
      for (var i = 0; i < 101; i++) {
        slideBar.transition = 'width' +' '+ aleatorio + "s";
        slideBar.width = i +"%"
      }
    })
  }
})();
