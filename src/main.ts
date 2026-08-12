import './style.css';
import LogoCanvas from './canvas';
import './i18n';

function hsvToHex(h: number, s: number, v: number): string {
  s /= 100;
  v /= 100;
  const c = v * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  const toHex = (n: number) => Math.round((n + m) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

(async function () {
  const logo = new LogoCanvas();
  logo.draw();

  const hueL = document.getElementById('hueL') as HTMLInputElement;
  const satL = document.getElementById('satL') as HTMLInputElement;
  const valL = document.getElementById('valL') as HTMLInputElement;
  const previewL = document.getElementById('colorPreviewL') as HTMLSpanElement;

  const hueR = document.getElementById('hueR') as HTMLInputElement;
  const satR = document.getElementById('satR') as HTMLInputElement;
  const valR = document.getElementById('valR') as HTMLInputElement;
  const previewR = document.getElementById('colorPreviewR') as HTMLSpanElement;

  function updateLeft() {
    const color = hsvToHex(+hueL.value, +satL.value, +valL.value);
    previewL.style.background = color;
    logo.setTextColorL(color);
  }

  function updateRight() {
    const color = hsvToHex(+hueR.value, +satR.value, +valR.value);
    previewR.style.background = color;
    logo.setTextColorR(color);
  }

  hueL.addEventListener('input', updateLeft);
  satL.addEventListener('input', updateLeft);
  valL.addEventListener('input', updateLeft);

  hueR.addEventListener('input', updateRight);
  satR.addEventListener('input', updateRight);
  valR.addEventListener('input', updateRight);

  updateLeft();
  updateRight();
})();
