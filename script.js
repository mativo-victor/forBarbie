// 3D Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-background').appendChild(renderer.domElement);

// Add 3D Hearts
const heartGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const heartMaterial = new THREE.MeshBasicMaterial({ color: 0xFF1493 });
const hearts = [];

for (let i = 0; i < 50; i++) {
    const heart = new THREE.Mesh(heartGeometry, heartMaterial);
    heart.position.x = (Math.random() - 0.5) * 20;
    heart.position.y = (Math.random() - 0.5) * 20;
    heart.position.z = (Math.random() - 0.5) * 20;
    scene.add(heart);
    hearts.push(heart);
}

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    hearts.forEach(heart => {
        heart.rotation.x += 0.01;
        heart.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
}
animate();

// Main Menu Navigation
document.getElementById('play-game-button').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.add('hidden');
    document.querySelector('.game-section').classList.remove('hidden');
    startGame();
});

document.getElementById('rizz-notes-button').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.add('hidden');
    document.querySelector('.rizz-notes-section').classList.remove('hidden');
    showRizzNote();
});

document.getElementById('explore-button').addEventListener('click', () => {
    document.querySelector('.main-menu').classList.add('hidden');
    document.querySelector('.explore-section').classList.remove('hidden');
    startExploration();
});

document.getElementById('back-to-menu-button').addEventListener('click', () => {
    document.querySelector('.game-section').classList.add('hidden');
    document.querySelector('.main-menu').classList.remove('hidden');
});

document.getElementById('back-to-menu-button-2').addEventListener('click', () => {
    document.querySelector('.rizz-notes-section').classList.add('hidden');
    document.querySelector('.main-menu').classList.remove('hidden');
});

document.getElementById('back-to-menu-button-3').addEventListener('click', () => {
    document.querySelector('.explore-section').classList.add('hidden');
    document.querySelector('.main-menu').classList.remove('hidden');
});

// Game Logic
let score = 0;
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');

function startGame() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    setInterval(createHeart, 1000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 350 + 'px';
    heart.style.top = Math.random() * 250 + 'px';
    gameArea.appendChild(heart);

    heart.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        heart.remove();
    });

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Rizz Notes
const messages = [
    "You are my sunshine.",
    "Every moment with you is magical.",
    "I fall for you more every day.",
    "You are the muse of my heart.",
    "I love you to the moon and back."
];

function showRizzNote() {
    document.getElementById('daily-message').textContent = messages[Math.floor(Math.random() * messages.length)];
}

// Explore Section
function startExploration() {
    setInterval(createMagic, 1000);
}

function createMagic() {
    const magic = document.createElement('div');
    magic.classList.add('magic');
    magic.innerHTML = '✨';
    magic.style.left = Math.random() * 350 + 'px';
    magic.style.top = Math.random() * 250 + 'px';
    document.getElementById('explore-area').appendChild(magic);

    setTimeout(() => {
        magic.remove();
    }, 2000);
}

// Footer Fade-In
window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    if (window.scrollY > 100) {
        footer.classList.add('visible');
    }
});

