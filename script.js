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

window.addEventListener('load', () => {
    setTimeout(() => {
        const paint = document.querySelector('.paint');
        paint.classList.add('fade-out');
        document.querySelector('.background-text').classList.add('fade-out');

        const menubackground = document.querySelector('.menu-background');
        paint.addEventListener('transitionend', () => {
            document.querySelector('.menu-background').classList.add('in-view');
            document.querySelector('.menu-option').classList.add('in-view');
        }, { once: true });

        menubackground.addEventListener('transitionend', (e) => {
            if(e.propertyname === 'transfrom') {
            document.querySelector('.menu-guide').classList.add('fade-in');}
        }, { once: true });
        
    }, 2000);// 2000 = 頁面載入後等 2 秒才開始執行動畫
}); 
