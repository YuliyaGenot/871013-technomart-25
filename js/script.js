  var link = document.querySelector(".login-link");
  var popup = document.querySelector(".modal-login");


  var mapLink = document.querySelector(".contacts-map");

  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    });

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

  mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
