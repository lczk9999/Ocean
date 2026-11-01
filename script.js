let total = 0;

// Função para trocar entre as páginas
function mostrar(pagina) {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("animais").style.display = "none";
    document.getElementById("limpeza").style.display = "none";
    document.getElementById("ajudar").style.display = "none";

    document.getElementById(pagina).style.display = "block";
}

// Função para adicionar lixo ao contador
function adicionar(tipo) {
    let quantidade = Number(document.getElementById(tipo).value);

    if (quantidade > 0) {
        total = total + quantidade;

        document.getElementById("total").innerHTML =
            "Total collected: " + total;

        document.getElementById(tipo).value = 0;
    }
}
