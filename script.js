const tracks = [
    "128-Sauda Khara Khara - Hai Energy 128 Kbps.mp3", // Replace with actual song file paths
    "Mad Love.mp3",
    "Aaromal (Sita Ramam)(PagalWorldl).mp3",
    "Ethrayo-Janmamayi.mp3",
    "Panchasara-Umma-Vidhu-Prathap-Manjari.mp3",
    "alai-payuthea-25180-1-62103-62152.mp3",
    "Anuragathin-Velayil.mp3",
    "Avalayirunnente-Logham-Saleem-Kodathoor.mp3",
    "Ballaatha Jaathi-(PagalSongs.Com.IN).mp3",
    "Ethrayo-Janmamayi.mp3",
    "Guli Mata_192(PagalWorld.com.cm).mp3",
    "Kandu Ravithalil(PagalWorldl).mp3",
    "Lailakame.mp3",
    "Makhna(PagalWorld).mp3",
    "Mazhaye-Toomazhaye-Haricharan-Mridula-Warrier.mp3"


];

// HTML elements
const audioPlayer = document.getElementById("audio-player");
const playRandomBtn = document.getElementById("play-random");

// Function to play a random song
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const randomTrack = tracks[randomIndex];
    audioPlayer.src = randomTrack;
    audioPlayer.play();
}

// Event listener for the random song button
playRandomBtn.addEventListener("click", playRandomSong);

// Handle visibility change to keep audio playing
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        console.log("Screen is off or tab is in the background.");
        if (!audioPlayer.paused) {
            console.log("Music continues playing in the background.");
        }
    } else {
        console.log("Screen is on or tab is active.");
    }
});

// Prevent the audio from stopping when the screen locks (on mobile)
window.addEventListener("blur", () => {
    if (!audioPlayer.paused) {
        console.log("Music playing in the background.");
    }
});
