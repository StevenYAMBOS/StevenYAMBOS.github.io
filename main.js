// PAGE D'ACCUEIL
const txtAnim = document.querySelector('#text');

new Typewriter(txtAnim, {
    // boucler la chaîne de caractères
    loop: true,
    deleteSpeed: 20
})
// "\" sert d'espace avant une appostrphe
.changeDelay(20)
.typeString('Moi c\'est Steven YAMBOS')
.pauseFor(300)
.typeString(', développeur <strong><span style ="color: #9e1919">web</span> et <span style ="color: #9e1919">mobile</span></strong> !')
.pauseFor(1000)
.deleteChars(15)
.typeString('<strong><span style ="color: #edf61c">Javascript</span></strong> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<strong><span style ="color: #2FD37D">Kotlin</span></strong> !')
.pauseFor(1000)
.start();


// PAGE PROJETS

// Sélectionner le Span du HTML
const titreSpans = document.querySelector('.container-first h1 span');
const logo = document.querySelector('.logo-projets');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

// Une fois que le site aura chargé on va créer une timeline qui va lancer l'animation
window.addEventListener('load', () => {
    // Créer la timeline
    // "gsap" = nom de la librairie
    // "paused: true" pour que l'animation soit sur pause de base
    var tl = gsap.timeline();

    // Animer plusieurs élément les uns à la suite des autres
    // StaggerFrom donc on va aller d'un endroit à un autre (from), ici le stagger dure 0.3s donc les span seront animer durant ce temps
    tl.from(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    // Lancer l'animation
    tl.play();
});


// Bouton "Dark Mode"
const toggle = document.getElementById('toggleDarkMode');
let toggleTheme = 0;

toggle.addEventListener('click', () => {

    if(toggleTheme === 0) {

        document.documentElement.style.setProperty('--texte', 'white');
        document.documentElement.style.setProperty('--background', 'black');
        document.documentElement.style.setProperty('--buton', 'white');
        document.documentElement.style.setProperty('--textButon', 'white');
        // On incrémente toggleTheme avec "++"
        toggleTheme++;

    }else {
        document.documentElement.style.setProperty('--texte', 'black');
        document.documentElement.style.setProperty('--background', 'white');
        document.documentElement.style.setProperty('--buton', 'black');
        document.documentElement.style.setProperty('--textButon', 'white');
        // On incrémente toggleTheme avec "--" pour revenir à 0
        toggleTheme--;

    }

})
