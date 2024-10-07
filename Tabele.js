
                           /*Exercice 1:*/
var mois = [ 'janvier', 'février', 'mars', 'avril', 'mai',' juin', 'juillet' ];
//La méthode pop() supprime le dernier élément d'un tableau et retourne cette valeur.

// Retirer la dernière valeur du tableau
var supprimeElement = mois.pop();

console.log(supprimeElement);

var ajoutValeur = mois.push('août')
// mois.splice(1, 0, 'Octobre');
mois[1] = 25;

// Afficher les valeurs restantes
for (var i = 0; i < mois.length; i++) {
    // .length renvoie le nombre d'éléments dans le tableau.
    // document.write() : Cette méthode écrit du contenu directement dans la page HTML
    document.write(mois[i] + "<br>");
    // Pour afficher la troisième valeur du tableau (index 2)
}
document.write("Nombre de valeurs dans le tableau : " + mois.length + "<br>");
document.write("Troisième valeur du tableau : " + mois[2]);

                          /*Exercice 2:*/
