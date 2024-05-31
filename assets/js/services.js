document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check on page load
});
