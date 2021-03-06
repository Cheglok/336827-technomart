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

var link = document.querySelector(".write-us-open");

var popup = document.querySelector(".modal-write-us");

var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");

var login = popup.querySelector("[name=writer-name]");

var email = popup.querySelector("[name=writer-email]");

var isStorageSupport = true;

var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    letter.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click",
  function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".contacts-map");

var mapPopup = document.querySelector(".modal-map-popup");

var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
