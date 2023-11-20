
/**
 *  This function creates the ul with every single UPM former Student
 *  Every student gets an Id every time the function is loaded.
 * @returns an array with all the strucutres of the former Student
 */
function createFormerStudent(){
    const jsonFile = "https://raw.githubusercontent.com/Miguel22hp/Web-Catedra/17-add-ex-alumnos/json/exAlumnos.json";
    const routeImages = 'https://raw.githubusercontent.com/Miguel22hp/Web-Catedra/17-add-ex-alumnos/images/'

    return new Promise((resolve, reject) => {
        const formerStudent = []
        const request = new XMLHttpRequest();
  
        request.open('GET', jsonFile, true);
        request.onload = function () {
            if (request.status === 200) {
                try {
                    const data = JSON.parse(request.responseText);
                    // "data" contendrá el JSON analizado
            
                    // Acceder a la lista de exAlumnos
                    const exAlumnos = data.exAlumnos;
                    var idExAlummni = 0;
                    //console.log("id del exAlumnos" + exAlumnos.)

                    exAlumnos.forEach(exAlumno => {
                        //structure where the former Student is going to be created
                        const ulExAlumni = document.createElement('ul');
                        //Creating the left button
                        const buttonLeftLi = document.createElement('li');
                        buttonLeftLi.className = "buttonLeftLi";
                        const buttonLeft = document.createElement('button');
                        //buttonLeft.id = "ButtonLeftExAlumni";
                        buttonLeft.className = "buttonExAlumni buttonLeftExAlumni";
                        buttonLeft.textContent = "<";
                        buttonLeftLi.appendChild(buttonLeft);
                        
                        //Creating the right button
                        const buttonRightLi = document.createElement('li');
                        buttonRightLi.className = "buttonRightLi";
                        const buttonRight = document.createElement('button');
                        //buttonRight.id = "ButtonRightExAlumni";
                        buttonRight.className = "buttonExAlumni buttonRightExAlumni";
                        buttonRight.textContent = ">";
                        buttonRightLi.appendChild(buttonRight);

                        //Creating the personal info li
                        const personalInfo = document.createElement('li');
                        personalInfo.className = "personalInfoExAlumni";
                        const nombreExAlumno = document.createElement('h4');
                        nombreExAlumno.textContent = exAlumno.nombre_Alumno;
                        const degree = document.createElement('p')
                        degree.className = "upmDegree";
                        degree.textContent = exAlumno.titulo_UPM;
                        const position = document.createElement('p')
                        position.className = "positionInnova-TSN";
                        position.textContent = exAlumno.posicion_Innova;
                        personalInfo.appendChild(nombreExAlumno);
                        personalInfo.appendChild(degree);
                        personalInfo.appendChild(position);


                        //Creating the experience Innova
                        const experienceInnova = document.createElement('li');
                        experienceInnova.className = "experienceInnova-TSNContainer";
                        const experience = document.createElement('p')
                        experience.className = "experienceInnova-TSN";
                        experience.textContent = exAlumno.experiencia;
                        experienceInnova.appendChild(experience);

                        //Creating the photo
                        const photo = document.createElement('li');
                        photo.className = "exAlumniPhotoContainer";
                        const image = document.createElement('img');
                        image.alt = "Foto del exAlumno con nombre " + exAlumno.nombre_Alumno;
                        image.className = "exAlummniPhoto";
                        //image.src = exAlumno.link_photo;
                        var imagesCompleted = routeImages + exAlumno.link_photo;
                        image.src = imagesCompleted;
                        console.log(image.src);
                        photo.appendChild(image);



                        //Adding in the correcto order the elements
                        ulExAlumni.appendChild(buttonLeftLi);
                        ulExAlumni.appendChild(personalInfo);
                        ulExAlumni.appendChild(experienceInnova);
                        ulExAlumni.appendChild(photo);
                        ulExAlumni.appendChild(buttonRightLi);
                        ulExAlumni.dataset.id = idExAlummni;
                        ulExAlumni.id = "FormerStudent"+idExAlummni;
                        ulExAlumni.className = "exAlumni"
                        idExAlummni++;

                        formerStudent.push(ulExAlumni);
                        
                    });
                    resolve(formerStudent);
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
            
        }
        request.onerror = function () {
            reject('Error de red al cargar el archivo JSON');
          };
      
          request.send();
    });
}

/**
 * When the document is loaded, the former studen with id = 0 
 * appears on the board 
 */
document.addEventListener("DOMContentLoaded", function () {
    let formerStudents;
    let buttonsIzq = [];
    let buttonsRight = [];

    createFormerStudent()
        .then(students => {
            students.forEach(exStudent => {
                var buttonizq1 = exStudent.querySelector(".buttonExAlumni");
                var buttonright1 = exStudent.querySelector(".buttonRightExAlumni");

                if (buttonizq1) {
                    buttonsIzq.push(buttonizq1);
                }

                if (buttonright1) {
                    buttonsRight.push(buttonright1);
                }
            });

            formerStudents = students;
            let continueLoop = true;
            let index = 0;
            var infoExAlumni = document.getElementById("ExAlumniContainer");

            while (continueLoop && index < students.length) {
                // Accede al estudiante actual utilizando students[index]
                const currentStudent = students[index];

                if(currentStudent.dataset.id == 0)
                {
                    continueLoop = false;
                    infoExAlumni.appendChild(currentStudent);
                }

                // Incrementa el índice para pasar al siguiente estudiante
                index++;
            }

            buttonsIzq.forEach(buttonIzq => {
                buttonIzq.addEventListener("click", function () {
                    handleButtonClick("left");
                });
            });

            buttonsRight.forEach(buttonRight1 => {
                buttonRight1.addEventListener("click", function () {
                    handleButtonClick("right");
                });
            });

        })
        .catch(error => {
            console.error(error);
        });

        function handleButtonClick(direction)
        {
            var actualExAlumni = document.querySelector(".exAlumni");
            var id = actualExAlumni.dataset.id;
            var newId;

            if (direction === "left") {
                console.log(id);
                newId = id == 0 ? formerStudents.length - 1 : id - 1;
                console.log(newId);
            } else {
                console.log(id);
                newId = id == formerStudents.length - 1 ? 0 : parseInt(id) + 1;
                console.log(newId);
            }

            let continueLoop = true;
            let index = 0;
            var infoExAlumni = document.getElementById("ExAlumniContainer");

            while (continueLoop && index < formerStudents.length) {
                const currentStudent = formerStudents[index];

                if (currentStudent.dataset.id == newId) {
                    continueLoop = false;
                    infoExAlumni.innerHTML = '';
                    infoExAlumni.appendChild(currentStudent);
                }

                index++;
            }
        }
        

});



document.addEventListener("DOMContentLoaded", function () {

    /*
    document.getElementById("ButtonLeftExAlumni").addEventListener("click", function () {
        var actualExAlumni = document.getElementsByClassName("exAlumni");
        var id = actualExAlumni.dataset.id;
        var newId;
        if(id == 0)
            newId = formerStudents.length -1;
        else
            newId = id-1;
    
        let continueLoop = true;
        let index = 0;
        //var infoExAlumni = document.getElementsByClassName("exAlumniInfoContainer");
        var infoExAlumni = document.getElementById("ExAlumniContainer");
    
        while (continueLoop && index < students.length) {
            // Accede al estudiante actual utilizando students[index]
            const currentStudent = students[index];
    
            if(currentStudent.dataset.id == newId)
            {
                continueLoop = false;
                infoExAlumni.innerHTML = ''; //elimino el hijo que tenía antes
                infoExAlumni.appendChild(currentStudent);
            }
    
            // Incrementa el índice para pasar al siguiente estudiante
            index++;
        }
    
    });

    document.getElementById("ButtonRightExAlumni").addEventListener("click", function () {
        var actualExAlumni = document.getElementsByClassName("exAlumni");
        var id = actualExAlumni.dataset.id;
        if(id == formerStudents.length -1)
            newId = 0;
        else
            newId = id+1;
    
        let continueLoop = true;
        let index = 0;
        var infoExAlumni = document.getElementById("ExAlumniContainer");
    
        while (continueLoop && index < students.length) {
            // Accede al estudiante actual utilizando students[index]
            const currentStudent = students[index];
    
            if(currentStudent.dataset.id == newId)
            {
                continueLoop = false;
                infoExAlumni.innerHTML = ''; //elimino el hijo que tenía antes
                infoExAlumni.appendChild(currentStudent);
            }
    
            // Incrementa el índice para pasar al siguiente estudiante
            index++;
        }
    
    });*/
});



