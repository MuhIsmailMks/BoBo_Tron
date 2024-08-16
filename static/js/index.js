    // copy address
    const copybtn = document.querySelector(".contractCopy");
    
     copybtn.addEventListener("click", function() { 
        let textSpan = copybtn.querySelector('span');
        let intervalId;
            let addressText = document.querySelector(".value").getAttribute('value');
            textSpan.innerHTML = '0x4334ef6f3600280A0935964799025BbaE86b4f33';

            if (intervalId) {  
                clearInterval(intervalId);
            }

            intervalId = setInterval(() => {
                textSpan.innerHTML = 'COPY'; 
                clearInterval(intervalId);  
            }, 1000);

            navigator.clipboard.writeText(addressText);
        }); 
