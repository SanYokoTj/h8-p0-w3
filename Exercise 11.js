Exercise 11: Logic Challenge - Tentukan Deret Aritmatika

function deretAritmatika(arr) {
for (var i = 0; i < arr.length; i++){
    return arr[i+1] - arr[i] === arr[arr.length - 1] -  arr[arr.length - 2];
  }
}

console.log(deretAritmatika([1, 2, 3, 4, 5, 6])); 
console.log(deretAritmatika([2, 4, 6, 12, 24])); 
console.log(deretAritmatika([2, 4, 6, 8])); 
console.log(deretAritmatika([2, 6, 18, 54])); 
console.log(deretAritmatika([1, 2, 3, 4, 7, 9])); 