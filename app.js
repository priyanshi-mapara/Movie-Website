const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const translations = new Array(movieLists.length).fill(0);

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    const canSlide = itemNumber - (4 + clickCounter) + (4 - ratio) >= 0;

    if (canSlide) {
      translations[i] -= 300;
      movieLists[i].style.transform = `translateX(${translations[i]}px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      translations[i] = 0;
      clickCounter = 0;
    }
  });
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

const trailerButtons = document.querySelectorAll("[data-trailer]");

trailerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { trailer } = button.dataset;
    if (trailer) {
      window.open(trailer, "_blank", "noopener");
    }
  });
});
