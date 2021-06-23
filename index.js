import './style.css';

const appDiv = document.getElementById('app');

function palin(input) {
  if (typeof input !== 'number') {
    console.error('Not a valid number');
    return;
  }
  const a = parseInt(
    input
      .toString()
      .split('')
      .reverse()
      .join('')
  );
  appDiv.innerHTML = `<h1>${
    a === input ? input + ' is palindrom' : input + ' is not palin'
  }</h1>`;
  return a === input ? true : false;
}
palin(78788787);

function palin2(input) {
  for (let i = 0; i < Math.ceil(input.length / 2); i++) {
    console.log(
      'value of first part',
      i,
      'value of second part',
      input.length - i - 1
    );
    if (input[i] !== input[input.length - i - 1]) {
      console.error('not palin');
      var textnode = document.createTextNode(`${input}` + ' not a palindrom!!');
      appDiv.appendChild(textnode);
      return; // break;
    }
  }
  var textnode = document.createTextNode(`${input}` + ' yes palindrom :-)');
  appDiv.appendChild(textnode);
}
palin2('12356321');
palin2(78788787);
