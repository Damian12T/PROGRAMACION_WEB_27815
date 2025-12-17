// declarar un object

var persona = {
    cedula: "1726192618",
    nombres: "EDGAR DAMIAN",
    apellidos: "TOSCANO CORO",
    edad: 21,
    estatura: 1.81,
    es_ecuatoriano: true,
    mis_asignaturas: [
                        'programacion web',
                        'base de datos',
                        'metodos numericos'
                    ],
    fn_saludar: function(){
        return `Hola mi nombre es ${this.nombres} ${this.apellidos}`;
    },

    fn_calcularEdad:function(){
        console.log(this.edad>=18 ?'Es mayor de edad': 'Es menor de edad');
    }


};
//persona.cedula;
//persona.mis_asignaturas[1];
//persona.fn_saludar();
//persona.fn_calcularEdad();

var header_info = document.getElementById('header_info');
header_info.innerHTML=`${persona.fn_saludar()}`