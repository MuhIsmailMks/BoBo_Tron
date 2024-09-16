function initRocketAnimation() { 
    gsap.killTweensOf('.rocket');

    const triggerElement = window.innerWidth < 1024 ? '.col1_start' : '.howTo'; 
    const YValueResponsive = window.innerWidth < 1024 ? '-50vw' : '-20vw';
    const startRocket = window.innerWidth < 1024 ? '10vw' : '50vw';
 
    gsap.fromTo('.rocket', 
        { y: startRocket }, 
        { y: YValueResponsive, 
          ease: "none", 
          scrollTrigger: {
            trigger: triggerElement,
            start: "50% 100%",
            end: "100% 50%",
            scrub: 5,
          }
        }
    );
}

// Jalankan animasi saat DOM siap
window.addEventListener('DOMContentLoaded', () => {
    initRocketAnimation(); 
});

// Tambahkan listener untuk resize
window.addEventListener('resize', () => { 
    initRocketAnimation(); 
    ScrollTrigger.refresh();
});