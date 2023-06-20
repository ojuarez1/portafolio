const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", (evento) => {
    evento.preventDefault;
    const inputNombre = document.querySelector("[data-form-name]");
    const nombre = inputNombre.value;
    const inputCorreo = document.querySelector("[data-form-correo]");
    const correo = inputCorreo.value;
    const inputAsunto = document.querySelector("[data-form-asunto]");
    const asunto = inputAsunto.value;
    const inputMensaje = document.querySelector("[data-form-mensaje]");
    const mensaje = inputMensaje.value;
    if (nombre != "" && correo != "" && asunto != "" && mensaje != "") {
        if (nombre.length < 50) {
            if (correo.indexOf("@") >= 0) {
                if (correo.indexOf(".") >= 0) {
                    if (asunto.length < 50) {
                        if (mensaje.length < 300) {
                            alert("Mensaje enviado")
                        } else {
                             alert("El campo mensaje no debe contener mas de 300 caractéres")
                        }                        
                    } else {
                        alert("El campo asunto no debe contener mas de 50 caractéres")
                    }
                } else {
                    alert("El correo debe incluir al menos un punto (.), 'ejemplo: texto@texto.com'")
                }
            } else {
                alert("El correo debe incluir el signo '@', 'ejemplo: texto@texto.com'")
            }
            
        } else {
            alert("El campo nombre no debe tener mas de 50 caracteres")
        }
    } else {
        alert("Es necesario llenar todos los campos")
    }
});

