/* Photo Slideshow */
let photoIndex = 0;
const photos = document.querySelectorAll(".photo-slider img");

function startPhotoShow(){
setInterval(function(){

photos[photoIndex].classList.remove("active");

photoIndex = (photoIndex + 1) % photos.length;

photos[photoIndex].classList.add("active");

},2000);
}

startPhotoShow();
