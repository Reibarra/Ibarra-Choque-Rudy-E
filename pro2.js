document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        let isValid = true;

        // Validación del campo Nombre
        if (nameInput.value.trim() === "") {
            isValid = false;
            nameInput.classList.add('is-invalid');
        } else {
            nameInput.classList.remove('is-invalid');
        }

        // Validación del campo Correo Electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.classList.remove('is-invalid');
        }

        // Validación del campo Mensaje
        if (messageInput.value.trim() === "") {
            isValid = false;
            messageInput.classList.add('is-invalid');
        } else {
            messageInput.classList.remove('is-invalid');
        }

        if (isValid) {
            // Aquí podrías añadir la lógica para enviar el formulario
            alert("Formulario enviado exitosamente!");
            form.reset();
            $('#formModal').modal('hide');
        }
    });

    // Quitar la clase 'is-invalid' al corregir la entrada
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                this.classList.remove('is-invalid');
            }
        });
    });
});


