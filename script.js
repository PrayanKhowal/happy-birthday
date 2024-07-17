function randomColor() {
  const colors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = `${Math.random() * 100}vw`;
  confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
  confetti.style.backgroundColor = randomColor();
  return confetti;
}

function generateConfetti() {
  const container = document.getElementById('confetti-container');
  for (let i = 0; i < 200; i++) {
    const confetti = createConfettiPiece();
    container.appendChild(confetti);
  }
}

document.addEventListener('DOMContentLoaded', generateConfetti);

const audio = document.getElementById('backgroundAudio');
const clickToPlay = document.getElementById('click-to-play');

function playAudio() {
    audio.play().then(() => {
        clickToPlay.style.display = 'none';
    }).catch(error => {
        console.error('Audio playback failed:', error);
    });
}
document.body.addEventListener('click', playAudio, { once: true });
