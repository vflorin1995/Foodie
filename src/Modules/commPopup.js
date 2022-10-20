import './commPopup.css';
import PostCommentData from './postComment.js';

const overlay = document.getElementById('overlay');
const getData = async (IdMeal) => {
  // create html elements here
  let mealData = [];
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdMeal}`)
    .then((response) => response.json())
    .then((data) => {
      data = data.meals;
      mealData = data;
      return fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wIvcfoeCMowsKdAOdXJy/comments?item_id=${IdMeal}`);
    })
    .then((response) => response.json())
    .then((commData) => {
      const div = `<div class="popup-container" id="popup">
        <div class="popup-holder">
            <div class="close-popup">
            <i id="close" href="#" class="fa-solid fa-close fa-2x close-popup"></i>
            </div>
            <div class="meal-image">
            <img src="${mealData[0].strMealThumb}" alt="food image" class="">
            </div>
            <h2 class="meal-name">${mealData[0].strMeal}</h2>
            <div class="meal-desc">
              <div class="meal-desc-left">
                <ul class="meal-desc-ul">
                   <li><strong>Category:</strong> <span> &nbsp </span> ${mealData[0].strCategory}</li>
                  <li><strong>Watch Video:</strong><span> &nbsp </span> <a href="${mealData[0].strYoutube}">Youtube Link</a></li>
                </ul>
              </div>
              <div class="meal-desc-right">
                <ul class="meal-desc-ul">
                  <li><strong>Tags:</strong> <span> &nbsp </span> ${mealData[0].strTags}</li>
                  <li><strong>Area:</strong> <span> &nbsp </span> ${mealData[0].strArea}</li>
                 </ul>
              </div>
            </div>
            <div id="display-comm">
            </div>
            <div class="add-comm">
            <h3 class="heading-addcomment">Add a comment </h3>
            <form id="comm-form">
            <input type="text" name="userName" id="userName" placeholder="Your name">
            <input type="text" name="comment " id="comment" placeholder="Your insights">
            <p id="status"></p>
             <button id="comm-submit" type="submit">Comment</button>
          </form>
            </div>
        </div>
        </div>`;
      overlay.innerHTML = div;

      // Create DOM Elements for User Comments
      const displayComments = document.getElementById('display-comm');
      const commentCount = document.createElement('h3');
      let commCounts = commData.length;
      if (!(commCounts > 0)) {
        commCounts = 0;
        commentCount.innerText = `Comments (${commCounts})`;
        commentCount.classList = 'comment-count';
        displayComments.append(commentCount);
      } else {
        commentCount.innerText = `Comments (${commCounts})`;
        commentCount.classList = 'comment-count';
        displayComments.append(commentCount);
        const container = document.createElement('div');
        container.classList = 'com-container';
        commData.forEach((item) => {
          const commentDetail = document.createElement('p');
          commentDetail.innerText = `${item.creation_date} ${item.username}: ${item.comment}`;
          commentDetail.classList = 'comment-detail';
          container.append(commentDetail);
          displayComments.append(container);
        });
      }

      // Close Button function for Comment Popup
      const closeButton = document.getElementById('close');
      closeButton.addEventListener('click', () => {
        if (overlay.style.display !== 'none') {
          overlay.style.display = 'none';
        }
      });

      const commSubmitBtn = document.getElementById('comm-submit');
      const userName = document.getElementById('userName');
      const comment = document.getElementById('comment');
      const itemId = IdMeal;
      const comcontainer = document.querySelector('.com-container');
      commSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!(userName.value === '' && comment.value === '')) {
          PostCommentData(itemId, userName.value, comment.value);
          const commName = document.createElement('p');

          let today = new Date();
          const dd = String(today.getDate()).padStart(2, '0');
          const mm = String(today.getMonth() + 1).padStart(2, '0');
          const yyyy = today.getFullYear();
          today = `${yyyy}-${mm}-${dd}`;
          commCounts += 1;
          commentCount.innerText = `Comments (${commCounts})`;
          commName.innerText = `${today} ${userName.value}: ${comment.value}`;
          comcontainer.append(commName);
          userName.value = '';
          comment.value = '';
        }
      });
    })
    .catch((error) => {
      console.warn(`warning error:${error}`);
    });
};
const PopupWindowOn = (id) => {
  if (overlay.style.display !== 'block') {
    overlay.style.display = 'block';
    getData(id);
  }
};

export default PopupWindowOn;