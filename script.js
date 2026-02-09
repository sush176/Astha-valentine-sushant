// Configuration
const CONFIG = {
    maxClicks: 4,
    messages: [
        "Are you sure? 🥺",
        "Please reconsider! 💔",
        "My heart is breaking! 😢",
        "Don't do this to me! 🥹",
        "One more chance? 💕",
        "Pretty please? 🙏✨",
    ],
    mainMessage: "Hy miss so you remember jab 8th ko hum achanak mile, sach mein mujhe zara-si bhi umeed nahi thi ki us din tumse mulaqat hogi. Us din main jaan-bujhkar haar gaya tha, shayad apne jazbaaton se, shayad apni kismat se. Phir agle din main sach-sach sab kuch batane hi nikal raha tha, par cheezein galat hoti chali gayi. Usi din mujhe ehsaas hua ki main tumse kitna emotionally attach ho chuka hoon, aur us realization ke saath ek ajeeb-sa guilt bhi dil mein bas gaya. Kabhi socha nahi tha ki main wapas aane ki himmat kar paunga, lekin phir bhi main tumhare liye aa gaya . Beech mein cheezein upar-neeche hoti rahi, par jo sabse zyada matter karta hai woh yeh hai ki tum waise hi rahi—sachchi, pyaari, aur apni si. I love you, miss you, and once again, Happy Valentine’s Day ❤️",
    galleryImages: [
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.23.jpeg", "size": "portrait", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.25 (1).jpeg", "size": "landscape", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.25 (2).jpeg", "size": "square", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.25.jpeg", "size": "portrait", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.26 (1).jpeg", "size": "landscape", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.26.jpeg", "size": "square", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.27 (1).jpeg", "size": "portrait", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.27.jpeg", "size": "landscape", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.28 (1).jpeg", "size": "square", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.28 (2).jpeg", "size": "portrait", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.28.jpeg", "size": "landscape", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.29 (1).jpeg", "size": "square", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.29.jpeg", "size": "portrait", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.30 (1).jpeg", "size": "landscape", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.30 (2).jpeg", "size": "square", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.30.jpeg", "size": "portrait", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.31.31.jpeg", "size": "landscape", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.37.29.jpeg", "size": "square", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.37.30 (1).jpeg", "size": "portrait", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.37.30.jpeg", "size": "landscape", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.37.31.jpeg", "size": "square", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.37.32 (1).jpeg", "size": "portrait", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.37.32.jpeg", "size": "landscape", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.37.33.jpeg", "size": "square", "alt": "Our Memory" },
        { "url": "assets/WhatsApp Image 2026-02-09 at 15.57.42.jpeg", "size": "portrait", "alt": "Our Memory" }
    ]
};

// DOM Elements
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const overlay = document.getElementById('message-overlay');
const galleryContainer = document.getElementById('gallery-container');
const video = document.getElementById('coupleVideo');
const playPauseBtn = document.getElementById('play-pause');
const volumeToggle = document.getElementById('volume-toggle');
const progressFill = document.getElementById('progress-fill');
const videoProgressBar = document.getElementById('video-progress');
const floatingContainer = document.getElementById('floating-elements');
const progressIndicator = document.getElementById('progress-container');

let noClickCount = 0;
let isLongPress = false;
let longPressTimer;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('scroll-locked'); // Lock scroll initially
    createFloatingElements();
    loadGallery();
    setupProgressIndicator();
    setupIntersectionObserver();
});

// Floating Elements
function createFloatingElements() {
    const heartSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-accent-coral)"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    const sparkleSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M12 1L14.39 8.57L22 11L14.39 13.43L12 21L9.61 13.43L2 11L9.61 8.57L12 1Z"/></svg>`;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = heartSVG;
        setRandomPosition(heart);
        floatingContainer.appendChild(heart);
    }

    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'floating-sparkle';
        sparkle.innerHTML = sparkleSVG;
        setRandomPosition(sparkle);
        floatingContainer.appendChild(sparkle);
    }
}

function setRandomPosition(el) {
    el.style.left = Math.random() * 100 + '%';
    el.style.top = Math.random() * 100 + '%';
    el.style.animationDelay = Math.random() * 5 + 's';
    el.style.animationDuration = (5 + Math.random() * 5) + 's';
}

// "No" Button Logic
noBtn.addEventListener('click', () => {
    noClickCount++;

    if (noClickCount <= CONFIG.maxClicks) {
        // Shrink button
        const scale = 1 - (noClickCount * 0.12);
        noBtn.style.transform = `scale(${scale})`;

        // Move button
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';

        // Show message
        showMessage(CONFIG.messages[noClickCount - 1], x, y);
    }

    if (noClickCount >= CONFIG.maxClicks) {
        noBtn.style.opacity = '0';
        noBtn.style.pointerEvents = 'none';
        yesBtn.classList.add('pulse-glow');
    }
});

function showMessage(text, x, y) {
    const msg = document.createElement('div');
    msg.className = 'no-msg';
    msg.textContent = text;
    msg.style.left = '50%';
    msg.style.bottom = '120%';
    msg.style.transform = 'translateX(-50%)';

    noBtn.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
}

// "Yes" Button Logic
yesBtn.addEventListener('click', triggerYesEffect);

// Easter Egg: Long Press
const startLongPress = () => {
    isLongPress = false;
    longPressTimer = setTimeout(() => {
        isLongPress = true;
        triggerConfetti(300); // Super explosion
    }, 2000);
};

const cancelLongPress = () => clearTimeout(longPressTimer);

yesBtn.addEventListener('mousedown', startLongPress);
yesBtn.addEventListener('mouseup', cancelLongPress);
yesBtn.addEventListener('mouseleave', cancelLongPress);

// Mobile touch support
yesBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent ghost clicks
    startLongPress();
});
yesBtn.addEventListener('touchend', () => {
    cancelLongPress();
    if (!isLongPress) triggerYesEffect();
});
yesBtn.addEventListener('touchcancel', cancelLongPress);

function triggerYesEffect() {
    if (isLongPress) return;

    document.body.classList.remove('scroll-locked'); // Unlock scroll
    triggerConfetti(200);

    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('visible'), 10);

    setTimeout(() => {
        overlay.classList.remove('visible');
        setTimeout(() => overlay.classList.add('hidden'), 500);

        document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });
    }, 3000);
}

function triggerConfetti(count) {
    confetti({
        particleCount: count,
        spread: 180,
        origin: { y: 0.6 },
        colors: ['#FFB6C1', '#FF7F7F', '#FF6B7A', '#FFFFFF']
    });
}

// Gallery Loading
function loadGallery() {
    console.log("Starting to load gallery with " + CONFIG.galleryImages.length + " images.");
    CONFIG.galleryImages.forEach((imgData, index) => {
        const item = document.createElement('div');
        item.className = `gallery-item ${imgData.size}`;
        item.style.backgroundColor = '#2d2d3a'; // Fallback color

        const img = document.createElement('img');
        // Try direct path first, fallback to encoded if fails
        img.src = imgData.url;
        img.alt = imgData.alt;
        img.loading = 'lazy';

        img.onload = () => {
            console.log("Loaded: " + imgData.url);
            item.classList.add('show');
        };

        img.onerror = () => {
            console.error("Failed to load: " + imgData.url);
            // Try encoded path as fallback
            if (img.src !== encodeURI(imgData.url)) {
                img.src = encodeURI(imgData.url);
            } else {
                item.style.border = '2px solid red'; // Visual cue for error
            }
        };

        item.appendChild(img);
        galleryContainer.appendChild(item);

        // Immediate show if it takes too long to load (for skeletons)
        setTimeout(() => {
            if (!item.classList.contains('show')) {
                item.classList.add('show');
            }
        }, 1000 + (index * 100));
    });
}

// Video Controls
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        video.pause();
        playPauseBtn.textContent = '▶️';
    }
});

volumeToggle.addEventListener('click', () => {
    video.muted = !video.muted;
    volumeToggle.textContent = video.muted ? '🔇' : '🔊';
});

video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressFill.style.width = progress + '%';
});

videoProgressBar.addEventListener('click', (e) => {
    const rect = videoProgressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
});

// Intersection Observer for Video & Sections
function setupIntersectionObserver() {
    const options = { threshold: 0.8 }; // High threshold for "focus"

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'message-video-section') {
                    // Play only if fully visible (or close to it)
                    video.play().catch(() => {
                        video.muted = true;
                        video.play();
                    });
                }

                // Update Progress Indicator
                const sectionIndex = Array.from(document.querySelectorAll('.section')).indexOf(entry.target);
                updateProgressIndicator(sectionIndex);
            } else {
                if (entry.target.id === 'message-video-section') {
                    video.pause();
                }
            }
        });
    }, options);

    document.querySelectorAll('.section').forEach(section => observer.observe(section));
}

// Progress Indicator
function setupProgressIndicator() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((_, i) => {
        const heart = document.createElement('div');
        heart.className = 'progress-heart';
        heart.innerHTML = '❤️';
        heart.addEventListener('click', () => {
            sections[i].scrollIntoView({ behavior: 'smooth' });
        });
        progressIndicator.appendChild(heart);
    });
}

function updateProgressIndicator(index) {
    const hearts = document.querySelectorAll('.progress-heart');
    hearts.forEach((heart, i) => {
        if (i <= index) {
            heart.classList.add('active');
        } else {
            heart.classList.remove('active');
        }
    });
}
