function cadastrarGameMania() {
    const email = document.getElementById('campo').value;
    alert(`E-mail ${email} cadastrado com sucesso `)
    
}

function mostrarMenu($evento) {
    //identificar o elemento do menu
    let menu = document.getElementById('menu');
    
    if (getComputedStyle(menu).display =="none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
    //mudar visualização do menu
    event.preventDefault()
}