let pets = [
  {
    name: 'Katrine',
    img: '../../assets/images/pets-katrine.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Jennifer',
    img: '../../assets/images/pets-jennifer.png',
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Woody',
    img: '../../assets/images/pets-woody.png',
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none'],
  },
  {
    name: 'Sophia',
    img: '../../assets/images/pets-sophia.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Scarlett',
    img: '../../assets/images/pets-scarlet.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Timmy',
    img: '../../assets/images/pets-timmy.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none'],
  },
  {
    name: 'Freddie',
    img: '../../assets/images/pets-freddie.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    name: 'Charly',
    img: '../../assets/images/pets-charly.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas'],
  },
];

let popup = document.querySelector('.popup');

// --- open popup ---

function openPopup(el) {
  popup.classList.add('popup-show');
  document.body.classList.add('stop-scrolling');

  popup.innerHTML = `<div class='popup-window'>
<button type="button" class="close-popup"><img src='../../assets/icons/Vector.png'></button>
<div class='popup-card'>
<div class='popup-pet-img'>
<img src='${el.img}'></div>
<div class='popup-pet-content'>
<div class='popup-header'>
<h3 class='popup-pet-name'>${el.name}</h3>
<h4 class='popup-pet-type'>${el.type} - ${el.breed}</h4></div>
<h5 class='popup-pet-description'>${el.description}</h5>
<ul class='popup-pet-list'>
<li class='pet-list-item'><h5><b>Age:</b> ${el.age}</h5></li>
<li class='pet-list-item'><h5><b>Inoculations:</b> ${el.inoculations}</h5></li>
<li class='pet-list-item'><h5><b>Diseases: </b>${el.diseases}</h5></li>
<li class='pet-list-item'><h5><b>Parasites: </b>${el.parasites}</h5></li>
</ul>
</div>
</div>
</div>
`;
  const close_popup = document.querySelector('.close-popup');
  close_popup.addEventListener('click', closePopup);

  document
    .querySelector('.popup-card')
    .addEventListener('mouseleave', function () {
      document.querySelector('.close-popup').classList.add('hover');
    });
  document
    .querySelector('.popup-card')
    .addEventListener('mouseenter', function () {
      document.querySelector('.close-popup').classList.remove('hover');
    });
}

// close popup
function closePopup() {
  popup.classList.remove('popup-show');
  document.body.classList.remove('stop-scrolling');
}

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    closePopup();
  }
});
const petsSliderContainer = document.querySelector('.pets-slider-container');

function addCard(arr) {
  petsSliderContainer.innerHTML = '';
  for (let element = 0; element < arr.length; element++) {
    let petsCard = document.createElement('div');
    petsCard.classList.add('pets-card');
    petsCard.innerHTML = `<div class="pets-card-img"><img src="${arr[element].img}" alt="${arr[element].name}">
    </div><div class="title-name-pets"><p>${arr[element].name}</p></div>
    <div class="btn btn-white"><a class="card-button pets-btn">Learn more</a></div>`;

    petsCard.addEventListener('click', () => openPopup(arr[element]));
    petsSliderContainer.append(petsCard);
  }
}

// slider

let petsBtnLeft = document.querySelector('.pets-btn-left');
let petsBtnRight = document.querySelector('.pets-btn-right');

let currentIndex = 0;
let prevIndex = null;
let slideCount = 3;

let selectedPets = [];
let selectedIndexes = [];
let newPets = [];

function generateCards() {
  while (selectedPets.length < slideCount) {
    const randomIndex = Math.floor(Math.random() * pets.length);
    const randomPet = pets[randomIndex];
    if (
      !selectedPets.includes(randomPet) &&
      !selectedIndexes.includes(randomIndex)
    ) {
      selectedPets.push(randomPet);
      selectedIndexes.push(randomIndex);
    }
  }
  while (newPets.length < slideCount) {
    const randomPet = pets[Math.floor(Math.random() * pets.length)];
    if (!selectedPets.includes(randomPet) && !newPets.includes(randomPet)) {
      newPets.push(randomPet);
    }
  }
  addCard(selectedPets);
}

generateCards();

petsBtnRight.addEventListener('click', function () {
  selectedPets = newPets;
  newPets = [];
  slideLeft();
});

petsBtnLeft.addEventListener('click', function () {
  selectedPets = newPets;
  newPets = [];
  slideRight();
});

function slideLeft() {
  document
    .querySelectorAll('.pets-card')
    .forEach((card) => card.classList.add('slide-left'));

  setTimeout(function () {
    generateCards();
  }, 300);
}

function slideRight() {
  document
    .querySelectorAll('.pets-card')
    .forEach((card) => card.classList.add('slide-right'));
  setTimeout(function () {
    generateCards();
  }, 300);
}
