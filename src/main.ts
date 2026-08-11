import './style.css';
import LogoCanvas from './canvas';
import loadImages from './utils/loadImages';
import './i18n';

(async function () {
  await loadImages();
  const logo = new LogoCanvas();
  logo.draw();
  
  // 新增：颜色选择器默认值同步
  const colorL = document.querySelector('#colorL') as HTMLInputElement;
  const colorR = document.querySelector('#colorR') as HTMLInputElement;
  if (colorL) colorL.value = '#128AFA';
  if (colorR) colorR.value = '#2B2B2B';
})();
