function toggleMenu() {
    const ul = document.getElementById('nav-links');
    ul.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(138, 43, 226, 0.98)';
    } else {
        nav.style.background = 'rgba(138, 43, 226, 0.95)';
    }
});
