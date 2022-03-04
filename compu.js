
let asignaturas = [
    {
        materia: "Calculo",
        detalle: "Hacer los ejercicios de derivadas ",
        fecha: moment (new  Date(2022, 1, 24)).format("L")
    },
    {
        materia: "Diagrama de flujos",
        detalle: "Hacer una serie de pasos para resolver un ecuacion algebraica",
        fecha: moment (new Date(2022, 3, 24)).format("L")
    },
    {
        materia: "Mecanica",
        detalle: "Hacer el calculo hiperbolico",
        fecha: moment (new Date(2022, 0, 24)).format("L")
    },
 
    {
        materia: "Estadistica inferencial",
        detalle: "Hacer un diagrama de pastel",
        fecha: moment (new Date(2022, 1, 24)).format("L")
    },
 
    
 ];
 
 let crearTable = function(lista) {
    let stringTabla = "<tr><th>Asignatura</th><th>Tarea</th><br><th>Fsecha</th></tr>";
    for (let asignatura of lista) {
        let fila = "<tr> <td>"
        fila += asignatura.materia;
        fila += "</td>"
 
        fila += "<td>"
        fila += asignatura.detalle;
        fila += "</td>"
 
        fila += "<td>"
        fila += asignatura.fecha;
        fila += "</td>"
 
        fila += "</tr>";
        stringTabla += fila;
    }
    return stringTabla;
 }
 
 
 const init= () => {
    const table = document.getElementById("tbl-posts");
    table.innerHTML = "";
    table.innerHTML= crearTable(asignaturas);
 }