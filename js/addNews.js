function createNews() {
    const jsonFile = 'https://raw.githubusercontent.com/Miguel22hp/Web-Catedra/main/json/news.json';
    const routeImages = 'https://raw.githubusercontent.com/Miguel22hp/Web-Catedra/main/images/'
  
    return new Promise((resolve, reject) => {
      const newsArray = []; // Array para almacenar las noticias
  
      const request = new XMLHttpRequest();
  
      request.open('GET', jsonFile, true);
      //request.responseType = 'json';
      request.onload = function () {
        if (request.status === 200) {
          try {
            const data = JSON.parse(request.responseText);
            // "data" contendrá el JSON analizado
    
            // Acceder a la lista de eventos
            const news = data.noticias;
    
            // Iterar a través de los eventos y almacenarlos en el array
            news.forEach(aNew => {
                const mes = aNew.mes;
                const anio = aNew.anio;
                const titulo = aNew.titulo;
                const descripcion = aNew.descripcion;
                const imagen1 = aNew.imagen_source;
                const imagen = routeImages + imagen1;
                const link = aNew.link_noticia;
                const descp_img = aNew.descripcion_imagen;

                // Convierte el mes numérico en letras
                const mesNumero = parseInt(mes, 10);
                const mesesAbreviados = [
                "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
                "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
                ];
                const mesLetra = mesesAbreviados[mesNumero - 1] || "Mes no válido";

                const nuevoEventoLi = document.createElement("li");
                const enlace = document.createElement("a");
                enlace.href = link;
                nuevoEventoLi.appendChild(enlace);
                const div1 = document.createElement("div");
                div1.className = "newsPanel";
                enlace.appendChild(div1);
                const listaOrdenarNew = document.createElement("ul");
                listaOrdenarNew.className = "newsStructure";
                div1.appendChild(listaOrdenarNew);
                const tituloYFecha = document.createElement("li");
                const descripcionLI = document.createElement("li");
                const imagenNew = document.createElement("li");
                listaOrdenarNew.appendChild(tituloYFecha);
                listaOrdenarNew.appendChild(descripcionLI);
                listaOrdenarNew.appendChild(imagenNew);
                const tituloNoticia = document.createElement("h3");
                tituloNoticia.textContent = titulo;
                const fechaTexto = document.createElement("p");
                fechaTexto.className = "dateNews";
                fechaTexto.textContent = mesLetra + " " + anio;
                tituloYFecha.appendChild(tituloNoticia);
                tituloYFecha.appendChild(fechaTexto);
                const descp = document.createElement("p");
                descp.className = "extraNewsInfo";
                descp.textContent = descripcion;
                descripcionLI.appendChild(descp);
                // Crear un elemento de imagen
                var imag = document.createElement("img");
                // Establecer el atributo 'src' con la ruta de la imagen
                imag.src = imagen;
                // Establecer el atributo 'alt' con el texto alternativo
                imag.alt = descp_img;
                imag.className = "newsImages";
                imagenNew.appendChild(imag);
                


    
                newsArray.push(nuevoEventoLi);
            });
    
            // Resuelve la promesa con el array de eventos
            resolve(newsArray);
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


    createNews()
      .then(news => {
        //Añadir los eventos a su correspondiente posición en el calendario de eventos, y que no se muestren si la fecha actual es posterior a su fecha
        news.forEach((elementLI)=> {
          const listaNews = document.getElementById("NewsList");
          listaNews.appendChild(elementLI);
        });
      })
      .catch(error => {
        console.error(error);
      });
  });