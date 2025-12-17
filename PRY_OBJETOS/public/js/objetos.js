// declarar un object

var persona = {
    cedula : "1716519513",
    nombres: "Edgar Damian",
    apellidos: "Toscano Coro",
    edad : 21,
    estatura: 1.70,
    es_ecuatoriano: true,
    mis_asignaturas: [
                        'programacion web',
                        'base de datos',
                        'metodos numericos'
                    ],
    fn_saludar: function(){
        console.log(`Hola mi nombre es ${this.nombres} ${this.apellidos}`);
    },

    fn_calcularEdad:function(){
      //  console.log(this.edad>=18 ?'Es mayor de edad': 'Es menor de edad');
    
    if(this.edad>=18){
        return 'Es mayor de edad';
    }else{
        return 'Es menor de edad';
    }


};
//persona.cedula;
//persona.mis_asignaturas[1];
//persona.fn_saludar();
persona.fn_calcularEdad();