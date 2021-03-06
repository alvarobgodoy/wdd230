// Footer
let lastModified = document.lastModified;
    
document.getElementById('lastUpdate').textContent = (`Last modification: ${lastModified}`);
let currentYear = document.querySelector('#currentYear');

year = new Date().getFullYear();

currentYear.textContent = year;

// Menu
function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('open');
  document.getElementById('hamburgerBtn').classList.toggle('open');
}

const btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu;

// Header date
const now = new Date();
const currentDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(now);

document.getElementById('currentDate').textContent = currentDate;