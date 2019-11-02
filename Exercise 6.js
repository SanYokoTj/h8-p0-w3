Exercise 6: Logic Challenge - Number Palindrome

function angkaPalindrome(num) {
do {
num++;
var tampung = '';
    for (var i = String(num).length-1; i >= 0; i--) {
    tampung += String(num)[i];
    }
  }

while (tampung !== String(num));
  return parseInt(tampung);
}

console.log(angkaPalindrome(8)); 
console.log(angkaPalindrome(10)); 
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000)); 