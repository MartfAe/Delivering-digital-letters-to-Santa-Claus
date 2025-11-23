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


/* =====================================================
   FUNÇÃO 2: CRIAR CARTINHAS (Para a capa)
   ===================================================== */
function criarEnvelope() {
  const envelope = document.createElement("div");
  envelope.classList.add("envelope-caindo");
  
  envelope.style.left = Math.random() * 100 + "vw";
  envelope.style.animationDuration = (5 + Math.random() * 10) + "s";
  envelope.style.animationDelay = Math.random() * 5 + "s";

  // Tamanho das cartas
  const tamanho = (20 + Math.random() * 30) + "px";
  envelope.style.width = tamanho;
  envelope.style.height = tamanho;

  document.body.appendChild(envelope);

  setTimeout(() => envelope.remove(), 20000); // Remove após 20s
}

/* =====================================================
   LÓGICA DE DECISÃO (ROTEADOR)
   ===================================================== */

// Verifica se estamos na página da CAPA (index.html novo)
if (document.body.classList.contains('fundo-capa')) {
    // Se for a capa, chove cartinhas a cada 400ms
    setInterval(criarEnvelope, 400);

} else {
    // Se for qualquer outra página (Formulário ou Obrigado), chove neve a cada 150ms
    setInterval(criarNeve, 150);
}

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