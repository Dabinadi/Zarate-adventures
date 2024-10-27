document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning!" : hour < 18 ? "Good Afternoon!" : "Good Evening!";
    document.querySelector('header').insertAdjacentHTML('beforeend', `<p>${greeting}</p>`);
});
