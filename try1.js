const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // Characters to be displayed
const numColumns = 50; // Number of columns in the matrix
const numRows = 20; // Number of rows in the matrix
const animationSpeed = 100; // Speed of animation in milliseconds

// Specify which letters should be white
const whiteLetters = ['h', 'a', 'c', 'k', 's', 'a', 'w']; // Add the letters you want to be white here

// Function to generate random characters
function getRandomCharacter() {
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

// Function to create a new letter element
function createLetter(character) {
    const letter = document.createElement('div');
    letter.classList.add('matrix-letter');

    // Check if the character should be white
    if (whiteLetters.includes(character)) {
        letter.classList.add('white-letter'); // Add the white-letter class
    }

    letter.textContent = character;
    letter.style.left = `${Math.floor(Math.random() * 100)}vw`; // Random horizontal position
    letter.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration
    return letter;
}

function wowMoment() {
    const wowDiv = document.querySelector('.wow');
    wowDiv.style.display = "block";
}

// Function to start the animation
function startAnimation() {
    const matrixContainer = document.querySelector('.matrix-container');

    // Blink cursor for 3 seconds
    const cursor = document.querySelector('.cursor');
    setTimeout(() => {
        cursor.style.display = 'none'; // Hide cursor after 3 seconds

        // Start falling letters animation
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numColumns; j++) {
                setTimeout(() => {
                    const character = getRandomCharacter();
                    const letter = createLetter(character);
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
    }, 3000); // Wait for 3 seconds before starting the animation
}

// Start the animation when the document is ready
document.addEventListener('DOMContentLoaded', startAnimation);



// added by aioont for loading...

// Get the loading percentage element
const loadingPercentageElement = document.getElementById('loading-percentage');

// Function to update the loading percentage
function updateLoadingPercentage(percentage) {
    loadingPercentageElement.textContent = `${Math.min(Math.round(percentage), 100)}%`;
}

// Calculate the total duration in milliseconds
const totalDuration = 3000; // 3 seconds
const updateInterval = 100; // Update every 100 milliseconds

// Calculate the increment per update to complete loading in the specified duration
const totalUpdates = totalDuration / updateInterval;
const targetPercentageIncrement = 100 / totalUpdates;

let currentPercentage = 0;
const loadingInterval = setInterval(() => {
    currentPercentage += targetPercentageIncrement;

    updateLoadingPercentage(currentPercentage);

    if (currentPercentage >= 100) {
        clearInterval(loadingInterval);
        // Optionally, you can hide the loading text or perform other actions when loading is complete
    }
}, updateInterval);

// Get the loading text element
const loadingTextElement = document.querySelector('.loading');

// Hide the loading text after 3 seconds
setTimeout(() => {
    loadingTextElement.style.display = 'none';
}, 3000);


