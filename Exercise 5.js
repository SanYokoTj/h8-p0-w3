Exercise 5: Logic Challenge - Palindrome

function palindrome(kata) {
var hasil = '';
  for (var i = kata.length - 1; i >= 0; i--) {
    hasil += kata[i];
  }
return hasil === kata;
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));
