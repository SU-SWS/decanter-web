import 'decanter/core/src/js/decanter-no-markup.js';

const fullwidthToggle = document.getElementsByClassName('fullwidth-toggle');
const mainArea = document.querySelector('#__next > main');

fullwidthToggle[0].addEventListener('click', function (e) {
  mainArea.classList.add('fullwidth-view');
}, false);
