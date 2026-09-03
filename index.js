function updateZoom() {
    const canvas = document.querySelector('.canvas');
    canvas.style.zoom = window.innerWidth / 1920;
}
window.addEventListener('resize', updateZoom);
updateZoom();
// 自動載入動畫

const introSection = document.querySelector('.scroll-animation');

function startMainAnimation(){
    introSection.classList.add('disappear');

    setTimeout(()=>{
        document.querySelector('.scroll-finish').classList.add('reveal');        
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
        
    }, 2000);
},300)// 0.3s
}
// 滾動動畫
const trackback = document.querySelector('.horizontal-track-back'); 
const trackfront = document.querySelector('.horizontal-track-front')// 之後要把水平排列的東西包進這個容器
let offset = 0;
let velocity = 0;
let introFinished = false;
let rafId = null;

function animateScroll() {
    if (introFinished) return;

    offset += velocity;
    velocity *= 0.9;   // 摩擦力：每一格畫面，速度變成原本的 90%，逐漸衰減到 0

    const extraScroll = 1200
    const maxScroll = Math.max(trackfront.scrollWidth, trackback.scrollWidth) - introSection.clientWidth + extraScroll;
    offset = Math.max(0, Math.min(offset, maxScroll));

    trackfront.style.transform = `translateX(-${offset}px)`;
    trackback.style.transform = `translateX(-${offset}px)`;

    if (offset >= maxScroll) {
        introFinished = true;
        startMainAnimation();
        rafId = null;
        return;
    }

    if (Math.abs(velocity) > 0.5) {
        rafId = requestAnimationFrame(animateScroll);   // 速度還夠快，下一格畫面繼續跑
    } else {
        velocity = 0;
        rafId = null;   // 速度已經小到可以忽略，直接停下來，把迴圈關掉
    }
}

introSection.addEventListener('wheel', (e) => {
    if (introFinished) return;
    e.preventDefault();

    velocity += e.deltaY * 0.5;   // 滾輪的量，加到「速度」上面，不是直接加到位置上

    if (!rafId) {
        rafId = requestAnimationFrame(animateScroll);   // 如果動畫迴圈還沒在跑，啟動它
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


// 跳過動畫
const skipIntro = new URLSearchParams(location.search).has('skipIntro');

if (skipIntro) {
    introFinished = true;   // 防止之後滑鼠滾輪還能誤觸發水平捲動邏輯

    document.querySelector('.canvas').classList.add('no-transition'); // 暫時關掉所有轉場，避免瞬間跳過去時還播放動畫

    introSection.classList.add('disappear');
    document.querySelector('.scroll-finish').classList.add('reveal');
    document.querySelector('.paint').classList.add('fade-out');
    document.querySelector('.background-text').classList.add('fade-out');
    document.querySelector('.menu-background').classList.add('in-view');
    document.querySelector('.menu-option').classList.add('in-view');
    document.querySelector('.menu-guide').classList.add('fade-in');

    requestAnimationFrame(() => {
        document.querySelector('.canvas').classList.remove('no-transition'); // 一畫完就把轉場恢復，之後 hover 效果才會正常
    });
}