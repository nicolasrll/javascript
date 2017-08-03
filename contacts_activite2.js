/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme


// Création du prototype 
var Contact = {    
    // Fonction d'initialisation
    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;        
    },
    
    // Methode permettant l'affichage des informations contact
    decrire: function() {
        // Fonction décrivant le contact
        var description = "Nom : " + this.nom + ", prenom : " + this.prenom;
        return description;
    },
    
};


// Création des 2 objet par défaut 
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");


// Création du tableau vide
var contacts = []
// Ajout de nos 2 contacts dans le tableau
contacts.push(contact1);
contacts.push(contact2);


console.log("Bienvenue dans le gestionnaire des contacts !");
// Ainsi que des choix
while (choix !== 0) {
console.log(" \n 1 : Lister les contacts \n 2 : Ajouter un contact \n 0 : Quitter ");
var choix = Number(prompt("Choisissez une option"));
    if(choix === 1) {
        console.log("Voici la liste de tout vos contacts : ");
        contacts.forEach(function (contact) {
            console.log(contact.decrire() );
        });
    }
    // Ajout d'un nouveau contact: 
    else if(choix === 2) { 
        
        var nouvContact = Object.create(Contact);
        nom = prompt("Entrez le nom du nouveau contact");
        prenom = prompt("Entrez le prénom du nouveau contact");
        nouvContact.init(nom, prenom);
        contacts.push(nouvContact); 
        console.log("Le nouveau contact a été ajouté");        
    }

} // Fin While

console.log("Au revoir !");

