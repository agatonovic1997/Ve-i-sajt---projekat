function toggleText() {
    var mainText = document.getElementById("mainText");
    var subtitle = document.getElementById("subtitle");
    var social = document.getElementById('socialShow');

    mainText.classList.toggle("d-none");
    subtitle.classList.toggle("d-none");
    social.classList.toggle("d-flex");
}

const images = ["./img/Coffee_Three.png", "./img/9b9b40320bbf7f7d73cdd5b56722b814.png", "./img/56c0e5fb666dacf008fa28aedb64a94a.png", "./img/1453cfb65a223a2cfcb123ef9504a78c.png",];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex++;

    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const displayedImage = document.getElementById("displayedImage");
    displayedImage.src = images[currentImageIndex];
}

setInterval(changeImage, 2500);
