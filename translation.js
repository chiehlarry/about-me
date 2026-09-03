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
        //index
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
        //index
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