document.addEventListener("DOMContentLoaded", () => {
  const openPopupButtons = document.querySelectorAll("#openPopupButton");
  const interactiveModal = document.getElementById("interactiveModal");
  const closeButton = interactiveModal
    ? interactiveModal.querySelector(".close-button")
    : null;
  const diagonalBoxPlaceholder = document.getElementById(
    "diagonalBoxContainerPlaceholder"
  );

  let activeSection = null;

  const contactModal = document.getElementById("contactModal");
  let openContactModalFunction = null;
  if (typeof window.openContactModal === "function") {
    openContactModalFunction = window.openContactModal;
  }

  const diagboxClosingAnimationDuration = 750;

  function openInteractiveModalDiagbox() {
    if (interactiveModal) {
      interactiveModal.style.display = "flex";
      requestAnimationFrame(() => {
        interactiveModal.classList.add("show");
      });
      attachDiagonalBoxListeners();

      if (activeSection) {
        activeSection.classList.remove("active-expanded");
        activeSection = null;
      }

      const diagonalBoxContainer = diagonalBoxPlaceholder.querySelector(
        ".diagonal-box-container"
      );
      const diagonalSeparatorLine = diagonalBoxContainer
        ? diagonalBoxContainer.querySelector(".diagonal-separator-line")
        : null;
      if (diagonalSeparatorLine) {
        diagonalSeparatorLine.style.opacity = "1";
        diagonalSeparatorLine.style.visibility = "visible";
      }
    }
  }

  function closeInteractiveModalDiagbox() {
    if (interactiveModal) {
      interactiveModal.classList.remove("show");

      setTimeout(() => {
        interactiveModal.style.display = "none";

        if (activeSection) {
          activeSection.classList.remove("active-expanded");
        }
        activeSection = null;

        const diagonalBoxContainer = diagonalBoxPlaceholder.querySelector(
          ".diagonal-box-container"
        );
        const diagonalSeparatorLine = diagonalBoxContainer
          ? diagonalBoxContainer.querySelector(".diagonal-separator-line")
          : null;
        if (diagonalSeparatorLine) {
          diagonalSeparatorLine.style.opacity = "1";
          diagonalSeparatorLine.style.visibility = "visible";
        }
      }, diagboxClosingAnimationDuration);
    }
  }

  function attachDiagonalBoxListeners() {
    const diagonalHalves =
      diagonalBoxPlaceholder.querySelectorAll(".diagonal-half");
    const diagonalBoxContainer = diagonalBoxPlaceholder.querySelector(
      ".diagonal-box-container"
    );
    const diagonalSeparatorLine = diagonalBoxContainer
      ? diagonalBoxContainer.querySelector(".diagonal-separator-line")
      : null;

    if (!diagonalBoxContainer) {
      console.error("not found");
      return;
    }

    if (diagonalBoxContainer.dataset.listenersAttached) {
      return;
    }
    diagonalBoxContainer.dataset.listenersAttached = true;
    diagonalHalves.forEach((half) => {
      const link = half.querySelector(".half-content");
      const targetUrl = link ? link.getAttribute("href") : null;
      const navigationDelay = link ? parseInt(link.dataset.delay) : 0;

      if (link) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
        });
      }

      half.addEventListener("click", () => {
        if (activeSection === half) {
          if (
            targetUrl &&
            !link.classList.contains("open-contact-modal-diag")
          ) {
            window.location.href = targetUrl;
          }
          return;
        }

        if (activeSection) {
          activeSection.classList.remove("active-expanded");
        }

        half.classList.add("active-expanded");
        activeSection = half;

        if (diagonalSeparatorLine) {
          diagonalSeparatorLine.style.opacity = "0";
          diagonalSeparatorLine.style.visibility = "hidden";
        }

        if (link && link.classList.contains("open-contact-modal-diag")) {
          closeInteractiveModalDiagbox();

          if (openContactModalFunction) {
            openContactModalFunction();
          }
        } else if (targetUrl && navigationDelay > 0) {
          setTimeout(() => {
            window.location.href = targetUrl;
          }, navigationDelay);
        } else if (targetUrl) {
          window.location.href = targetUrl;
        }
      });
    });
  }

  openPopupButtons.forEach((button) => {
    button.addEventListener("click", openInteractiveModalDiagbox);
  });
  if (closeButton) {
    closeButton.addEventListener("click", closeInteractiveModalDiagbox);
  }

  if (interactiveModal) {
    interactiveModal.addEventListener("click", (e) => {
      if (e.target === interactiveModal) {
        closeInteractiveModalDiagbox();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      interactiveModal &&
      interactiveModal.classList.contains("show")
    ) {
      closeInteractiveModalDiagbox();
    }
  });

  const aboutUsSection = document.getElementById("about-us-section");
  const meetOurTeamSection = document.getElementById("meet-our-team-section");
  const toggleButtons = document.querySelectorAll(".toggle-section-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let currentSection;
      let targetSection;

      if (aboutUsSection.classList.contains("active-section")) {
        currentSection = aboutUsSection;
        targetSection = meetOurTeamSection;
      } else {
        currentSection = meetOurTeamSection;
        targetSection = aboutUsSection;
      }

      currentSection.classList.remove("active-section");
      currentSection.classList.add("fade-out");

      setTimeout(() => {
        currentSection.classList.remove("fade-out");
        currentSection.classList.add("hidden-section");

        targetSection.classList.remove("hidden-section");
        targetSection.classList.add("active-section", "fade-in");

        setTimeout(() => {
          targetSection.classList.remove("fade-in");
        }, 800);
      }, 800);
    });
  });

  const sliderItems = document.querySelectorAll(".slider .item");
  const fullscreenModal = document.querySelector(".fullscreen-modal");
  const fullscreenImage = document.querySelector(".fullscreen-image");
  const fullscreenCloseButton = document.querySelector(
    ".fullscreen-modal .close-button"
  );

  const slider = document.querySelector(".slider");
  const quantity = sliderItems.length;
  if (slider) {
    slider.style.setProperty("--quantity", quantity);
  }

  let rotationState = {
    isPaused: false,
    originalAnimation: "",
  };

  let currentIndex = -1;
  const imageList = Array.from(sliderItems).map((item) => {
    const img = item.querySelector("img");
    return { src: img.src, alt: img.alt };
  });

  sliderItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      const imgSrc = this.querySelector("img").src;
      const imgAlt = this.querySelector("img").alt;

      fullscreenImage.src = imgSrc;
      fullscreenImage.alt = imgAlt;

      currentIndex = index;

      if (fullscreenModal) {
        fullscreenModal.style.display = "flex";
        if (slider) {
          slider.style.animationPlayState = "paused";
          rotationState.isPaused = true;
        }

        setTimeout(() => {
          fullscreenModal.classList.add("active");
        }, 10);
      }
    });
  });

  if (fullscreenCloseButton) {
    fullscreenCloseButton.addEventListener("click", closeFullscreenModal);
  }

  if (fullscreenModal) {
    fullscreenModal.addEventListener("click", function (e) {
      if (e.target === fullscreenModal) {
        closeFullscreenModal();
      }
    });
  }

  function closeFullscreenModal() {
    if (fullscreenModal) {
      fullscreenModal.classList.remove("active");
      setTimeout(() => {
        fullscreenModal.style.display = "none";

        if (rotationState.isPaused && slider) {
          slider.style.animationPlayState = "running";
          rotationState.isPaused = false;
        }
      }, 300);
    }
  }

  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      fullscreenModal &&
      fullscreenModal.style.display === "flex"
    ) {
      closeFullscreenModal();
    }
  });

  const arrowLeft = document.querySelector(".arrow-button.left");
  const arrowRight = document.querySelector(".arrow-button.right");

  function showImage(index) {
    if (index >= 0 && index < imageList.length) {
      currentIndex = index;
      fullscreenImage.src = imageList[index].src;
      fullscreenImage.alt = imageList[index].alt;
    }
  }

  function showNextImage() {
    let next = (currentIndex + 1) % imageList.length;
    showImage(next);
  }

  function showPrevImage() {
    let prev = (currentIndex - 1 + imageList.length) % imageList.length;
    showImage(prev);
  }

  if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener("click", function (e) {
      e.stopPropagation();
      showPrevImage();
    });

    arrowRight.addEventListener("click", function (e) {
      e.stopPropagation();
      showNextImage();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (fullscreenModal && fullscreenModal.style.display === "flex") {
      if (e.key === "ArrowLeft") showPrevImage();
      else if (e.key === "ArrowRight") showNextImage();
    }
  });
});
