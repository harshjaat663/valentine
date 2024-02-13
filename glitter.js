document.addEventListener("DOMContentLoaded", function() {
    const particleImages = [
      "heart.png",
      "heart2.png",
      // Add more particle images as needed
    ];

    const glitterContainer = document.getElementById("glitter-container");

    function createParticle() {
      const particle = document.createElement("div");
      particle.classList.add("glitter-particle");
      particle.style.width = `${Math.random() * 20 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.backgroundImage = `url(${particleImages[Math.floor(Math.random() * particleImages.length)]})`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
      glitterContainer.appendChild(particle);
    }

    // Adjust the number of particles as needed
    const numberOfParticles = 50;

    for (let i = 0; i < numberOfParticles; i++) {
      createParticle();
    }
  });