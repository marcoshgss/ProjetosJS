function habilitar() {  
    let checar = document.getElementById("ligado");
    let outro = document.getElementById("value");
    outro.disabled = checar.checked? false:true;
    outro.value = "";
    if(!outro.disabled) {
        outro.focus();
    }
}