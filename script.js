function scaleCanvas() {
  const canvas = document.querySelector('.canvas');
  const scale = Math.min(
    window.innerWidth / 1512,
    window.innerHeight / 982
  );
  canvas.style.transform = `translate(-50%, -50%) scale(${scale})`;
}
window.addEventListener('resize', scaleCanvas);
scaleCanvas();

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.paint').classList.add('fade-out');
        document.querySelector('.background-text').classList.add('fade-out');
    }, 2000); // 2000 = 頁面載入後等 2 秒才開始淡出，可自行調整
});
