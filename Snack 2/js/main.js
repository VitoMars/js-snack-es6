// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
   {
      nome: "Juventus",
      puntiFatti: 0,
      falliSubiti: 0,
   },
   {
      nome: "Milan",
      puntiFatti: 0,
      falliSubiti: 0,
   },
   {
      nome: "Inter",
      puntiFatti: 0,
      falliSubiti: 0,
   },
];

console.log(squadre);

const newArray = [];

for (i = 0; i < squadre.length; i++) {
   squadre[i].puntiFatti = Math.round(Math.random() * 5);
   squadre[i].falliSubiti = Math.round(Math.random() * 3);

   const { nome, falliSubiti } = squadre[i];
   newArray.push({ nome, falliSubiti });
}

console.log(newArray);
