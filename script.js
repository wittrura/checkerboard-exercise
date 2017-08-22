function generateRandomLetterNum() {
  let str = 'abcdef0123456789'
  return str[Math.floor(Math.random() * str.length)];
}

function generateRandomHexColor(){
  let hexColor = '#'
  for (var i = 0; i < 6; i++) {
    hexColor += generateRandomLetterNum();
  }
  return hexColor;
}

function parseRgbColor(colorArray) {
  let rgbColor = 'rgb(';
  rgbColor += colorArray.join(', ');
  rgbColor += ')';
  return rgbColor;
}

function populateBoard(startColor1, startColor2) {
  let color1 = startColor1;
  let color2 = startColor2;
  for (var i = 0; i < 81; i++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('style', "width: 11.1%; float: left; padding-bottom: 11.1%;");

    if (i % 2 === 0 ) {
      newDiv.style.backgroundColor = parseRgbColor(color1);
    } else {
      newDiv.style.backgroundColor = parseRgbColor(color2);
    }
    document.body.appendChild(newDiv);

    color1[1] = color1[1] + 1;
    color2[1] = color2[1] + 1;
  }
}

populateBoard([220, 120, 0], [60, 150, 180]);
// console.log(parseRgbColor([246, 180, 0]));
