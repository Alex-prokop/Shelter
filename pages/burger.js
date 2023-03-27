let navigation = document.querySelector('.navigation');
let burger = document.querySelector('.burger');
let body = document.querySelector('body');
let shadow = document.querySelector('shadow');

burger.addEventListener('click', (evt) => {
  evt.stopPropagation();
  burger.classList.toggle('active');
  navigation.classList.toggle('active');

  burger.style.display = 'block';
  body.style.overflow = burger.classList.contains('active')
    ? 'hidden'
    : 'unset';
});
document.addEventListener('click', () => {
  if (!burger.classList.contains('active')) return;

  burger.classList.toggle('active');
  navigation.classList.toggle('active');

  burger.style.display = 'block';
  body.style.overflow = 'unset';
});
