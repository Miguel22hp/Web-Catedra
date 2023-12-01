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

                 //Crea el li correspondiente a la noticia, con su enlace (a)
                 const nuevoEventoLi = document.createElement("li");
                 const enlace = document.createElement("a");
                 enlace.href = link; //asocias al enlace el link al que debe llegar
                 nuevoEventoLi.appendChild(enlace);
                 //Creas un div y una lista desordeanada (ul) para estructurar la noticia dentro del enlace
                 const div1 = document.createElement("div");
                 div1.className = "newsPanel";
                 enlace.appendChild(div1);
                 const listaOrdenarNew = document.createElement("ul");
                 listaOrdenarNew.className = "newsStructure";
                 div1.appendChild(listaOrdenarNew);
                 //Creas los puntos de la lista(li) para título y fecha, descripción, y foto
                 const tituloYFecha = document.createElement("li");
                 const descripcionLI = document.createElement("li");
                 const imagenNew = document.createElement("li");
                 listaOrdenarNew.appendChild(tituloYFecha);
                 listaOrdenarNew.appendChild(descripcionLI);
                 listaOrdenarNew.appendChild(imagenNew);
                 //Contenido del li de título y fecha
                 const tituloNoticia = document.createElement("h3");
                 tituloNoticia.textContent = titulo;
                 const fechaTexto = document.createElement("p");
                 fechaTexto.className = "dateNews";
                 fechaTexto.textContent = mesLetra + " " + anio;
                 tituloYFecha.appendChild(tituloNoticia);
                 tituloYFecha.appendChild(fechaTexto);
                 //Contenido del li de descripción
                 const descp = document.createElement("p");
                 descp.className = "extraNewsInfo";
                 descp.textContent = descripcion;
                 descripcionLI.appendChild(descp);
                 //Contenido del li de imagen
                 var imag = document.createElement("img");
                 imag.src = imagen;
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

function createMobileNews(){
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
                
                 //Crea el li correspondiente a la noticia, con su enlace (a)
                 const nuevoEventoLi = document.createElement("li");
                 const enlace = document.createElement("a");
                 enlace.href = link; //asocias al enlace el link al que debe llegar
                 nuevoEventoLi.appendChild(enlace);
                 //Creas un div y una lista desordeanada (ul) para estructurar la noticia dentro del enlace
                 const div1 = document.createElement("div");
                 div1.className = "newsPanel";
                 enlace.appendChild(div1);
                 const listaOrdenarNew = document.createElement("ul");
                 listaOrdenarNew.className = "newsStructureMobile";
                 div1.appendChild(listaOrdenarNew);
                 //Creas los puntos de la lista(li) para título y fecha, descripción, y foto
                 const tituloYFecha = document.createElement("li");
                 const descripcionLI = document.createElement("li");
                 const imagenNew = document.createElement("li");
                 listaOrdenarNew.appendChild(tituloYFecha);
                 listaOrdenarNew.appendChild(imagenNew);
                 //Contenido del li de título y fecha
                 const tituloNoticia = document.createElement("h3");
                 tituloNoticia.textContent = titulo;
                 const fechaTexto = document.createElement("p");
                 fechaTexto.className = "dateNewsMobile";
                 fechaTexto.textContent = mesLetra + " " + anio;
                 tituloYFecha.appendChild(tituloNoticia);
                 tituloYFecha.appendChild(fechaTexto);
                 //Contenido del li de imagen
                 var imag = document.createElement("img");
                 imag.src = imagen;
                 imag.alt = descp_img;
                 imag.className = "newsImagesMobile";
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

  if(window.innerWidth >= 1200)
  {
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
  } else if (window.innerWidth < 1200) {
    createMobileNews()
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
  }
});

// Agregar un evento para manejar cambios en el tamaño de la pantalla
window.addEventListener('resize', handleResize);

// Función para manejar cambios en el tamaño de la pantalla
function handleResize() {
  // Verifica el tamaño de la pantalla y realiza acciones según sea necesario
  if (window.innerWidth >= 1200) {
      createNews()
          .then(news => {
              const listaNews = document.getElementById("NewsList");
              listaNews.innerHTML = ''; // Limpiar la lista antes de agregar noticias
              news.forEach((elementLI) => {
                listaNews.appendChild(elementLI);
              });
          })
          .catch(error => {
              console.error(error);
          });
  } else if (window.innerWidth < 1200){
    createMobileNews()
      .then(news => {
        const listaNews = document.getElementById("NewsList");
        listaNews.innerHTML = ''; // Limpiar la lista antes de agregar noticias
        news.forEach((elementLI)=> {
          listaNews.appendChild(elementLI);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
