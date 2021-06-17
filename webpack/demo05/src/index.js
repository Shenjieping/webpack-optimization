import testImg from './img/test.png';

function render() {
  const img = document.createElement('img');
  img.src = testImg;
  document.body.appendChild(img);
}

render();