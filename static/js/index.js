    // copy address
    const copybtn = document.querySelector(".contractCopy");
    
     copybtn.addEventListener("click", function() { 
        let textSpan = copybtn.querySelector('span');
        let intervalId;
            let addressText = document.querySelector(".value").getAttribute('value');
            textSpan.innerHTML = '0x00000000000000000000000000dEaD';

            if (intervalId) {  
                clearInterval(intervalId);
            }

            intervalId = setInterval(() => {
                textSpan.innerHTML = 'COPY'; 
                clearInterval(intervalId);  
            }, 1000);

            navigator.clipboard.writeText(addressText);
        }); 
