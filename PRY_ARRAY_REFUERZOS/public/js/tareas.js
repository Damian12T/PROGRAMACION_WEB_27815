var nombre_tareas = [];
var estado_tareas = [];

var btn_guardar_tarea = document.getElementById('btn_guardar_tarea');

btn_guardar_tarea.addEventListener('click', function (evento) {
    let txt_nombre_tarea = document.getElementById('txt_nombre_tarea');

    if (txt_nombre_tarea.value == '') {
        console.log("DEBE INGRESAR UNA TAREA");
        return;
    }

    nombre_tareas.push(txt_nombre_tarea.value);
    estado_tareas.push(false);

    mostrarTareas();
    txt_nombre_tarea.value = '';
});

function mostrarTareas() {
    var lista_tareas = document.getElementById('lista_tareas');
    lista_tareas.innerHTML = '';

    nombre_tareas.forEach(function (tarea, posicion) {

        let element_li = document.createElement('label');
        element_li.classList.add('list-group-item');

        let element_input = document.createElement('input');
        element_input.type = 'checkbox';
        element_input.classList.add('form-check-input', 'me-1');

        let element_btn = document.createElement('button');
        element_btn.classList.add('btn', 'btn-danger', 'ms-2');
        element_btn.textContent = 'Eliminar';

        element_li.appendChild(element_input);
        element_li.appendChild(document.createTextNode(tarea));
        element_li.appendChild(element_btn);

        lista_tareas.appendChild(element_li);

        // Checkbo
        element_input.addEventListener('change', function () {
            estado_tareas[posicion] = element_input.checked;

            if (element_input.checked) {
                console.log('TAREA FINALIZADA');
            } else {
                console.log('TAREA PENDIENTE');
            }
        });

        
        element_btn.addEventListener('click', function () {
            eliminar(posicion);
        });
    });
}

function eliminar(posicion) {
    nombre_tareas.splice(posicion, 1);
    estado_tareas.splice(posicion, 1);
    mostrarTareas();
    console.log(nombre_tareas);
}
