document.getElementById("formulario").addEventListener("submit", guardar);

function guardar(e) {
  let titulo = document.getElementById('titulo').value;
  let descripcion = document.getElementById('descripcion').value;

  const escribir = {
    titulo,
    descripcion,
  };

  if (localStorage.getItem('tarea') === null) {
    let tarea = [];
    tarea.push(escribir);
    localStorage.setItem('tarea', JSON.stringify(tarea));
  } else {
    let tarea = JSON.parse(localStorage.getItem('tarea'));
    tarea.push(escribir);
    localStorage.setItem('tarea', JSON.stringify(tarea));
  }

  obtenerguardar();
  document.getElementById('formulario').reset();
  e.preventDefault();
}

function obtenerguardar() {
  let tarea = JSON.parse(localStorage.getItem('tarea'));
  let vista = document.getElementById('tarea');

  vista.innerHTML = "";

  for (let i = 0; i < tarea.length; i++) {
    let titulo = tarea[i].titulo;
    let descripcion = tarea[i].descripcion;

    vista.innerHTML += `<div class="card mb-6">
        <div class = "card-body">
        <p> ${titulo}</p>
        <div>
        <p>${descripcion}</p>
        </div>
        <a class="btn btn-danger" onclick="borrar('${titulo}')">
        Borrar
        </a>

        </div>
        </div>`
  }
}

function borrar(titulo) {
  let tarea = JSON.parse(localStorage.getItem('tarea'));
  for (let i = 0; i < tarea.length; i++) {
    if (tarea[i].titulo == titulo) {
        tarea.splice(i,1);
        }
  }
  localStorage.setItem('tarea',JSON.stringify(tarea));
  obtenerguardar();
 console.log(borrar());
}

obtenerguardar();
