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

//translation
const translations = {
    zh: {
         // side
        "side-aboutme":"關於LAI的事情",
        "side-slime":"史萊運轉",
        "side-ice":"破冰溝溝GO",
        "side-eraser":"腦內橡皮擦",
        "side-toki":"偷去",
        "side-seeyou":"大新街 LAST DANCE",
        "side-web":"網頁作品",
        "side-graphic":"平面作品",
        //
        "index01":"原來是這樣！",
        "index02":"這個超讚！",
        "index03-1":"還想要",
        "index03-2":"再做得更好！",
        "menu-slime01":"史萊運轉",
        "menu-slime02":"自分の愛する物を守り、<br/>熱情が溢れる糸",
        "menu-ice01":"破冰溝溝GO",
        "menu-ice02":"過去も自分の糧になり、<br/>人のための糸",
        "menu-eraser01":"腦內橡皮擦",
        "menu-eraser02":"不安と彷徨いを乗り越えて、<br/>自分を探す糸",
        "menu-toki01":"偷去",
        "menu-toki02":"千里の道も一歩から始まる、<br/>一歩ずつ積み重ねの糸",
        "menu-seeyou01":"大新街 LAST DANCE",
        "menu-seeyou02":"アージュドールに踊り、<br>祝福を捧ぐ糸",
        "menu-web01":"網頁作品",
        "menu-web02":"もっと語りたくて、<br/>思いと力を込める糸",
        "menu-graphic01":"平面作品",
        "menu-graphic02":"自由に、自分らしく、<br/>思い切り振る舞う糸",
        "menu-aboutme":"點擊LAI來查看更多關於LAI的資訊！",
    },
    en: {
         // side
        "side-aboutme":"Things about LAI",
        "side-slime":"Tranditional Taiwanese snack renewal",
        "side-ice":"Onepage adult educational site",
        "side-eraser":"Typography & 3D-artwork",
        "side-toki":"The path I walked pass",
        "side-seeyou":"Project & visual design",
        "side-web":"When I meet programming",
        "side-graphic":"Some graphic works here",
        //
        "index01":"Seems it's how it comes",
        "index02":"It's awesome!",
        "index03-1":"Eager to",
        "index03-2":"done everything better",
        "menu-slime01":"SLIME OF FORTUNE",
        "menu-slime02":"Lines about defending for<br>my passion but also love ",
        "menu-ice01":"BREAK THE ICEBERG",
        "menu-ice02":"Lines about drawing strength<br>from pass and experience",
        "menu-eraser01":"ERASER IN THE HEAD",
        "menu-eraser02":"Lines about anxiety and<br>concern come to knock",
        "menu-toki01":"TOKI",
        "menu-toki02":"Lines about biginning<br>first step for a grand journey",
        "menu-seeyou01":"FINAL HOMECOMING",
        "menu-seeyou02":"Lines about dancing and<br>wishing for the golden age",
        "menu-web01":"WEB WORKS",
        "menu-web02":"Lines about tell story,<br>variety and willing",
        "menu-graphic01":"GRAPHIC WORKS",
        "menu-graphic02":"Lines about split liberally and work as my-style",
        "menu-aboutme":"Click LAI picture to check more information about LAI!",
    }
};

//lang-switch-system
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        translations.ja = translations.ja || {};
        if (!translations.ja[key]) translations.ja[key] = el.innerHTML;
        el.innerHTML = translations[lang]?.[key] ?? '';   // 用 innerHTML，不用 textContent，因為內容裡有 <br>
    });
}

const langButtons = document.querySelectorAll('.lang-btn');
const savedLang = localStorage.getItem('lang') || 'ja';

function activateLangButton(lang) {
    langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    document.documentElement.lang = lang;
    setLanguage(lang);
}

activateLangButton(savedLang);

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        localStorage.setItem('lang', lang);
        activateLangButton(lang);
    });
});