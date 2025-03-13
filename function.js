// Vanilla JavaScript Section
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

// Check if menuToggle and showcase exist
if (menuToggle && showcase) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
        console.log("Menu toggle clicked!");
    });
} else {
    console.error("Menu toggle or showcase element not found.");
}

// jQuery Section
$(document).ready(function () {
    function slideTransition(target) {
        $(".page")
            .removeClass("active")
            .addClass("page-exit");
        setTimeout(function () {
            window.location.href = target;
        }, 500); // Match the transition duration
    }

    $("a").on("click", function (e) {
        if (this.pathname === window.location.pathname) {
            return; // Skip if same page
        }

        e.preventDefault(); // Prevent default anchor behavior
        const target = this.href;
        slideTransition(target);
    });
});

// Get the overlay element and buttons
const overlay = document.querySelector('.overlay');
const blendModeButton = document.getElementById('blendModeButton');
const colorButton = document.getElementById('colorButton');

// Ensure buttons are found
if (!blendModeButton || !colorButton) {
    console.error('One or both buttons were not found!');
}

// Define possible blend modes
const blendModes = ['normal', 'multiply', 'screen', 'overlay', 'color-burn', 'darken', 'lighten', 'color-dodge', 'difference', 'exclusion', 'hue', 'saturation', 'luminosity'];
let currentBlendModeIndex = 0;

// Function to change the blend mode
function changeBlendMode() {
    currentBlendModeIndex = (currentBlendModeIndex + 1) % blendModes.length;
    overlay.style.mixBlendMode = blendModes[currentBlendModeIndex];
    console.log("Blend mode changed to:", blendModes[currentBlendModeIndex]); // Log the blend mode
}

// Define possible background colors
const colors = ['#9f9f9f', '#03a9f4', '#ff6347', '#00ff7f'];
let currentColorIndex = 0;

// Function to change the background color
function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    overlay.style.backgroundColor = colors[currentColorIndex];
    console.log("Background color changed to:", colors[currentColorIndex]); // Log the color
}

// Add event listeners to buttons
if (blendModeButton) {
    blendModeButton.addEventListener('click', () => {
        changeBlendMode();
        console.log("Blend Mode button clicked!"); // Log when the blend mode button is clicked
    });
}

if (colorButton) {
    colorButton.addEventListener('click', () => {
        changeColor();
        console.log("Color button clicked!"); // Log when the color button is clicked
    });
}
