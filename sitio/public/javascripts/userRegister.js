window.addEventListener('load', function() {
    console.log("buena vinculacion")

    let formularioRegistro = document.querySelector('form#registro')

    let inputFirstName = formularioRegistro.element[0]
    let inputLastName = formularioRegistro.element[1]
    let inputEmail = formularioRegistro.element[2]
    let inputPassword = formularioRegistro.element[3]
    let inputCategory = formularioRegistro.element[4]
    let inputImage = formularioRegistro.element[5]

    let imageExtension = /(.jpg|.jpeg|.png|.gif)$/i;

    inputFirstName.addEventListener('submit', function() {
        if(inputFirstName.length === 0) {
            errorNombre.innerHTML = ("este campo es obligatorio")
        }
    })
})