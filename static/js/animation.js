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
    gsap.killTweensOf('.box_fix');

    if (window.innerWidth > 1023) { 
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

    // gsap.fromTo(".aboutImg", 
    //     { scale: 0 },   
    //     { scale: 1,    
    //       scrollTrigger: {
    //         trigger: ".aboutImg", 
    //         start: "top 100%", 
    //         end: "bottom 0%", 
    //         scrub: 2,            
    //         ease: "power1.out"    
    //       }
    //     }
    //   );

      if (window.innerWidth > 1023) { 
        gsap.fromTo('.howToImg', { scale: '0',  }, {
          scale: "1" , ease: "none", scrollTrigger: {
              trigger: '.box_fix',
              start: "0% 100%",
              end: "100% 100%", 
              scrub: 3,
          }
      });
    } 

     
      
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

          
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); 
  
  const typeElement = document.querySelector(".typeAnimation");
  observer.observe(typeElement);












  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100, // Jumlah bintang
        "density": {
          "enable": true,
          "value_area": 500 // Area kepadatan bintang
        }
      },
      "color": {
        "value": "#ffffff" // Warna bintang
      },
      "shape": {
        "type": "circle", // Bentuk bintang
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 1, // Transparansi awal bintang
        "random": true, // Bintang akan memiliki tingkat transparansi acak
        "anim": {
          "enable": true,
          "speed": 2, // Kecepatan kedip bintang
          "opacity_min": 0.3, // Opasitas minimum saat bintang berkedip
          "sync": false // Animasi kedip acak antar bintang
        }
      },
      "size": {
        "value": 2,
        "random": true // Ukuran bintang acak
      },
      "line_linked": {
        "enable": false // Matikan garis penghubung antar partikel
      },
      "move": {
        "enable": true,
        "speed": 0.2, // Kecepatan gerakan bintang
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false // Tidak ada interaksi hover
        },
        "onclick": {
          "enable": false // Tidak ada interaksi klik
        },
        "resize": true
      }
    },
    "retina_detect": true
  });
  