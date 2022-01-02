

let homeLink = 'https://abdalrhmnroston.github.io/Portfolio/index.html';
let workLink = 'https://abdalrhmnroston.github.io/Portfolio/work.html';



// Header And Ul Links 


// 1 Header

let header = document.querySelector('header');
let headerLinks = document.querySelectorAll('.ul-sections li');
let sections = document.querySelectorAll('section');

headerLinks.forEach((el) => {
    el.onclick = () => {
        // Close Menu In Mopile From Click Any Li
        el.parentElement.classList.remove('menu-mobil-open');
        let sectionTarget = el.getAttribute('data-target');
        // Chick If Elemente Target Is Available
        if (sectionTarget.length < 10) {
            let stach = document.querySelector(`section.${el.getAttribute('data-target')}`);
            // Add Class Active For Targrt And Remove From All Li
            activeLink(el);
        // Go Target Section 
            stach !== null ? stach.scrollIntoView() : '';
        } else {
            window.location.href = sectionTarget;
        }
    }
})

function activeLink(active) {
    headerLinks.forEach((el) => {
        el.classList.remove('active-link');
        active.classList.add('active-link')
    })
}   

// Header Appears After 5 Seconds
setTimeout(showHeader, 10); // Show Header Next Ptint Text (10 Secands)
function showHeader() {
    header.style.cssText = 'width: 100%; overflow: visible';
}

// Chinge Postion Header On Scrolling
window.onscroll = () => {
    // Math.ceil(window.pageYOffset) > 80 ? header.style.top = '0' : header.style.top = '15px';
}


// Create Dinamec Logo With Build Div Class "logo" In Page

let logo = document.querySelectorAll('.logo');
createLogo() // Open Create Auto Logo
// Create Contnet Logo In Any Class Name logo
function createLogo () {
    if (logo) {
        for (let i=0; i < logo.length; i++) {
        let spanOne = document.createElement('span');
        let spanTow = document.createElement('span');
        let spanThree = document.createElement('span');
        let br = document.createElement('br');
        spanOne.appendChild(document.createTextNode('A'));
        spanTow.appendChild(document.createTextNode('bdalrhmn'));
        spanThree.appendChild(document.createTextNode('Roston{}'));
            logo[i].appendChild(spanOne);
            logo[i].appendChild(spanTow);
            logo[i].appendChild(br);
            logo[i].appendChild(spanThree);
        }
    }
}

logo.forEach((el) => {
    el.addEventListener('click', () => openTarget(homeLink));
})

function openTarget (target) {
    if (target.length > 10) {
        window.location.href = target;
    }
    console.log("Done")
}


// 2 Ul Links

//  Toogel Menu
let  toogelMenu = document.querySelector('.toogel-menu');
let  ulSections = document.querySelector('.ul-sections');

// Close Window Ul From Click Any Link
toogelMenu.addEventListener('click', function ()  {
    ulSections.classList.toggle('menu-mobil-open');
    this.classList.toggle('toogel-menu-open')
}); 


// Button Go Top
let divGoTop = document.createElement('div');
let iGoTop = document.createElement('i');
    divGoTop.classList.add('go-top');
    iGoTop.classList.add('fas', 'fa-arrow-circle-up');
divGoTop.appendChild(iGoTop)    
document.querySelector('body').appendChild(divGoTop);
function creatButnTop () {

    if (window.pageYOffset > 700) {
        divGoTop.classList.add('active');
    } else {
        divGoTop.classList.remove('active');
    }
}
// Toggel Display None && Flex Button Go Top
window.addEventListener('scroll', () => creatButnTop());

divGoTop.onclick = () => {
    window.scrollTo(0, 0);
}


