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


// Bouton de scroll UP
let scrollTopBtn = document.getElementById("scrollUp-btn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
