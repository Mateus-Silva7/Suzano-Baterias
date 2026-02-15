document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-whatsapp");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !mensagem) {
      alert("Preencha todos os campos.");
      return;
    }

    const numero = "5511912831203";

    // Monta mensagem formatada corretamente
    const texto = `Olá! Meu nome é ${nome}.\n\n${mensagem}`;

    const textoFormatado = encodeURIComponent(texto);

    const url = `https://wa.me/${numero}?text=${textoFormatado}`;

    window.open(url, "_blank");

    form.reset();
  });
});
