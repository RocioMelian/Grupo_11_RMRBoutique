window.addEventListener('load',function(){
    console.log('JS vinculado');

    let formulario = document.querySelector('form#register');
    console.log(formulario.elements)

    let inputFirst_name = formulario.elements[0];
    let inputLast_name = formulario.elements[1];
    let inputEmail = formulario.elements[2];
    let inputPass = formulario.elements[3];
    let inputCategory = formulario.elements[4];
    let inputAvatar = formulario.elements[5];
    let checkBases = formulario.elements[6];

    let errores = {};
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;



    inputFirst_name.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "El nombre es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=2:
                errorNombre.innerHTML = "Tienes que poner al menos dos letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }

    })
    
    inputLast_name.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorApellido.innerHTML = "El apellido es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=2:
                errorApellido.innerHTML = "Tienes que poner al menos dos letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorApellido.innerHTML = ""
                break;
        }

    })

    inputEmail.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "El campo email es obligatorio";
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value) :
                errorEmail.innerHTML = "Debes escribir un email válido"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorEmail.innerHTML = ""
                break;
        }

    })

    inputPass.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorPass.innerHTML = "La contraseña es obligatorio";
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value) :
                errorPass.innerHTML = "La contraseña no cumple los requisitos"
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPass.innerHTML = ""
                break;
        }

    })

    inputCategory.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "La categoria es obligatoria";
                this.classList.add('is-invalid')
                break;
           
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }

    })

    inputAvatar.addEventListener('change',function(e){

        switch (true) {
            case !regExExtensions.exec(this.value) :
                errores.foto = "Solo imagenes con extension jpg, jpeg, png, o gif"
                errorFoto.innerHTML = errores.foto;
                this.classList.add('is-invalid')
                
            break
        
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorImagen.innerHTML = "";
                // Creamos el objeto de la clase FileReader
                let reader = new FileReader();
                // Leemos el archivo subido y se lo pasamos a nuestro fileReader
                reader.readAsDataURL(e.target.files[0]);
                // Le decimos que cuando este listo ejecute el código interno
                reader.onload = function(){
              
                };
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorImagen.innerHTML = "";

        }
    })

    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements
        if(checkBases.checked == false){
            checkBases.classList.add('is-invalid');
            errorBases.innerHTML = "Debes aceptar las bases y condiciones"
        }
        let error = false
        for (let index = 0; index < elementos.length-2; index++) {
            if(index != 5 && elementos[index].value == 0){
                elementos[index].classList.add('is-invalid');
               error = true;
            }
        }
        if(!error){
            formulario.submit()
        }else{
            msgError.innerHTML = "Los campos señadados son obligatorios"
        }
    })



})