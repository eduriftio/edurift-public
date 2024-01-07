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
  background-color: rgba(255, 255, 255, 0.7);
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
`;

// Initially, only the overlay is visible
lottieContainer.style.display = 'none';

// Append the elements to the body
document.body.appendChild(overlay);
document.body.appendChild(lottieContainer);

// Function to toggle the overlay and Lottie animation
function toggleOverlay(show) {
  overlay.style.display = show ? 'flex' : 'none';
  lottieContainer.style.display = show ? 'block' : 'none';
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

// Example usage
// Call toggleOverlay(true) to show the preloader
// Call toggleOverlay(false) to hide the preloader
