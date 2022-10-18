import './style.css';
import picture from './food.png';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wIvcfoeCMowsKdAOdXJy/likes/';
const section = document.querySelector('.items');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data = data.meals;
    console.log(data);
    data.forEach((item) => {
      const container = document.createElement('div');
      container.classList = 'container';

      const id = document.createElement('p');
      id.innerText = item.idMeal;
      id.classList = 'displayNone';

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

      container.append(image, title, id, commentBtn, reservationBtn);
      section.append(container);
    });
  })
  .then(fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      const ids = document.querySelectorAll('.displayNone');
      data.forEach((element) => {
        ids.forEach((id) => {
          if ((element.item_id) === Number((id.innerText))) {
            const likeCnt = document.createElement('div');
            likeCnt.innerText = `${element.likes} likes`;
            likeCnt.className = 'likes';
            const x = id.parentElement;
            x.insertBefore(likeCnt, id);
          }
        });
      });
    }));