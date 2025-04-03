// Button Shake
const button = document.querySelector('.cta-button');
button.addEventListener('mouseover', () => {
    button.style.animation = 'shake 0.5s infinite';
});
button.addEventListener('mouseout', () => {
    button.style.animation = 'none';
});

// Ronaldo Icon Animation and Sound
function triggerSiuuu() {
    const ronaldoIcon = document.querySelector('.ronaldo-icon');
    ronaldoIcon.classList.add('active');
    setTimeout(() => ronaldoIcon.classList.remove('active'), 500); // Reset after jump

    const sound = document.getElementById('siuuu-sound');
    if (sound) sound.play(); // Plays sound if file exists
}