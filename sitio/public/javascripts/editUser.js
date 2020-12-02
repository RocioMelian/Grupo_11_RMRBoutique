window.addEventListener('load',function(){
    console.log('JS vinculado');

    let formulario = document.querySelector('form#editUser');
    console.log(formulario.elements)

    let inputAvatar = formulario.elements[0];
    let inputFirst_name = formulario.elements[1];
    let inputLast_name = formulario.elements[2];
    
    
    
   
    let errores = {};
    
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
      
        let error = false
        for (let index = 0; index < elementos.length-3; index++) {
            if(index != 0 && elementos[index].value == 0){
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