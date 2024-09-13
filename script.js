const imgs = document.querySelectorAll("#slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    // reset
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}

changeSlide();

prev_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}
// JavaScript for the background slideshow
const images = document.querySelectorAll(".header-slider img"); // Select all images in the slider
let currentIndex = 0; // Start from the first image

// Function to show the next image
function showNextImage() {
  images[currentIndex].style.display = "none"; // Hide the current image
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image, and loop back to the first one
  images[currentIndex].style.display = "block"; // Show the next image
}

// Initially hide all images except the first one
images.forEach((img, index) => {
  img.style.display = index === 0 ? "block" : "none";
});

// Set the slideshow to change images every 5 seconds
setInterval(showNextImage, 5000); // 5000 milliseconds = 5 seconds
