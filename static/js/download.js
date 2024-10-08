// download button
document.getElementById('downloadBtn').addEventListener('click', function() { 
    const draggableOverlays = document.querySelectorAll('.draggableOverlay');
    const settingImages = document.querySelectorAll('.settingImage');
    const oldBorders = []; 
    const oldDisplays = [];
  
    // Simpan border, opacity, dan display lama setiap elemen draggableOverlay
    draggableOverlays.forEach((draggableOverlay, index) => {
        oldBorders[index] = draggableOverlay.style.border; 
        oldDisplays[index] = settingImages[index].style.display;
   
        draggableOverlay.style.border = 'none'; 
        settingImages[index].style.display = 'none';
    });
  
    // Gunakan html2canvas untuk screenshot
    html2canvas(document.getElementById('canvasContainer'), {
      scale: 1,
      allowTaint: true,
      backgroundColor: null,
      useCORS: false 
    }).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'bobotronMeme.png';
        link.href = canvas.toDataURL();
        link.click();
   
        draggableOverlays.forEach((draggableOverlay, index) => {
            draggableOverlay.style.border = oldBorders[index]; 
            settingImages[index].style.display = oldDisplays[index];
        });
    });
  
  });