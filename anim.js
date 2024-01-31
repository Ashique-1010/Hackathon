const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Characters to be displayed
const numColumns = 50; // Number of columns in the matrix
const numRows = 20; // Number of rows in the matrix
const animationSpeed = 100; // Speed of animation in milliseconds

// Function to generate random characters
function getRandomCharacter() {
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

// Function to create a new letter element
function createLetter(isWhite) {
  const letter = document.createElement('div');
  letter.classList.add('matrix-letter');
  if (isWhite) {
    letter.classList.add('white-letter'); // Add the white-letter class
  }
  letter.textContent = getRandomCharacter();
  letter.style.left = `${Math.floor(Math.random() * 100)}vw`; // Random horizontal position
  letter.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration
  return letter;
}
function wowMoment(){
    const wowDiv = document.querySelector('.wow');
    wowDiv.style.display = "block";
}
// Function to start the animation
function startAnimation() {
    const matrixContainer = document.querySelector('.matrix-container');
  
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numColumns; j++) {
      setTimeout(() => {
        const isWhite = Math.random() < 0.20; // Approx. 5% of letters are white
        const letter = createLetter(isWhite);
        matrixContainer.appendChild(letter);
      setTimeout(() => {
          letter.remove(); // Remove the letter after animation completes
          wowMoment();   
        }, animationSpeed * 50);
    }, j * animationSpeed + i * animationSpeed / 2);    
    
    // Stop the animation when the letter reaches the center
    if (i * numColumns + j > (numRows * numColumns) / 3) {
        break;
    }
      }
    }
  }

  
  // Start the animation when the document is ready
  document.addEventListener('DOMContentLoaded', startAnimation);
  