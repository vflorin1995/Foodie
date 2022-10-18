import './style.css';
import picture from './food.png';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
const section = document.querySelector('.items');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data = data.meals;
    console.log(data);
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

      const reservationBtn = document.createElement('button');
      reservationBtn.innerText = 'Reservation';

      container.append(image, title, commentBtn, reservationBtn);
      section.append(container);
    });
  });