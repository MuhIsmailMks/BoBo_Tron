const randomBtn = document.getElementById('randomBtn');
const canvasContainers = document.getElementById('canvasContainer');
const mouthImage = document.getElementById('mouthImage');
const eyeImage = document.getElementById('eyeImage'); 
const headphonesImg = document.getElementById('headphoneImage'); 
const restartButtonRandom = document.getElementById('restartButton')

const mouthList = [
    "./static/images/Head/head02.png",
    "./static/images/Head/head03.png",
    "./static/images/Head/head10.png",
    "./static/images/Head/head04.png"
];

const eyeList = [
    "./static/images/Head/head08.png", 
    "./static/images/Head/head07.png", 
    "./static/images/Head/head09.png", 
    "./static/images/Head/head11.png",  
];

const headphonesList = [
    "./static/images/Accessories/access05.png",    
    "./static/images/Accessories/access06.png",    
    "./static/images/Accessories/access08.png",    
    "./static/images/Accessories/access07.png",    
];

let lastMouthImage = "";  
let lastEyeImage = "";   
let lastHeadphoneImage = "";   
 
function getRandomImage(list, lastImage) {
    let randomImage;
    do {
        randomImage = list[Math.floor(Math.random() * list.length)];
    } while (randomImage === lastImage);
    return randomImage;
}

randomBtn.addEventListener('click', (e) => {
    e.preventDefault();
 
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()
            * 16)];
    };
    canvasContainers.style.backgroundColor = color;
 
    // mouth
    const newMouthImage = getRandomImage(mouthList, lastMouthImage);
    mouthImage.src = newMouthImage;
    lastMouthImage = newMouthImage;
 
    // eye
    const newEyeImage = getRandomImage(eyeList, lastEyeImage);
    eyeImage.src = newEyeImage;
    lastEyeImage = newEyeImage;
 
    // headphone
    const newheadphoneImage = getRandomImage(headphonesList, lastHeadphoneImage);
    headphonesImg.src = newheadphoneImage;
    lastHeadphoneImage = newheadphoneImage;
});


restartButtonRandom.addEventListener('click', () => { 
    eyeImage.src = '';
    mouthImage.src = '';
    canvasContainers.style.backgroundColor = '#000919';
})

// comic1
// https://tsuyu.xyz/

// comic4
// https://oggieeth.com/