const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const landing = document.querySelector(".landing");
if (isIOS) {
  landing.classList.add("ios-bg-fix");
}
