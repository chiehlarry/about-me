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
}, { threshold: 0.1 });   // 圖片露出 30% 就觸發，這個比例你可以自己調整

zoomimages.forEach(img => observer.observe(img));