const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateButton = document.getElementById('calculate');
const output = document.getElementById('output');

calculateButton.addEventListener('click', result);

function result() {
  let heightText = document.getElementById('height').value;
  let weightText = document.getElementById('weight').value;
  output.innerHTML = Math.round(weightText / (heightText * heightText));
}
