/*
Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
*/

const text_area  =  document.querySelector(".mensaje");
const receptor = document.querySelector(".receptor");

function encripta(encriptacion){ 
    let vocales = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],]
    //console.log(vocales)
    encriptacion = encriptacion.toLowerCase();
    for(let i =0;i<vocales.length;i++){
        if(encriptacion.includes(vocales[i][0])){
            encriptacion = encriptacion.replaceAll(vocales[i][0], vocales[i][1]);
        }
    }

    return encriptacion;
}
function btnencriptar(){
    const text_encriptado = encripta(text_area.value);
    receptor.value = text_encriptado;
    text_area.value = "";
    receptor.style.backgroundImage = "none";
 }

function desencripta(desencriptacion){ 
    let vocales = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],]
    //console.log(vocales)
    desencriptacion = desencriptacion.toLowerCase();
    for(let i =0;i<vocales.length;i++){
        if(desencriptacion.includes(vocales[i][1])){
            desencriptacion = desencriptacion.replaceAll(vocales[i][1], vocales[i][0]);
        }
    }

    return desencriptacion;
}

function btndesencriptar(){
    const text_encriptado = desencripta(receptor.value);
    text_area.value = text_encriptado;
    receptor.value = "";
    receptor.style.backgroundImage = "url(./Images/Muñeco.png)";

}

function copiarelemento(){
    if(text_area.value==""){
        const texto = document.getElementsByClassName("receptor");
        texto[0].select();
        texto[0].setSelectionRange(0,99999);
        document.execCommand('copy');
    }else{
        const texto = document.getElementsByClassName("mensaje");
        texto[0].select();
        texto[0].setSelectionRange(0,99999);
        document.execCommand('copy');
    }


}