import './style.css';
import counter from './Modules/counter.js';
import popupWindow from './Modules/commPopup.js';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wIvcfoeCMowsKdAOdXJy/likes/';
const section = document.querySelector('.items');

const displayLikes = (arr) => {
  const ids = document.querySelectorAll('.displayNone');
  arr.forEach((element) => {
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
};

const getData = () => {
  fetch(url2)
    .then((response) => response.json())
    .then((data) => displayLikes(data));
};

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
      image.src = item.strMealThumb;

      const title = document.createElement('div');
      title.innerText = item.strMeal;
      title.classList = 'title';

      const like = document.createElement('div');
      like.innerHTML = '<i class="fa-regular fa-heart"></i>';
      like.className = 'likeButton';

      const box = document.createElement('div');
      box.classList = 'flex box';
      box.append(title, like);

      const commentBtn = document.createElement('button');
      commentBtn.innerText = 'Comment';
      commentBtn.classList = 'commButton';
      commentBtn.id = item.idMeal;

      const reservationBtn = document.createElement('button');
      reservationBtn.innerText = 'Reservation';

      container.append(image, box, id, commentBtn, reservationBtn);
      section.append(container);
    });

    const comButton = Array.from(document.querySelectorAll('.commButton'));
    comButton.forEach((btn) => {
      btn.addEventListener('click', () => {
        popupWindow(btn.id);
      });
    });

    const likeBtn = Array.from(document.querySelectorAll('.likeButton'));
    likeBtn.forEach((item) => {
      item.addEventListener('click', () => {
        let likeNumber = parseInt(item.parentElement.nextElementSibling.innerText, 10);
        const index = Number(item.parentElement.nextElementSibling.nextElementSibling.innerText);
        const object = {
          item_id: index,
          likes: likeNumber,
        };
        fetch(url2, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(object),
        });
        likeNumber += 1;
        item.parentElement.nextElementSibling.innerText = `${likeNumber} likes`;
        item.innerHTML = '<i class="fa-solid fa-heart"></i>';
      }, { once: true });
    });

    const containers = Array.from(document.querySelectorAll('.container'));
    const meals = document.querySelector('.meals');
    meals.innerText = `${counter(containers)} Meals`;
  })
  .then(getData());
