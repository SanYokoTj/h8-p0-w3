Exercise 9: Logic Challenge - Mencari Mean

function cariMean(arr) {
var jumlah = 0;
  for (var i = 0; i < arr.length; i++) {
    jumlah += arr[i];
    }
    
return Math.round(jumlah/arr.length);
}

console.log(cariMean([1, 2, 3, 4, 5])); 
console.log(cariMean([3, 5, 7, 5, 3])); 
console.log(cariMean([6, 5, 4, 7, 3])); 
console.log(cariMean([1, 3, 3])); 
console.log(cariMean([7, 7, 7, 7, 7])); 