document.getElementById('no').addEventListener('mouseover', function() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});

document.getElementById('yes').addEventListener('click', function() {
    // Verstecke das "Nein"-GIF
    document.getElementById('neutralgif').style.display = 'none';

    document.getElementById('content').style.display = 'none';

    // Zeige das "Ja"-GIF
    document.getElementById('yesgif').style.display = 'block';

    // Starte die Konfetti-Animation
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

});