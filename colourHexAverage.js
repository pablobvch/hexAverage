function getPartColour(hexa1, hexa2, beg, end) {
  const c1 = hexa1.substring(beg, end);
  const c2 = hexa2.substring(beg, end);
  let mc = (parseInt(c1, 16) + parseInt(c2, 16)) / 2;
  mc = Math.round(mc).toString(16);
  mc.length < 2 ? mc = `0${mc}` : mc;
  return mc;
}

function colourHexAverage(hexa1, hexa2) {

  const h1 = getPartColour(hexa1, hexa2, 0, 2);
  const h2 = getPartColour(hexa1, hexa2, 2, 4);
  const h3 = getPartColour(hexa1, hexa2, 4, 6);
  return (h1 + h2 + h3).toUpperCase();
}

console.log(colourHexAverage(process.argv[2], process.argv[3]));
