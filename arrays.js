const API_URL_BASE = "https://jsonplaceholder.typicode.com/"

let crearTabla = function(posts) {
   let stringTabla = "<tr><th>UserId</th><th>Id</th><th>Title</th><th>Body</th></tr>";
   for (let post of posts) {
       let fila = "<tr> <td>"
       fila += post.userId;
       fila += "</td>"

       fila += "<td>"
       fila += post.id;
       fila += "</td>"

       fila += "<td>"
       fila += post.title;
       fila += "</td>"

       fila += "<td>"
       fila += post.body;
       fila += "</td>"

       fila += "</tr>";
       stringTabla += fila;
   }
   return stringTabla;
}

const initTable = () => {
    const table = document.getElementById("tbl-posts");
    table.innerHTML = "<h1> Cargando...</h1>";

    fetch(`${API_URL_BASE}posts`)
        .then((response) => response.json())
        .then(posts => {
            table.innerHTML = crearTabla(posts);
        })

}
initTable()

function crearCombobox(users) {
    let stringOptions = "<option>Selecionar...</option>";
    for (let user of users) {
        let option = `<option>${user.name}</option>`;
        stringOptions += option;
    }

    return stringOptions;
}

const initCombobox =  () =>{
    const combobox = document.getElementById("cb-users");

    fetch(`${API_URL_BASE}users`)
    .then((response) => response.json())
    .then(users => {
        combobox.innerHTML = crearCombobox(users);
    })
}
initCombobox()
