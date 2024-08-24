//Const 
const d = document;
const textArea= d.querySelector(".form__input");
const imagenMuneco = d.querySelector(".result__img");
const loaderPunto = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".result__tittle");
const resultadoText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__boton");
const botonDesencriptar = d.querySelectorAll(".form__boton");
const botonCopiar = d.querySelector(".result__btn");
const llaves = [
    ["e", "enter"],
    ["i", "ines"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
    ];

//Funcion para encriptar
function encriptarmensaje(mensaje){let mensajeEncriptado = "";for(let i = 0; i < mensaje.length; i++){
	let letra = mensaje[i];
	let encriptada = letra;
	for(let j = 0; j < llaves.length; j++){
	   if (letra === llaves[j][0]) {encriptada = llaves[j][1]; // Reemplaza la letra por su equivalente encriptado
	  break; //termina el bucle cuando se encuentra la correspondencia
     }
        }
        mensajeEncriptado += encriptada;
      }
return mensajeEncriptado;
}
//Funcion para desencriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i =0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0])
    }
    return mensajeDesencriptado;
}
//Ocultar elementos
textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loaderPunto.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje.";
    resultadoText.textContent = "";
});
//Funcion del boton encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
});
//Funcion del boton desencriptar
botonDesencriptar[1].addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "El resultado es:";
    botonCopiar.classList.remove("hidden")
});
//Boton copiar
botonCopiar.addEventListener('click', ()=>{
let textoCopiado = resultadoText.textContent;
navigator.clipboard.writeText(textoCopiado).then(()=> {
    imagenMuneco.style.display = "block";
    loaderPunto.classList.add("hidden");
    resultadoTitulo.textContent ="El texto se copio";
    botonCopiar.classList.add("hidden");
    resultadoText.textContent = ""
})
});