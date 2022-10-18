  // JavaScript code to open and close the modal
  // Function to open the modal
  function openModal() {
    // Add is-active class on the modal
    document.getElementById("modal1")
        .classList.add("is-active");
}
// Add event listeners to close the modal
// whenever user click OUTSIDE modal it closes
document.querySelectorAll('.modal-background, .modal-close,.modal-card-head .delete, .modal-card-foot .button'
).forEach(($el) => {
    const $modal = $el.closest('.modal');
    $el.addEventListener('click', () => {
        $modal.classList.remove("is-active");
    });
});