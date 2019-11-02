Exercise 2: Mengakses Nilai dalam Array

function balikString (str) {
 var hasilString = '';
 for (var i = str.length - 1; i >= 0; i--){
   hasilString += str[i];
 }
 return hasilString; 
}

console.log(balikString('hello world!'));