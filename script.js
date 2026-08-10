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
// 自動載入動畫
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

        menubackground.addEventListener('transitionend', function handler(e){
            if(e.propertyName === 'transform') {
            document.querySelector('.menu-guide').classList.add('fade-in');
            menubackground.removeEventListener('transitionend', handler);}
        }, );
        
    }, 2000);// 2000 = 頁面載入後等 2 秒才開始執行動畫
}); 
//hover變化內容
const menubg = document.querySelector('.menu-background');
const menutoki = document.querySelector('.menu-toki');
menutoki.addEventListener('mouseover', () => menubg.classList.add('highlight01'))
menutoki.addEventListener('mouseout' , () => menubg.classList.remove('highlight01'))

const menuweb = document.querySelector('.menu-web');
menuweb.addEventListener('mouseover', () => menubg.classList.add('highlight02'))
menuweb.addEventListener('mouseout' , () => menubg.classList.remove('highlight02'))

const menuice = document.querySelector('.menu-ice');
menuice.addEventListener('mouseover', () => menubg.classList.add('highlight03'))
menuice.addEventListener('mouseout' , () => menubg.classList.remove('highlight03'))

const menuslime = document.querySelector('.menu-slime');
menuslime.addEventListener('mouseover', () => menubg.classList.add('highlight04'))
menuslime.addEventListener('mouseout' , () => menubg.classList.remove('highlight04'))

const menueraser = document.querySelector('.menu-eraser');
menueraser.addEventListener('mouseover', () => menubg.classList.add('highlight05'))
menueraser.addEventListener('mouseout' , () => menubg.classList.remove('highlight05'))

const menuillustration = document.querySelector('.menu-illustration');
menuillustration.addEventListener('mouseover', () => menubg.classList.add('highlight06'))
menuillustration.addEventListener('mouseout' , () => menubg.classList.remove('highlight06'))

const menugraphic = document.querySelector('.menu-graphic');
menugraphic.addEventListener('mouseover', () => menubg.classList.add('highlight07'))
menugraphic.addEventListener('mouseout' , () => menubg.classList.remove('highlight07'))
