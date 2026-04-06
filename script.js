// Efecto de sombra dinámica en el header al hacer scroll
document.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        header.style.padding = '1rem 5%';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        header.style.padding = '1.5rem 5%';
    }
});