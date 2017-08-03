/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

//var reponseJoueur = 0; // On initialise la variable de reponse pour entrer dans le while SSet ainsi lancer le programme

// Déclaration et initialisation des variables utilisées
var i = 0;
var gagne = false;
var repJoueur;

// Tant qu'on n'a pas épuisé nos chance et qu'a pas encore gagné
while((i < 6 ) && (gagne === false)) {
    // On demande la saisie du nombre. 
    //Ici je ne vérifie pas volontairement la validité du nombre. La consigne précise qu'il est toujours valide
    repJoueur = Number(prompt("Saisir le nombre à deviner. Il est compris entre 1 et 100"));
    
    // Ensuit on traite la réponse
    if (repJoueur > solution) {
        console.log(repJoueur + " est trop grand");
    }
    else if( repJoueur === solution) {
        gagne = true;    
    }
    else {
        console.log(repJoueur + " est trop petit");
    }
    
    // Incrémentation
    i ++    
}

// On définit en cas de victoire ou défait
if (gagne === true) {
    console.log(" Bravo, la solution était " + solution + " \n Vous avez trouvé en " + i + " essai(s)");
               
}
else {
    console.log("Perdu... La solution était " + solution + " \n Veuillez rafraichir la page pour réessayer");
}
