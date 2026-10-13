// CONFIGURAÇÃO FÁCIL: troque pelo número oficial do WhatsApp da Shine TV.
// Use o código do país + DDD + número, somente números.
// Exemplo fictício: 5511999999999
const WHATSAPP_NUMERO = "5500000000000";

function abrirWhatsApp(mensagem) {
  if (WHATSAPP_NUMERO === "5500000000000") {
    alert("Configure o número do WhatsApp no arquivo script.js antes de usar este botão.");
    return;
  }

  const texto = encodeURIComponent(mensagem);
  const link = `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;
  window.open(link, "_blank", "noopener,noreferrer");
}

// Botão principal
document.getElementById("whatsapp-principal").addEventListener("click", function (evento) {
  evento.preventDefault();
  abrirWhatsApp("Olá! Gostaria de saber mais sobre a Shine TV.");
});

// Botões de interesse nos planos: já preenchem uma mensagem com o nome do plano.
document.querySelectorAll(".contato-plano").forEach(function (botao) {
  botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    const plano = botao.dataset.plano;
    abrirWhatsApp(`Olá! Tenho interesse no plano ${plano} da Shine TV. Pode me passar mais informações?`);
  });
});

// Atualiza automaticamente o ano do rodapé.
document.getElementById("ano").textContent = new Date().getFullYear();
