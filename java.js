document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    // Initial state
    container.style.opacity = '0';
    container.style.transition = 'opacity 1.5s ease-in-out';

    // Fade in effect
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);
});