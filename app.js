const body = document.querySelector('body');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const img = document.querySelector('img');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

const planets = [
    {
      name: "Mercury",
      image: "images/mercury.png", 
      bg: "images/bg1.jpg",
      description: "Mercury is the closest planet to the Sun and has extreme temperature variations. It is a small, rocky planet with no atmosphere."
    },
    {
      name: "Venus",
      image: "images/venus.png", 
      bg: "images/bg2.jpg",
      description: "Venus is similar in size and structure to Earth but has a thick, toxic atmosphere and surface temperatures hot enough to melt lead."
    },
    {
      name: "Earth",
      image: "images/earth.png", 
      bg: "images/bg3.jpg",
      description: "Earth is the only planet known to support life. It has a diverse environment with oceans, landmasses, and a breathable atmosphere."
    },
    {
      name: "Mars",
      image: "images/mars.png", 
      bg: "images/bg4.jpg",
      description: "Mars, the Red Planet, is known for its reddish appearance due to iron oxide on its surface. It has the largest volcano and canyon."
    },
    {
      name: "Jupiter",
      image: "images/jupiter.png", 
      bg: "images/bg5.jpg",
      description: "Jupiter is the largest planet in the solar system, known for its Great Red Spot, a massive storm that has lasted for centuries."
    },
    {
      name: "Saturn",
      image: "images/saturn.png", 
      bg: "images/bg6.jpg",
      description: "Saturn is famous for its extensive ring system, made of ice and rock. It is the second-largest planet in the solar system."
    },
    {
      name: "Uranus",
      image: "images/uranus.png", 
      bg: "images/bg7.jpg",
      description: "Uranus is an ice giant with a blue-green hue due to methane in its atmosphere. It rotates on its side, possibly due to a past collision."
    },
    {
      name: "Neptune",
      image: "images/neptune.png", 
      bg: "images/bg8.jpg",
      description: "Neptune is a cold, distant planet with strong winds. Its deep blue color is also due to methane, and it has a large moon called Triton."
    }
  ];

let currentIndex = 0;

function updateSlider() {
  let bgObject = planets[currentIndex].bg;
  body.style.background = `url(${bgObject})`

    img.src = planets[currentIndex].image;
    img.alt = planets[currentIndex].name;
    h2.textContent = planets[currentIndex].name;
    p.textContent = planets[currentIndex].description;
}

function animateImage(rotation, bgPosition) {
    body.animate([
      { backgroundPosition: '0' },
      { backgroundPosition: `${bgPosition}%` }
    ], {
      duration: 500,
      iterations: 1
  });
    img.animate([
        { transform: 'translateX(-50%) translateY(15%) rotate(0deg)' },
        { transform: `translateX(-50%) translateY(15%) rotate(${rotation}deg)` }
    ], {
        duration: 500,
        iterations: 1
    });
}

prev.onclick = () => {
    currentIndex = (currentIndex === 0) ? planets.length - 1 : currentIndex - 1;
    updateSlider();
    animateImage(-360, 100);
};

next.onclick = () => {
    currentIndex = (currentIndex === planets.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
    animateImage(360, -100);
};

updateSlider();
