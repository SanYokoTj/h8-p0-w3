Exercise 12: Logic Challenge - Tentukan Deret Geometri

function deretGeometri(arr) {
for (var i = 0; i < arr.length; i++){
    return arr[i+1] / arr[i] === arr[arr.length - 1] / arr[arr.length - 2];
  }
}

console.log(deretGeometri([1, 3, 9, 27, 81])); 
console.log(deretGeometri([2, 4, 8, 16, 32])); 
console.log(deretGeometri([2, 4, 6, 8])); 
console.log(deretGeometri([2, 6, 18, 54]));
console.log(deretGeometri([1, 2, 3, 4, 7, 9])); 