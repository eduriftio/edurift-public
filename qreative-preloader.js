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
    background-color: rgba(255, 255, 255, 0.9);
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
    display: none;  // Only one display property is needed
`;

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Function to display the Lottie animation
function hideOverlay() {
    lottieContainer.style.display = 'block';
}

// Load the Lottie animation
const animationData = {
    container: lottieContainer,
    renderer: 'svg', // Use 'svg' or 'canvas' based on your preference
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to start automatically
    path: 'https://lottie.host/0601ee91-22b3-4065-97e1-bb4385e3b9c3/530aBuaWwr.json', // Replace with the actual URL of your Lottie JSON file
};

const anim = lottie.loadAnimation(animationData);

// Extend the timeout to see the animation for longer
setTimeout(hideOverlay, 3000); // 3 seconds for better visibility
