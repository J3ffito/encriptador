/* Llaves Desencriptador */
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

/* Función para encriptar un mensaje */
function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
        if (letra === "e") {
            mensajeEncriptado += "enter";
        } else if (letra === "i") {
            mensajeEncriptado += "imes";
        } else if (letra === "a") {
            mensajeEncriptado += "ai";
        } else if (letra === "o") {
            mensajeEncriptado += "ober";
        } else if (letra === "u") {
            mensajeEncriptado += "ufat";
        } else {
            mensajeEncriptado += letra;
        }
    }
    return mensajeEncriptado;
};

/* Función para desencriptar un mensaje */
function desencriptar(texto){
    for (let i = 0; i < llaves.length; i++)
    if (texto.includes(llaves[i][1])){
        texto = texto.replaceAll(llaves[i][1],llaves[i][0]);
    }
    return texto; 
};

