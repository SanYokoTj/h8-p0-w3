Exercise 13: Logic Challenge - Target Terdekat

function targetTerdekat(arr) {
var lookingO = arr.indexOf('o');
var isDistance = 0;
var realDistance = arr.length;
for (var i = 0; i < arr.length; i++){
    if (arr[i] === 'x') {
      isDistance = Math.abs(lookingO - i);
        if (isDistance < realDistance) {
        realDistance = isDistance;
      }
    }
  }
  if (arr.indexOf('x') === -1) {
    return 0;
  }
return realDistance;
}
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x']));
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x']));
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', '']));
console.log(targetTerdekat(['', '', 'o', '']));
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x']));