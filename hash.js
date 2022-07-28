var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];
var set = set1.concat(set2);
var s_c = 0;
var s_d = 0;
hashtab = new Map();
for (var i = 0; i < set.length; i++) {
  if (hashtab.has(set[i]) == false) {
    hashtab.set(set[i], 1);
  } else {
    hashtab.set(set[i], hashtab.get(set[i]) + 1);
  }
}
console.log(hashtab);
for (item of hashtab) {
  console.log(item);
  if (item[1] > 1) {
    s_c = s_c + item[0] * item[1];
  } else {
    s_d = s_d + item[0];
  }
}
console.log("sc", s_c);
console.log("sd", s_d);
