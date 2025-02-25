function validar(form) {
    if (!validarNombre(form.nombre.value)) return false;
    if (!validarEdad(form.edad.value)) return false;
    if (!validarSexo(form.sexo.value)) return false;
    if (!validarDeporte(form.deporte.value)) return false;

    alert("Datos subidos correctamente");
    return true;
}

function validarNombre(nombre) {
    nombre = nombre.trim();
    if (nombre === "" || contieneHTML(nombre)) {
        alert("Por favor, ingrese su nombre. No etiquetas HTML");
        return false;
    }
    return true;
}

function validarEdad(edad) {
    edad = edad.trim();
    if (edad === "" || isNaN(edad) || edad <= 0 || contieneHTML(edad)) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }
    return true;
}

function validarSexo(sexo) {
    if (sexo === "") {
        alert("Por favor, seleccione su sexo.");
        return false;
    }
    return true;
}

function validarDeporte(deporte) {
    if (deporte === "ninguno") {
        alert("Por favor, seleccione un deporte favorito.");
        return false;
    }
    return true;
}

// Función para detectar etiquetas HTML en el texto
function contieneHTML(texto) {
    return /<\/?[a-z][^>]*>/i.test(texto);
}

// Asigna la función de validación al formulario cuando se envía
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("miFormulario").addEventListener("submit", function (event) {
        if (!validar(this)) {
            event.preventDefault(); // Evita el envío si la validación falla
        }
    });
});


//gg