let clickCount = 0;
const icon = document.getElementById("clickable-icon");
const container = document.querySelector(".container");
const teAmo = document.getElementById("teAmo");
const mucho = document.getElementById("mucho");

icon.addEventListener("click", () => {
  clickCount++;
  icon.style.transform = `scale(${1 + clickCount * 0.1})`; // Aumenta el tamaño

  if (clickCount === 10) {
    triggerRain();
  }
});

function triggerRain() {
  for (let i = 0; i < 100; i++) {
    let rainDrop = document.createElement("img");
    rainDrop.src = "flower-svgrepo-com.svg"; // Ruta al segundo archivo SVG
    rainDrop.classList.add("rain");
    rainDrop.classList.add("shake");
    
    // Distribuye aleatoriamente los íconos en todo el ancho de la pantalla
    rainDrop.style.left = `${Math.random() * 100}vw`;

    // Aplica una pequeña variación al tiempo de inicio para que no caigan todos al mismo tiempo
    rainDrop.style.animationDelay = `${Math.random()}s`;
    
    container.appendChild(rainDrop);
  }

  // Después de 4 segundos, elimina los íconos y muestra el mensaje
  setTimeout(() => {
    const rainDrops = document.querySelectorAll(".rain");
    teAmo.classList.remove("hidden"); // Muestra el mensaje
    mucho.classList.remove("hidden"); // Muestra el mensaje
    icon.classList.add("hidden");
    rainDrops.forEach(drop => drop.remove()); // Elimina la lluvia
  }, 2000); // Duración de la lluvia
}
