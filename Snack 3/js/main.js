// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const myArray1 = [1, 2, 3, 4, 5];

console.log("Array iniziale:");
console.log(myArray1);

function cutArray(array, a, b) {
   const myArray2 = array.filter((element, index) => {
      if (index >= a && index <= b) return true;
      return false;
   });
   return myArray2;
}

console.log("Array tagliato:");
console.log(cutArray(myArray1, 2, 4));
// output: myArray2 = [2,3,4];
