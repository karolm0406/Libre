function eliminarScripts(html) {
    return html.replace(/<script\b[^>]*>.*?<\/script>/gi, '');
}

function validar(form) {
    // Validar nombre
    var nombre = form.nombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    // Validar edad
    var edad = form.edad.value.trim();
    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }

    // Validar selección de sexo
    var sexo = form.sexo.value;
    if (sexo === "") {
        alert("Por favor, seleccione su sexo.");
        return false;
    }

    // Validar deporte favorito
    var deporte = form.deporte.value;
    if (deporte === "ninguno") {
        alert("Por favor, seleccione un deporte favorito.");
        return false;
    }

    // Eliminar scripts potencialmente peligrosos
    form.innerHTML = eliminarScripts(form.innerHTML);

    // Si todo es válido
    return true;
}



/*
Usa expresiones regulares (regex):
/<script\b[^>]*>.*?<\/script>/gi
Desglose de la regex:

<script\b → Encuentra la palabra "script" al inicio de una etiqueta (<script>).
[^>]*> → Captura posibles atributos dentro de la etiqueta de apertura.
.*? → Captura cualquier contenido dentro de la etiqueta de apertura y cierre (<script>...contenido...</script>).
</script> → Busca la etiqueta de cierre.
g → Significa "global", es decir, que eliminará todas las coincidencias.
i → Hace que no distinga entre mayúsculas y minúsculas (<SCRIPT> también se eliminaría).

form.innerHTML = eliminarScripts(form.innerHTML);
🔹 ¿Qué hace?

Antes de enviar el formulario, limpia su contenido eliminando cualquier <script> que haya sido inyectado en los campos.




 Explicación del código:
Función eliminarScripts(html)

Usa una expresión regular (regex) para buscar y eliminar etiquetas <script>...</script>, incluyendo su contenido.
La g es para que elimine todas las coincidencias en el texto, y la i hace que la búsqueda no distinga entre mayúsculas y minúsculas.
Integración en la validación:

Después de validar los campos, la función elimina cualquier etiqueta <script> que pueda haber en el formulario antes de enviarlo.



¡Tranqui! Te explico de manera más clara para que veas para qué sirve y qué hace exactamente ese código.

¿Qué problema estamos resolviendo?
En HTML y JavaScript, un usuario malintencionado puede intentar inyectar código dañino en tu formulario.

Ejemplo de ataque:
Un usuario podría escribir en el campo de "Nombre" algo así:

<script>alert('Hackeado!');</script>
Si tu código no tiene protección, esto haría que aparezca una alerta en la página cuando se envíe el formulario. En un caso real, alguien podría inyectar código para robar información o dañar tu sitio.

¿Cómo lo evitamos?
El código que te di detecta cualquier etiqueta <script>...</script> y la elimina para que no se ejecute nada peligroso en el formulario.
Básicamente, limpia el contenido del formulario antes de enviarlo.
Ejemplo con el código funcionando:
Si un usuario intenta poner en el campo "Nombre":

<script>alert('Hackeado!');</script>
La función eliminarScripts() lo transformará en:

(Ha eliminado la etiqueta <script>)
¡Así evitamos que el código malicioso se ejecute!

¿Cómo lo puedes probar?
Abre tu formulario en un navegador.
Intenta escribir <script>alert('Hackeado!');</script> en el campo "Nombre".
Cuando hagas clic en "Enviar", el script debería desaparecer.
Si no agregas esta protección, el código malicioso podría ejecutarse, lo cual es un problema de seguridad.*/