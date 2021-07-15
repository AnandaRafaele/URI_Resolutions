var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

var cases = lines[0],
  num,
  sum = 0,
  media,
  pond = [2, 3, 5];

for (var i = 1; i <= cases; i++) {
  num = lines[i].split(" ");
  num.map((item, index) => {
    sum += parseFloat(item) * pond[index];
  });
  media = sum / 10;
  sum = 0;
  console.log(media.toFixed(1));
}
