initCartAddModal();

function initCartAddModal() {
  var HIDDEN = "visually-hidden";

  var buyButtons = document.querySelectorAll(".product__buy");
  var modal = document.querySelector(".modal-cart-add");
  var close = document.querySelector(".modal-cart-add__close");
  var continueButton = document.querySelector(".modal-cart-add__continue");

  buyButtons.forEach(function (b) {
    b.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.remove(HIDDEN);
    });
  });

  continueButton.addEventListener("click", function () {
    modal.classList.add(HIDDEN);
  });

  close.addEventListener("click", function () {
    modal.classList.add(HIDDEN);
  });

  // close on escape
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!modal.classList.contains(HIDDEN)) {
        evt.preventDefault();
        modal.classList.add(HIDDEN);
      }
    }
  });
}
