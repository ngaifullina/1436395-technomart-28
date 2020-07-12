initOptionsSlider();
initOpportunitySlider();
initWriteUsModal();
initMapModal();

function initWriteUsModal() {
  var HIDDEN = "visually-hidden";

  var open = document.querySelector(".write-us");
  var modal = document.querySelector(".modal-feedback-form");
  var close = document.querySelector(".modal-feedback-form__close");
  var form = document.querySelector(".modal-feedback-form__form");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove(HIDDEN);
  });

  close.addEventListener("click", function () {
    modal.classList.add(HIDDEN);
  });

  form.addEventListener("submit", function () {
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

function initMapModal() {
  var HIDDEN = "visually-hidden";

  var open = document.querySelector(".main__map");
  var modal = document.querySelector(".modal-map");
  var close = document.querySelector(".modal-map__close");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove(HIDDEN);
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

function initOptionsSlider() {
  var HIDDEN = "visually-hidden";
  var ACTIVE = "options__indicator_active";

  var NUMBER_OF_SLIDES = 2;

  var currentSlide = 0;

  var prev = document.querySelector(".option__slider-control_prev");
  var next = document.querySelector(".option__slider-control_next");

  var slides = document.querySelectorAll(".options__slide");
  var indicators = document.querySelectorAll(".options__indicator");

  function changeSlideTo(nextIndex) {
    slides[currentSlide].classList.add(HIDDEN);
    slides[nextIndex].classList.remove(HIDDEN);
    indicators[currentSlide].classList.remove(ACTIVE);
    indicators[nextIndex].classList.add(ACTIVE);
    currentSlide = nextIndex;
  }

  next.addEventListener("click", function (evt) {
    evt.preventDefault();
    changeSlideTo((currentSlide + 1) % NUMBER_OF_SLIDES);
  });

  prev.addEventListener("click", function (evt) {
    evt.preventDefault();
    changeSlideTo((currentSlide + NUMBER_OF_SLIDES - 1) % NUMBER_OF_SLIDES);
  });

  indicators.forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      changeSlideTo(index);
    });
  });
}

function initOpportunitySlider() {
  var HIDDEN = "visually-hidden";
  var ACTIVE = "opportunity__list-companent_active";

  var buttons = document.querySelectorAll(".opportunity__list-companent");
  var changingBlocks = document.querySelectorAll(
    ".opportunity__changing-block"
  );

  function hideAllBlocks() {
    changingBlocks.forEach(function (b) {
      b.classList.add(HIDDEN);
    });
  }

  function deactivateAllButtons() {
    buttons.forEach(function (b) {
      b.classList.remove(ACTIVE);
    });
  }

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      hideAllBlocks();
      deactivateAllButtons();
      button.classList.add(ACTIVE);
      changingBlocks[index].classList.remove(HIDDEN);
    });
  });
}
