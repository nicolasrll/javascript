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
var content = document.getElementById('contenu')

listeLiens.forEach(function(item) {
    //console.log(item.titre + ' ' + item.url + ' ' + item.auteur + ' ')
    
    // title content
    var clickable = document.createElement('a');
    //clickable.textContent = item.titre;
    clickable.appendChild(document.createTextNode(item.titre));
    clickable.href= item.url;
    clickable.style.color = "#428bca";
    clickable.style.textDecoration = "none";
    clickable.style.marginRight= "10px";

    // url after title
    var spanTitle = document.createElement('span');
    //spanTitle.textContent = item.url;
    spanTitle.appendChild(document.createTextNode(item.url));


    var text = document.createElement('span');
    //text.textContent = "Ajouté par " + item.auteur;
    text.appendChild(document.createTextNode("Ajouté par " + item.auteur));

    
    var title = document.createElement('h4');
    title.style.margin = '0px';
    title.appendChild(clickable);
    title.appendChild(spanTitle);
    
    // Each link
    var link = document.createElement('div');
    link.classList.add('lien');
    link.appendChild(title);
    link.appendChild(text);


    content.appendChild(link);
})