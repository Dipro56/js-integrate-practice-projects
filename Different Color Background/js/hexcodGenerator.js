const colorGeneratorButton = document.getElementById('colorGeneratorButton');

colorGeneratorButton.addEventListener('click', changeColor);

const colorSet = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

function getColor(colorSet) {
  let color = '#',
    randomPosition;
  for (i = 0; i < 6; i++) {
    randomPosition = Math.floor(Math.random() * 16 + 1) - 1;
    color += colorSet[randomPosition];
  }
  return color;
}

function changeColor() {
  const body = document.getElementById('hexBody');
  const hexCode = document.getElementById('hexCode');
  body.style.background = getColor(colorSet);
  hexCode.innerHTML = getColor(colorSet);
}
