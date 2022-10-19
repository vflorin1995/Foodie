import './style.css';
import popupWindowStyles from './Modules/commPopup.css';
import picture from './food.png';
import popupWindow from './Modules/commPopup.js';
const overlay = document.getElementById('overlay');

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
const section = document.querySelector('.items');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data = data.meals;
    data.forEach((item) => {
      const container = document.createElement('div');
      container.classList = 'container';

      const image = document.createElement('img');
      image.classList = 'picture';
      image.src = picture;

      const title = document.createElement('div');
      title.innerText = item.strMeal;
      title.classList = 'title';

      const commentBtn = document.createElement('button');
      commentBtn.innerText = 'Comment';
      commentBtn.classList = 'commButton';
      commentBtn.id = item.idMeal;

      const reservationBtn = document.createElement('button');
      reservationBtn.innerText = 'Reservation';

      container.append(image, title, commentBtn, reservationBtn);
      section.append(container);
    });
  });



