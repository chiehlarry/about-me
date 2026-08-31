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
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;
    if (typeof customLoaderReveal === 'function') {
        customLoaderReveal(loader);
    } else {
        loader.classList.add('hide');
    }
});

function customLoaderReveal(loader) {
    loader.classList.add('wipe');   // 觸發 7 條粗線飛入蓋滿

    // 用最後一條粗線的動畫播完當作「蓋滿完成」的訊號
    const lastBar = loader.querySelectorAll('.trans svg')[6]; // tb07
    lastBar.addEventListener('animationend', () => {
        loader.classList.add('hide');   // 蓋滿之後，整個淡出
    }, { once: true });
}