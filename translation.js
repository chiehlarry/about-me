//lang-switch-system
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang]?.[key]) {
            el.innerHTML = translations[lang][key];   // 用 innerHTML，不用 textContent，因為內容裡有 <br>
        }
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


// about me
const translations = {
    ja: {
        "about-intro": "台湾生まれ。<br><br>大学卒業から絵画教室に通い始めた。<br>2024からグラフィックデザイナーとして活動開始。<br><br>HTML、CSS、FIGMAなどWEB開発を独学で学んで、WEBデザインにもいくつ携わって来ました。<br>これからも積み重ねてきた経験も生かしてWEBデザインとフロント開発に広げていこうと思います。"
    },
    zh: {
        "about-intro": "台灣出生。<br><br>大學畢業後開始到畫室接受繪畫訓練。<br>2024年開始以平面設計師身分活動。<br><br>自行鑽研HTMLm、CSS與FIGMA等網頁開發工具，也曾經手過幾個網頁設計專案。<br>接下來也想繼續活用累積至今的經驗，擴展網頁設計與前端開發相關工作的視野。"
    },
    en: {
        "about-intro": "Born in Taiwan.<br><br>Started attending painting classes after graduating from university..."
    }
};