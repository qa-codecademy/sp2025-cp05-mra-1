document.addEventListener("DOMContentLoaded", function () {
  const speechBubble = document.getElementById("periodicBubble");
  const openPopupButton = document.getElementById("openPopupButton");
  const closeButton = speechBubble.querySelector(".speech-bubble-close-btn");

  function showBubble() {
    if (!speechBubble) return;

    speechBubble.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
    speechBubble.style.opacity = "1";
    speechBubble.style.visibility = "visible";
  }

  function hideBubble() {
    if (!speechBubble) return;

    speechBubble.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
    speechBubble.style.opacity = "0";
    speechBubble.style.visibility = "hidden";
  }

  function handleOpenButtonClick() {
    showBubble();
  }

  function handleCloseButtonClick(event) {
    event.stopPropagation();
    hideBubble();
  }

  if (openPopupButton) {
    openPopupButton.addEventListener("click", handleOpenButtonClick);
  }

  if (closeButton) {
    closeButton.addEventListener("click", handleCloseButtonClick);
  }
});
