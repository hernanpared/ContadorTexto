function contarTexto() {
    const inputText = document.getElementById("inputText").value;
    const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
    const charCount = inputText.length;
    const charCountNoSpaces = inputText.replace(/\s+/g, '').length;
    const paragraphCount = inputText.trim() ? inputText.split(/\n+/).length : 0;

    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("charCount").textContent = charCount;
    document.getElementById("charCountNoSpaces").textContent = charCountNoSpaces;
    document.getElementById("paragraphCount").textContent = paragraphCount;
}

function limpiarTexto() {
    document.getElementById("inputText").value = "";
    document.getElementById("wordCount").textContent = 0;
    document.getElementById("charCount").textContent = 0;
    document.getElementById("charCountNoSpaces").textContent = 0;
    document.getElementById("paragraphCount").textContent = 0;
}
