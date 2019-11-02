Exercise 4: Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2 (input) {
  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4, 0, 'Pria');
  input.splice(5, 1, 'SMA Internasional Metro');
  console.log(input);
  
var bulan = input[3].split('/');
  var namaBulan = '';
  switch (bulan[1]) {
    case "01" : namaBulan = 'Januari'; break;
    case "02" : namaBulan = 'Februari'; break;
    case "03" : namaBulan = 'Maret'; break;
    case "04" : namaBulan = 'April'; break;
    case "05" : namaBulan = 'Mei'; break;
    case "06" : namaBulan = 'Juni'; break;
    case "07" : namaBulan = 'Juli'; break;
    case "08" : namaBulan = 'Agustus'; break;
    case "09" : namaBulan = 'September'; break;
    case "10" : namaBulan = 'Oktober'; break;
    case "11" : namaBulan = 'November'; break;
    case "12" : namaBulan = 'Desember'; break;
    default:
  }
  console.log(namaBulan);
  
var simpanTanggal = [];
  for (var i = 0; i < bulan.length; i++) {
    simpanTanggal.push(parseInt(bulan[i]));
  }
  
simpanTanggal.sort(function(value1, value2) { return value1 < value2 } );

var simpanHasil = simpanTanggal[2].toString();

var tambah0 = '';
  if(simpanHasil < 10) {
    tambah0 += 0;
  }

  var str = tambah0  + simpanHasil;
  simpanTanggal.splice(2, 1, str);

  console.log(simpanTanggal);
  console.log(bulan.join('-'));
  console.log(input[1].split(' ').slice(0, 2).join(' '));
}  
dataHandling2(input);
