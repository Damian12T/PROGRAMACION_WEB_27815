var persona = {
    cedula: "1726519513",
    nombres: "Damian Toscano",
    apellidos: "Toscano Coro",
    edad: 21,
    estatura: 1.70,
    es_ecuatoriano: true,
    mis_asignaturas: [
        'Programacion Web',
        'Base de Datos',
        'Metodos Numericos'
    ],
    fn_saludar: function(){
        return `Hola, soy ${this.nombres} ${this.apellidos}`;
    },
    fn_calcularEdad: function(){
        return this.edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
    }
};

// Header
document.getElementById('header_info').textContent = persona.fn_saludar();

// Descripción
document.getElementById('descripcion').textContent =
    `Soy ${persona.nombres} ${persona.apellidos}, ` +
    `soy ${persona.es_ecuatoriano ? 'ecuatoriano' : 'extranjero'}, ` +
    `tengo ${persona.edad} años, ` +
    `mido ${persona.estatura} m y mis asignaturas son:`;

// Asignaturas
var mis_asignaturas = document.getElementById('mis_asignaturas');

persona.mis_asignaturas.forEach(function(asignatura){
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = asignatura;
    mis_asignaturas.appendChild(li);
});
