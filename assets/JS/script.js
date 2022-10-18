// JavaScript code to open and close the modal. Added by Jon
// Function to open the modal
function openModal() {
  // Add is-active class on the modal
  document.getElementById("modal1").classList.add("is-active");
}
// Add event listeners to close the modal
// whenever user click OUTSIDE modal it closes
document
  .querySelectorAll(
    ".modal-background, .modal-close,.modal-card-head .delete, .modal-card-foot .button"
  )
  .forEach(($el) => {
    const $modal = $el.closest(".modal");
    $el.addEventListener("click", () => {
      $modal.classList.remove("is-active");
    });
  });

// Utilizing Youtube API by Jon. See script on assets\JS\codiotube.js
// Utilizing Google Custom Search API by Ken. Parameters and settings are set on the google cloud developer website. No javascript to actually add in vs code
