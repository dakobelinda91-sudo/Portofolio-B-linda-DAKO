/* ==============================
PORTFOLIO DE BÉLINDA DAKO
============================== */

// Vérification que JavaScript fonctionne
console.log("Mon portfolio fonctionne !");

/* ==============================
NAVIGATION
============================== */

// Récupération des liens du menu
const liensNavigation = document.querySelectorAll("nav ul a");

// Parcours des liens
for (let i = 0; i < liensNavigation.length; i++) {

liensNavigation[i].addEventListener("click", function () {

    console.log("Section sélectionnée :", liensNavigation[i].textContent);

});

}

/* ==============================
BOUTONS DE L'ACCUEIL
============================== */

const boutonProjets = document.querySelector('a[href="#projets"]');

if (boutonProjets) {

boutonProjets.addEventListener("click", function () {

    console.log("Ouverture de la section projets.");

});

}

const boutonContact = document.querySelector('a[href="#contact"]');

if (boutonContact) {

boutonContact.addEventListener("click", function () {

    console.log("Ouverture de la section contact.");

});

}

/* ==============================
PROJETS
============================== */

// Récupération des cartes de projets
const projets = document.querySelectorAll(".project-card");

// Affichage du nombre de projets
console.log("Nombre de projets :", projets.length);

// Parcours des projets
for (let i = 0; i < projets.length; i++) {

console.log("Projet numéro :", i + 1);

}

/* ==============================
BOUTONS DES PROJETS
============================== */

const liensProjets = document.querySelectorAll(".project-link");

for (let i = 0; i < liensProjets.length; i++) {

liensProjets[i].addEventListener("click", function (event) {

    // Empêche le lien "#" de remonter en haut de la page
    event.preventDefault();

    console.log("Projet sélectionné :", i + 1);

});

}

/* ==============================
FORMULAIRE DE CONTACT
============================== */

const formulaire = document.querySelector(".contact form");

if (formulaire) {

formulaire.addEventListener("submit", function (event) {

    // Empêche le rechargement de la page
    event.preventDefault();

    // Récupération des informations
    const nom = document.querySelector("#nom").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Affichage dans la console
    console.log("Nom :", nom);
    console.log("Email :", email);
    console.log("Message :", message);

    // Message de confirmation
    alert("Merci " + nom + " ! Votre message a bien été pris en compte.");

});

}