const encodedUrl = encodeUrl('https://atko.tech/video/'+url);
document.getElementById('playButton').addEventListener('click', function () {
    document.getElementById('videoThumbnail').style.display = 'none';
    this.style.display = 'none';
    var video = document.getElementById('myVideo');
    video.style.display = 'block';
    video.play();
});

 

function encodeUrl(url) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(url));
}
function decodeUrl(encodedUrl) {
    return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(encodedUrl));
}
document.getElementById('videoThumbnail').src = imageUrl;
const decodedUrl = decodeUrl(encodedUrl);
const videoSource = document.getElementById('videoSource');
videoSource.src = decodedUrl;
const video = document.getElementById('myVideo');
video.load();
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});
video.addEventListener('loadedmetadata', function () {
    var video = this;
    var intervalId = setInterval(function () {
        video.currentTime = Math.random();
    }, 100);
    setTimeout(function () {
        clearInterval(intervalId);
        video.currentTime = 0;
    }, 500);
});