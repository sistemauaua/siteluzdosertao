// DOM Elements
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const currentShowEl = document.getElementById('current-show');
const currentHostEl = document.getElementById('current-host');
const timeRangeEl = document.getElementById('current-time-range');
const hostPhotoEl = document.getElementById('host-photo');
const visualizerBars = document.querySelectorAll('.bar');

// Program Schedule Data
const schedule = [
    // --- SEGUNDA A SEXTA ---
    { days: [1, 2, 3, 4, 5], start: "05:00:00", end: "06:00:00", program: "PROGRAMA RAIANDO O DIA", host: "Leidiano", photo: "assets/_Leidiano.png", timeRange: "05:00 ÀS 06:00" },
    { days: [1, 2, 3, 4, 5], start: "06:00:00", end: "06:20:00", program: "UMA LUZ EM SEU CAMINHO", host: "NÃO INFORMADO", photo: "assets/Luz_do_Sertao.png", timeRange: "06:00 ÀS 06:20" },
    { days: [1, 2, 3, 4, 5], start: "06:20:00", end: "08:00:00", program: "PROGRAMA AMANHECER SERTANEJO", host: "Valdemir Batista", photo: "assets/Valdemir_Batista.png", timeRange: "06:20 ÀS 08:00" },
    { days: [1, 2, 3, 4, 5], start: "08:00:00", end: "10:00:00", program: "PROGRAMA SHOW DA MANHÃ", host: "Mannoel Mix", photo: "assets/Mannoel_Mix.png", timeRange: "08:00 ÀS 10:00" },
    { days: [1, 2, 3, 4, 5], start: "10:00:00", end: "12:00:00", program: "PROGRAMA SUPER MANHÃ", host: "Jota Neto", photo: "assets/Jota_Neto.png", timeRange: "10:00 ÀS 12:00" },
    { days: [1, 2, 3, 4, 5], start: "12:00:00", end: "13:00:00", program: "PROGRAMA A HORA DO BODE", host: "Robson Rodrigues", photo: "assets/Robson_Rodrigues.png", timeRange: "12:00 ÀS 13:00" },
    { days: [1, 2, 3, 4, 5], start: "13:00:00", end: "15:00:00", program: "PROGRAMA TARDE INTERATIVA", host: "Jadilson Reis", photo: "assets/Jadilson_Reis.png", timeRange: "13:00 ÀS 15:00" },
    { days: [1, 2, 3, 4, 5], start: "15:00:00", end: "17:00:00", program: "PROGRAMA TADE DE SUCESSOS", host: "Tiago Moreno", photo: "assets/Tiago_Moreno.png", timeRange: "15:00 ÀS 17:00" },
    { days: [1, 2, 3, 4, 5], start: "17:00:00", end: "19:00:00", program: "PROGRAMA ISSO É SERTÃO", host: "Chico Mocó", photo: "assets/Chico_Moco.png", timeRange: "17:00 ÀS 19:00" },
    { days: [1, 2, 3, 4, 5], start: "19:00:00", end: "20:00:00", program: "A VOZ DO BRASIL", host: "A Voz do Brasil", photo: "assets/A_Voz_do_Brasil.png", timeRange: "19:00 ÀS 20:00" },
    { days: [1, 2, 3, 4, 5], start: "20:00:00", end: "22:00:00", program: "A VOZ DO COOPERATIVISMO", host: "COOPERCUC", photo: "assets/Hilario_Ortega.png", timeRange: "20:00 ÀS 22:00" },
    { days: [1, 2, 3, 4, 5], start: "22:00:00", end: "23:59:59", program: "PROGRAMA MOMENTO DE AMOR", host: "Willian Gonzaga", photo: "assets/Willian_Gonzaga.png", timeRange: "22:00 ÀS 00:00" },

    // --- SÁBADO ---
    { days: [6], start: "06:00:00", end: "08:00:00", program: "PROGRAMA AMANHECER SERTANEJO", host: "Valdemir Batista", photo: "assets/Valdemir_Batista.png", timeRange: "06:00 ÀS 08:00" },
    { days: [6], start: "08:00:00", end: "09:00:00", program: "A VOZ DO COOPERATIVISMO", host: "A Voz do Cooperativismo", photo: "assets/Luz_do_Sertao.png", timeRange: "08:00 ÀS 09:00" },
    { days: [6], start: "09:00:00", end: "09:15:00", program: "PROGRAMA VIVA A VIDA", host: "Pastoral da Criança", photo: "assets/Luz_do_Sertao.png", timeRange: "09:00 ÀS 09:15" },
    { days: [6], start: "09:15:00", end: "10:30:00", program: "PROGRAMA MEU BOM DEUS", host: "Igreja Católica", photo: "assets/Luz_do_Sertao.png", timeRange: "09:15 ÀS 10:30" },
    { days: [6], start: "10:30:00", end: "11:30:00", program: "PROGRAMA TEMPO DE CUIDAR", host: "Comitê Ambiental de Uauá", photo: "assets/Luz_do_Sertao.png", timeRange: "10:30 ÀS 11:30" },
    { days: [6], start: "11:30:00", end: "12:30:00", program: "PROGRAMA VIVA BEM NO SERTÃO", host: "IRPAA", photo: "assets/Luz_do_Sertao.png", timeRange: "11:30 ÀS 12:30" },
    { days: [6], start: "12:30:00", end: "14:00:00", program: "PROGRAMA CONEXÃO MUSICAL", host: "Acássio Teles", photo: "assets/Acassio_Teles.png", timeRange: "12:30 ÀS 14:00" },
    { days: [6], start: "14:00:00", end: "15:30:00", program: "PROGRAMA A VOZ DA PROFECIA", host: "Igreja Adventista", photo: "assets/Luz_do_Sertao.png", timeRange: "14:00 ÀS 15:30" },
    { days: [6], start: "15:30:00", end: "16:00:00", program: "PROGRAMA EUFONIA", host: "UNEB", photo: "assets/Luz_do_Sertao.png", timeRange: "15:30 ÀS 16:00" },
    { days: [6], start: "16:00:00", end: "17:00:00", program: "PROGRAMA IGREJA TABERNÁCULO DA FÉ", host: "Religioso", photo: "assets/Luz_do_Sertao.png", timeRange: "16:00 ÀS 17:00" },
    { days: [6], start: "17:00:00", end: "19:00:00", program: "PROGRAMA UAUÁ, BAHIA, BRASIL, PANDEIRO", host: "Pedro Peixinho", photo: "assets/Pedro_Peixinho.png", timeRange: "17:00 ÀS 19:00" },
    { days: [6], start: "19:00:00", end: "21:00:00", program: "PROGRAMA TOCA TUDO", host: "Willian Gonzaga", photo: "assets/Willian_Gonzaga.png", timeRange: "19:00 ÀS 21:00" },
    { days: [6], start: "21:00:00", end: "23:00:00", program: "PROGRAMA NOITE DE SUCESSOS", host: "Hilário Ortega", photo: "assets/Hilario_Ortega.png", timeRange: "21:00 ÀS 23:00" },

    // --- DOMINGO ---
    { days: [0], start: "06:00:00", end: "08:00:00", program: "PROGRAMA BAÚ DA SAUDADE", host: "Jota Neto", photo: "assets/Luz_do_Sertao.png", timeRange: "06:00 ÀS 08:00" },
    { days: [0], start: "08:00:00", end: "09:15:00", program: "PROGRAMA MISSA DOMINICAL", host: "Igreja Católica", photo: "assets/Luz_do_Sertao.png", timeRange: "08:00 ÀS 09:15" },
    { days: [0], start: "09:15:00", end: "11:00:00", program: "PROGRAMA BERRO DO BODE", host: "BGG da Mata Virgem", photo: "assets/BGG_da_Mata_Virgem.png", timeRange: "09:15 ÀS 11:00" },
    { days: [0], start: "11:00:00", end: "13:00:00", program: "PROGRAMA PARADA POPULAR", host: "Jadilson Reis", photo: "assets/Jadilson_Reis.png", timeRange: "11:00 ÀS 13:00" },
    { days: [0], start: "13:00:00", end: "14:30:00", program: "RÁDIO LUZ DO SERTÃO", host: "Rádio Luz do Sertão", photo: "assets/Luz_do_Sertao.png", timeRange: "13:00 ÀS 14:30" },
    { days: [0], start: "14:30:00", end: "16:00:00", program: "PROGRAMA VIDA NOVA COM CRISTO", host: "Igreja Batista", photo: "assets/Luz_do_Sertao.png", timeRange: "14:30 ÀS 16:00" },
    { days: [0], start: "16:00:00", end: "18:00:00", program: "PROGRAMA ROCK-REGGAE MUSICAL", host: "Hilário Ortega", photo: "assets/Hilario_Ortega.png", timeRange: "16:00 ÀS 18:00" },
    { days: [0], start: "19:00:00", end: "21:30:00", program: "PROGRAMA CULTO IGREJA BATISTA", host: "Igreja Batista", photo: "assets/Luz_do_Sertao.png", timeRange: "19:00 ÀS 21:30" },
    { days: [0], start: "21:30:00", end: "23:59:59", program: "RÁDIO LUZ DO SERTÃO", host: "Rádio Luz do Sertão", photo: "assets/Luz_do_Sertao.png", timeRange: "21:30 ÀS 00:00" }
];

// Audio Context
let isPlaying = false;
const streamUrl = "http://stm1.uauhost.com.br:7506/stream";
let audio = new Audio(streamUrl); 
audio.volume = 0.8; 
audio.autoplay = true;

// Adicionar evento para detectar erro de carregamento do áudio
audio.addEventListener('error', (e) => {
    console.error("Erro no stream de áudio:", e);
    // Tenta um fallback comum para Shoutcast se o principal falhar
    if (audio.src.includes('/stream')) {
        console.log("Tentando fallback do stream...");
        audio.src = "http://stm1.uauhost.com.br:7506/;";
        audio.load();
        if (isPlaying) audio.play().catch(() => {});
    }
});

function togglePlayback() {
    if (audio.paused) {
        audio.play().catch(error => {
            console.error("Erro ao reproduzir áudio:", error);
            // Autoplay falhou silenciosamente ou clique foi bloqueado
        });
    } else {
        audio.pause();
    }
}

// Sincroniza a interface com o estado real do áudio (útil para autoplay)
audio.addEventListener('play', () => {
    isPlaying = true;
    const icon = playBtn.querySelector('i');
    if (icon) icon.setAttribute('data-lucide', 'pause');
    startVisualizer();
    safeCreateIcons();
});

audio.addEventListener('pause', () => {
    isPlaying = false;
    const icon = playBtn.querySelector('i');
    if (icon) icon.setAttribute('data-lucide', 'play');
    stopVisualizer();
    safeCreateIcons();
});

function safeCreateIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function updateVolume(val) {
    audio.volume = val;
}

// Visualizer Logic
let visualizerInterval;
function startVisualizer() {
    visualizerInterval = setInterval(() => {
        visualizerBars.forEach(bar => {
            const height = Math.floor(Math.random() * 25) + 5;
            bar.style.height = `${height}px`;
        });
    }, 150);
}

function stopVisualizer() {
    clearInterval(visualizerInterval);
    visualizerBars.forEach(bar => bar.style.height = '10px');
}

// Dynamic UI Update Logic
function updateCurrentProgram() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentSeconds = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
    
    function timeToSeconds(timeStr) {
        const parts = timeStr.split(':').map(Number);
        return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
    }

    let activeProgram = schedule.find(item => {
        const startSec = timeToSeconds(item.start);
        const endSec = timeToSeconds(item.end);
        return item.days.includes(currentDay) && currentSeconds >= startSec && currentSeconds < endSec;
    });

    console.log(`Hora: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} | Programa: ${activeProgram ? activeProgram.program : 'Nenhum'}`);

    if (!activeProgram) {
        activeProgram = {
            program: "PROGRAMAÇÃO MUSICAL",
            host: "SISTEMA LUZ",
            photo: "assets/Luz_do_Sertao.png",
            timeRange: "24 HORAS NO AR"
        };
    }

    if (currentShowEl && currentShowEl.textContent !== activeProgram.program) {
        const infoContainer = currentShowEl.closest('.player-main-content');
        if (infoContainer) {
            infoContainer.classList.remove('fade-in-up');
            void infoContainer.offsetWidth;
            infoContainer.classList.add('fade-in-up');
        }

        currentShowEl.textContent = activeProgram.program;
        currentHostEl.textContent = activeProgram.host;
        timeRangeEl.textContent = activeProgram.timeRange;
        
        if (hostPhotoEl) {
            hostPhotoEl.src = activeProgram.photo;
            hostPhotoEl.onerror = function() {
                this.src = 'assets/placeholder-host.png';
            };
            
            // Apply individual width if defined, else default
            if (hostPhotoEl.parentElement) {
                hostPhotoEl.parentElement.style.width = activeProgram.width || '250px';
            }
        }
    }
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
        navLinks.style.zIndex = '1000';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentProgram();
    setInterval(updateCurrentProgram, 1000); // Verificação a cada 1 segundo para precisão exata
    
    // Tentativa de Autoplay
    // Nota: Navegadores modernos podem bloquear autoplay de áudio sem interação prévia do usuário.
    togglePlayback();
});

// Hack para contornar o bloqueio: Tocar no primeiro clique em QUALQUER lugar da página
document.body.addEventListener('click', function firstInteraction() {
    if (audio.paused) {
        audio.play().catch(() => {});
    }
    document.body.removeEventListener('click', firstInteraction);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
