//                    بــســم ألـلـه الــرحـمن الــرحيــم                



// Home //
let title = document.querySelector('.jop-title');
let info = document.querySelector('.info');
let home = document.querySelector('.home');
let arrowHome = document.querySelector('.home .arrow');
let contTitle = document.querySelector('.parent-jop-title');
let countHome = document.querySelector('.home .container');
let counText = document.querySelector('.home .text');
let lightTop = document.querySelector('.home .container > img');
// Copy Image Light Top 
let lightTop2 = lightTop.cloneNode(true);
let textPrint = ["Hi, Im Abdalrhmn Roston", "Front End Developer"];
let transitionPrint = 250;

// Genereted From Print a => Info & b => Title
a = 0;
b = 0;

let showInfo = setInterval(() => {
    info.innerHTML += textPrint[0][a];
    a++;
    if (textPrint[0][a] === undefined) {
    // Stop Print
    clearInterval(showInfo);
    }
}, transitionPrint);

let showTitle = setTimeout(printTitle, transitionPrint * textPrint[0].length + 1000);
function printTitle () {
    let setPrintTitle = setInterval(() => {
        title.innerHTML += textPrint[1][b];
        b++;
    if (b >= textPrint[1].length) {
    // Change Direction Arrow Down In Home
    arrowHome.classList.remove('arrow-top');
    arrowHome.classList.add('arrow-down');
    // Stop Print
    clearInterval(setPrintTitle)
    }
    }, transitionPrint - transitionPrint / 2.5);
}

setTimeout(scrollAuto, 12500);

// Scrooll 150Px Next Remove Class Scale In Print Title
function scrollAuto () {
    let eleScale = document.querySelector('.show-effect-scale');
    eleScale === null ? window.scrollTo(0, 120) : '';
}

// Light Efects In Home //

// Append Image Light Top In Page
countHome.appendChild(lightTop2);


// Open And Close Light Next 11 Sacends From Relod Window
setTimeout(openCloseLight, 11000);

function openCloseLight () {
    let count = 0;

    let chinegLight = setInterval(function () {
        lightTop.classList.toggle('light');
        lightTop2.classList.toggle('light');
        // Remove Zoom In Title Print
        counText.classList.remove('show-effect-scale');
        // Scroll Window 150Px
        count++;
        // Chick If Light Is Open & Close Done 
        count > 6 ? clearInterval(chinegLight) : '';
    }, 100)
    // Click In Image Light Open
    document.querySelectorAll('.home .container > img').forEach((el) => {
        el.addEventListener('click', function () {
            el.classList.toggle('light')
        })
    })
}


// Skills & Contact //

// Skills Show Progrees //
function showSkills () {
let skills = document.querySelectorAll('.skill');
    skills.forEach((el) => {
        el.style.width = el.getAttribute('data-progres');
        // Toggel Class Active In Skill 
        el.onclick = () => el.classList.toggle('skill-active'); 
    });
}

function showContact () {
    let socialMedia = document.querySelector('.social-media');
    let socialLinks = document.querySelectorAll('.skills-contact .social-media a');
    socialMedia.classList.add('show-effect-f');
    // In order to run the animation when accessing the section
    socialLinks.forEach((el) => el.style.cssText = 'animation-name: discoloration;');
}
window.addEventListener('scroll', () => {
    // Show Skills Progres From Scroll To Section Skills
    if (window.pageYOffset >= 800) {
        setTimeout(showSkills, 500);
        // Show Contact 
        setTimeout(showContact, 3000);
    }
}); 
