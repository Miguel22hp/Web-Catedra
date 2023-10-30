document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var eventsFrame = document.querySelector(".eventsFrame");

    // Crea la lista de años (yearEvents) de primeras.
    var yearList = document.createElement("ul");
    yearList.className = "yearEvents";
    eventsFrame.appendChild(yearList);
    var yearItem = document.createElement("li");
    yearItem.id = currentYear;
    yearList.appendChild(yearItem); // Añades el año que corresponda
    var monthlist = document.createElement("ul");
    var yearHeading = document.createElement("h3");
    monthlist.className = "monthsEvents";
    yearHeading.textContent = currentYear; //Añades el header del año que corresponde
    yearItem.appendChild(yearHeading);
    yearItem.appendChild(monthlist);
    //var hr = document.createElement("hr");


    // Define cuántos meses adelante se añadirán.
    var monthsToAdd = 4;  // Cambia el número de meses según tus necesidades.

    // Nombres de los meses.
    var meses = [
        "Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    for (var i = 0; i < monthsToAdd; i++) {
        // Crea la estructura para los meses.
        var monthIndex = (currentMonth + i) % 12;
        var monthName = meses[monthIndex];

        var monthItem = document.createElement("li");
        var añomes = currentYear + "-" + (monthIndex + 1);
        monthItem.id = añomes;
        monthlist.appendChild(monthItem);

        var monthHeading = document.createElement("h4");
        monthHeading.textContent = monthName;
        monthItem.appendChild(monthHeading);

        var monthEventsList = document.createElement("ul");
        monthEventsList.className = "monthsEventsList";
        monthItem.appendChild(monthEventsList);
        //monthlist.appendChild(hr);

        if(monthIndex === 10)
        {
            var hr = document.createElement("hr");
            monthlist.appendChild(hr);
        }

        // Si el siguiente mes es en el próximo año, agrega un nuevo año.
        if (monthIndex === 11) {
            currentYear++;
            //yearList = document.createElement("ul");
            //yearList.className = "yearEvents";
            //eventsFrame.appendChild(yearList);
            var yearItem = document.createElement("li");
            yearItem.id = currentYear;
            yearList.appendChild(hr);
            yearList.appendChild(yearItem); // Añades el año que corresponda
            var monthlist = document.createElement("ul");
            var yearHeading = document.createElement("h3");
            monthlist.className = "monthsEvents";
            yearHeading.textContent = currentYear; //Añades el header del año que corresponde
            yearItem.appendChild(yearHeading);
            yearItem.appendChild(monthlist);
            continue;
        }
        console.log("Mes que toca es " + monthName);
        var hr = document.createElement("hr");
        monthlist.appendChild(hr);

    }
});
