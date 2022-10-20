"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Modules_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _Modules_commPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);




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
        (0,_Modules_commPopup_js__WEBPACK_IMPORTED_MODULE_2__["default"])(btn.id);
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
    meals.innerText = `${(0,_Modules_counter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(containers)} Meals`;
  })
  .then(getData());


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  max-width: 1200px;\n  margin: 0 auto;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n.flex {\n  display: flex;\n}\n\nul {\n  padding: 0;\n  margin-bottom: 50px;\n}\n\nul > * {\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  list-style: none;\n}\n\n.flex-justify {\n  justify-content: space-around;\n}\n\nnav {\n  font-size: 24px;\n}\n\nfooter {\n  border: 2px solid black;\n  border-radius: 10px;\n  text-align: center;\n  max-width: 1200px;\n  margin: 24px;\n  padding: 6px 16px;\n  line-height: 1.5;\n}\n\n.items {\n  margin: 24px;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.picture {\n  max-width: 80vw;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 24px;\n  padding-bottom: 16px;\n  border-radius: 10px;\n  margin-top: 36px;\n}\n\n.container:hover {\n  box-shadow: 5px 5px 10px black;\n  scale: 1.05;\n}\n\n.title {\n  font-size: 24px;\n  padding: 12px;\n}\n\nbutton {\n  padding: 10px;\n  margin: 6px;\n  border-radius: 10px;\n  background-color: bisque;\n}\n\n.displayNone {\n  display: none;\n}\n\n.likes {\n  font-size: 16px;\n  color: darkslategray;\n}\n\n.box {\n  align-items: center;\n}\n\n.picture {\n  border-radius: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .items {\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 20px;\n  }\n\n  .picture {\n    width: 25vw;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "652d5f86b4bb9fd1d085.jpg";

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counter = (arr) => arr.length;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commPopup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



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
            <input type="text" name="userName" id="userName" required placeholder="Your name">
            <input type="text" name="comment " id="comment" required placeholder="Your insights">
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
        if (!(userName.value === '' || comment.value === '')) {
          (0,_postComment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(itemId, userName.value, comment.value);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWindowOn);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_commPopup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_commPopup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_commPopup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_commPopup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_commPopup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 16 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #fffdfd;\n  background-color: rgba(255, 255, 255, 0.807);\n  z-index: 100000;\n  display: none;\n}\n\n.popup-body {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#popup {\n  border: 2px solid black;\n  border-radius: 20px;\n  padding: 0 24px 24px;\n  width: 70%;\n  margin: 0 auto;\n  height: 80%;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(255, 255, 255, 0.16);\n  z-index: 100000;\n  position: fixed;\n  top: 10px;\n  left: 20px;\n  right: 20px;\n  bottom: 20px;\n  overflow-y: scroll;\n}\n\n.popup-holder {\n  display: flex;\n  flex-direction: column;\n}\n\n.meal-image {\n  display: flex;\n  justify-content: center;\n}\n\n.meal-image > img {\n  width: 84vw;\n  height: 64vw;\n  border-radius: 10px;\n}\n\n.meal-name {\n  text-align: center;\n  font-size: 8vw;\n}\n\n.meal-desc {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.meal-desc-ul > li {\n  padding: 10px;\n  font-size: 18px;\n  flex-wrap: wrap;\n}\n\n.meal-desc-right > ul {\n  margin-top: 0;\n}\n\n.meal-desc-left > ul {\n  margin-bottom: 0;\n}\n\n.close-popup {\n  color: rgb(5, 5, 5);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin: 8px;\n}\n\n.add-comm {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-comm > input {\n  padding: 10px;\n}\n\n.comment-count {\n  text-align: center;\n}\n\n.add-comm > form {\n  text-align: center;\n}\n\n.heading-addcomment {\n  text-align: center;\n}\n\n/* Desktop width > 768px */\n@media (min-width: 768px) {\n  .meal-image > img {\n    width: 36vw;\n    height: 28vw;\n  }\n\n  .meal-name {\n    text-align: center;\n    font-size: 2.5vw;\n  }\n\n  .meal-desc {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .meal-desc-ul > li {\n    padding: 10px;\n    font-size: 18px;\n    word-wrap: break-word;\n  }\n\n  .meal-desc-left > ul {\n    margin-top: 0;\n  }\n\n  .meal-desc-right > ul {\n    margin-top: 0;\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wIvcfoeCMowsKdAOdXJy/comments';
const PostCommentData = async (id, name, comm) => {
  const body = JSON.stringify({ item_id: id, username: name, comment: comm });
  const response = await fetch(url, { method: 'POST', body, headers: { 'Content-type': 'application/json; charset=UTF-8' } });
  const data = await response.json();
  const returnResponse = data.result;
  return returnResponse;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostCommentData);

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);