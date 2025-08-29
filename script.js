// ===== Part 2: JS Functions & Scope =====

// Global counter variable
let counterValue = 0;

// Function to increase counter
function increaseCounter(amount) {
  // Local variable example
  let increment = amount;
  counterValue += increment;
  return counterValue; // return value
}

// Function to reset counter
function resetCounter() {
  counterValue = 0;
  return counterValue;
}

// Update UI
const counterDisplay = document.getElementById('counter');
document.getElementById('increaseBtn').addEventListener('click', () => {
  const newValue = increaseCounter(1);
  counterDisplay.textContent = newValue;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  const newValue = resetCounter();
  counterDisplay.textContent = newValue;
});

// ===== Part 3: CSS + JS Integration =====

// Animate Box Function
const box = document.getElementById('box');
function animateBox() {
  box.style.transform = 'translateX(200px) rotate(180deg)';
  box.style.backgroundColor = '#FF5733';
  // Reset after animation
  setTimeout(() => {
    box.style.transform = 'translateX(0) rotate(0deg)';
    box.style.backgroundColor = 'teal';
  }, 1000);
}

document.getElementById('animateBtn').addEventListener('click', animateBox);

// Card Flip Function
const card = document.getElementById('card');
function flipCard() {
  card.classList.toggle('flipped');
}

document.getElementById('flipBtn').addEventListener('click', flipCard);
