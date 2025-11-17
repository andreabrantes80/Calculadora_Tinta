function calcular() {
  const area = parseFloat(document.getElementById("area").value);
  const tipo = document.getElementById("tinta").value;
  const valor = parseFloat(document.getElementById("valor").value);

  if (isNaN(area) || isNaN(valor) || area <= 0 || valor <= 0) {
    document.getElementById("resultado").innerText =
      "Preencha todos os campos corretamente.";
    return;
  }

  // Rendimento por tipo de tinta (m² por lata)
  const rendimentos = {
    premium: 117.5, // média entre 115 e 120
    alto: 500,
    emborrachada: 85,
  };

  const rendimento = rendimentos[tipo];
  const latas = Math.ceil(area / rendimento);
  const custoTotal = latas * valor;

  document.getElementById("resultado").innerHTML = `
    🧮 Você precisa de <strong>${latas}</strong> lata(s) de tinta.<br>
    💰 Custo total estimado: <strong>R$ ${custoTotal.toFixed(2)}</strong>
  `;
}

function limpar() {
  document.getElementById("area").value = "";
  document.getElementById("tinta").value = "premium";
  document.getElementById("valor").value = "";
  document.getElementById("resultado").innerText = "";
}
