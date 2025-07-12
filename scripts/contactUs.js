document.addEventListener("DOMContentLoaded", function () {
  let contactModal = document.getElementById("contactModal");
  let openContactModalNav = document.getElementById("openContactModalNav");
  let openContactModalFooter = document.getElementById(
    "openContactModalFooter"
  );
  let closeContactModalButton = document.querySelector(
    ".contact-modal-close-button"
  );
  let contactForm = contactModal ? contactModal.querySelector("form") : null;

  function openContactModal() {
    if (contactModal) {
      contactModal.setAttribute("style", "display: flex !important;");

      setTimeout(() => {
        contactModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }, 10);
    }
  }

  function closeContactModal() {
    if (contactModal) {
      contactModal.classList.remove("active");

      setTimeout(() => {
        contactModal.setAttribute("style", "display: none !important;");
        document.body.style.overflow = "";
      }, 600);
    }
  }

  if (openContactModalNav) {
    openContactModalNav.addEventListener("click", function (e) {
      e.preventDefault();
      openContactModal();
    });
  }

  if (openContactModalFooter) {
    openContactModalFooter.addEventListener("click", function (e) {
      e.preventDefault();
      openContactModal();
    });
  }

  if (closeContactModalButton) {
    closeContactModalButton.addEventListener("click", closeContactModal);
  }

  if (contactModal) {
    contactModal.addEventListener("click", function (e) {
      if (e.target === contactModal) {
        closeContactModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      contactModal &&
      contactModal.classList.contains("active")
    ) {
      closeContactModal();
    }
  });

  if (contactModal) {
    contactModal.setAttribute("style", "display: none !important;");
  }

  //BACKEND FUTURE
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      console.log("no backend yet so this is doing nothing atm");
      closeContactModal();
    });
  }

  window.openContactModal = openContactModal;
});
