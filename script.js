
const btnsPlay = document.getElementsByClassName('btn-play');
const audios = document.getElementsByClassName('audio');

const lupa = document.getElementById('lupa');
const inputBuscar = document.getElementById('buscar-left');

const pauseIcon = document.createElement('img'); 
img.src = 'images/pause-icon.png'; 
img.alt = 'Descrição da imagem'; 
img.style.width = '20px'; 
img.style.height = '20px';

const playIcon = document.createElement('img'); 
img.src = 'images/play-icon.png'; 
img.alt = 'Descrição da imagem'; 
img.style.width = '20px'; 
img.style.height = '20px';

Array.from(btnsPlay).forEach((button, index) => {
    button.addEventListener('click', () => {
        const audio = audios[index]; 

        if (audio.paused) {
            audio.play();
            button.textContent = '';
            button.appendChild(pauseIcon.cloneNode(true)); 
        } else {
            audio.pause();
            button.textContent = '';
            button.appendChild(playIcon.cloneNode(true));
        } 
    });
});

lupa.addEventListener('click', () => {
    if(inputBuscar.style.opacity === '0'){
        inputBuscar.style.opacity = '1';
        lupa.style.opacity = '0.5';
    }else{
        inputBuscar.style.opacity = '0';
        lupa.style.opacity = '1';
    }
});