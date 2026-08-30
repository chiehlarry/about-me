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
function startMainAnimation(){
    document.querySelector('scroll-finish').classList.add('reveal');
    setTimeout(() => {
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
        
    }, 300);// 300 = 頁面載入後等 0.3 秒才開始執行動畫
    })
}

const track = document.querySelector('.horizontal-track'); // 之後要把水平排列的東西包進這個容器
const introSection = document.querySelector('.scroll-animation');
let offset = 0;
let introFinished = false;

introSection.addEventListener('wheel', (e) => {
    if (introFinished) return;
    e.preventDefault();
    offset += e.deltaY;
    const maxScroll = track.scrollWidth - introSection.clientWidth;
    offset = Math.max(0, Math.min(offset, maxScroll));
    track.style.transform = `translateX(-${offset}px)`;

    if (offset >= maxScroll) {
        introFinished = true;
        startMainAnimation();
    }
}, { passive: false });

//sidebar
const sidebar = document.querySelector('.side-bar');
const menubutton = document.querySelector('.menu');
menubutton.addEventListener('click' , () => {sidebar.classList.toggle('open'); 
                                             menubutton.classList.toggle('active')})

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
