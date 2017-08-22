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

function populateBoard() {
  for (var i = 0; i < 81; i++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('style', "width: 11.1%; float: left; padding-bottom: 11.1%;");
    newDiv.style.backgroundColor = generateRandomHexColor();
    document.body.appendChild(newDiv);
  }
}

// updates the entire board at once
function updateColors () {
  let colorDivs = document.getElementsByTagName('div');
  for (var i = 0; i < colorDivs.length; i++) {
    colorDivs[i].style.backgroundColor = generateRandomHexColor();
  }
  setTimeout(updateColors, 2000);
}

// updates a randomly selected div
function updateColorsSequential() {
  window.setInterval(function() {
    let colorDivs = document.getElementsByTagName('div');
    let randomDiv = colorDivs[Math.floor(Math.random() * colorDivs.length)];
    randomDiv.style.backgroundColor = generateRandomHexColor();
  }, 100);
}


populateBoard();
updateColors();
updateColorsSequential();
