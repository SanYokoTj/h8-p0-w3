Exercise 7: Logic Challenge - Menghitung Jumlah Kata

function hitungJumlahKata(kalimat) {
kalimat += ' ';
  var totalKata = 0;
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === ' ') {
      totalKata++;
    }
  }
  return totalKata;
}

console.log(hitungJumlahKata('I have a dream'));
console.log(hitungJumlahKata('Never eat shredded wheat or cake'));
console.log(hitungJumlahKata('A song to sing'));
console.log(hitungJumlahKata('I'));
console.log(hitungJumlahKata('I believe I can code'));