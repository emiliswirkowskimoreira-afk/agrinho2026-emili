// Lista de dicas sustentáveis
const dicas = [
    "Evite o uso de plásticos descartáveis. Leve sempre sua própria sacola ecológica!",
    "Economize água: feche a torneira enquanto escova os dentes e reduza o tempo no banho.",
    "Apague as luzes ao sair de um cômodo e aproveite ao máximo a luz natural do dia.",
    "Pratique a reciclagem. Separe o lixo orgânico do lixo reciclável na sua casa.",
    "Plante uma árvore ou crie uma pequena horta de temperos na sua janela.",
    "Prefira alimentos produzidos localmente. Isso apoia os agricultores da sua região e reduz a poluição do transporte!"
];

// Selecionando os elementos da página
const textoDica = document.getElementById("texto-dica");
const btnDica = document.getElementById("btn-dica");

// Função para mudar a dica de forma aleatória
btnDica.addEventListener("click", function() {
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    textoDica.textContent = dicas[indiceAleatorio];
});