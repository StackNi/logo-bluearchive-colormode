import './style.css';
import LogoCanvas from './canvas';
import './i18n';

(async function () {
  const logo = new LogoCanvas();
  logo.draw();

  const colorL = document.querySelector('#colorL') as HTMLInputElement;
  const colorR = document.querySelector('#colorR') as HTMLInputElement;
  if (colorL) colorL.value = '#128AFA';
  if (colorR) colorR.value = '#2B2B2B';
})();
