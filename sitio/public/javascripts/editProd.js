window.addEventListener('load',function(){
    console.log('JS vinculado correctamente');

    let formulario = document.querySelector('form#edit');
    console.log(formulario.elements)

    let inputNombre = formulario.elements[0];
    let inputTalle = formulario.elements[1];
    let inputPrice = formulario.elements[2];
    let inputDiscount = formulario.elements[3];
    
    let inputImage = formulario.elements[5];
    let inputDescription = formulario.elements[6];
    

   
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;



    inputNombre.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "El nombre del producto es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length <=3:
                errorNombre.innerHTML = "Tenés que poner al menos tres letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }

    })
    
    inputTalle.addEventListener('blur',function(){

        switch (true) {
           
            case this.value.length === 0:
                errorTalle.innerHTML = "El talle es obligatorio"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorTalle.innerHTML = ""
                break;
        }

    })

    inputPrice.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorPrice.innerHTML = "El precio es obligatorio";
                this.classList.add('is-invalid')
                break;
           
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPrice.innerHTML = ""
                break;
        }

    })

   
    inputDiscount.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorDiscount.innerHTML = "El descuento es obligatorio, si no posee descuento poner 0 (cero)";
                this.classList.add('is-invalid')
                break;
           
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorDiscount.innerHTML = ""
                break;
        }

    })

  

    inputImage.addEventListener('change',function(e){

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
    inputDescription.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorDescription.innerHTML = "El campo descripción es obligatorio";
                this.classList.add('is-invalid')
                break;
           
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorDescription.innerHTML = ""
                break;
        }

    })
    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements

   
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