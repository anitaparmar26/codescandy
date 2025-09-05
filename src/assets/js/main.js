// $(document).ready(function() {
//     "user strict";
//     if ($('[data-toggle="tooltip"]').length) {
//         var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
//         var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
//             return new bootstrap.Tooltip(tooltipTriggerEl)
//         })
//     }
// });

// Offcanvas

var navbar = document.querySelector('.navbar');

const navOffCanvasBtn = document.querySelectorAll('.offcanvas-nav-btn');
const navOffCanvas = document.querySelector('.navbar:not(.navbar-clone) .offcanvas-nav');

// Declare bsOffCanvas outside the if block
let bsOffCanvas;

// Check if the navOffCanvas element exists before creating the Offcanvas instance
if (navOffCanvas) {
  bsOffCanvas = new bootstrap.Offcanvas(navOffCanvas, { scroll: true });

  // Event listeners
  navOffCanvasBtn.forEach((e) => {
    e.addEventListener('click', (event) => {
      toggleOffCanvas();
    });
  });
}

// Function to toggle the Offcanvas
function toggleOffCanvas() {
  if (bsOffCanvas && bsOffCanvas._isShown) {
    bsOffCanvas.hide();
  } else if (bsOffCanvas) {
    bsOffCanvas.show();
  }
}
