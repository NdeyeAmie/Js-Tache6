// Générer un nombre aléatoire entre 10 et 100
let nombreADeviner = Math.floor(Math.random() * 91) + 10;
let nombreEssais = 10;
let essais = 0;

function devinerNombre() {
    essais++;
    // parseInt() est une fonction JavaScript qui convertit une chaîne de caractères en un entier (nombre entier).
    let nombrePropose = parseInt(document.getElementById("nombre").value);

    if (essais <= 10) {
        if (nombrePropose === nombreADeviner) {
            alert(`Bravo ! Vous avez deviné le nombre en ${essais} essais.`);
        } else if (nombrePropose < nombreADeviner) {
            alert(`Le nombre à deviner est plus grand que ${nombrePropose}. Il vous reste ${nombreEssais - essais} essais.`);
        } else {
            alert(`Le nombre à deviner est plus petit que ${nombrePropose}. Il vous reste ${nombreEssais - essais} essais.`);
        }
    } else {
        alert(`Vous avez utilisé tous vos essais. Le nombre à deviner était ${nombreADeviner}.`);
    }
}
 