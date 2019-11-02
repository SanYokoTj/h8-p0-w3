Exercise 15: Logic Challenge - Mengelompkkan Hewan

function groupAnimals(animals) {
var animalGroup = [];
 for (var i = 0; i < animals.length; i++){
	 animalGroup.push([]);
	 var index = 0
;

for (var j = 0; j < animals.length; j++) {
  if(animals[i][0] === animals[j][0]) {
	  animalGroup[i][index] = animals[j]; 
    index++;
   }
  }
}

var tampung = 0;
 for (var i = 0; i < animalGroup.length; i++) {
   for(var j = 0; j < animalGroup.length-i-1; j++) {
     if(animalGroup[j] > animalGroup[j+1]) {
       tampung = animalGroup[j];
       animalGroup[j] = animalGroup[j+1];
       animalGroup[j+1] = tampung;
     }
   }
 }

for (var i = 0; i < animalGroup.length-1; i++) {
   if (animalGroup[i][0] === animalGroup[i+1][0]) {
     animalGroup.splice(i,1);
   }
 }
return animalGroup;
  
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));