let navigation = document.querySelector('.navigation');
let burger = document.querySelector('.burger');
let body = document.querySelector('body');
let shadow = document.querySelector('shadow');

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  navigation.classList.toggle('active');
  // shadow.classList.toggle('active');
});

burger.addEventListener('click', function () {
  burger.style.display = 'block';
  body.style.overflow = 'hidden';
});

navigation.addEventListener('click', function (event) {
  if (event.target === burger) {
    navigation.style.display = 'none';
    body.style.overflow = 'hiddem';
  }
});
