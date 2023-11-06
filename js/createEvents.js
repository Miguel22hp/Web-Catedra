function createEventElementFromForm() {
    // Obtén una referencia a los elementos del formulario por su ID
    var fechaInput = document.getElementById("fecha");
    var horaInput = document.getElementById("hora");
    var descripcionInput = document.getElementById("descp");

    

    // Obtiene los valores de los elementos del formulario
    var fecha = fechaInput.value;
    var hora = horaInput.value;
    var descripcion = descripcionInput.value;

    // Divide la fecha ingresada en año, mes y día
    var [ano, mes, dia] = fecha.split("-");
    console.log(mes);

    var mesNumero = parseInt(mes, 10); // Convierte 'mes' en un número entero.

    var mesLetra = "";
    switch (mesNumero) {
        case 1:
            mesLetra = "ENE";
            break;

        case 2:
            mesLetra = "FEB";
            break;

        case 3:
            mesLetra = "MAR";
            break;

        case 4:
            mesLetra = "ABR";
            break;

        case 5:
            mesLetra = "MAY";
            break;

        case 6:
            mesLetra = "JUN";
            break;

        case 7:
            mesLetra = "JUL";
            break;

        case 8:
            mesLetra = "AGO";
            break;

        case 9:
            mesLetra = "SEP";
            break;

        case 10:
            mesLetra = "OCT";
            break;

        case 11:
            mesLetra = "NOV";
            break;

        case 12:
            mesLetra = "DIC";
            break;

        default:
            mesLetra = "Mes no válido";
    }

    // Crea el elemento de evento
    var nuevoEventoLi = document.createElement("li");
    nuevoEventoLi.className = "events";


    //Creo una cadena fecha, para añadirla al atributo y que sea serializable en html
    var fechaCadena = `${ano}-${mes}-${dia}`;

    // Agrega el año como un atributo personalizado al elemento li
    nuevoEventoLi.dataset.ano = ano;
    nuevoEventoLi.dataset.fecha = fechaCadena;

    nuevoEventoLi.innerHTML = `
        <h5>${dia} ${mesLetra}</h5>
        <p class="hourEvents">${hora}</p>
        <p>${descripcion}</p>
    `;

    //var dateC = new Date(fechaCadena); //Así se crea una fecha a partir de fechaCadena
    //console.log(dateC); 

    return nuevoEventoLi;
}

document.addEventListener("DOMContentLoaded", function () {
    var eventoForm = document.getElementById("eventoForm");

    eventoForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene el envío estándar del formulario.

        // Llama a la función createEventElementFromForm para crear el elemento de evento desde el formulario.
        var nuevoEventoLi = createEventElementFromForm();

        // A continuación, puedes agregar el elemento a tu página o realizar otras acciones, como almacenarlo o enviarlo a otra parte del código.

        // Ejemplo de cómo agregar el evento al DOM (a tu contenedor de eventos):
        var eventContainer = document.getElementById("Events"); //DEBUGG
        eventContainer.appendChild(nuevoEventoLi); //DEBUGG

        // Limpia el formulario si es necesario.
        eventoForm.reset();
    });
});