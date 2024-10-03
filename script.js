const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

// Move to next slide
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        track.style.transform = `translateX(-${100 * currentIndex}%)`;
    }
});

// Move to previous slide
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        track.style.transform = `translateX(-${100 * currentIndex}%)`;
    }
});

// Add 3D sliding effect to service cards
const serviceCards = document.querySelectorAll('.service-card');

// Function to show cards on scroll
const showCardsOnScroll = () => {
    const triggerPoint = window.innerHeight / 1.5; // Trigger point for revealing cards

    serviceCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;

        if (cardPosition < triggerPoint) {
            card.classList.add('visible'); // Add class to reveal card
            card.style.animation = 'slideIn 0.5s forwards'; // Apply slide-in animation
        }
    });
};

// Listen to scroll event
window.addEventListener('scroll', showCardsOnScroll);

// Initial call to show cards if they're already in view
showCardsOnScroll();
