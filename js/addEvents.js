function createEvents() {
    const jsonFile = 'https://raw.githubusercontent.com/Miguel22hp/json_events_repo/main/events.json';
  
    return new Promise((resolve, reject) => {
      const eventosArray = []; // Array para almacenar los eventos
  
      const request = new XMLHttpRequest();
  
      request.open('GET', jsonFile, true);
      //request.responseType = 'json';
      console.log("HOLA")
      request.onload = function () {
        console.log(request.status);
        if (request.status === 200) {
          try {
            const data = JSON.parse(request.responseText);
            // "data" contendrá el JSON analizado
    
            // Acceder a la lista de eventos
            const eventos = data.eventos;
    
            // Iterar a través de los eventos y almacenarlos en el array
            eventos.forEach(evento => {
                const dia = evento.dia;
                const mes = evento.mes;
                const anio = evento.anio;
                const fecha = evento.fecha;
                const horaInicio = evento.hora_inicio;
                const horaFin = evento.hora_fin;
                const titulo = evento.titulo;
                const descripcion = evento.descripcion;
    
                // Convierte el mes numérico en una abreviatura de tres letras
                const mesNumero = parseInt(mes, 10);
                const mesesAbreviados = [
                "ENE", "FEB", "MAR", "ABR", "MAY", "JUN",
                "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"
                ];
                const mesLetra = mesesAbreviados[mesNumero - 1] || "Mes no válido";
    
                // Crear un elemento <li> para cada evento
                const nuevoEventoLi = document.createElement("li");
                nuevoEventoLi.className = "events";
                nuevoEventoLi.dataset.anio = anio;
                nuevoEventoLi.dataset.fecha = fecha;
                nuevoEventoLi.dataset.mes = mes;
                nuevoEventoLi.dataset.dia = dia;
                nuevoEventoLi.innerHTML = `
                <h5>${dia} ${mesLetra}</h5>
                <p class="hourEvents">${horaInicio}-${horaFin} Europe/Madrid</p>
                <p>${descripcion}</p>
                `;
    
                eventosArray.push(nuevoEventoLi);
            });
    
            // Resuelve la promesa con el array de eventos
            resolve(eventosArray);
            }
            catch (error)
            {
                console.error("Error al analizar el JSON:", error);
                reject('Error al cargar el archivo JSON');
            }
        }
        else {
          reject('Error al cargar el archivo JSON');
        }
      };
  
      request.onerror = function () {
        reject('Error de red al cargar el archivo JSON');
      };
  
      request.send();
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    //Obtengo la fecha de hoy
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    
    
    if(month < 10){
      //console.log(`${day}-0${month}-${year}`)
      if(day < 10)
        var hoy = `${year}-0${month}-0${day}`;
      else
        var hoy = `${year}-0${month}-${day}`;
      //console.log(hoy);
    }else{
      if(day < 10)
        var hoy = `${year}-${month}-0${day}`;
      else
        var hoy = `${year}-${month}-${day}`;
      //console.log(hoy);
    }
    console.log("Fecha del hoy" + hoy);

    createEvents()
      .then(eventos => {
        
        //Añadir los eventos a su correspondiente posición en el calendario de eventos, y que no se muestren si la fecha actual es posterior a su fecha
        eventos.forEach((elementLI)=> {
          const fecha = elementLI.dataset.fecha;
          console.log("Fecha del li" + fecha);
          if(hoy <= fecha)
          {            
            console.log("Despliega el li con fecha" + fecha);
            var idMes = elementLI.dataset.anio + "-" + (elementLI.dataset.mes);

            //Selecciono el li con el identificador del mes y año que corresponden a este evento
            var liMesAñadir = document.getElementById(idMes);

            if (liMesAñadir !== null) {              
              //Seleccionas la lista de ese mes en la que se añaden sus elementos y añado el elemento
              var ulDentroLi = liMesAñadir.querySelector('ul');
              ulDentroLi.appendChild(elementLI);
            }


          }
        });
      })
      .catch(error => {
        console.error(error);
      });
  });