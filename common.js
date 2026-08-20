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
const intro = document.querySelector('.introduction > div');
const trigger = document.querySelector('.works img');

trigger.addEventListener('click', () => { intro.classList.add('open')});

document.querySelector('.introsuction .close').addEventListener('click', () => {intro.classList.remove('open')});