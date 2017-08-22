console.log('js file connected');

for (var i = 0; i < 81; i++) {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('style', "width: 11.1%; float: left; padding-bottom: 11.1%;");
  if (i % 2 === 0) {
    newDiv.style.backgroundColor = "black";
  } else {
    newDiv.style.backgroundColor = "red";
  }
  document.body.appendChild(newDiv);
}
