document.getElementById("myVideo").addEventListener('ended', videoEnded, false);

function videoEnded(e) {
    var videoOverlay = document.getElementById('video-overlay');
    videoOverlay.style.display = 'block';
}