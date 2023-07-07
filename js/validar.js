const btn = document.querySelector("[data-form-btn]");
const error = document.querySelector("[data-form-error]");
error.style.color = "red";

btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const mensajeError = [];
    const inputNombre = document.querySelector("[data-form-name]");
    const nombre = inputNombre.value;
    const inputCorreo = document.querySelector("[data-form-correo]");
    const correo = inputCorreo.value;
    const inputAsunto = document.querySelector("[data-form-asunto]");
    const asunto = inputAsunto.value;
    const inputMensaje = document.querySelector("[data-form-mensaje]");
    const mensaje = inputMensaje.value;
    if (nombre != "") {
        if (nombre.length < 50) {
            if (correo != "") {
                if (correo.indexOf(".") >= 0) {
                    if (correo.indexOf("@") >= 0){
                        if (asunto != "") {
                            if (asunto.length < 50){
                                if (mensaje != "") {
                                    if (mensaje.length < 300){
                                        alert("Mensaje enviado")                    
                                    } else {
                                        mensajeError.push("¡El campo mensaje no debe contener mas de 300 caractéres!")
                                    }
                                } else {
                                    mensajeError.push("¡Es necesario llenar el campo 'Mensaje'!")                                    
                                }
                            } else {
                                mensajeError.push("¡El campo asunto no debe contener mas de 50 caractéres!")
                            }
                        } else {
                            mensajeError.push("¡Es necesario llenar el campo 'Asunto'!");                            
                        }
                    } else {
                        mensajeError.push("¡El correo debe incluir el signo '@', 'ejemplo: texto@texto.com'!")
                    }
                } else {
                    mensajeError.push("¡El correo debe incluir al menos un punto (.), 'ejemplo: texto@texto.com'!")
                }
            } else {
                mensajeError.push("¡Es necesario llenar el campo 'E-mail'!")
            }
            
        } else {
            mensajeError.push("¡El campo nombre no debe tener mas de 50 caracteres!")
        }
    } else {
        mensajeError.push("¡Es necesario llenar el campo 'Nombre'!")
    }
    error.innerHTML = mensajeError;
    if(mensajeError == ""){
        inputNombre.value = "";
        inputCorreo.value = "";
        inputAsunto.value = "";
        inputMensaje.value = "";
    }
});

