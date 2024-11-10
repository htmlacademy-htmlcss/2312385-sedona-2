const modal = document.querySelector(".modal-container");
const closeButton = document.querySelector(".modal-close-button");

closeButton.addEventListener("click", () => {
  modal.classList.add("modal-hide");
})
