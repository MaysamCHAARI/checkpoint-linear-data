var str = "mynyamesis";
var i = 0;
var s;
hashtab = new Map();
for (var i = 0; i < str.length; i++) {
  if (hashtab.has(str[i]) == false) {
    hashtab.set(str[i], 1);
  } else {
    hashtab.set(str[i], hashtab.get(str[i]) + 1);
  }
}
console.log(hashtab);

for (item of hashtab) {
  if (item[1] == 1) {
    console.log("s", item);
    break;
  }
}
