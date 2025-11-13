// Array of persuasive messages for the "No" button
const noButtonTexts = [
    "Bir daha düşün 🤔",
    "Yanlış buton! ❌",
    "Sanırım evet demek istedin 💭",
    "Emin misin? 🥺",
    "Gerçekten mi? 😢",
    "Son şansın! 💫",
    "Haydi ama! 🙏",
    "Bu doğru olamaz 😔",
    "Kalbimi kırdın 💔",
    "Tekrar dene! 🔄"
];

let noClickCount = 0;
let yesButtonScale = 1;

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const questionContainer = document.getElementById('questionContainer');
const loveContainer = document.getElementById('loveContainer');

// Handle "No" button click
noButton.addEventListener('click', function() {
    // Increase the yes button size by 2x each time
    yesButtonScale *= 2;
    yesButton.style.transform = `scale(${yesButtonScale})`;
    yesButton.style.zIndex = '10';
    
    // Change the "No" button text to a persuasive message
    if (noClickCount < noButtonTexts.length) {
        noButton.textContent = noButtonTexts[noClickCount];
        noClickCount++;
    } else {
        // If all messages have been used, cycle back to the start
        noClickCount = 0;
        noButton.textContent = noButtonTexts[noClickCount];
        noClickCount++;
    }
    
    // Add a shake animation to the no button
    noButton.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noButton.style.animation = '';
    }, 500);
});

// Handle "Yes" button click
yesButton.addEventListener('click', function() {
    // Hide the question container and show the love message
    questionContainer.classList.add('hidden');
    loveContainer.classList.remove('hidden');
    
    // Add confetti effect
    createConfetti();
});

// Add shake animation for the no button
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Create confetti effect when "Yes" is clicked
function createConfetti() {
    const colors = ['#e91e63', '#f093fb', '#f5576c', '#ff6b9d', '#ffc3a0'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `fall ${2 + Math.random() * 3}s linear`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add falling animation for confetti
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);
