function scaleCanvas() {
  const canvas = document.querySelector('.canvas');
  const scale = Math.min(
    window.innerWidth / 1512,
    window.innerHeight / 904
  );
  canvas.style.transform = `translate(-50%, -50%) scale(${scale})`;
}
window.addEventListener('resize', scaleCanvas);
scaleCanvas();
