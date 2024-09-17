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
    // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
 
// Jalankan animasi saat DOM siap
window.addEventListener('DOMContentLoaded', () => {
    initRocketAnimation(); 
    initBoxAnimation();
});

// Tambahkan listener untuk resize
window.addEventListener('resize', () => { 
    initRocketAnimation(); 
    initBoxAnimation();
    ScrollTrigger.refresh();
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Elemen terlihat di viewport, jalankan animasi TypeIt
        new TypeIt(".typeAnimation", { 
            strings: [` BOBOTRON is a futuristic interpretation of Bobo, a bear most
                        often depicted in a style based on the design of Matt
                        Furie's frog illustration named Pepe.`, ` ` ,` Although Bobo is often misinterpreted by a vast number of
                        uneducated crypto degenerates, he is actually considered to
                        be the patron saint of bearish markets, making him the
                        ultimate protector.`],
            speed: 10,
            waitUntilVisible: true,
            loop: false,
          }).go();

        // Hentikan pengamatan setelah animasi dijalankan
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); 
  
  const typeElement = document.querySelector(".typeAnimation");
  observer.observe(typeElement);