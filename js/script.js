var HIDDEN = "visually-hidden";

initOptionsSlider();
initOpportunitySlider();
initWriteUsModal();
initMapModal();

function initWriteUsModal() {
  var writeUs = {
    open: document.querySelector(".write-us"),
    modal: document.querySelector(".modal-feedback-form"),
    close: document.querySelector(".modal-feedback-form__close"),
    form: document.querySelector(".modal-feedback-form__form"),
  };

  writeUs.open.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.modal.classList.remove(HIDDEN);
  });

  writeUs.close.addEventListener("click", function () {
    writeUs.modal.classList.add(HIDDEN);
  });

  writeUs.form.addEventListener("submit", function () {
    writeUs.modal.classList.add(HIDDEN);
  });

  // close on escape
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!writeUs.modal.classList.contains(HIDDEN)) {
        evt.preventDefault();
        writeUs.modal.classList.add(HIDDEN);
      }
    }
  });
}

function initMapModal() {
  var map = {
    open: document.querySelector(".main__map"),
    modal: document.querySelector(".modal-map"),
    close: document.querySelector(".modal-map__close"),
  };

  map.open.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.modal.classList.remove(HIDDEN);
  });

  map.close.addEventListener("click", function () {
    map.modal.classList.add(HIDDEN);
  });

  // close on escape
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!map.modal.classList.contains(HIDDEN)) {
        evt.preventDefault();
        map.modal.classList.add(HIDDEN);
      }
    }
  });
}

function initOptionsSlider() {
  var NUMBER_OF_SLIDES = 3;

  var options = {
    previous: document.querySelector(".options__slider-previous"),
    next: document.querySelector(".options__slider-next"),
    slides: document.querySelectorAll(".options__slide"),
    currentSlide: 0,
  };

  function changeSlide(prevIndex, nextIndex) {
    options.slides[prevIndex].classList.add(HIDDEN);
    options.slides[nextIndex].classList.remove(HIDDEN);
    options.currentSlide = nextIndex;
  }

  options.next.addEventListener("click", function (evt) {
    evt.preventDefault();
    changeSlide(
      options.currentSlide,
      (options.currentSlide + 1) % NUMBER_OF_SLIDES
    );
  });

  options.previous.addEventListener("click", function (evt) {
    evt.preventDefault();
    changeSlide(
      options.currentSlide,
      (options.currentSlide + NUMBER_OF_SLIDES - 1) % NUMBER_OF_SLIDES
    );
  });
}

function initOpportunitySlider() {
  var ACTIVE = "opportunity__list-companent_active";

  var opportunity = {
    deliveryButton: document.querySelector(".opportunity__delivery-button"),
    delivery: document.querySelector(".opportunity__delivery"),
    guaranteeButton: document.querySelector(".opportunity__guarantee-button"),
    guarantee: document.querySelector(".opportunity__guarantee"),
    creditButton: document.querySelector(".opportunity__credit-button"),
    credit: document.querySelector(".opportunity__credit"),

    buttons: document.querySelectorAll(".opportunity__list-companent"),
    changingBlocks: document.querySelectorAll(".opportunity__changing-block"),
  };

  function hideAllBlocks() {
    opportunity.changingBlocks.forEach(function (b) {
      b.classList.add(HIDDEN);
    });
  }

  function deactivateAllButtons() {
    opportunity.buttons.forEach(function (b) {
      b.classList.remove(ACTIVE);
    });
  }

  opportunity.deliveryButton.addEventListener("click", function () {
    hideAllBlocks();
    deactivateAllButtons();
    opportunity.deliveryButton.classList.add(ACTIVE);
    opportunity.delivery.classList.remove(HIDDEN);
  });

  opportunity.guaranteeButton.addEventListener("click", function () {
    hideAllBlocks();
    deactivateAllButtons();
    opportunity.guaranteeButton.classList.add(ACTIVE);
    opportunity.guarantee.classList.remove(HIDDEN);
  });

  opportunity.creditButton.addEventListener("click", function () {
    hideAllBlocks();
    deactivateAllButtons();
    opportunity.creditButton.classList.add(ACTIVE);
    opportunity.credit.classList.remove(HIDDEN);
  });
}
