const translations = {
    zh: {
         // side
        "side-aboutme":"關於LAI的事情",
        "side-eraser":"腦內橡皮擦",
        "side-toki":"偷去",
        "side-graphic":"平面作品",
        // about me
        "me-intro": "台灣出生。<br><br>大學畢業後開始到畫室接受繪畫訓練。<br>2024年開始以平面設計師身分活動。<br><br>自行鑽研HTML、CSS與FIGMA等網頁開發工具，也曾經手過幾個網頁設計專案。<br>接下來也想繼續活用累積至今的經驗，擴展網頁設計與前端開發相關工作的視野。"
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
        // about me
        "me-intro": "Born in Taiwan.<br><br>Started attending painting classes after graduating from university.<br>Working as a GraphicDesigner since 2024.<br><br>I'm also learning some frontend engineer skills like HTML, CSS and FIGMA by myself<br>and expecting to use the skills and experiences I have to expend my career in WEB Design and Frontend engineering."
    }
};


//lang-switch-system
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        translations.ja = translations.ja || {};
        if (!translations.ja[key]) translations.ja[key] = el.innerHTML;
        el.innerHTML = translations[lang]?.[key] ?? ''; 
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