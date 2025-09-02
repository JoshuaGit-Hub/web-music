const pauseIcon = document.createElement('img'); 
pauseIcon.src = 'images/pause-icon.png'; 

const playIcon = document.createElement('img'); 
playIcon.src = 'images/play-icon.png'; 

const btnsPlay = document.getElementsByClassName('btn-play');
const audios = document.getElementsByClassName('audio');

const lupa = document.getElementById('lupa');
const inputBuscar = document.getElementById('buscar-left');



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