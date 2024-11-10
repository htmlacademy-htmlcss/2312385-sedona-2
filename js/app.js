const modal = document.querySelector(".modal-container");
const closeButton = document.querySelector(".modal-close-button");
const searchButton = document.querySelector(".search-button");

closeButton.addEventListener("click", () => {
  modal.classList.add("modal-hide");
});

searchButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  modal.classList.remove("modal-hide");
})
