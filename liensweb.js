/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web


for (var i = 0; i < listeLiens.length; i++) {
    var pElt = document.createElement("p"); // Constitue l'ensemble sur lequel on va ajouter nos autres éléments
    pElt.classList.add("lien"); // En lui attribuant la classe "lien" pour la mise en page
    
    // Ajout Titre cliquable
    var ajoutTitre = document.createElement("a"); 
    ajoutTitre.href = listeLiens[i].url ;
    ajoutTitre.textContent = listeLiens[i].titre + " "; 
    pElt.appendChild(ajoutTitre);
    
    // Ici j'ai essayé de rendre le titre en gras via span mais j'ai pas réussi
    /*
    var spanAjout = document.createElement("span"); //A checker
    //spanAjout.classList.add("titre_lien");//A checker
    ajoutTitre.appendChild(spanAjout); //A checker
    */    
   
    // Lien suivant le titre non cliquable comme demandé
    pElt.appendChild(document.createTextNode(listeLiens[i].url ));
    
    // Création  insertion du retour à la ligne
    var retourLigne = document.createElement("br");
    pElt.appendChild(retourLigne);
    
    // Element texte "Ajouté par"
    pElt.appendChild(document.createTextNode("Ajouté par "));
    pElt.appendChild(document.createTextNode(listeLiens[i].auteur)); // On récupère pour chaque lien l'auteur associé
    
    document.getElementById("contenu").appendChild(pElt); // Ici on ajout la variable qui stock chaque lien au document
    
    var couleurTitre = document.querySelectorAll("a");
    couleurTitre[i].style.color = "#428bca";    
}

