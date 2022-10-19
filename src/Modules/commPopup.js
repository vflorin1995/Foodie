import './commPopup.css';

const overlay = document.getElementById('overlay');

const getData = async (IdMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdMeal}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data = data.meals;
      console.log(data[0].strCategory);
      const div = `<div class="popup-container" id="popup">
      <div class="popup-holder">
          <div class="close-popup">
          <i id="close" href="#" class="fa-solid fa-close fa-2x close-popup"></i>
          </div>
          <div class="meal-image">
          <img src="${data[0].strMealThumb}" alt="food image" class="">
          </div>
          <h2 class="meal-name">${data[0].strMeal}</h2>
          <div class="meal-desc">
          <div class="meal-desc-left">
        <ul class="meal-desc-ul">
          <li><strong>Category:</strong> <span> &nbsp </span> ${data[0].strCategory}</li>
          <li><strong>Watch Video:</strong><span> &nbsp </span> <a href="${data[0].strYoutube}">Youtube Link</a></li>
        </ul>
          </div>
          <div class="meal-desc-right">
          <ul class="meal-desc-ul">
          <li><strong>Tags:</strong> <span> &nbsp </span> ${data[0].strTags}</li>
          <li><strong>Area:</strong> <span> &nbsp </span> ${data[0].strArea}</li>
        </ul>
          </div>
          </div>
      </div>
      </div>`;
      overlay.innerHTML = div;

      const closeButton = document.getElementById('close');
      console.log(closeButton);
      closeButton.addEventListener('click', () => {
        if (overlay.style.display !== 'none') {
          overlay.style.display = 'none';
        }
      });
    });
};

const PopupWindowOn = (id) => {
  if (overlay.style.display !== 'block') {
    overlay.style.display = 'block';
    getData(id);
  }
};

export default PopupWindowOn;