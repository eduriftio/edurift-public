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
    background-color: rgba(255, 255, 255, 0.2); // Further reduced opacity
    z-index: 999;
`;

const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    width: 300px; // Specify size
    height: 300px; // Specify size
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    z-index: 1000; // Increased z-index
`;

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Function to display the Lottie animation
function showLottieAnimation() {
    lottieContainer.style.display = 'block';
}

// Load the Lottie animation
const animationData = {
    container: lottieContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/898dc4a0-cb88-4012-b3c8-87c16e40c720/BooefhvjAf.json',
};

const anim = lottie.loadAnimation(animationData);

setTimeout(showLottieAnimation, 3000); // Adjust timing as needed
