// =====================================================
// JAVASCRIPT DO SITE BRASIL
// Este arquivo é ligado ao index.html pela tag <script src="...">
// =====================================================

// 1. Uma lista (array) com curiosidades
const curiosidades = [
  "O Brasil é o 5º maior país do mundo em tamanho.",
  "O português é a língua oficial, mas existem mais de 270 línguas indígenas!",
  "O Brasil é o único país que ganhou 5 Copas do Mundo de futebol.",
  "O nome Brasil vem do pau-brasil, uma árvore de madeira avermelhada.",
  "A bandeira tem 27 estrelas: uma para cada estado e o Distrito Federal.",
  "O Rio Amazonas é o maior rio do mundo em volume de água."
];

// 2. Pegamos os elementos do HTML pelo "id"
const botao = document.getElementById("botao-curiosidade");
const texto = document.getElementById("texto-curiosidade");

// 3. Uma função que sorteia uma curiosidade e mostra na tela
function mostrarCuriosidade() {
  const posicao = Math.floor(Math.random() * curiosidades.length);
  texto.textContent = curiosidades[posicao];
}

// 4. Quando o botão for clicado, a função é executada
botao.addEventListener("click", mostrarCuriosidade);
