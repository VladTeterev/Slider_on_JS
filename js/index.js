// Массив с картинками, описанием, заголовками
let images = [
  {
    url: "../images/image1.jpg",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don<br>LCD admiral",
    area: "81 m2",
    time: "3.5 months",
  },
  {
    url: "../images/image2.jpg",
    title: "Sochi Thieves",
    city: "Sochi<br>Thieves",
    area: "105 m2",
    time: "4 months",
  },
  {
    url: "../images/image3.jpg",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don<br>Patriotic",
    area: "93 m2",
    time: "3 months",
  },
];

function initSlider() {
  if (!images || !images.length) return;
  // Находим элементы страницы
  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__navig");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderTitles = document.querySelector(".slider__titles");
  let infoCity = document.querySelector(".info_city");
  let infoArea = document.querySelector(".info_area");
  let infoTime = document.querySelector(".info_time");

  sliderActive();
  initArrows();

  // Активация слайдера
  function sliderActive() {
    // Добавление элементов слайдера из массива
    images.forEach((image, index) => {
      // Картинки
      let imageDiv = `<div class="image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;

      // Точки переключения слайдов
      let dotsDiv = `<div class="dot_item n${index} ${
        index === 0 ? "dot__active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dotsDiv;

      sliderDots.querySelectorAll(".dot_item").forEach((dot) => {
        dot.addEventListener("click", function () {
          moveSlider(this.dataset.index);
        });
      });

      // Вкладки переключения(заголовки)
      let titlesDiv = `<div class="slider__title n${index} ${
        index === 0 ? "title__active" : ""
      }" data-index="${index}">${images[index].title}</div>`;
      sliderTitles.innerHTML += titlesDiv;

      sliderTitles.querySelectorAll(".slider__title").forEach((title) => {
        title.addEventListener("click", function () {
          moveSlider(this.dataset.index);
        });
      });

      // Параграфы с описанием
      let cityDiv = `<p class="cards__text n${index} ${
        index === 0 ? "cards__active" : ""
      }" data-index="${index}">${images[index].city}</p>`;
      infoCity.innerHTML += cityDiv;

      let areaDiv = `<p class="cards__text n${index} ${
        index === 0 ? "cards__active" : ""
      }" data-index="${index}">${images[index].area}</p>`;
      infoArea.innerHTML += areaDiv;

      let timeDiv = `<p class="cards__text n${index} ${
        index === 0 ? "cards__active" : ""
      }" data-index="${index}">${images[index].time}</p>`;
      infoTime.innerHTML += timeDiv;
    });
  }

  // Стрелки переключения
  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  // Изменение состояния элементов при переключении слайдов
  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".dot__active").classList.remove("dot__active");
    sliderDots.querySelector(".n" + num).classList.add("dot__active");
    sliderTitles.querySelector(".title__active").classList.remove("title__active");
    sliderTitles.querySelector(".n" + num).classList.add("title__active");
    infoCity.querySelector(".cards__active").classList.remove("cards__active");
    infoCity.querySelector(".n" + num).classList.add("cards__active");
    infoArea.querySelector(".cards__active").classList.remove("cards__active");
    infoArea.querySelector(".n" + num).classList.add("cards__active");
    infoTime.querySelector(".cards__active").classList.remove("cards__active");
    infoTime.querySelector(".n" + num).classList.add("cards__active");
  }
}

document.addEventListener("DOMContentLoaded", initSlider);
