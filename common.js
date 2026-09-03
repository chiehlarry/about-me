function updateZoom() {
    const canvas = document.querySelector('.canvas');
    canvas.style.zoom = window.innerWidth / 1920;
}
window.addEventListener('resize', updateZoom);
updateZoom();

//sidebar
const sidebar = document.querySelector('.side-bar');
const menubutton = document.querySelector('.menu');
menubutton.addEventListener('click' , () => {sidebar.classList.toggle('open'); 
                                             menubutton.classList.toggle('active')})
//scroll-img
const zoomimages = document.querySelectorAll('.scroll-zoom-frame img');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);   // 只觸發一次，不用每次滾過去都重跑
        }
    });
}, { threshold: 0.05 });  

zoomimages.forEach(img => observer.observe(img));


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

//詳細說明
const intro = document.querySelector('.modal-card');
const trigger = document.querySelector('.works img');

document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => {
        document.getElementById(trigger.dataset.modal).classList.add('open');
        document.querySelector('.modal-mask').classList.add('open');
    });
});

document.querySelectorAll('.modal-card .close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal-card').classList.remove('open');
        document.querySelector('.modal-mask').classList.remove('open');
    });
});

const modalMask = document.querySelector('.madal-mask')
if (modalMask){
modalMask.addEventListener('click', () => {
    document.querySelectorAll('.modal-card.open').forEach(c => c.classList.remove('open'));
    document.querySelector('.modal-mask').classList.remove('open');
});}

//load
const loadStartTime = Date.now();

window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    const minDisplay = 2000;
    const elapsed = Date.now() - loadStartTime;
    const remaining = Math.max(0, minDisplay - elapsed);

    setTimeout (() => {
        if (typeof customLoaderReveal === 'function') {
        customLoaderReveal(loader);
    } else {
        loader.classList.add('hide');
        }
    },remaining);
});

function customLoaderReveal(loader) {
    loader.classList.add('wipe');   // 觸發 7 條粗線飛入蓋滿

    // 用最後一條粗線的動畫播完當作「蓋滿完成」的訊號
    const lastBar = loader.querySelectorAll('.trans svg')[6]; // tb07
    lastBar.addEventListener('animationend', () => {
        loader.classList.add('hide');   // 蓋滿之後，整個淡出
    }, { once: true });
}
