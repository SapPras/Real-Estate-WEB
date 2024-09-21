// JavaScript for project 1 to 12
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.gallery-cards');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}


// JavaScript for contact.html
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('popup').classList.add('show');
    setTimeout(() => {
        document.getElementById('popup').classList.remove('show');
    }, 3000); // Hide popup after 3 seconds
});

function closePopup() {
    document.getElementById('popup').classList.remove('show');
}

