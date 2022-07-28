var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];
var set = set1.concat(set2);
var s_c = 0;
var s_d = 0;
console.log(set);
for (var i = 0; i < set.length; i++) {
  var check = false;
  for (var j = 0; j < set.length; j++) {
    if (set[i] == set[j] && i != j) {
      s_c = s_c + set[i];
      check = true;
      break;
    }
  }
  if (check == false) {
    s_d = s_d + set[i];
  }
}
console.log("somme commun", s_c);
console.log("somme diff", s_d);
