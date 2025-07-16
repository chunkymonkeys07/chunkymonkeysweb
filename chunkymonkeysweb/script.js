// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if(menuToggle && navLinks){
    menuToggle.addEventListener('click', ()=>{
        navLinks.classList.toggle('active');
    });
}

// Lightbox for Gallery
const images = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;

if(images && lightboxImg){
    images.forEach(img=>{
        img.addEventListener('click', ()=>{
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });
    lightbox.addEventListener('click', ()=> lightbox.style.display='none');
}

// Thoughts feature
const thoughtsBox = document.getElementById('thoughts-box');
const thoughtsDisplay = document.getElementById('thoughts-display');
if(thoughtsBox && thoughtsDisplay){
    thoughtsBox.addEventListener('keypress', e=>{
        if(e.key==='Enter'){
            e.preventDefault();
            const text = thoughtsBox.value.trim();
            if(text){
                const p=document.createElement('p');
                p.textContent=text;
                thoughtsDisplay.appendChild(p);
                thoughtsBox.value='';
            }
        }
    });
}

// Fade-in animation on scroll
document.addEventListener('DOMContentLoaded', ()=>{
    const faders=document.querySelectorAll('.fade-in');
    const options={threshold:0.2};
    const observer=new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    },options);
    faders.forEach(fader=>observer.observe(fader));
});

function toggleMenu() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav-links');
    const toggle = document.querySelector('.menu-toggle');

    // If nav is open and click is outside nav and toggle button
    if (nav.classList.contains('active') && !nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('active');
    }
});

// Close menu when clicking a nav link
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});


function toggleInfo(card) {
    card.classList.toggle("active");
}

