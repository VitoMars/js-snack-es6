// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
   {
      nome: "Mountain-Bike_1",
      peso: 5,
   },
   {
      nome: "Mountain-Bike_2",
      peso: 3,
   },
   {
      nome: "Mountain-Bike_3",
      peso: 8,
   },
];

let pesoMinore = Number.POSITIVE_INFINITY;
let nomeMinore = "";
let objMinore;

for (let i = 0; i < bici.length; i++) {
   let tmp = bici[i].peso;
   if (tmp < pesoMinore) {
      pesoMinore = tmp;
      nomeMinore = bici[i].nome;
      objMinore = bici[i];
   }
}

const { peso } = objMinore;
console.log(peso);

console.log(`La bici piu' leggera e' ${nomeMinore} con peso ${pesoMinore}`);

// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

const getPesoMinore = (array) => {
   let pesoMinore = Number.POSITIVE_INFINITY;
   let nomeMinore = "";
   let objMinore;

   for (let i = 0; i < bici.length; i++) {
      let tmp = bici[i].peso;
      if (tmp < pesoMinore) {
         pesoMinore = tmp;
         nomeMinore = bici[i].nome;
         objMinore = bici[i];
      }
   }
   return objMinore;
};

console.log(getPesoMinore(bici));
