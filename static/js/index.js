//  scroll animation Effect
window.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        once: true
    });
})

// navbar 
const menuLinksContainer = document.querySelector('.menu_links_container')
const menuBtn = document.querySelector('.menuBtn')
const closeBtn = document.querySelector('.closeBtn')

menuBtn.addEventListener('click', () => {
    menuLinksContainer.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    menuLinksContainer.classList.remove('active')
});

document.querySelectorAll('.links_nav a').forEach(function(link) {
    link.addEventListener('click', function() {   
      if (menuLinksContainer.classList.contains('active')) {
        menuLinksContainer.classList.remove('active');
      }
    });
});

// about listener
const fire_btn = document.querySelector('.fire_btn')
const fireImg = document.querySelector('.fireImg')
const aboutMainImg = document.querySelector('.aboutMainImg');

fire_btn.addEventListener('click', () => {
    fire_btn.classList.add('active')
    aboutMainImg.classList.add('active')
    fireImg.classList.add('active')
});

// about
// Ambil semua tombol dengan class "chooseBtn"
const buttons = document.querySelectorAll('.chooseBtn');

// Ambil elemen yang memiliki data-content
const contentDiv = document.querySelector('[data-content]');

// Tambahkan event listener untuk setiap tombol
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Ambil nilai dari data-btn pada tombol yang ditekan
    const btnData = this.getAttribute('data-btn');
    
    // Set nilai dari data-content dengan nilai dari data-btn
    contentDiv.setAttribute('data-content', btnData);
    
    // Jika ingin mengubah konten di dalam div berdasarkan tombol yang diklik
    const heading = contentDiv.querySelector('h2');
    const paragraph = contentDiv.querySelector('.text_container');
    const paragraph2 = contentDiv.querySelector('.typeAnimation');
    
    if(btnData === 'about') {
      heading.textContent = 'ABOUT US';
      paragraph2.classList.add('hidden')
      paragraph.innerHTML = `   BOBOTRON is the ultimate fusion of tradition and innovation—a futuristic cyborg bear that blends the timeless essence of BOBO with cutting-edge technology. He is the natural evolution of BOBO, enhanced by advanced AI and robotics, representing the pinnacle of modern design. In every sense, BOBOTRON embodies the future, far surpassing the limitations of his predecessors.

      <br>
      <br>

      As a highly advanced, AI-driven version of his former self, BOBOTRON’s form is endlessly adaptable. His appearance can shift and evolve, all while retaining the core principles of his original design. This allows for limitless variations, making BOBOTRON a dynamic, ever-evolving figure... one who can transform without ever losing his identity.

      <br>
      <br>

      What truly sets BOBOTRON apart is his immortality. His consciousness is interwoven with a vast hive mind powered by artificial intelligence, making him indestructible. No matter what happens to his physical form, he can never be erased. His essence endures, eternally preserved within the collective intelligence of the network, ensuring that BOBOTRON will live on, unbroken, forever.
 
      
      <br>
      <br>

      In the rare event that BOBOTRON sustains damage, his body can be seamlessly repaired or completely regenerated, thanks to advanced modular technology. Every component is designed for rapid interchangeability, allowing him to swap out damaged parts effortlessly. Alternatively, he can be rebuilt entirely from the ground up, while preserving every detail of his core identity—his memories, instincts, and essence remain fully intact.

      <br>
      <br>

      If needed, his entire forxm can be reconstructed in moments, ensuring he returns with all the knowledge and experience he’s gained, completely untouched by the loss. This ability to constantly evolve and upgrade makes BOBOTRON a superior, indomitable force—surpassing all previous incarnations of Bobo in strength, resilience, and intelligence. He’s not just a bear; he’s the future. `

    } else if(btnData === 'intro') {
      heading.textContent = 'INTRODUCTION';
      paragraph2.classList.add('hidden')
      paragraph.innerHTML = `BOBOTRON is a futuristic interpretation of Bobo, a bear most often depicted in a style based on the design of Matt Furie's frog illustration named Pepe.
              
              <br/>
              <br/>

              Although Bobo is often misinterpreted by a vast number of uneducated crypto degenerates, he is actually considered to be the patron saint of bearish markets, making him the ultimate protector.

                <br/>
                            <br/>

              If there were to be any character found in popular memes possessing the strength and tenacity required to endure the highs and (even) lows of bullish markets, none could compare to Bobo, for it it he who's able to endure the lowest of lows and hardest of hardships, making him one of the most, if not THE most, resilient of characters found amongst modern memes.`;
    }
  });
});


// copy address
const copyAddress = document.querySelector('.copy_btn');
    
let text = document.querySelector('.copy-box__text');
let btn = document.querySelector('.copy-box__text');
let btnText = btn.textContent;
let timeout;

copyAddress.addEventListener('click', () => { 
    navigator.clipboard.writeText(text.textContent).then(function () {
        btn.textContent = 'Copied';

        clearTimeout(timeout);
        timeout = setTimeout(function () {
            btn.textContent = btnText;
        }, 2000);
    }).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });
    
})