function criarNeve() {
  const neve = document.createElement("div");
  neve.classList.add("snowflake");
  neve.textContent = "❄";
  neve.style.left = Math.random() * 100 + "vw";
  neve.style.animationDuration = (5 + Math.random() * 10) + "s";
  neve.style.fontSize = (15 + Math.random() * 50) + "px";
  neve.style.opacity = Math.random(); 
  document.body.appendChild(neve);

  setTimeout(() => neve.remove(), 10000);
}

setInterval(criarNeve, 150);

document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById("musicaNatal");
  
  // Verifica se o audio existe no HTML antes de tentar tocar
  if(audio) {
      audio.volume = 0.5; // Volume 50%

      // 1. Tenta tocar sozinho assim que carrega
      var promessa = audio.play();

      if (promessa !== undefined) {
          promessa.catch(function(error) {
              // 2. Se o navegador bloquear (Autoplay Policy), espera o primeiro clique
              console.log("Autoplay bloqueado. Esperando interação do usuário...");
              
              document.addEventListener('click', function() {
                  audio.play();
              }, { once: true }); // 'once: true' garante que só executa no primeiro clique
          });
      }
  }
});