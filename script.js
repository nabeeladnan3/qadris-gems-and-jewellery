const frame = document.getElementById("frame");

const images = [];

const totalFrames = 240;

for(let i = 1; i <= totalFrames; i++){

  const number =
    String(i).padStart(3, '0');

  images.push(
    `images/ezgif-frame-${number}.jpg`
  );

}

function preloadImages(){

  images.forEach((img) => {

    const image = new Image();

    image.src = img;

  });

}

preloadImages();

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;

  const maxScroll =
    document.body.scrollHeight -
    window.innerHeight;

  const scrollFraction =
    scrollTop / maxScroll;

  const frameIndex =
    Math.min(
      totalFrames - 1,
      Math.floor(scrollFraction * totalFrames)
    );

  requestAnimationFrame(() => {

    frame.src = images[frameIndex];

  });

});