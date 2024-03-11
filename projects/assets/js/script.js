//HEADER

const toggleButton = document.getElementById('nav-toggle');
const navigationMenu = document.querySelector('.navigation-menu-mobile');

toggleButton.addEventListener('click', () => {
    if (navigationMenu.style.transform === 'translateX(100%)') {
        navigationMenu.style.transform = 'translateX(0%)';
    } else {
        navigationMenu.style.transform = 'translateX(100%)';
    }
});

// Add other event listeners and functions as needed

//Main Panels Each menu
var homeMain = document.querySelector('.home-main');
var aboutMain = document.querySelector('.about-main');
var skillsMain = document.querySelector('.skills-main');
var contactMain = document.querySelector('.contact-main');
var helpMain = document.querySelector('.help-main');

// shortening id to buttons
const homeButton = document.getElementById("homebtnID");
const aboutButton = document.getElementById("aboutbtnID");
const skillsButton = document.getElementById("skillsbtnID");
const contactButton = document.getElementById("contactbtnID");
const helpButton = document.getElementById("helpbtnID");

function showHome() {
    helpMain.style.display = 'none';
    contactMain.style.display = 'none';
    skillsMain.style.display = 'none';
    aboutMain.style.display = 'none';
    homeMain.style.display = 'flex';
}
function showAbout() {
    helpMain.style.display = 'none';
    contactMain.style.display = 'none';
    skillsMain.style.display = 'none';
    aboutMain.style.display = 'flex';
    homeMain.style.display = 'none';
}
function showSkills() {
    helpMain.style.display = 'none';
    contactMain.style.display = 'none';
    skillsMain.style.display = 'flex';
    aboutMain.style.display = 'none';
    homeMain.style.display = 'none';
}
function showContact() {
    helpMain.style.display = 'none';
    contactMain.style.display = 'flex';
    skillsMain.style.display = 'none';
    aboutMain.style.display = 'none';
    homeMain.style.display = 'none';
}
function showHelp() {
    helpMain.style.display = 'flex';
    contactMain.style.display = 'none';
    skillsMain.style.display = 'none';
    aboutMain.style.display = 'none';
    homeMain.style.display = 'none';
}

//Home Button Desktop Only
homeButton.addEventListener("click", showHome);
//About Button Desktop 
aboutButton.addEventListener("click", showAbout);
//Skill Button Desktop & Mobile
skillsButton.addEventListener("click", showSkills);
//Contact Button Deskto & Mobile
contactButton.addEventListener("click", showContact);
//Help Button Desktop & Mobile
helpButton.addEventListener("click", showHelp);

//Mobile
document.querySelectorAll('.mobile-about-button').forEach(button => {
    button.addEventListener('click', function(event) {
        showAbout();
    });
});

document.querySelectorAll('.mobile-skills-button').forEach(button => {

    button.addEventListener('click', function(event) {
        showSkills();
    });
});

document.querySelectorAll('.mobile-contact-button').forEach(button => {

    button.addEventListener('click', function(event) {
        showContact();
    });
});
document.querySelectorAll('.mobile-help-button').forEach(button => {

    button.addEventListener('click', function(event) {
        showHelp();
    });
});



/*-------------must-action------------*/
let hasRun = false;

function runOnce() {
  if (!hasRun) {
    document.getElementById('homeButtonID').classList.add('pressed');
    hasRun = true;
  }
}
// Call the function when the page loads
window.onload = runOnce;


/*-----------------------------------*/

const homeBtn = document.getElementById('homebtnID');
const alwaysContainer = document.querySelector('.always-container');

let isOpen = false;

homeBtn.addEventListener('click', function() {
  if (!isOpen) {
    alwaysContainer.classList.add('open');
  } else {
    alwaysContainer.classList.remove('open');
  }
  isOpen = !isOpen;
});
