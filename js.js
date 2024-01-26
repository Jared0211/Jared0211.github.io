function validarFormulario() {
    var emailInput = document.getElementById('email');
    var emailHelp = document.getElementById('emailHelp');
    var ExpresionRegular = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    var password = document.getElementById('password');


    if (!ExpresionRegular.test(emailInput.value)) {
      console.log('Ingresa un correo electronico valido')
      return false;
    }
    if(password.value.length < 8){ 
      console.log('contraseña no cumple con los caracteres minimos');
      return false;
    }
    else {
      window.alert('Has iniciado sesion')
      return true;
    }
  }