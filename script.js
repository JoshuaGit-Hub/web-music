document.addEventListener('DOMContentLoaded', () => {
    const template = document.getElementById('player-template').content;
    const myMusics = document.getElementById('my-musics');
    const mainMusics = document.getElementById('main-musics');
    const lupa = document.getElementById('lupa');
    const inputBuscar = document.getElementById('buscar-left');

    // Função para criar e configurar um player
    function criarPlayer(container, audioId) {
        const clone = document.importNode(template, true);
        const audio = clone.querySelector('audio');
        const playButton = clone.querySelector('.btn-play');
        const volumeSlider = clone.querySelector('.btn-volumen');
        const progressBar = clone.querySelector('.progress-bar');
        const progressContainer = clone.querySelector('.progress-container');
        const currentTimeDisplay = clone.querySelector('.current-time');
        const durationDisplay = clone.querySelector('.duration');

        // Define IDs únicos
        audio.id = audioId;
        volumeSlider.id = `volume-${audioId}`;
        progressBar.id = `progress-${audioId}`;
        progressContainer.id = `progress-container-${audioId}`;
        currentTimeDisplay.id = `current-time-${audioId}`;
        durationDisplay.id = `duration-${audioId}`;

        // Função para formatar o tempo
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }

        // Atualiza a barra de progresso e o tempo atual
        audio.addEventListener('timeupdate', () => {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            const progressPercent = (currentTime / duration) * 100;

            progressBar.style.width = `${progressPercent}%`;
            currentTimeDisplay.textContent = formatTime(currentTime);

            if (!isNaN(duration)) {
                durationDisplay.textContent = formatTime(duration);
            }
        });

        audio.addEventListener('loadedmetadata', () => {
            durationDisplay.textContent = formatTime(audio.duration);
        });

        progressContainer.addEventListener('click', (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const duration = audio.duration;
            audio.currentTime = (clickX / width) * duration;
        });

        // Evento de play/pause
        playButton.addEventListener('click', () => {
            // Pausa outros áudios
            document.querySelectorAll('audio').forEach(a => {
                if (a !== audio && !a.paused) {
                    a.pause();
                    a.closest('.player').querySelector('.btn-play img').src = 'images/play-icon.png';
                }
            });

            if (audio.paused) {
                audio.play();
                playButton.querySelector('img').src = 'images/pause-icon.png';
                document.getElementById('name-music').textContent = 'Videoplayback'; // Ajuste o nome
            } else {
                audio.pause();
                playButton.querySelector('img').src = 'images/play-icon.png';
            }
        });

        // Controle de volume
        volumeSlider.addEventListener('input', () => {
            audio.volume = volumeSlider.value;
        });

        container.appendChild(clone);
    }

    // Cria os players
    criarPlayer(myMusics, 'audio1');
    criarPlayer(mainMusics, 'audio2');

    // Lógica de busca
    lupa.addEventListener('click', () => {
        if (inputBuscar.style.opacity === '0') {
            inputBuscar.style.opacity = '1';
            lupa.style.opacity = '0.5';
        } else {
            inputBuscar.style.opacity = '0';
            lupa.style.opacity = '1';
        }
    });
});