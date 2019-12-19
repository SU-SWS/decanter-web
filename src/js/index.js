import 'decanter/core/src/js/decanter-no-markup.js';

const hamburger = document.getElementById('hamburger');

const isExpanded = x => x.getAttribute('aria-expanded') === 'true';
const setExpanded = (x, value) => x.setAttribute('aria-expanded', value);

hamburger.addEventListener('click', function (e) {
  if (isExpanded(hamburger)) {
    setExpanded(hamburger, 'false');
    hamburger.innerHTML = 'Menu';
  }
  else {
    setExpanded(hamburger, 'true');
    hamburger.innerHTML = 'Close';
  }
});
