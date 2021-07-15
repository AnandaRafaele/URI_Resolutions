var i = 0,
  formattedI;
while (i <= 2) {
  [1, 2, 3].map((j) => {
    formattedI = parseFloat(i.toFixed(1));
    console.log(`I=${formattedI} J=${j + formattedI}`);
  });

  i += 0.2;
}
