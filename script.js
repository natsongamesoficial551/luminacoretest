// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth'});
    });
});

// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Intersection Observer for fade-in sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {threshold:0.1});

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50){
        navbar.style.background = 'rgba(5,5,5,0.95)';
    } else {
        navbar.style.background = 'rgba(5,5,5,0.8)';
    }
});