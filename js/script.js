const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

// Función para mostrar un slide específico
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
    currentSlide = index;
}

// Función para pasar al siguiente slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Iniciar el slider automático
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

// Detener el slider automático
function stopSlider() {
    clearInterval(slideInterval);
}

// Eventos para los puntos de navegación
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        stopSlider();
        showSlide(i);
        startSlider();
    });
});

// Mostrar el primer slide
showSlide(currentSlide);

// Iniciar el slider
startSlider();
