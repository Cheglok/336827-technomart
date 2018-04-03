var bucketLink = document.querySelector(".button-buy");
var bucketPopup = document.querySelector(".modal-bucket");
var bucketClose = bucketPopup.querySelector(".modal-close");
var bucketCarry = bucketPopup.querySelector(".button-modal-carry");
bucketLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  bucketPopup.classList.add("modal-show");
});
bucketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  bucketPopup.classList.remove("modal-show");
});
bucketCarry.addEventListener("click", function (evt) {
  evt.preventDefault();
  bucketPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (bucketPopup.classList.contains("modal-show")) {
      bucketPopup.classList.remove("modal-show");
    }
  }
});
