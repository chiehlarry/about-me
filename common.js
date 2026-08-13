function scaleCanvas() {
    const canvas = document.querySelector('.canvas');
    const scale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
    );
    const offsetX = (window.innerWidth - 1920 * scale) / 2;
    const offsetY = (window.innerHeight - 1080 * scale) / 2;
    canvas.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
}
window.addEventListener('resize', scaleCanvas);
scaleCanvas();

//sidebar
const sidebar = document.querySelector('.side-bar');
const menubutton = document.querySelector('.menu');
menubutton.addEventListener('click' , () => {sidebar.classList.toggle('open'); 
                                             menubutton.classList.toggle('active')})
