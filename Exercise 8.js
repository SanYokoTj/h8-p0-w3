Exercise 8: Logic Challenge - Pasangan Angka Terbesar

function pasanganTerbesar(num) {
var convert = num.toString();
var simpan = [];

for (var i=0; i<convert.length-1; i++) {
    simpan[i] = convert[i] + convert[i+1];

var tampung =0;
    for (var j=0; j<simpan.length - 1; j++) {
      for (var k=0; k<simpan.length-j-1; k++) {
        if (parseInt(simpan[k]) > parseInt(simpan[k+1])) {
        tampung = simpan[k];
        simpan[k] = simpan[k+1];
        simpan[k+1] = tampung;
      }
      }
    }
    
}
return simpan[simpan.length-1];
}

console.log(pasanganTerbesar(641573)); 
console.log(pasanganTerbesar(12783456)); 
console.log(pasanganTerbesar(910233)); 
console.log(pasanganTerbesar(71856421)); 
console.log(pasanganTerbesar(79918293)); 