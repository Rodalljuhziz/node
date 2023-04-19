//4.1 Découverte

const [a, b, c] = [1, 2, 3, 4];
[,,3,];
console.log(a);
console.log(b);
console.log(c);
/* dans les lignes au dessus il associe dans un tableau a = 1, b = 2  et ainsi de suite */

const {first, last, ...rest} = {first: 'Paul', last: 'Henta', age: 35};
console.log(first);
console.log(last);
console.log(rest);
/* il remplace les valeur de first et last par Paul pour first et Henta pour last*/

//4.2 Application

for (let key of Object.entries(data)){
    console.log(key[0] + " " + key[1].dateDebut + " " + key[1].dateFin);
}

function meteo (pertubation){
   Object.entries(data) = pertubation;

}