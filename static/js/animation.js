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

function initBoxAnimation() { 
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf('.box_fix');

    if (window.innerWidth > 1024) { 
        ScrollTrigger.create({
            trigger: ".box_fix",  
            pin: true,
            start: "top top",
            end: "+=700 top",
            scrub: 3,
        });
    } else { 
        gsap.fromTo('.box_fix', 
            { y: '10vw' }, 
            { y: '-100vw', 
              ease: "none", 
              scrollTrigger: {
                trigger: '.howToBuyContainer',
                start: "50% 100%",
                end: "100% 50%",
                scrub: 5,
              }
            }
        );
    }
}

// Fungsi debounce untuk event resize
function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Jalankan animasi saat DOM siap
window.addEventListener('DOMContentLoaded', () => {
    initRocketAnimation(); 
    initBoxAnimation();

    // new TypeIt(".typeAnimation", { 
    //     speed: 175,
    //     loop: false,
    //   }).go();
 
});

// Tambahkan listener untuk resize
window.addEventListener('resize', () => { 
    initRocketAnimation(); 
    initBoxAnimation();
    ScrollTrigger.refresh();
});