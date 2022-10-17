import './style.css';
import picture from './food.png';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
let section = document.querySelector('.items');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data = data.meals;
    console.log(data);
    data.forEach((item) => {
        let container = document.createElement('div');
        container.classList = 'container';

        let image = document.createElement('img');
        image.classList = 'picture';
        image.src = picture;

        let title = document.createElement('div');
        title.innerText = item.strMeal;
        title.classList = 'title';

        let commentBtn = document.createElement('button');
        commentBtn.innerText = 'Comment';

        let reservationBtn = document.createElement('button');
        reservationBtn.innerText = 'Reservation';

        container.append(image, title, commentBtn, reservationBtn);
        section.append(container);
    });
  });