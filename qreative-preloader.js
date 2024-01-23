const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9); // Semi-transparent overlay
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none; // Initially hidden
`;

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Function to hide the overlay and Lottie animation
function hideOverlay() {
    overlay.style.display = 'none';
    lottieContainer.style.display = 'none';
}

// Load the Lottie animation
const animationData = {
    container: lottieContainer,
    renderer: 'svg',
    loop: true, // Set this to true for looping
    autoplay: true,
    path: 'https://lottie.host/0601ee91-22b3-4065-97e1-bb4385e3b9c3/530aBuaWwr.json',
};

const anim = lottie.loadAnimation(animationData);

// Show the Lottie animation and overlay initially
overlay.style.display = 'flex';
lottieContainer.style.display = 'block';

// Optionally, hide the overlay and Lottie animation after a delay
// setTimeout(hideOverlay, 5000); // Adjust the duration as needed
