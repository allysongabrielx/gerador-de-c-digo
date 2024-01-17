function generateCode() {
    // Gera um código aleatório de 16 dígitos
    var generatedCode = Math.floor(1000000000000000 + Math.random() * 9000000000000000);

    // Exibe o código gerado no input
    document.getElementById("codeOutput").value = generatedCode;
}
