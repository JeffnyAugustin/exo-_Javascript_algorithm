// EXO 1  - Quelle sera la valeur de C à la fin de cet algorithme ?

// A = 12;
// B = 2;
// C = A * B;

// console.log(C);

 /*Le résultat affiche 24 donc la valeur de C est 24 */


// EXO 2  - Quelle sera la valeur de C à la fin de cet algorithme ?

// A = "123";
// B = "12";
// C = A + B;

// console.log(C);

 /*Le résultat affiche 12312 donc la valeur de C est 12312 car c'est une chaîne de caractères donc ça ne s'additionne pas */



// EXO 3  - Écrire un algorithme qui demande à l'utilisateur le prix Hors taxe d'un objet et qui donne sa valeur TTC (multiplier le prix par 1.196)

// const TVA = 1.196 ;
// let prixHT;
// let TTC = prixHT * TVA;

// let Price = prompt("Quel est le prix Hors taxe d'un objet" );

// alert(Price);



// EXO 4 - Ecrire un algorithme qui demande à l'utilisateur son prénom et son nom et qui affiche ensuite la phrase

// let nom = "AUGUSTIN";
// let prenom = "Jeffny";

// let username = prompt("Quel est ton nom & prénom ?" );

// function welcome (prenom, nom) {
// return "Bonjour" + prenom + "votre nom est" + nom;
// }


// EXO 5 Écrire un algorithme qui demande 2 nombres à un utilisateur. Il indique ensuite à l'utilisateur si le produit de ces 2 nombre (A * B) est positif ou négatif


// let A = prompt("Veuillez saisir un nombre");
// let B = prompt("Veuillez saisir un nombre");
// let Pfiou = A * B;

// function record(Pfiou) {

// if(Pfiou >= 0) {
//     alert ("C'est positif !");
// }

// else {
//     alert ("C'est négatif");
// }
// return Pfiou;
// }



// EXO 6 Écrire un algorithme qui demande à l'utilisateur son age. Il indique ensuite à l'utilisateur quel film il peut aller voir


// let age = prompt("Quel âge as-tu ?");
// console.log(age);

// function getBetter(age) {

//     if(age >= 13) {
//         alert ("Tu devrais aller voir Action Man");
//     }

//     else if (age < 13 && age <= 18) {
//         alert ("Tu devrais aller voir Matrix");
//     }

//     else {
//         alert ("Tu devrais aller voir Evil Dead");
//     }
    
// }

// getBetter ()


// Exo 7 Écrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse soit bonne.

// saisir un nombre entre 0 et 10
// const maxNumber = 10;
// let randomNumber= Math.round(Math.random()*maxNumber);
// console.log (randomNumber);
// let user;

// function game(breakAleg) {

// do {
// user = parseInt(prompt("Saisissez un nombre entre 0 et 10"));


// if (user<randomNumber)
// {

//     console.log("Trop petit, essaie encore");
// }


// else if (user>randomNumber) 
// { 

//      console.log ("Trop grand, essaie encore");
// }

// else if (user = randomNumber)
// {
//     console.log("Bravo, tu as trouvé la bonne réponse Champion(ne) ! ");
// }
// }  while (user !== randomNumber);

//     
// return randomNumber;
// }

// game()

// 


// Exo 8 Écrire un algorithme qui demande un chiffre et qui affiche ensuite tous les chiffres jusqu'à 0.


// function double (n) {
// let giveaNumber = parseInt(prompt("Saisissez un chiffre")) ;
// let n = 0;

// while(n > 0) {
//     n--;
//     console.log (n);
// }

// }

// double ()

// Exo 9  Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus ou au dessous de la bonne valeur

//     let aDeviner = 14;
//     let number =  parseInt(prompt("Devine un chiffre !")) ;


// function playground(number) {


//     do {
//         number =  parseInt(prompt("Devine un chiffre !")) ;


// if (number < aDeviner)
// {
//     alert ("Trop petit, essaie encore");
// }


// else if (number > aDeviner) 
// { 
    
//     alert ("Trop grand, essaie encore");
// }

// else if (number == aDeviner)
// {
//     alert("Bravo, tu as trouvé la bonne réponse Champion(ne) ! ");
// }
// } while (number !== aDeviner);

//     }

//     playground ()


// Exo 10 Écrire un algorithme qui calcule la somme des valeurs d'un tableau.

// const chiffre = [10, 15, 20, 15, 14, 8]
// let sum = 0;

// for (let i = 0; i < chiffre.length; i++) {
//     sum += chiffre[i];
// }
// console.log(sum);


// Exo 11 Écrire un algorithme qui permette de rentrer les notes des élèves de la classe. On demande dans un premier temps le nombre d'élève.

// function toArray(need) {

//     // Tableau contenant des notes
//     let note = [];
//     // Pour demander à l'utilisateur d'entrer le nombre d'élève
//     let nbrStudent = parseInt(prompt("Indiquez le nombre d'élève"));


//     for (let i = 0; i < nbrStudent ; i++) {
//     // A chaque fois qu'il y a un èleve on lui attribue une note

//     let sGrade = parseInt(prompt("Entrez les notes de chaque élève"));
//     note.push(sGrade)
// }

// document.write(note);
    

// }

// toArray ()



// Exo 12 Reprendre l'algorithme précédent et afficher le nombre d'élève au dessus de la moyenne

// function toArray(need) {

//     // Tableau contenant des notes
//     let note = [];
//     // Pour demander à l'utilisateur d'entrer le nombre d'élève
//     let nbrStudent = parseInt(prompt("Indiquez le nombre d'élève"));


//     for (let i = 0; i < nbrStudent ; i++) {
//     // A chaque fois qu'il y a un èleve on lui attribue une note

//     let sGrade = parseInt(prompt("Entrez les notes de chaque élève"));
//     if(sGrade >= 10) {
//     note.push(sGrade)
//     }

// }

// document.write(note.length);
//     // permet d'afficher le nombre d'élement dans un tableau

// }

// toArray ()

// Exo 13 Écrire un algorithme qui trouve la plus grande valeur dans ce tableau multidimensionnel.

function bigValue(){

nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]]
nbres.flat();
}

bigValue()


// Exo 14 Écrivez un algorithme qui demande un mot à l'utilisateur et lui affiche ensuite le nombre de lettres qui compose le mot. La fonction à utiliser s'appelle COMPTER

// function compter(x) {
//         x = prompt("Dis un mot !");
//         let palabra = x.length;
//         document.write(palabra);
        
// }

// compter()

// Exo 15 Écrivez un algorithme qui génère un chiffre aléatoire entre 0 et 5. Demandez ensuite à l'utilisateur de deviner ce chiffre avec des indices ("plus grand", "plus petit"). La fonction a utiliser est ALÉATOIRE(nbre)


//     // saisir un nombre entre 0 et 5
//     maxNumber = 5;
//     let randomNumber= Math.round(Math.random()*maxNumber);
//     console.log (randomNumber);
//     let user;

//     function game(breakAleg) {

//     do {
//     user = parseInt(prompt("Saisissez un nombre entre 0 et 10"));


//     if (user<randomNumber)
//     {  

//     console.log("Trop petit, essaie encore");
// }


//     else if (user>randomNumber) 
//     { 

//         console.log ("Trop grand, essaie encore");
//     }

//     else if (user = randomNumber) {
//     console.log("Bravo, tu as trouvé la bonne réponse Champion(ne) ! ");
//     } 

// }  while (user !== randomNumber);


//         return randomNumber;
// }

// game()


// Exo 16 Ecrire une fonction qui prend 2 paramètre (A et B) et qui retourne 0 si A est plus grand que B et 1 sinon

// function muyGenial(A, B) {
//     if (A > B) {
//         return 0;
//     }

//     else {
//         return 1;
//     }
// }

// muyGenial()


// Exo 17 Maintenant que vous gérez l'algorithme vous êtes prêt à affronter le boss final : Le tri de tableau !




// Exo 18 Écrire une fonction qui prend un tableau de nombres en entrée et renvoie le plus grand nombre de ce tableau

// Exo 19 Écrire une fonction qui prend une chaîne de caractères en entrée et renvoie le nombre de voyelles dans cette chaîne


// Exo 20 Écrire une fonction qui prend un tableau de nombres en entrée et renvoie un nouveau tableau contenant uniquement les nombres pairs du tableau d'entrée.

// Exo 21 Écrire une fonction qui prend une chaîne de caractères en entrée et renvoie la même chaîne, mais avec chaque mot inversé
function tooFace() {
let etBam = "Bonbon";
console.log(etBam)
let PfiouPfiou = etBam.split("");
console.log(PfiouPfiou)
let Pfiou = PfiouPfiou.reverse("");
console.log(Pfiou)
let bDream = Pfiou.join("");
console.log(bDream)

return bDream;
}

tooFace()