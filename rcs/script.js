// Typing Animation
const nameElement = document.getElementById('name');
const nameText = "James Patrick Paloyo";
let i = 0;

function typeWriter() {
    if (i < nameText.length) {
        nameElement.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Dark Mode Toggle
const toggleMode = document.getElementById('toggleMode');
toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

// Language Switch
const languageSwitch = document.getElementById('languageSwitch');
languageSwitch.addEventListener('change', (e) => {
    if (e.target.value === 'ph') {
        document.querySelector('p').textContent = "Tagalikha ng Laro | Mobile Developer | Backend Developer";
        document.querySelector('.projects h2').textContent = "Mga Proyekto";
        document.querySelector('.experience h2').textContent = "Karanasan";
        document.querySelector('.blogs h2').textContent = "Mga Blog";
        document.querySelector('.contact h2').textContent = "Makipag-ugnayan";
    } else {
        document.querySelector('p').textContent = "Game Developer | Mobile Developer | Backend Enthusiast";
        document.querySelector('.projects h2').textContent = "Projects";
        document.querySelector('.experience h2').textContent = "Experience";
        document.querySelector('.blogs h2').textContent = "Blogs";
        document.querySelector('.contact h2').textContent = "Contact Me";
    }
});
