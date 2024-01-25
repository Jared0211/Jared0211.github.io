function validarFormulario() {
    var emailInput = document.getElementById('email');
    var emailHelp = document.getElementById('emailHelp');
    var ExpresionRegular = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!ExpresionRegular.test(emailInput.value)) {
      emailHelp.innerText = 'Ingresa un correo electrónico válido.';
      emailInput.focus();
      console.log('Ingresa un correo electronico valido')
      return false;
    } else {
      emailHelp.innerText = '';
      return true;
    }
  }