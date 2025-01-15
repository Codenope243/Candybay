document.addEventListener('DOMContentLoaded', function() {
    function animateElements(pageName) {
        const containers = document.querySelectorAll('.animated-element');

        // Alle Container verstecken
        containers.forEach(container => {
            container.style.transition = 'transform 0.5s ease-in-out';
            container.style.transform = 'translateX(-100vw)';
        });

        // Zeige den ausgewählten Container nach einer kurzen Verzögerung
        setTimeout(() => {
            const selectedContainer = document.getElementById(`${pageName}-seite-container`);
            if (selectedContainer) {
                selectedContainer.style.transform = 'translateX(0)';
            }
        }, 500); // 500 Millisekunden Verzögerung
    }

    // Animation beim Laden der Seite für Startseite
    animateElements('Start');

    // Event Listener für die Buttons 
    const buttons = document.querySelectorAll('.Buttons');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const pageName = this.innerText.trim();
            animateElements(pageName);
        });
    });

    // Event Listener spezifisch für den Startseiten-Button 
    const startButton = document.getElementById('Start-button');

    if (startButton) {
        startButton.addEventListener('click', function() {
            animateElements('Start');
        });
    }

    const loginBestätigung = document.getElementById('login-bestätigungs-button');

    if (loginBestätigung) {
        loginBestätigung.addEventListener('click', function() {
            animateElements('Start'); //  Öffne die Startseite beim Klick auf den Login-Bestätigungs-Button
        });
    }


    const anmeldeButton = document.getElementById('anmelde-button');

if (anmeldeButton) {
    anmeldeButton.addEventListener('click', function() {
        animateElements('anmelde');
    });
}

});


function playVideo() {
    var video = document.createElement('video');
    video.src = 'Bilder/Chipi Chapa1.mp4';
    video.controls = false;
    video.loop=true;
    video.volume=1;
    document.body.appendChild(video);
    video.play();
}



